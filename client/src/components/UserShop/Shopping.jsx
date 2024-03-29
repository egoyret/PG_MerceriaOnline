import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrder } from "../../redux/actions/order";
import CardOrder from "./CardOrder";
import "./ButtonShopping.css";

function Shopping() {
  const dispatch = useDispatch();
  const userid = localStorage.getItem("pg_merceria");
  const [orderView, setOrderView] = useState([]); //lo que vamos a renderizar
  const [history, setHistory] = useState(true);
  const orders = useSelector((state) => state.orderReducer.orders);

  useEffect(() => {
    // get orders de un usuario????
    dispatch(getAllOrder(userid));
  }, []);
  useEffect(() => {
    orders.length &&
      setOrderView(orders.filter((e) => e.status !== "delivered"));
  }, []);

  //primero se muestra los productos que no tienen status  delivered luego pasa a history
  //historial
  const showHistory = (event) => {
    event.preventDefault();
    setOrderView(orders.filter((e) => e.status === "delivered"));
    setHistory(false);
  };
  const ShowShoopInProcess = (event) => {
    event.preventDefault();
    setOrderView(orders.filter((e) => e.status !== "delivered"));
    setHistory(true);
  };
  return (
    <div className="container-fluid shop">
      <div style={{ marginTop: "200px" }}>
        {history === true ? (
          <h3 className="text-center">Seguimiento de Pedidos</h3>
        ) : (
          <h3 className="text-center">Historial de Compras</h3>
        )}

        <div className="row">
          <div className="col-md-2">
            <div clasName="ordenar">
              <button id="buttonshopping" onClick={(e) => showHistory(e)}>
                Historial de Compras
              </button>
              <button
                id="buttonshopping"
                onClick={(e) => ShowShoopInProcess(e)}
              >
                Seguimiento de Pedido
              </button>
            </div>
          </div>

          <div className="col-md-10">
            {orderView && orderView.length > 0 ? (
              orderView.map((e) => (
                (e.status !== "cart")?(<CardOrder
                  id={e.id}
                  status={e.status}
                  products={e.products}
                  total_price={e.total_price}
                  className="justify-content-center"
                />) : null
              ))
            ) : (
              <p>Aún no tiene Pedidos</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
