function getFormvalue() {
    //Write your code here

	 function getFormvalue() {
            //Write your code here
            event.preventDefault();
            const form = document.getElementById('form1');

            const formData = new FormData(form);

            let output = "";
            formData.forEach((value, key) => {
                output += `${value} `;
            });

            alert(output.trim());
        }

}
