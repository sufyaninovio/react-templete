import React from 'react'
import PageBanner from '../../components/PagesBanner';
import InputField from '../../components/InputField';
import ThemeButton from '../../components/ThemeButton';
import { quoteImg } from '../../constants/mediaConstants';
const GetQuoteSec = () => {
    return (
        <>
            <PageBanner dark_heading="Get a" light_heading="Quote" />
            <section className="get-quote section-padding">
                <div className="container-fluid">
                    <div className="get-quote-start">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-7 ps-xl-5 ms-auto pe-xl-5">
                                <div className="form-here">
                                    <form>
                                        <div className="row">
                                            <div className="mb-3 col-12">
                                                <InputField
                                                    label={"Full Name"}
                                                    type={"text"}
                                                    placeholder={"Enter Full Name"}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-12">
                                                <InputField
                                                    label={"Email"}
                                                    type={"email"}
                                                    placeholder={"Enter Email"}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <label className="form-label w-100 m-0">
                                                    Service
                                                    <select name="" id="" className="form-select form-control">
                                                        <option value="Website Advertising">Website Advertising</option>
                                                        <option value="Website Marketing">Website Marketing</option>
                                                        <option value="Internet Advertising">Internet Advertising</option>
                                                        <option value="Website Digital Advertising">Website Digital Advertising</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="mb-3 col-md-12">
                                                <InputField
                                                    label={"Your Website"}
                                                    type={"text"}
                                                    placeholder={"Your Website"}
                                                />
                                            </div>
                                            <div className="mb-3 col-lg-12">
                                                <ThemeButton text={"Submit"} width={"w-100"} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5 px-0 ps-xl-5">
                                <figure className="side-img">
                                    <img src={quoteImg} className='w-100' alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GetQuoteSec;