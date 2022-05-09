import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import './Slider.css'

export const Slider2 = ()=>{
    return(
        <Carousel infiniteLoop autoPlay>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/079b4250-2cd5-467a-b620-af356a98206e.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/ac0cec37-3f1d-4fa6-b103-10f988f84ea8.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://d32baadbbpueqt.cloudfront.net/e90a47e7-1d6c-4e0c-8374-f5425dddc66a.jpg" alt="Phones" />
                
           </div>
            
            
        </Carousel>
    )
}