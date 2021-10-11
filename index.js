
// menambil/membuat/validasi/mengosongkan data dari form
const form = document.querySelector('#formStudent');
const search = document.querySelector('#search');
search.addEventListener('keyup', searchFP);
form.addEventListener('submit', insertDataForm);

function insertDataForm(event) {
    event.preventDefault();
    let studentId = document.querySelector('#inputStudentId');
    let fullName = document.querySelector('#inputFullName');
    let faculty = document.querySelector('#listFaculty');
    let prodi = document.querySelector('#listProdi');
    let gender = document.querySelector("input[name=flexRadioDefault]:checked").value;
    // let deleteIcon = document.querySelector('#delete');
    if(!studentId.value || !fullName.value || !gender || !faculty.value || !prodi.value){
        alert("please fill all form");
        return;
    }
    // console.log(`${studentId.value} / ${fullName.value} / ${gender} / ${faculty.value} / ${prodi.value}`);
    
    let row;

    let outputDataStudent = document.querySelector('#outputData');
    let newRow = outputDataStudent.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    // let cell6 = newRow.insertCell(5);
    
    // let cell6 = newRow.insertCell(5);

    cell1.innerHTML = studentId.value;
    cell2.innerHTML = fullName.value;
    cell3.innerHTML = gender;
    cell4.innerHTML = faculty.value;
    cell5.innerHTML = prodi.value;
    // cell6 = trash;
    // cell6.innerHTML = deleteIcon.value;



    //Membersihkan form setelah di submit
    studentId.value = '';
    fullName.value = '';
    faculty.value = '';
    prodi.value = '';
    gender = '';
};

// fitur search pada table
function searchFP(e) {
    let searchText = e.target.value.toLowerCase();
    let listofFP = [...document.querySelectorAll('td')];
    listofFP.forEach((fakultas) =>{
        let fakultasName = fakultas.firstChild.textContent;
        if(fakultasName.toLowerCase().indexOf(searchText) != -1){
            fakultas.style.display = '';
        } else {
            fakultas.style.display = 'none';
        }
    })
};

let a;
function show_hide(){
    if(a==1){
        document.querySelector('#formStudent').style.display="inline";
        return a=0;
    } else{
        document.querySelector('#formStudent').style.display="none";
        return a=1;
    }
};


// CODING DIBAWAH INI MASIH BELUM BERJALAN DENGAN BAIK



//filter table
// let studentId2 = document.querySelector('#inputStudentId');
// let fullName2 = document.querySelector('#inputFullName');
// let faculty2 = document.querySelector('#listFaculty');
// let prodi2 = document.querySelector('#listProdi');
// let gender2 = document.querySelector("input[name=flexRadioDefault]:checked").value;
// //faculty
// const filterFaculty = document.querySelector('#buttonFaculty');
// filterFaculty.onclick = () => {
//     let tabel = document.querySelector('#list-student table');
//     tabel.innerHTML;
//     let x=0;
//     for(let i=0;i<tr.length;i++){
//         if(tr[i].td == document.getElementById('filterFaculty').value){
//             let row2 = tabel.insertRow(j+1);
            
//             let nim = row2.insertCell(0);
//             let nama = row2.insertCell(1);
//             let jk = row2.insertCell(2);
//             let fakultas = row2.insertCell(3);
//             let prodi = row2.insertCell(4);
            

//             nim.innerHTML = studentId2.value;
//             nama.innerHTML = fullName2.value;
//             jk.innerHTML = gender2;
//             fakultas.innerHTML = faculty2.value;
//             prodi.innerHTML = prodi2.value;
//         }
//     }
// };
//prodi
// const filterFaculty = document.querySelector('#buttonProdi');
// filterFaculty.onclick = () => {
//     let tabel = document.querySelector('#list-student table');
//     tabel.innerHTML;
//     let x=0;
//     for(let i=0;i<tr.length;i++){
//         if(tr[i].td == document.getElementById('filterprodi').value){
//             let row2 = tabel.insertRow(j+1);
            
//             let nim = row2.insertCell(0);
//             let nama = row2.insertCell(1);
//             let jk = row2.insertCell(2);
//             let fakultas = row2.insertCell(3);
//             let prodi = row2.insertCell(4);
            

//             nim.innerHTML = studentId2.value;
//             nama.innerHTML = fullName2.value;
//             jk.innerHTML = gender2;
//             fakultas.innerHTML = faculty2.value;
//             prodi.innerHTML = prodi2.value;
//         }
//     }
// };







// function tableSearch(){
//     let input, filter, table, td, txtValue;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("outputData");
//     tr = table.getElementsByTagName("tr") || table.getElementsByTagName("tr").value;

