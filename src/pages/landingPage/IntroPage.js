import './introPage.scss';
import mainExersize from '../../assets/img/exersize_main.jpg';

const IntroPage = ()=>{

    return(
    <section className='home_section'>
        <div className="container">
            <div className="row align-items-center">
                <div className='col_half'>
                    <div className='home_content_wrap'>
                        <p className='home_content_p1'>개인에 필요한 알맞은 운동 계획을 제공하는 웨이트닝 플렛폼</p>
                        <p className='mr0 main_title mr_b_20'>RUTIN<span className='main_H_style'>H</span></p>
                        <p className='mr0 mr_b_20 main_sub_title'>매번 같은 루틴을 가져가고 있진 않으신가요?</p>
                        <p className='mr0 mr_b_20 main_sub_title'>점진적 과부화는 실천 하고 계시고 있으신가요?</p>
                        <p className='mr_b_50 main_sub_title'>루틴 H는 이와 관련한 다양한 솔루션을 제공해 줄 것입니다.</p>
                        <div className='main_btn_wapper'>
                            <button className="btn-style btn_go_demo">
                                <span>Go Demo</span>
                            </button>
                            <button className="btn-style btn_buy_now">
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col_half'>
                    <div className='home_image_wrap'>
                        <img className='main-img' src={mainExersize} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default IntroPage