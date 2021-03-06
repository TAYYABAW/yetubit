import React from "react";
import LegendEffectOpacity from "../charts/rechart/LegendEffectOpacity";

function HomeCards() {
  return (
    <div className="row">
      {/* Four cards start here */}
      <div className="col-xl-3 col-xxl-12 col-sm-6 p-4 ">
        <div className="card" style={{  boxShadow: "0 0 30px rgba(0, 0, 0, .15)", height: "350px" }}>
          <div className="card-header d-flex " style={{ borderColor: "lightgrey" }}>
            <div className="icon me-3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="white" />
                <path
                  d="M30 0C13.4312 0 0 13.4312 0 30C0 46.5688 13.4312 60 30 60C46.5688 60 60 46.5688 60 30C60 13.4312 46.5688 0 30 0ZM30 54.375C16.5588 54.375 5.625 43.44 5.625 30C5.625 16.56 16.5588 5.625 30 5.625C43.4412 5.625 54.375 16.5588 54.375 30C54.375 43.4412 43.44 54.375 30 54.375Z"
                  fill="#F7931A"
                />
                <path
                  d="M31.5488 30.9737H27.61V36.825H31.5488C32.3438 36.825 33.0813 36.5025 33.5988 35.9612C34.14 35.4425 34.4625 34.7062 34.4625 33.8875C34.4638 32.2862 33.15 30.9737 31.5488 30.9737Z"
                  fill="#F7931A"
                />
                <path
                  d="M30 8.12496C17.9375 8.12496 8.125 17.9375 8.125 30C8.125 42.0625 17.9375 51.875 30 51.875C42.0625 51.875 51.875 42.0612 51.875 30C51.875 17.9387 42.0612 8.12496 30 8.12496ZM34.4512 40.13H31.8712V44.185H29.165V40.13H27.6787V44.185H24.96V40.13H20.18V37.585H22.8175V22.335H20.18V19.79H24.96V15.8162H27.6787V19.79H29.165V15.8162H31.8712V19.79H34.2212C35.5337 19.79 36.7437 20.3312 37.6075 21.195C38.4712 22.0587 39.0125 23.2687 39.0125 24.5812C39.0125 27.15 36.985 29.2462 34.4512 29.3612C37.4225 29.3612 39.8187 31.78 39.8187 34.7512C39.8187 37.7112 37.4237 40.13 34.4512 40.13Z"
                  fill="#F7931A"
                />
                <path
                  d="M33.2888 27.38C33.7613 26.9075 34.0488 26.2737 34.0488 25.56C34.0488 24.1437 32.8975 22.9912 31.48 22.9912H27.61V28.14H31.48C32.1825 28.14 32.8275 27.84 33.2888 27.38Z"
                  fill="#F7931A"
                />
              </svg>
            </div>
            <div>
              <h2 className="invoice-num" style={{ fontSize: "20px" }} >$984</h2>
              <p className="mb-0 invoice-num1">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13C1.91797 11.9157 4.89728 8.72772 6.5 7L12.5 10L19.5 1"
                    stroke="#13B440"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-success me-1 ms-1">45%</span> This week
              </p>
            </div>
          </div>

          <div className="card-body " >
            <LegendEffectOpacity />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-xxl-12 col-sm-6 p-4">
        <div className="card" style={{  boxShadow: "0 0 30px rgba(0, 0, 0, .15)", height: "350px" }}>
          <div className="card-header d-flex" style={{ borderColor: "lightgrey" }}>
            <div className="icon me-3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.99">
                  <circle cx="30" cy="30.0001" r="30" fill="white" />
                  <path
                    d="M30.5438 0.00514091C13.9681 -0.294871 0.305031 12.8932 0.00501883 29.4563C-0.294993 46.0195 12.893 59.6951 29.4562 59.9951C46.0194 60.2951 59.695 47.1071 59.995 30.5314C60.295 13.9682 47.1069 0.292653 30.5438 0.00514091ZM29.5562 54.3699C16.1182 54.1198 5.38024 42.9944 5.63025 29.5563C5.86776 16.1183 16.9932 5.38036 30.4313 5.61787C43.8818 5.86788 54.6072 16.9933 54.3697 30.4314C54.1322 43.8694 42.9943 54.6074 29.5562 54.3699Z"
                    fill="#FF6600"
                  />
                  <path
                    d="M30.3938 8.11797C18.3308 7.90546 8.34286 17.5434 8.13035 29.6063C8.0591 33.4015 8.97038 36.9904 10.623 40.1355H17.4995V18.6021C17.4995 17.2858 19.2883 16.8671 19.8696 18.0484L30 38.563L40.1304 18.0496C40.7117 16.8671 42.5005 17.2858 42.5005 18.6021V40.1355H49.3558C50.8933 37.2129 51.8084 33.9128 51.8696 30.3939C52.0821 18.3309 42.4567 8.34298 30.3938 8.11797Z"
                    fill="#FF6600"
                  />
                  <path
                    d="M40.0004 41.3856V23.9574L31.12 41.9393C30.7 42.7931 29.2987 42.7931 28.8787 41.9393L19.9996 23.9574V41.3856C19.9996 42.0756 19.4408 42.6356 18.7495 42.6356H12.1855C16.0744 48.0996 22.3972 51.7347 29.6062 51.8697C37.1028 52.0023 43.793 48.3271 47.8395 42.6356H41.2504C40.5592 42.6356 40.0004 42.0756 40.0004 41.3856Z"
                    fill="#FF6600"
                  />
                </g>
              </svg>
            </div>
            <div>
              <h2 className="invoice-num" style={{ fontSize: "20px" }}>$22,567</h2>
              <p className="mb-0">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13C1.91797 11.9157 4.89728 8.72772 6.5 7L12.5 10L19.5 1"
                    stroke="#13B440"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-success  ms-1 me-1">45%</span> This week
              </p>
            </div>
          </div>
          <div className="card-body ">
            <LegendEffectOpacity />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-xxl-12 col-sm-6 p-4">
        <div className="card" style={{  boxShadow: "0 0 30px rgba(0, 0, 0, .15)", height: "350px" }}>
          <div className="card-header d-flex" style={{ borderColor: "lightgrey" }}>
            <div className="icon me-3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="white" />
                <path
                  d="M30.5438 0.00501883C13.9681 -0.294993 0.305031 12.893 0.00501883 29.4562C-0.294993 46.0194 12.893 59.695 29.4562 59.995C46.0194 60.295 59.695 47.1069 59.995 30.5313C60.295 13.9681 47.1069 0.292531 30.5438 0.00501883ZM29.5562 54.3697C16.1182 54.1197 5.38024 42.9943 5.63025 29.5562C5.86776 16.1182 16.9932 5.38024 30.4313 5.61775C43.8818 5.86776 54.6072 16.9932 54.3697 30.4313C54.1322 43.8693 42.9943 54.6072 29.5562 54.3697Z"
                  fill="#627EEA"
                />
                <path
                  d="M30.3963 8.12285C18.3333 7.91034 8.34536 17.5482 8.13285 29.6112C7.90784 41.6617 17.5457 51.6496 29.6087 51.8746C41.6717 52.0871 51.6596 42.4492 51.8721 30.3988C52.0846 18.3358 42.4592 8.34786 30.3963 8.12285ZM30.0025 14.3581L36.954 26.7599L30.61 23.2297C30.2312 23.0197 29.7725 23.0197 29.3937 23.2297L23.0497 26.7599L30.0025 14.3581ZM30.0025 45.6381L23.0497 33.2364L29.3937 36.7665C29.5825 36.8715 29.7925 36.924 30.0012 36.924C30.21 36.924 30.42 36.8715 30.6088 36.7665L36.9528 33.2364L30.0025 45.6381ZM30.0025 34.2427L22.3722 29.9975L30.0025 25.7523L37.6315 29.9975L30.0025 34.2427Z"
                  fill="#627EEA"
                />
              </svg>
            </div>
            <div>
              <h2 className="invoice-num" style={{ fontSize: "20px" }}>$168,331.09</h2>
              <p className="mb-0">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1C1.91797 2.08433 4.89728 5.27228 6.5 7L12.5 4L19.5 13"
                    stroke="#F04444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-danger ms-1 me-1">45%</span> This week
              </p>
            </div>
          </div>
          <div className="card-body ">
            <LegendEffectOpacity />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-xxl-12 col-sm-6 p-4">
        <div className="card" style={{  boxShadow: "0 0 30px rgba(0, 0, 0, .15)", height: "350px" }}>
          <div className="card-header d-flex" style={{ borderColor: "lightgrey" }}>
            <div className="icon me-3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="white" />
                <path
                  d="M30.5438 0.00501883C13.9681 -0.294993 0.305031 12.893 0.00501883 29.4562C-0.294993 46.0194 12.893 59.695 29.4562 59.995C46.0194 60.295 59.695 47.1069 59.995 30.5313C60.295 13.9681 47.1069 0.292531 30.5438 0.00501883ZM29.5562 54.3697C16.1182 54.1197 5.38024 42.9943 5.63025 29.5562C5.86776 16.1182 16.9932 5.38024 30.4313 5.61775C43.8818 5.86776 54.6072 16.9932 54.3697 30.4313C54.1322 43.8693 42.9943 54.6072 29.5562 54.3697Z"
                  fill="#345D9D"
                />
                <path
                  d="M30.3963 8.12285C18.3333 7.91034 8.34536 17.5482 8.13285 29.6112C7.90784 41.6617 17.5457 51.6496 29.6087 51.8746C41.6717 52.0871 51.6596 42.4492 51.8721 30.3988C52.0846 18.3358 42.4592 8.34786 30.3963 8.12285ZM39.4091 42.6993H19.5083L21.9459 29.2112L19.1208 29.7987V27.4986L22.3709 26.8111L24.4835 15.2106H32.4213L30.6213 25.086L33.3964 24.4985V26.7986L30.1962 27.4611L28.3462 37.6616H40.8842L39.4091 42.6993Z"
                  fill="#345D9D"
                />
              </svg>
            </div>
            <div>
              <h2 className="invoice-num" style={{ fontSize: "20px" }}>$7,784</h2>
              <p className="mb-0">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1C1.91797 2.08433 4.89728 5.27228 6.5 7L12.5 4L19.5 13"
                    stroke="#F04444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-danger ms-1 me-1">45%</span> This week
              </p>
            </div>
          </div>
          <div className="card-body ">
            <LegendEffectOpacity />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-xxl-12 col-sm-6 p-4">
        <div className="card" style={{  boxShadow: "0 0 30px rgba(0, 0, 0, .15)", height: "350px" }}>
          <div className="card-header d-flex" style={{ borderColor: "lightgrey" }}>
            <div className="icon me-3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="white" />
                <path
                  d="M30.5438 0.00501883C13.9681 -0.294993 0.305031 12.893 0.00501883 29.4562C-0.294993 46.0194 12.893 59.695 29.4562 59.995C46.0194 60.295 59.695 47.1069 59.995 30.5313C60.295 13.9681 47.1069 0.292531 30.5438 0.00501883ZM29.5562 54.3697C16.1182 54.1197 5.38024 42.9943 5.63025 29.5562C5.86776 16.1182 16.9932 5.38024 30.4313 5.61775C43.8818 5.86776 54.6072 16.9932 54.3697 30.4313C54.1322 43.8693 42.9943 54.6072 29.5562 54.3697Z"
                  fill="#627EEA"
                />
                <path
                  d="M30.3963 8.12285C18.3333 7.91034 8.34536 17.5482 8.13285 29.6112C7.90784 41.6617 17.5457 51.6496 29.6087 51.8746C41.6717 52.0871 51.6596 42.4492 51.8721 30.3988C52.0846 18.3358 42.4592 8.34786 30.3963 8.12285ZM30.0025 14.3581L36.954 26.7599L30.61 23.2297C30.2312 23.0197 29.7725 23.0197 29.3937 23.2297L23.0497 26.7599L30.0025 14.3581ZM30.0025 45.6381L23.0497 33.2364L29.3937 36.7665C29.5825 36.8715 29.7925 36.924 30.0012 36.924C30.21 36.924 30.42 36.8715 30.6088 36.7665L36.9528 33.2364L30.0025 45.6381ZM30.0025 34.2427L22.3722 29.9975L30.0025 25.7523L37.6315 29.9975L30.0025 34.2427Z"
                  fill="#627EEA"
                />
              </svg>
            </div>
            <div>
              <h2 className="invoice-num" style={{ fontSize: "20px" }}>$168,331.09</h2>
              <p className="mb-0">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1C1.91797 2.08433 4.89728 5.27228 6.5 7L12.5 4L19.5 13"
                    stroke="#F04444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-danger ms-1 me-1">45%</span> This week
              </p>
            </div>
          </div>
          <div className="card-body ">
            <LegendEffectOpacity />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-xxl-12 col-sm-6 p-4">
        <div className="card" style={{  boxShadow: "0 0 30px rgba(0, 0, 0, .15)", height: "350px" }}>
          <div className="card-header d-flex" style={{ borderColor: "lightgrey" }}> 
            <div className="icon me-3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.99">
                  <circle cx="30" cy="30.0001" r="30" fill="white" />
                  <path
                    d="M30.5438 0.00514091C13.9681 -0.294871 0.305031 12.8932 0.00501883 29.4563C-0.294993 46.0195 12.893 59.6951 29.4562 59.9951C46.0194 60.2951 59.695 47.1071 59.995 30.5314C60.295 13.9682 47.1069 0.292653 30.5438 0.00514091ZM29.5562 54.3699C16.1182 54.1198 5.38024 42.9944 5.63025 29.5563C5.86776 16.1183 16.9932 5.38036 30.4313 5.61787C43.8818 5.86788 54.6072 16.9933 54.3697 30.4314C54.1322 43.8694 42.9943 54.6074 29.5562 54.3699Z"
                    fill="#FF6600"
                  />
                  <path
                    d="M30.3938 8.11797C18.3308 7.90546 8.34286 17.5434 8.13035 29.6063C8.0591 33.4015 8.97038 36.9904 10.623 40.1355H17.4995V18.6021C17.4995 17.2858 19.2883 16.8671 19.8696 18.0484L30 38.563L40.1304 18.0496C40.7117 16.8671 42.5005 17.2858 42.5005 18.6021V40.1355H49.3558C50.8933 37.2129 51.8084 33.9128 51.8696 30.3939C52.0821 18.3309 42.4567 8.34298 30.3938 8.11797Z"
                    fill="#FF6600"
                  />
                  <path
                    d="M40.0004 41.3856V23.9574L31.12 41.9393C30.7 42.7931 29.2987 42.7931 28.8787 41.9393L19.9996 23.9574V41.3856C19.9996 42.0756 19.4408 42.6356 18.7495 42.6356H12.1855C16.0744 48.0996 22.3972 51.7347 29.6062 51.8697C37.1028 52.0023 43.793 48.3271 47.8395 42.6356H41.2504C40.5592 42.6356 40.0004 42.0756 40.0004 41.3856Z"
                    fill="#FF6600"
                  />
                </g>
              </svg>
            </div>
            <div>
              <h2 className="invoice-num" style={{ fontSize: "20px" }}>$22,567</h2>
              <p className="mb-0">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13C1.91797 11.9157 4.89728 8.72772 6.5 7L12.5 10L19.5 1"
                    stroke="#13B440"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-success  ms-1 me-1">45%</span> This week
              </p>
            </div>
          </div>
          <div className="card-body p-0 ">
            <LegendEffectOpacity />
          </div>
          {/* <button
          className="btn "
          type="button"
          style={{ backgroundColor: "#FFD600", color: "white" }}
        >
          <strong>Discover more assets</strong>
        </button> */}
        </div>
      </div>
      {/* Four cards end here */}
      {/* <button
          className="btn "
          type="button"
          style={{ backgroundColor: "#FFD600", color: "white", width: "100%", position: "initial", width: "300px",  }}
        >
          <strong>Discover more assets</strong>
        </button> */}
    </div>
  );
}

export default HomeCards;
