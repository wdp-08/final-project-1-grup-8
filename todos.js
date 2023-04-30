// // get data
const btnAdds = document.querySelectorAll("#btn_add")
btnAdds.forEach(e => {
    e.addEventListener("click", event => {
        const row = e.parentElement.parentElement.parentElement
        const children = row.childNodes

        const judul_video = children[1].innerHTML
        const durasi_video = children[3].innerHTML
        const jumlah_video = children[5].innerHTML

        let dataKursus;
        if (localStorage.getItem("dataKursus") == null) {
            dataKursus = [];
        } else {
            dataKursus = JSON.parse(localStorage.getItem("dataKursus"))
        }

        dataKursus.push({
            judul: judul_video,
            durasi: durasi_video,
            jumlah: jumlah_video,
        })
        localStorage.setItem("dataKursus", JSON.stringify(dataKursus));
        showData();
    })
})

// show data

function showData() {
    let dataKursus;
    if (localStorage.getItem("dataKursus") == null) {
        dataKursus = [];
    } else {
        dataKursus = JSON.parse(localStorage.getItem("dataKursus"))
    }

    let html = "";

    dataKursus.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.judul + "</td>";
        html += "<td>" + element.durasi + "</td>";
        html += "<td>" + element.jumlah + "</td>";
        html += '<td><button type="button" class="btn btn-danger" onclick="deleteData(' +index+ ')">Delete</button></td>';
        html += "</tr>";
    })

    document.querySelector("#data tbody").innerHTML = html;
}

document.onload = showData();

function deleteData(index) {
    let dataKursus;
    if (localStorage.getItem("dataKursus") == null) {
        dataKursus = [];
    } else {
        dataKursus = JSON.parse(localStorage.getItem("dataKursus"))
    }

    dataKursus.splice(index, 1);
    localStorage.setItem("dataKursus", JSON.stringify(dataKursus));
    showData();
}
