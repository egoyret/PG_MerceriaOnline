import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { Link, NavLink, useHistory} from "react-router-dom"
import { getAllOrder, getOrder } from '../../../redux/actions/order'
import CardOrder from './CardOrder'
import "./PaginationTable.css"

function Order() {
    const dispatch= useDispatch()
    const [orderView,setOrderView]=useState([])
    const [status,setStatus]=useState("")

    const orders=useSelector(state=>state.orderReducer.orders)

    useEffect(() => {
        dispatch(getAllOrder())
    }, [])
    useEffect(() => {
       setOrderView(orders)
    }, [orders])
    const handleStatus=(e)=>{
        setStatus(e.target.value)
    }
    useEffect(() => {
        setOrderView(orders.filter(e=>e.status===status))
    }, [status])

    //-------------------------Paginado de Tablas------------------//
    const [currentPage,setCurrentPage]=useState(1);
    const [rows,setRows]=useState(10);//cardperPage
    const [pageNumberLimit,setPageNumberLimit]=useState(5);
    const [maxPageNumberLimit,setMaxPageNumberLimit]=useState(5);
    const [minPageNumberLmit,setMinPageNumberLmit]=useState(0);
    const handleClick=(event)=>{
        setCurrentPage(Number(event.target.id))
    }
    const handleNextbtn=()=>{
        setCurrentPage(currentPage+1)
        if(currentPage+1>maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
            setMinPageNumberLmit(minPageNumberLmit+pageNumberLimit)
        }
    }
    const handlePrevbtn=()=>{
        setCurrentPage(currentPage-1)
        if((currentPage-1)%pageNumberLimit===0){
            setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit);
            setMinPageNumberLmit(minPageNumberLmit-pageNumberLimit)
        }
    }

    const pages=[];
    for(let i=1; i<=Math.ceil(orderView.length/rows);i++){
        pages.push(i)
    }
    const indexOfLastItem=currentPage*rows;
    const indexOfFirstItem=indexOfLastItem-rows;
    const currentItems= orderView.slice(indexOfFirstItem,indexOfLastItem);
    const renderPageNumbers=pages.map(number=>{
        if(number<maxPageNumberLimit+1&&number
            >minPageNumberLmit){
        return (
            <li key={number} id={number} 
            onClick={handleClick} 
            className={currentPage===number?"activo":null}>
            {number}
            </li>
        )}else{
            return null;
        }
    })


    return (
        <div>
            <br />
            <br />
            <div>
            <div><button onClick={e=>handleStatus(e)} value={'shipped'} >Enviada</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'cart'}>Carro</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'checkout'}>Pagado</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'cancelled'}>Cancelado</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'delivered'}>Entregado</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'approved'}>Aprovado</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'rejected'}>Rechazado</button></div>
            </div>
            <p>Las ordenes de todos los usuarios</p>
            <div>
                {orderView&&orderView.length>0?
                <table>
                <thead>
                    <tr>
                        <th>Orden ID</th>
                        <th>Usuario nombre</th>
                        <th>Usuario Email</th>
                        <th>Precio Total</th>
                        <th>Estado</th>
                        <th>Fecha de Pedido</th>
                        <th># Productos</th>
                        <th>detalle</th>
                    </tr>
                </thead>
                {currentItems.map(e=>
                    <tbody>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.user.user_name}</td>
                            <td>{e.user.email}</td>
                            <td>{e.total_price}</td>
                            <td>{e.status}</td>
                            <td>{e.date}</td>
                            <td>{e.products.length}</td>
                            <NavLink  to={`/admin/orders/${e.id}`} ><td>detalles</td></NavLink>
                            
                        </tr>
                    </tbody>)}
                </table>
                :null}
                <br />
                <ul className="pageNumbers">
                    <li>
                        <button onClick={handlePrevbtn} 
                        disabled={currentPage===pages[0]?true:false}
                        >prev</button>
                    </li>
                {renderPageNumbers}
                <li>
                        <button onClick={handleNextbtn}
                        disabled={currentPage===pages[pages.length-1]?true:false}
                        >next</button>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Order