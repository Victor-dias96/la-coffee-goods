import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./OrderStatusPage.css";
import { useNavigate } from "react-router-dom";

export default function OrderStatusPage() {
    const navigate = useNavigate();

    return (
        <div className="orderpage-container">
            <Header />
            <h3 className="orderpage-title">Status do Pedido</h3>
            
            <div className="orderpage-grid">

                {/* Comprovante */}
                <div className="orderpage-box">
                    <h2 className="orderpage-subtitle">Comprovantede Pedido</h2>
                    <p className="orderpage-text">Status: Produção</p>
                    <hr className="orderpage-divider" />
                    <p className="orderpage-text">Número do Pedido: </p>

                    <div className="orderpage-number-box">
                        0031
                    </div>

                    <div className="orderpage-button-area">
                        <Button variant="primary" onClick={() => navigate("/products")}>Cancelar Pedido</Button>
                    </div>
                </div>

                {/* Products */}

                <div className="orderpage-box">
                    <h2 className="orderpage-subtitle center">Produtos</h2>
                    <hr className="orderpage-divider short" />

                    <div className="orderpage-products">
                        <div>
                            <p>1x Cookie Labubu</p>
                            <p className="orderpage-unit">Valor Unitário: R$ 7,90</p>
                        </div>

                        <hr className="orderpage-divider long" />

                        <div>
                            <p>1x - Pãozinho do amor de Morango</p>
                            <p className="orderpage-unit">
                                Valor Unitário: R$ 19,90
                            </p>
                        </div>
                    </div>
                    <hr className="orderpage-divider-total" />
                    <p className="orderpage-total">Valor Total: R$ 27,80</p>
                </div>
            </div>
        </div>
    )
}
