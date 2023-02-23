tblbody = document.getElementsByTagName('tbody')[0];

    delall.addEventListener('click', function () {

        c = prompt("Are u sure Y/N?");

        if (c == "Y" || c == "yes" || c == "y" || c == "Yes" || c == "YES") {

            localStorage.clear();
            update();
        }
        else {
            // break;
            console.log("fine")
            update();
        }

    })





    add.addEventListener('click', () => {

        screenvalue = document.getElementById('txt').value;
        svv = document.getElementById('txtt').value;

        a = [];

        if (localStorage.getItem('item') == null) {
            a.push([screenvalue, svv]);
            localStorage.setItem('item', JSON.stringify(a));

        }
        else {
            s = localStorage.getItem('item');
            a = JSON.parse(s);
            a.push([screenvalue, svv]);
            localStorage.setItem('item', JSON.stringify(a));
        }

        str = "";
        a.forEach((element, index) => {

            str += ` <tr>
                    <td>${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><select name="" id="">
                    <option value="">Select Categories</option>
                    <option value="book">Books</option>
                    </select></td>                    
                    <td><button id = "edt" onclick = "edit(${index})">Edit</button><button id = "dlt" onclick = "del(${index})">Delete</button></td>
                </tr> `

        });
        tblbody.innerHTML = str;
        update();

    })

    function edit(k) {

        name = prompt("Enter new name")
        jame = prompt("Enter new jame")

        ss = ""
        a = [];

        s = localStorage.getItem('item');
        a = JSON.parse(s)
        a[k] = [name, jame];

        localStorage.setItem('item', JSON.stringify(a))
        a.forEach((element, index) => {

            ss += ` <tr>
        <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><select name="" id="" onclick = dis(${index})>
                    <option value="">Select Categories</option>
                    <option value="book">Books</option>
                    <option value="car">cars</option>
                    </select></td>
        <td><button id = "edt" onclick = "edit(${index})">Edit</button><button id = "dlt" onclick = "del(${index})">Delete</button></td>
        </tr> `

        });

        tblbody.innerHTML = ss;


    }

    function del(k) {
        ss = "";
        sttr = localStorage.getItem('item')
        arr = JSON.parse(sttr)
        arr.splice(k, 1)
        localStorage.setItem('item', JSON.stringify(arr))

        arr.forEach((element, index) => {

            ss += ` <tr>
                    <td>${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><select name="" id="" onclick = dis(${index})>
                    <option value="">Select Categories</option>
                    <option value="book">Books</option>
                    <option value="car">cars</option>
                    </select></td>
                    <td><button id = "edt" onclick = "edit(${index})">Edit</button><button id = "dlt" onclick = "del(${index})">Delete</button></td>
                    </tr> `

        });

        tblbody.innerHTML = ss;



    }

    function update() {
        a = [];
        screenvalue = document.getElementById('txt').value;

        if (localStorage.getItem('item') == null) {
            // a.push([screenvalue]);
            localStorage.setItem('item', JSON.stringify(a));
            update();
        }
        else {
            s = localStorage.getItem('item');
            a = JSON.parse(s);
            // a.push([screenvalue]);
            localStorage.setItem('item', JSON.stringify(a));
        }

        str = "";
        a.forEach((element, index) => {

            str += ` <tr>
            <td>${index + 1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><select name="" id="" onclick = dis(${index})>
                    <option value="">Select Categories</option>
                    <option value="book">Books</option>
                    <option value="car">cars</option>
                    </select></td>
            <td><button id = "edt" onclick = "edit(${index})">Edit</button><button id = "dlt" onclick = "del(${index})">Delete</button></td>
            </tr> `

        });



        tblbody.innerHTML = str;


    }
    var ray = [];
    var dival = "";
    function dis(v) {
        console.log(document.getElementsByTagName('select')[v].value);
        let f = document.getElementsByTagName('select')[v].value;
        // a = [];
        ray.push(f);
        console.log(ray);
        dival = "<h1> Selected category is : " + v + ray[v] ; 
        document.getElementsByClassName('dp')[0].innerHTML = dival; 

        // document.write('KK')
    }
    update();
