
  <!-- JAVASCRIPT -->
<script>
<script src="script.js"></script>

    // Automatic copyright year
    document.getElementById("year").textContent =
      new Date().getFullYear();


    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {

      link.addEventListener("click", function(e) {

        const target =
          document.querySelector(this.getAttribute("href"));

        if (target) {

          e.preventDefault();

          target.scrollIntoView({
            behavior: "smooth"
          });

        }

      });

    });
	<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>

  </script>
