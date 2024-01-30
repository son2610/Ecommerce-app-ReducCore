import React from "react";
import { FaCartPlus, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { SiKasasmart } from "react-icons/si";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchText } from "../reducer/actions";

function Navbar() {
    const dispatch = useDispatch();
    return (
        <div className="container py-4 border-bottom">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-2">
                    <Link to={"/"} className="logo">
                        <SiKasasmart size={30} className="me-2" />
                        <span className="fs-4">Shopping Mall</span>
                    </Link>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-10">
                    <form className="w-50 d-flex align-items-center">
                        <input
                            type="search"
                            placeholder="Enter product name"
                            className="form-control"
                            style={{ paddingRight: "25px" }}
                            onInput={(e) =>
                                dispatch(setSearchText(e.target.value))
                            }
                        />
                        <FaSearch
                            size={15}
                            style={{
                                marginLeft: "-25px",
                                color: "rgba(0,0,0,.2)",
                            }}
                        />
                    </form>
                    {/* <div className="">
                    <Link to={'/cart'}>
                        <FaShoppingCart size={20} className="me-2" role="button" />
                    </Link>
                    <FaUser size={20} role="button" />
                </div> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
