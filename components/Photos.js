import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styles from '../styles/Photos.module.css'

export default function Photos() {
    return (
        <Carousel variant='dark' indicators={false}>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-01.png" alt="Puerto Vallarta" width={1000} height={550} />
                <Carousel.Caption className={styles.carouselCaption}>
                    <h3>Puerto Vallarta, México</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-02.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-03.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-04.png" alt="Puerto Vallarta" width={1000} height={550} />
                <Carousel.Caption className={styles.carouselCaption}>
                    <h3>Melia Puerto Vallarta</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-05.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-06.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-07.png" alt="Puerto Vallarta" width={1000} height={550} />
                <Carousel.Caption className={styles.carouselCaption}>
                    <h3>Grand Velas Riviera Nayarit</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-08.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-09.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-10.png" alt="Puerto Vallarta" width={1000} height={550} />
                <Carousel.Caption className={styles.carouselCaption}>
                    <h3>Marriott Puerto Vallarta Resort & Spa</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-11.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-12.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-13.png" alt="Puerto Vallarta" width={1000} height={550} />
                <Carousel.Caption className={styles.carouselCaption}>
                    <h3>Casa Velas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-14.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/Puerto-Vallarta-15.png" alt="Puerto Vallarta" width={1000} height={550} />
            </Carousel.Item>
        </Carousel>
    )
}