import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHwxfHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1578922180039-6c13a4671d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHwzfHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://images.unsplash.com/photo-1569061831972-d1ed3635136e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHw0fHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} width="100%" height="350px" />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" onClickHandler={previous} />
            <CarouselControl direction="next" onClickHandler={next} />
        </Carousel>
    );
}

export default Example;