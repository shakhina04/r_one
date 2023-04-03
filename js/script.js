new Vue({
    el:'.wrapper',
    data:{
        elHidden: '-40vw',
        stick1: 'rotate(0deg)',
        stick2: 'translate(0 0)',
        stick3: 'rotate(0deg)',
    },
    methods:{
        burgerOnClick: function(){
            if(this.elHidden == '-40vw'){
                this.elHidden = '7vw'
                this.stick1 = 'rotate(45deg)'
                this.stick2 = 'translate(5.4vw)'
                this.stick3 = 'rotate(-45deg)'
            }
            else{
                this.elHidden = '-40vw'
                this.stick1 = 'rotate(0deg)'
                this.stick2 = 'translate(0)'
                this.stick3 = 'rotate(0deg)'
            }
        },
        onClick_h1: function(){
            document.querySelector('.section:nth-child(1)').scrollIntoView({
                behavior: 'smooth',
            })
        },
        onClick_h2: function(){
            document.querySelector('.section:nth-child(1) .article:nth-child(2) .article__items .article__element:nth-child(2) span').scrollIntoView({
                behavior: 'smooth',
            })
        },
        onClick_h3: function(){
            document.querySelector('.section:nth-child(2) .article:nth-child(1) .article__items').scrollIntoView({
                behavior: 'smooth',
            })
        },
        onClick_h4: function(){
            document.querySelector('.section:nth-child(2) .article:nth-child(3)').scrollIntoView({
                behavior: 'smooth',
            })
        },
        onClick_h5: function(){
            document.querySelector('.section:nth-child(2) .article:nth-child(4)').scrollIntoView({
                behavior: 'smooth',
            })
        },
    },
})