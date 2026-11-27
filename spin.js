
(() => {
    const wheel = document.getElementById("sdgWheel");
    const button = document.getElementById("spinButton");
    const result = document.getElementById("sdgResult");

    if (!wheel || !button || !result) return;

    const goals = [
        ["SDG 1: No Poverty", "Mengakhiri kemiskinan dalam segala bentuk di mana pun."],
        ["SDG 2: Zero Hunger", "Mengakhiri kelaparan, mencapai ketahanan pangan, meningkatkan gizi, dan mendukung pertanian berkelanjutan."],
        ["SDG 3: Good Health and Well-being", "Memastikan kehidupan yang sehat dan mendukung kesejahteraan bagi semua orang di segala usia."],
        ["SDG 4: Quality Education", "Memastikan pendidikan yang inklusif, adil, dan berkualitas serta memberikan kesempatan belajar sepanjang hayat bagi semua orang."],
        ["SDG 5: Gender Equality", "Mencapai kesetaraan gender dan memberdayakan semua perempuan dan anak perempuan."],
        ["SDG 6: Clean Water and Sanitation", "Memastikan ketersediaan air bersih dan sanitasi yang layak bagi semua orang."],
        ["SDG 7: Affordable and Clean Energy", "Memastikan akses terhadap energi yang terjangkau, andal, berkelanjutan, dan modern."],
        ["SDG 8: Decent Work and Economic Growth", "Mendukung pertumbuhan ekonomi yang berkelanjutan serta pekerjaan yang layak bagi semua orang."],
        ["SDG 9: Industry, Innovation and Infrastructure", "Membangun infrastruktur yang kuat, mendukung industri berkelanjutan, dan mendorong inovasi."],
        ["SDG 10: Reduced Inequalities", "Mengurangi kesenjangan di dalam dan antarnegara."],
        ["SDG 11: Sustainable Cities and Communities", "Mewujudkan kota dan permukiman yang inklusif, aman, tangguh, dan berkelanjutan."],
        ["SDG 12: Responsible Consumption and Production", "Mendorong pola konsumsi dan produksi yang bertanggung jawab."],
        ["SDG 13: Climate Action", "Mengambil tindakan nyata untuk mengatasi perubahan iklim dan dampaknya."],
        ["SDG 14: Life Below Water", "Melestarikan dan memanfaatkan sumber daya laut secara berkelanjutan."],
        ["SDG 15: Life on Land", "Melindungi ekosistem daratan, hutan, dan keanekaragaman hayati."],
        ["SDG 16: Peace, Justice and Strong Institutions", "Mendorong masyarakat yang damai, adil, dan inklusif."],
        ["SDG 17: Partnerships for the Goals", "Memperkuat kerja sama global untuk mencapai seluruh tujuan pembangunan berkelanjutan."]
    ];

    const sectorSize = 360 / 17;
    const firstGoalAngle = 10.588;

    let rotation = 0;
    let spinning = false;

    button.addEventListener("click", () => {
        if (spinning) return;

        spinning = true;
        button.disabled = true;
        button.textContent = "SPINNING...";

        // Pick one of the 17 SDGs
        const selected = Math.floor(Math.random() * goals.length);

        // Find the centre angle of the selected SDG
        const selectedAngle = firstGoalAngle + selected * sectorSize;

        // Calculate the wheel's current angle
        const currentAngle = ((rotation % 360) + 360) % 360;

        // Calculate how far the wheel needs to rotate
        const targetAngle = (360 - selectedAngle - currentAngle + 360) % 360;

        // Add several full rotations before stopping
        rotation += (360 * 6) + targetAngle;

        wheel.style.transform = `rotate(${rotation}deg)`;

        // Show the selected SDG after the wheel finishes spinning
        setTimeout(() => {
            result.innerHTML = `
                <h3>${goals[selected][0]}</h3>
                <p>${goals[selected][1]}</p>
            `;

            button.disabled = false;
            button.textContent = "SPIN AGAIN!";
            spinning = false;
        }, 5200);
    });
})();
