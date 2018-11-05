function myMap() {

                    var myLatLng = {lat: 59.270931, lng: 18.288401};

                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 11,
                        center: myLatLng
                    });

                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: 'Globuzzer Headoffice'
                    });

                    /** var mapProp= {
                center:new google.maps.LatLng(59.270931,18.288401),
                zoom:5,
                };
                var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);**/
                } 
       