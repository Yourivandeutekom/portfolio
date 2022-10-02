window.addEventListener('load', () => {

    const navigation = document.getElementById('navigation');

    window.onscroll = () => {
        scrollFunction();
    }

    const scrollFunction = () => {
        if(document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            navigation.classList.add('scroll');
        } else {
            navigation.classList.remove('scroll');
        }
    }
});