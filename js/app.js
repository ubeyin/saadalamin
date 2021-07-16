function load() {

    var rows1 = document.getElementById('rows1');
    var rows2 = document.getElementById('rows2');
    var rows3 = document.getElementById('rows3');
    var rows4 = document.getElementById('rows4');
    var rows5 = document.getElementById('rows5');

    /* Gallery */
    var gallery = [
        /* Gallery: My Official Music Video */
        {
            image: ['image/myworks/ashbe-alo-fire.jpeg', 'image/myworks/doyamoy.jpeg'],
            title: ['Ashbe Alo Firey', 'Doyamoy'],
            link: ['https://youtu.be/xsyOkqqywoU', 'https://www.youtube.com/watch?v=OdS5Ei39df8']
        },
        /* Gallery: My Creations (film) */
        {
            image: ['image/myworks/destiny-of-puppets.jpeg','image/myworks/ovipray.jpeg','image/myworks/protishoy.jpeg','image/myworks/anxious.jpeg','image/myworks/ashahoto.jpeg','image/myworks/shangiskitic-dorshok.jpeg','image/myworks/a-madrasha-student.jpeg'],
            title: ['Destiny Of Puppets','OVIPRAY','PROTISHOY','anxious','Asha hoto','Millat Documentary','A Student of Madrasha'],
            link: ['https://youtu.be/6ghDK8BLlB4','https://youtu.be/Xcw4PpS7imw','https://youtu.be/yS6cyBdcRZE','https://youtu.be/3p7_z0eM11Y','https://youtu.be/8efAriwfSUk','https://youtu.be/UcJRDzHdaQY','https://youtu.be/McDJAUW4zjE']
        },
        /* Gallery: My Creations (Music Video) */
        {
            image: ['image/myworks/mahe-ramjan.jpeg','image/myworks/baba.jpeg','image/myworks/porer-jayga.jpeg','image/myworks/give-thanks-toallah.jpeg'],
            title: ['MAHE ROMJAN','Baba Mane Hajar Bikel','Porer Jayga Porer Jomi','Give Thanks To Allah'],
            link: ['https://youtu.be/-auaLsdUdm0','https://youtu.be/dUCkii-0LX8','https://youtu.be/Y239xroM1EE','https://youtu.be/PKPQQWw4nxY']
        },
        /* Gallery: Poster Design by me */
        {
            index: 39
        },
        /* Gallery: Typography by me */
        {
           index: 48
        },
    ];


    for (let index = 0; index < gallery[0].image.length; index++) {
        const image = gallery[0].image[index];
        const title = gallery[0].title[index];
        const link = gallery[0].link[index];

        rows1.innerHTML += '<section><a href="' + link + '"><div class="title"><p>' + title + '</p></div><img src="' + image + '" alt="Saad Al Amin"></a></section>';
    }
    for (let index = 0; index < gallery[1].image.length; index++) {
        const image = gallery[1].image[index];
        const title = gallery[1].title[index];
        const link = gallery[1].link[index];

        rows2.innerHTML += '<section><a href="' + link + '"><div class="title"><p>' + title + '</p></div><img src="' + image + '" alt="Saad Al Amin"></a></section>';
    }
    for (let index = 0; index < gallery[2].image.length; index++) {
        const image = gallery[2].image[index];
        const title = gallery[2].title[index];
        const link = gallery[2].link[index];

        rows3.innerHTML += '<section><a href="' + link + '"><div class="title"><p>' + title + '</p></div><img src="' + image + '" alt="Saad Al Amin"></a></section>';
    }
    for (let index = 1; index <= gallery[3].index; index++) {
        const image = 'image/myworks/poster/'+index+'.jpeg';
        const title = index;
        const link = '##';

        rows4.innerHTML += '<section><a href="' + link + '"><div class="title"><p>' + title + '</p></div><img src="' + image + '" alt="Saad Al Amin"></a></section>';
    }
    for (let index = 1; index <= gallery[4].index; index++) {
        const image = 'image/myworks/typography/'+index+'.jpeg';
        const title = index;
        const link = '##';

        rows5.innerHTML += '<section><a href="' + link + '"><div class="title"><p>' + title + '</p></div><img src="' + image + '" alt="Saad Al Amin"></a></section>';
    }
};

window.onload = load;