//     for (let i = 0; i < tr.length; i++){
//         td = tr[i].getElementsByTagName("td")[1];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1){
//                 tr[i].style.display = "";
//             } else{
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

    // const searchInput = document.querySelector('#search');
    // const rows = document.querySelectorAll('tbody tr');
    // searchInput.addEventListener('keyup', function(event){
    //     const q = event.target.value.toLowerCase();
    //     rows.forEach((row) => {
    //         row.querySelector('td').textContent.toLowerCase().indexOf(searchText).startsWith(q) 
    //             ? (row.style.display = "table-row" )
    //             : (row.style.display = "none");
    //     });
    // });

//hide2


// filter



// Hide 
// const hide = document.querySelector("#hide");
// const form2 = document.querySelector("form");

// hide.addEventListener("click", hideForm();
// function hideForm(event){
//     event.preventDefault();
// 	if(form2.style.display === "none"){
// 		form2.style.display = "block";
// 		hide.textContent = "Hide Form Add New Student";
// 	}
// 	else{
// 		form2.style.display = "none";
// 		hide.textContent = "Show Form Add New Student";
// 	}
// });
//end of show hide form


// menubambahkan input (element)
// const td = document.createElement('td');
// td.className = 'list-data';
// const tdText = document.createTextNode(`${studentId.value} / ${fullName.value} / ${sex} / ${faculty.value} / ${prodi.value}`);
// td.appendChild(tdText);
// console.log(td);



    // india


    // const td = document.createElement('tr');
    // td.className = 'list-data';
  
    // const tdText1 = document.createTextNode(`${studentId.value}`);
    // td.appendChild(tdText1);

    // const tdText2 = document.createTextNode(`${fullName.value}`);
    // td.appendChild(tdText2);

    

    // let deleteLink = document.createElement('a');
    // deleteLink.className = 'delete';
    // deleteLink.setAttribute('href', '#');
    // deleteLink.appendChild(document.createTextNode('Delete'));
  
    // li.appendChild(deleteLink);
  
    // add li element to the parent ul element
    // const tr = document.querySelector('#tableForm');
    // tr.appendChild(td);
  
    // facultyName.value = ''; 

    // let genderValue;
    // if(document.querySelector('#genderMale').checked){
    //     genderValue = document.querySelector('#genderMale');
    // } else if(document.querySelector('#genderFemale').checked){
    //     genderValue = document.querySelector('#genderFemale');
    //     }
    


    // const td = document.createElement('td');
    // td.className = 'list-data';

    // const tdText = document.createTextNode(`${studentId.value} / ${fullName.value} / ${gender} / ${faculty.value} / ${prodi.value}`);
    // td.appendChild(tdText);


    // const td = document.createElement('td');
    // td.className = 'list-data';
    // console.log(td);
    // const tdValue = document.createTextNode(``)
    // td.appendChild(document.)

    // JADI
    // let outputId = studentId.value;
    // let outputFN = fullName.value;
    // let outputGender = gender;
    // let outputFaculty = faculty.value;
    // let outputProdi = prodi.value;
    // // let actionDelete = document.querySelector('.delete');

    // let tr = document.createElement('tr');

    // let td1 = tr.appendChild(document.createElement('td'));
    // let td2 = tr.appendChild(document.createElement('td'));
    // let td3 = tr.appendChild(document.createElement('td'));
    // let td4 = tr.appendChild(document.createElement('td'));
    // let td5 = tr.appendChild(document.createElement('td'));
    // // let td6 = tr.appendChild(document.createElement('td'));

    // td1.innerHTML = outputId;
    // td2.innerHTML = outputFN;
    // td3.innerHTML = outputGender;
    // td4.innerHTML = outputFaculty;
    // td5.innerHTML = outputProdi;
    // // td6 = actionDelete;
    
    // document.querySelector('#tableForm').appendChild(tr);

// jadi 2
    // const tr = document.createElement('tr');
    // const td1 = document.createElement('td');
    // const td2 = document.createElement('td');
    // const td3 = document.createElement('td');
    // const td4 = document.createElement('td');
    // const td5 = document.createElement('td');

    // const tdText1 = document.createTextNode(studentId.value);
    // const tdText2 = document.createTextNode(fullName.value);
    // const tdText3 = document.createTextNode(gender);
    // const tdText4 = document.createTextNode(faculty.value);
    // const tdText5 = document.createTextNode(prodi.value);

    // td1.appendChild(tdText1);
    // td2.appendChild(tdText2);
    // td3.appendChild(tdText3);
    // td4.appendChild(tdText4);
    // td5.appendChild(tdText5);

    // const table = document.querySelector('#table');
    // table.appendChild(tr);
    // table.appendChild(td1);
    // table.appendChild(td2);
    // table.appendChild(td3);
    // table.appendChild(td4);
    // table.appendChild(td5);
    
    
    // menubambahkan input (element)
    // const td = document.createElement('td');
    // td.className = 'list-data';
    // const tdText = document.createTextNode(`${studentId.value} / ${fullName.value} / ${sex} / ${faculty.value} / ${prodi.value}`);
    // td.appendChild(tdText);
    // console.log(td);


    // // add td element to parent tr
    // const tr = document.querySelector('')