import React from "react";
import InputField from "../../components/InputField";
import PageBanner from "../../components/PagesBanner";
import PayPalBtn from "../../components/PayPalBtn";
const Checkout = () => {
    return (
        <>
            <PageBanner dark_heading="Checkout" />
            <section className="checkout-section section-padding">
                <div className="container">
                    <div className="checkout-start">
                        <div className="row">
                            <div className="col-md-6 pe-lg-0 order-1 order-md-0">
                                <div className="form-here">
                                    <form>
                                        <div className="row">
                                            <div className="mb-3 col-md-12">
                                                <InputField
                                                    label={"Full name"}
                                                    type={"text"}
                                                    placeholder={"Enter Full Name"}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <InputField
                                                    label={"Email"}
                                                    type={"email"}
                                                    placeholder={"Enter Email"}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <InputField
                                                    label={"Phone"}
                                                    type={"email"}
                                                    placeholder={"Enter Phone"}
                                                />
                                            </div>

                                            <div className="mb-3 col-md-12">
                                                <InputField
                                                    label={"Address"}
                                                    type={"text"}
                                                    placeholder={"Enter address"}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-4">
                                                <InputField
                                                    label={""}
                                                    type={"text"}
                                                    placeholder={"Enter City"}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-4">
                                                <InputField
                                                    label={""}
                                                    type={"text"}
                                                    placeholder={"Enter State"}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-4">
                                                <InputField
                                                    label={""}
                                                    type={"text"}
                                                    placeholder={"Enter Zipcode"}
                                                />
                                            </div>


                                            <div className="mb-3 col-12 mt-auto">

                                                {/* <button
                                                    type="submit"
                                                    className={`btn  extra-btn w-100 d-block`}
                                                >
                                                    <img src={paypalImg} className="paypal-img" alt="" />
                                                </button> */}
                                                <PayPalBtn />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 ms-auto mb-5 mb-md-0">
                                <div className="col-lg-10 ms-auto">
                                    <div className="checkout-box">
                                        <h4 className="level-4 text-dark text-decoration-underline">Package Summary</h4>
                                        <div className="service-options">
                                            <div className="row">
                                                <div className="col-md-5 mt-2">
                                                    <span className="para font-small">Package Name:</span>
                                                </div>
                                                <div className="col-md-7 mt-2">
                                                    <span className="para font-small">  HTML for <span className=" text-primary"> website</span></span>
                                                </div>
                                                <div className="col-md-5 mt-2">
                                                    <span className="para">Amount Payable:</span>
                                                </div>
                                                <div className="col-md-7 mt-2">
                                                    <span className="para lg-para">$250.00 – One time</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 mt-2">
                                                    <span className="para font-small">Package Name:</span>
                                                </div>
                                                <div className="col-md-7 mt-2">
                                                    <span className="para font-small"> Website  <span className=" text-primary">Advertising:</span></span>
                                                </div>
                                                <div className="col-md-5 mt-2">
                                                    <span className="para">Amount Payable:</span>
                                                </div>
                                                <div className="col-md-7 mt-2">
                                                    <span className="para lg-para"> $250.00 – Ongoing</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Checkout;