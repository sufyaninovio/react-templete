import React from "react";
import InputField from "../../components/InputField";
import TextField from "../../components/TextField";
import ThemeButton from "../../components/ThemeButton";
const GetInTouchSec = () => {
    return (
        <>
            <section className="get-in-touch">
                <div className="container">
                    <div className="touch-start">
                        <div className="row">
                            <div className="col-md-7 pe-lg-5 wow animate__animated animate__fadeInLeft animate__delay-1s">
                                <div className="countact-text pe-xxl-5">
                                    <h3 class="level-2 mb-0">Get in touch</h3>
                                    <h2 class="level-1 line-height-1 text-primary">Let us know what’s on your mind.</h2>
                                    <div className="contact-info-list">
                                        <div className="row mt-4">
                                            <div className="     col-lg-12 mt-4 wow animate__animated animate__fadeInLeft animate__delay-1s">
                                                <div className="single-info d-flex gap-3 align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.28271 1.02041C2.7568 0.937867 3.12863 0.817799 3.50046 0.816548C11.6308 0.805291 19.7611 0.805291 27.8914 0.816548C28.2668 0.816548 28.6409 0.934115 29.0151 0.997901C29.0592 1.08295 29.1034 1.16675 29.1464 1.2518C28.9628 1.37187 28.749 1.45816 28.6014 1.61701C25.0121 5.44419 21.4297 9.27889 17.845 13.1111C16.3984 14.657 15.0028 14.6595 13.5608 13.1186C9.96336 9.27138 6.36589 5.42293 2.76958 1.57323C2.63479 1.4294 2.50698 1.27681 2.28271 1.02041Z" fill="white" />
                                                            <path d="M2.43628 23.1342C5.39931 19.8686 8.32981 16.6368 11.3416 13.3174C11.7483 13.7839 12.0888 14.2029 12.456 14.5919C14.4104 16.6668 16.9958 16.6643 18.9514 14.5844C19.3081 14.2041 19.6381 13.7952 20.0204 13.3537C23.0172 16.663 25.9546 19.9062 28.8933 23.1505C28.6376 23.193 28.2635 23.3093 27.8893 23.3106C19.7601 23.3206 11.6321 23.3206 3.50297 23.3106C3.12998 23.3093 2.75698 23.1893 2.43628 23.1342Z" fill="white" />
                                                            <path d="M1.01725 2.40747C4.04187 5.70811 6.98631 8.91994 9.85871 12.0542C6.99561 15.1798 4.04419 18.4029 1.01377 21.711C0.945211 21.237 0.837147 20.8343 0.835985 20.4315C0.824366 14.8508 0.824366 9.27014 0.835985 3.68945C0.837147 3.28672 0.947535 2.88524 1.01725 2.40747Z" fill="white" />
                                                            <path d="M30.3852 21.7148C27.3629 18.4154 24.4196 15.2035 21.5414 12.0617C24.3987 8.94246 27.3512 5.71811 30.384 2.40747C30.4537 2.88524 30.5629 3.28797 30.5641 3.6907C30.5757 9.2714 30.5757 14.8521 30.5641 20.4328C30.5629 20.8368 30.4537 21.2395 30.3852 21.7148Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <div className="text-here">
                                                        <h6 className="level-5 mb-0">Our Email</h6>
                                                        <a href="mailto: top100websiteadvertising@gmail.com" className="level-5 text-dark font-small" style={{wordWrap: "wrap"}}>top100websiteadvertising@gmail.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="     col-lg-12 mt-4 wow animate__animated animate__fadeInRight animate__delay-1s">
                                                <div className="single-info d-flex gap-3 align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.8816 0.847806C6.77784 0.847806 7.67524 0.837278 8.57148 0.850145C9.95561 0.870031 10.97 1.85964 11.0086 3.23409C11.0566 4.9735 11.2777 6.68367 11.8078 8.34705C12.1319 9.36824 11.9645 10.2701 11.2473 11.1158C10.4681 12.0353 9.76841 13.0249 9.06757 14.0074C8.95759 14.1619 8.93067 14.4894 9.01843 14.6567C10.8109 18.091 13.4423 20.6972 16.8693 22.494C17.0331 22.5793 17.3595 22.5384 17.5163 22.4249C18.5424 21.6845 19.5556 20.923 20.5478 20.1381C21.2627 19.5731 22.0396 19.4035 22.8995 19.6573C24.6639 20.1767 26.4552 20.4843 28.3004 20.5089C29.6389 20.5264 30.6474 21.5734 30.6603 22.9127C30.6778 24.7059 30.6732 26.4992 30.6626 28.2924C30.6544 29.7639 29.626 30.7992 28.1529 30.7839C21.8688 30.7196 16.2152 28.7919 11.2812 24.899C5.93893 20.6879 2.5681 15.2158 1.24832 8.54006C0.914865 6.85211 0.823603 5.10568 0.733512 3.38031C0.65512 1.87367 1.73154 0.860673 3.24906 0.848976C4.12657 0.843127 5.00409 0.847806 5.8816 0.847806Z" fill="white" />
                                                        </svg>

                                                    </div>
                                                    <div className="text-here">
                                                        <h6 className="level-5 mb-0">Phone number</h6>
                                                        <a href="tel: 650-290-0789" className="level-5 text-dark font-small">650-290-0789</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-xl-8 mt-4">
                                                <div className="single-info d-flex gap-3 align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <svg width="21" height="30" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.5501 0.961684C6.16658 0.972171 0.854893 5.88134 0.358658 12.18C0.135023 15.0246 1.00972 17.607 2.17024 20.1199C4.25707 24.6371 7.15904 28.6365 10.3111 32.4695C10.7571 33.0109 11.2017 33.5549 11.6781 34.0701C12.2365 34.6757 12.9206 34.7019 13.4513 34.0832C17.572 29.2802 21.3738 24.2674 23.7266 18.3319C24.9493 15.25 25.2616 12.1354 24.0892 8.95268C22.3306 4.17984 17.6898 0.953819 12.5501 0.961684ZM12.5475 19.2062C9.15853 19.1944 6.41536 16.4901 6.39154 13.1356C6.36772 9.79819 9.18235 6.99688 12.5647 6.99295C15.9483 6.98901 18.759 9.77197 18.7537 13.1199C18.7484 16.4875 15.9642 19.218 12.5475 19.2062Z" fill="white" />
                                                        </svg>

                                                    </div>
                                                    <div className="text-here">
                                                        <h6 className="level-5 mb-0">Our Address</h6>
                                                        <span className="level-5 text-dark font-small">123 Elm Street Springfield, Anytown 56789 United States</span>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 mt-5 mt-md-0 wow animate__animated animate__fadeInRight animate__delay-1s">
                                <div className="contact-form">
                                    <form>
                                        <div className="row">
                                            <div className="mb-3 col-12">
                                                <InputField
                                                    label={"Full Name"}
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
                                                    type={"text"}
                                                    placeholder={"Enter Phone"}
                                                />
                                            </div>
                                            <div className="mb-3 col-sm-12">
                                                <TextField
                                                    label={"Message"}
                                                    type={"text"}
                                                    placeholder={"Enter Phone"}
                                                />
                                            </div>

                                            <div className="mb-3 col-lg-12">
                                                <ThemeButton text={"Submit!"} width={"w-100"} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GetInTouchSec;