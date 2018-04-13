window.onload = function(e) {
    var contentContainer = document.getElementsByClassName('content-container')[0];
    var photoData = document.getElementsByClassName('photo-data')[0]; 

    document.getElementById('input-btn').onclick = function(e){
        document.getElementById('input-files').click();
    }
    
    for (var i = 1; i <= 12; i++){
        PhotoData('img/' + i + '.png', '10/08/2010', 'Lorem Ipsum is simply');
    }

    function PhotoData(source, date, name) {
        var clone = photoData.cloneNode(true);
        clone.querySelector('.img-wrapper img').src = source;
        clone.querySelector('.image-name').innerHTML = name;
        clone.querySelector('.date').innerHTML = date;
        clone.style.display = 'block';
        contentContainer.appendChild(clone);
    }
}