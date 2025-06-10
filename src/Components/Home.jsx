import HomeFeaturedRestaurants from './Homepage/HomeFeaturedRestaurants';
import FirstOrderBanner from './Homepage/FirstOrderBanner';
import HomeBannerTop from './Homepage/HomeBannerTop';
import HomeFloatingCardsTop from './Homepage/HomeFloatingCardsTop';
import LatestPosts from './Homepage/LatestPosts';
import Newsletter from './Homepage/Newsletter';
import OrderAppBanner from './Homepage/OrderAppBanner';
import PopularDishes from './Homepage/PopularDishes';
import Testimonials from './Homepage/Testimonials';
import WhyChooseUs from './Homepage/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <HomeBannerTop></HomeBannerTop>
            <HomeFloatingCardsTop></HomeFloatingCardsTop>
            <HomeFeaturedRestaurants></HomeFeaturedRestaurants>
            <WhyChooseUs></WhyChooseUs>
            <FirstOrderBanner></FirstOrderBanner>
            <Testimonials></Testimonials>
            <PopularDishes></PopularDishes>
            <OrderAppBanner></OrderAppBanner>
            <Newsletter></Newsletter>
            <LatestPosts></LatestPosts>
        </div>
    );
};

export default Home;