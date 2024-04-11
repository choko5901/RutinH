import './about.scss'
import checkList from '../../assets/img/checkList.png'
import sitUp from '../../assets/img/sit_up.png'
import food from '../../assets/img/food.png'


const About = ()=>{

    return(
    <section className='about_section bg_primary_light'>
        <div className="container">
            <div className="about_section_header text-center">
                <h2 className='about_section_header_title'>Why You Need It</h2>
                <p className='mr0 mr_b_10 fs18 about_section_header_sub_title'>운동이 생활이 되게 정착 해주는 생활 매니저 루틴 H</p>
                <p className='mr0 fs18 about_section_header_sub_title'>나만의 생활 밀착 PT를 경험할 것 입니다.</p>
            </div>
            <div className='about_content_wapper justify-content-cente'>
                <div className='pd15 about_col_lg'>
                    <div className='about_item'>
                        <div className='item_icon'>
                            <img className='item_img' src={checkList} alt=''/>
                        </div>
                        <div className='item_content'>
                            <div className='item_content_title'>전략적인 운동 계획 수립</div>
                            <p>운동 목표 및 계획 기간에 맞는 운동계획 추천</p>
                            <p>비슷한 체형에서 목표 달성한 회원 성공 루틴 추천</p>
                            <p>하루 적정 섭취 칼로리를 제공 및 편리한 식단 계획 툴 제공</p>
                        </div>
                    </div>
                </div>
                <div className='pd15 about_col_lg'>
                    <div className='about_item'>
                        <div className='item_icon'>
                            <img className='item_img' src={sitUp} alt=''/>
                        </div>
                        <div className='item_content'>
                            <div className='item_content_title'>지속적인 점진적 과부화 지원책 제공</div>
                            <p>간편한 운동일지 작성을 통한 지속적인 운동강도 트레킹</p>
                            <p>매번 같은 부위 같은 운동이 아닌 다양한 운동 추천</p>
                            <p>자체 운동 자세 동영상 제공 예정</p>
                        </div>
                    </div>
                </div>
                <div className='pd15 about_col_lg'>
                    <div className='about_item'>
                        <div className='item_icon'>
                            <img className='item_img' src={food} alt=''/>
                        </div>
                        <div className='item_content'>
                            <div className='item_content_title'>오늘도 오운완 소통 플랫폼 제공</div>
                            <p>회원들 간의 오운완 인증을 통한 루틴 공유할 수 있습니다</p>
                            <p>오늘 식단 공유를 통한 다양한 레시피 공유할 수 있습니다</p>
                            <p>운동 파트너를 구하며 친목을 다질 수 있습니다</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About