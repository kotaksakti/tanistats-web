(function ($) {
    "use strict";

    // Full height adjustment
    var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // Sidebar toggle (Expanded with sidebar arrow button)
    $('.sidebar-arrow').on('click', function () {
        $('#sidebar').toggleClass('active');

        // Rotate the arrow when toggling
        if ($('#sidebar').hasClass('active')) {
            $('.sidebar-arrow').css('transform', 'rotate(180deg)');
        } else {
            $('.sidebar-arrow').css('transform', 'rotate(0deg)');
        }
    });

    // ================= Language Translation =================
    const translations = {
        en: {
            headline_text:"📢 Malaysia Statistical Agriculture Registry (TaniStats) Launches New Dashboard! &nbsp;&nbsp;&nbsp; 🌱 Explore TaniStats Today! &nbsp;&nbsp;&nbsp; 🚜 Support Sustainable Agriculture Through Data!",
            home: "Home",
            d_explorer: "TableFlex",
            d_request: "Data Request",
            logo_title:"Malaysia Statistical Agriculture Registry",
            title: "Malaysia Statistical Agriculture Registry (TaniStats):",
            subtitle: "Integrated Data, Sustainable Agriculture, Secured Food Supply",
            description: 'The <strong>Malaysia Statistical Agriculture Registry (TaniStats)</strong> is a centralized digital system that organizes and simplifies agricultural data. It brings together information from different sources, making it easier to monitor, analyze, and plan for a stronger and more sustainable agricultural sector.',
            faq_question_1:"What is TaniStats?",
            body_msagr:"The <strong>Malaysia Statistical Agriculture Registry (TaniStats)</strong> is a centralized data platform that integrates and synchronizes Malaysia’s agricultural data across multiple agencies and institutions. Developed in conjunction with the 2024 Agriculture Census, TaniStats combines census data, administrative records, and real-time agricultural information into a single, unified system.<br><br> By merging various datasets—ranging from farmer demographics, crop production, and land use to supply chain data and market trends—TaniStats eliminates data silos, ensuring accurate, updated, and readily accessible information. This integrated approach enables policymakers, researchers, and industry players to make informed, data-driven decisions that enhance the sector’s productivity, efficiency, and sustainability.",
            faq_question_2:"Why was TaniStats developed?",
            q2_a:"For years, Malaysia’s agricultural sector has faced challenges due to fragmented and decentralized data. The last Agricultural Census was conducted in 2005, resulting in significant information gaps that hinder effective policy planning and resource allocation. Additionally, agricultural data managed by various agencies has often been used and handled in silos, making it more difficult to formulate comprehensive and sustainable development strategies. <br>To address these challenges, TaniStats was developed with the following key objectives:",
            q2_b:"Integrating Data – Unifying various sources of agricultural data into a single, easily accessible platform.",
            q2_c:"Ensuring Data Accuracy & Timeliness – Providing real-time statistics to enable better-informed decision-making.",
            q2_d:"Strengthening Food Security – Monitoring the nation’s food supply, production trends, and identifying potential risks early.",
            q2_e:"Optimizing Resource Management – Ensuring targeted distribution of subsidies, financial aid, and agricultural support programs.",
            q2_f:"Supporting Sustainable Agriculture – Utilizing data analytics to guide farming practices that are more environmentally friendly, efficient, and resilient.",
            faq_question_3:"Why TaniStats Important?",
            q3_a:"The lack of accurate, comprehensive, and up-to-date data has been one of the key challenges in supporting the advancement of Malaysia’s agricultural sector. The development of TaniStats as a one-stop data center strengthens the management and planning of the sector in a more holistic manner.<br> Here are the key reasons why TaniStats serves as a catalyst for change in Malaysia’s agricultural landscape:",
            q3_b:"Enhancing Policy and Planning:<br>With TaniStats, policymakers can make well-informed decisions based on accurate and comprehensive data, driving agriculture toward greater sustainability and competitiveness.",
            q3_c:"Strengthening Food Security:<br>Through a more systematic food supply monitoring system, TaniStats enables the government to detect potential shortages earlier, adjust import strategies, and manage food reserves more effectively. This reduces the risk of food crises and ensures that the food supply remains stable.",
            q3_d:"Empowering Farmers and the Agricultural Industry:<br>Access to real-time market and production data allows farmers and agribusinesses to optimize yields, manage risks, and increase profitability. TaniStats helps bridge the information gap between policymakers and the agricultural workforce, ensuring that aid and support are distributed efficiently and in a targeted manner.",
            q3_e:"Supporting Sustainable and Resilient Agriculture:<br>By integrating environmental data, TaniStats helps monitor climate patterns, soil conditions, and water usage, promoting more sustainable and resource-efficient farming practices. This ensures that Malaysia’s agricultural sector remains strong even in the face of climate change challenges.",
            faq_question_4:"How TaniStats contributes to a better nation?",
            q4_a:"The successful implementation of TaniStats will have a far-reaching impact on Malaysia’s agricultural sector and the nation as a whole.",
            q4_b:"Enhanced Agricultural Productivity:<br> With better planning and data-driven farming strategies, Malaysia can increase agricultural yields while reducing waste and inefficiency.",
            q4_c:"Greater Economic Contribution:<br> Agriculture remains a key pillar of Malaysia’s economy, and TaniStats will boost investment, exports, and technological advancements in the industry.",
            q4_d:"Improved Livelihoods for Farmers:<br> With more accurate farm data, smallholder farmers can access better financial support, training, and resources, improving their earnings and stability.",
            q4_e:"Stronger National Food Security:<br> By tracking and responding to supply-demand shifts more effectively, TaniStats will minimize the risk of food shortages and price fluctuations, ensuring affordable and accessible food for all Malaysians.",
            carousel_title_1:"Welcome to TaniStats",
            carousel_title_2:"Data-Driven Decisions",
            carousel_title_3:"Secure Food Supply",
            carousel_title_4:"Smart Farming",
            carousel_title_5:"Agri Innovation",
            carousel_subtitle_1:"Integrated Agriculture Data for a Sustainable Future",
            carousel_subtitle_2:"Empowering Policymakers & Farmers with Accurate Data",
            carousel_subtitle_3:"Ensuring Resilience through Smart Agriculture Insights",
            carousel_subtitle_4:"Leveraging Technology for Efficient Agriculture",
            carousel_subtitle_5:"Driving Sustainability Through Innovation",
            glance_mysagr:"Agriculture at a Glance",
            usage_mysagr:"Usage of TaniStats <strong>(KIV)</strong>",
            h2_tanistats:"Overview",
            h2_overview:"Overview",
            h2_crops:"Crops",
            h2_livestock:"Livestock",
            h2_fisheries:"Fisheries",
            h2_aquaculture:"Aquaculture",
            h2_forestry:"Forestry & Logging",
            h2_dataExplorer:"TableFlex",
            h2_dataRequest:"Data Request",
            article_t:"Our Latest Articles",
            article_1:"ACHIEVEMENT AND WAY FORWARD OF FISHERIES SUBSECTOR (AGROFOOD)",
            article_2:"STRENGTHENING THE LIVESTOCK INDUSTRY",
            article_3:"POINT OF VIEW OF THE NATIONAL AGROFOOD CROP SUBSECTOR",
            article_date1:"Published date: 1 October 2024",
            article_date2:"Published date: 22 September 2024",
            article_date3:"Published date: 21 September 2024",
            highlight_ts:"TaniStats Highlight",
            highlight_1:"Self Sufficient",
            highlight_2:"Know Your Food",
            highlight_s1:"Malaysia has been importing more rice since the COVID-19 pandemic. But what does this mean for our food security?",
            highlight_s2:"Besides durian, how much do you know about Malaysians’ favourite food?",
            learn_more:"Learn More",
            menu_overview: "Overview",
            menu_crops: "Crops",
            menu_livestock: "Livestock",
            menu_fisheries: "Fisheries",
            menu_aquaculture: "Aquaculture",
            menu_forestry: "Forestry & Logging",
            title_crops: "Crops",
            h5_footer:"DEPARTMENT OF STATISTICS MALAYSIA",
            p_footer:"© 2025 Malaysia Statistical Agriculture Registry",
            about: "About Us",
            contact: "Contact Us",
            totalHoldings: "Total Agricultural Holdings",
            totalFarmers: "Total Agropreneurs",
            totalCompanies: "Number of Companies",
            femaleFarmers: "Female Agropreneurs",
            youngFarmers: "Young Agropreneurs",
            seniorFarmers: "Senior Agropreneurs <br> (>60 years)",
            foreignInvolvement: "Foreign Participation",
            avgAge: "Average Age of Agropreneurs (Years)",
            ss1: "(2024)",
            ss2: "(<strong>98.0%</strong> of all agropreneurs)",
            ss3: "(<strong>2.0%</strong> of all agropreneurs)",
            ss4: "(<strong>28.7%</strong> of agropreneurs)",
            ss5: "(<strong>8.2%</strong> of agropreneurs)",
            ss6: "(<strong>44.6%</strong> of agropreneurs)",
            ss7: "(<strong>4.9%</strong> of agropreneurs)",
            ss8: "(2024)"
            
        },
        my: {
            headline_text:"📢 Pangkalan Data Statistik Pertanian Bersepadu (TaniStats) Melancarkan Dashboard Baharu! &nbsp;&nbsp;&nbsp; 🌱 Teroka TaniStats Hari Ini! &nbsp;&nbsp;&nbsp; 🚜 Sokong Pertanian Lestari Melalui Data!",
            home: "Utama",
            d_explorer: "TableFlex",
            d_request: "Permintaan Data",
            logo_title:"Pangkalan Data Statistik Pertanian Bersepadu",
            title: "Pangkalan Data Statistik Pertanian Bersepadu (TaniStats):",
            subtitle: "Data Bersepadu, Pertanian Mampan, Bekalan Makanan Terjamin",
            description: "<strong>Pangkalan Data Statistik Pertanian Bersepadu (TaniStats)</strong> ialah sistem digital berpusat yang mengatur dan memudahkan data pertanian. Ia mengumpulkan maklumat dari pelbagai sumber, menjadikannya lebih mudah untuk memantau, menganalisis, dan merancang sektor pertanian yang lebih kukuh dan mampan.",
            faq_question_1:"Apa itu TaniStats?",
            body_msagr:"<strong>Pangkalan Data Statistik Pertanian Bersepadu (TaniStats)</strong> ialah satu platform data berpusat yang mengintegrasikan dan menyelaraskan maklumat pertanian Malaysia merentasi pelbagai agensi kerajaan. Sistem ini dibangunkan berasaskan dapatan Banci Pertanian 2024 serta menggabungkan pelbagai maklumat rasmi sektor pertanian ke dalam satu sistem bersepadu. <br><br> Dengan menghimpunkan pelbagai set data – termasuk profil petani, hasil tanaman, penggunaan tanah, rantaian bekalan, dan trend pasaran – TaniStats menghapuskan silo maklumat dan memastikan data yang lebih tepat, terkini, dan mudah diakses. Melalui pendekatan ini, TaniStats membolehkan penggubal dasar, penyelidik, dan pemain industri membuat keputusan lebih bijak berasaskan data yang kukuh, sekaligus mempertingkatkan produktiviti, kecekapan, dan daya tahan sektor pertanian.",
            faq_question_2:"Mengapa TaniStats dibangunkan?",
            q2_a:"Selama bertahun-tahun, sektor pertanian Malaysia berdepan cabaran data yang tidak seragam dan tidak berpusat. Kali terakhir Banci Pertanian dijalankan adalah pada 2005, menyebabkan jurang maklumat yang menyukarkan perancangan dasar dan pengagihan sumber secara berkesan. Selain itu, data pertanian yang dikendalikan oleh pelbagai agensi sering digunakan dan diurus secara silo, menjadikan usaha menyusun strategi pembangunan mampan lebih mencabar. <br> Untuk mengatasi cabaran ini, MySAgR dibangunkan dengan objektif utama berikut:",
            q2_b:"Mengintegrasikan Data – Menyatukan pelbagai sumber data pertanian ke dalam satu platform yang mudah diakses.",
            q2_c:"Memastikan Ketepatan & Ketepatan Masa Data – Menyediakan statistik masa nyata yang membolehkan keputusan lebih berinformasi.",
            q2_d:"Memperkukuh Sekuriti Makanan – Memantau bekalan makanan negara, trend pengeluaran, dan mengenal pasti risiko berpotensi lebih awal.",
            q2_e:"Mengoptimumkan Pengurusan Sumber – Memastikan pengagihan subsidi, bantuan kewangan, dan program sokongan pertanian dilakukan secara bersasar.",
            q2_f:"Menyokong Pertanian Lestari – Menggunakan analisis data bagi membimbing amalan pertanian yang lebih mesra alam, cekap, dan berdaya tahan.",
            faq_question_3:"Siapa yang Boleh Mendapat Manfaat daripada TaniStats?",
            q3_a:"Ketiadaan data yang tepat, komprehensif, dan terkini merupakan salah satu faktor yang menyukarkan usaha menyokong kemajuan sektor pertanian Malaysia. Pembangunan TaniStats sebagai pusat data sehenti membantu memperkukuh pengurusan dan perancangan sektor ini secara menyeluruh.<br> Berikut adalah sebab utama mengapa TaniStats menjadi pemangkin perubahan dalam landskap pertanian negara:",
            q3_b:"Pemerkasaan Dasar dan Perancangan:<br> Dengan MySAgR, pembuat dasar boleh membuat keputusan berdasarkan data yang tepat dan menyeluruh, ke arah pertanian yang lebih mampan dan berdaya saing.",
            q3_c:"Memperkukuh Sekuriti Makanan:<br> Melalui pemantauan bekalan makanan yang lebih sistematik, TaniStats membolehkan kerajaan mengesan sebarang kekurangan lebih awal, menyesuaikan strategi import, dan mengurus stok simpanan makanan dengan lebih baik. Ini mengurangkan risiko krisis makanan dan memastikan bekalan makanan kekal stabil.",
            q3_d:"Memperkasakan Petani dan Industri Pertanian:<br> Akses kepada data pasaran dan pengeluaran yang tepat membolehkan petani dan usahawan tani mengoptimumkan hasil, mengurus risiko, dan meningkatkan keuntungan. TaniStats membantu merapatkan jurang maklumat antara pembuat dasar dan tenaga kerja pertanian, memastikan bantuan diagihkan secara efisien dan bersasar.",
            q3_e:"Menyokong Pertanian Lestari dan Berdaya Tahan:<br> Dengan mengintegrasikan data alam sekitar, TaniStats membantu memantau corak cuaca, keadaan tanah, dan penggunaan air, menyokong amalan pertanian yang lebih lestari dan cekap sumber. Ini memastikan sektor pertanian Malaysia kekal kukuh walaupun berdepan cabaran perubahan iklim.",
            faq_question_4:"Bagaimana TaniStats menyumbang ke arah negara mampan?",
            q4_a:"Pelaksanaan TaniStats memberikan impak besar kepada sektor pertanian Malaysia dan negara secara keseluruhan.",
            q4_b:"Meningkatkan Produktiviti Pertanian:<br> Dengan perancangan yang lebih baik dan strategi pertanian berasaskan data, Malaysia dapat meningkatkan hasil tanaman dan ternakan sambil mengurangkan pembaziran sumber.",
            q4_c:"Meningkatkan Sumbangan Ekonomi:<br> Pertanian terus menjadi komponen penting dalam ekonomi negara, dan TaniStats akan menggalakkan pelaburan, eksport, serta inovasi teknologi dalam sektor ini.",
            q4_d:"Menambah Baik Taraf Hidup Petani:<br> Dengan data yang lebih tepat mengenai prestasi dan keperluan ladang, petani kecil boleh mengakses bantuan kewangan, latihan, dan sumber yang lebih baik, meningkatkan pendapatan dan kestabilan mereka.",
            q4_e:"Memastikan Sekuriti Makanan yang Lebih Kukuh:<br> Melalui pemantauan bekalan dan permintaan secara lebih strategik, TaniStats akan mengurangkan risiko kekurangan makanan dan ketidaktentuan harga, memastikan makanan yang mampu milik dan boleh diakses oleh semua rakyat Malaysia.",
            carousel_title_1:"Selamat Datang ke TaniStats",
            carousel_title_2:"Keputusan Berdasarkan Data",
            carousel_title_3:"Bekalan Makanan Selamat",
            carousel_title_4:"Pertanian Pintar",
            carousel_title_5:"Inovasi Agri",
            carousel_subtitle_1:"Data Pertanian Bersepadu untuk Masa Depan Lestari",
            carousel_subtitle_2:"Memberdayakan Pembuat Dasar & Petani dengan Data yang Tepat",
            carousel_subtitle_3:"Memastikan Ketahanan melalui Wawasan Pertanian Pintar",
            carousel_subtitle_4:"Memanfaatkan Teknologi untuk Pertanian yang Cekap",
            carousel_subtitle_5:"Mendorong Kelestarian Melalui Inovasi",
            glance_mysagr:"Pertanian secara Sepintas Lalu",
            usage_mysagr:"Penggunaan TaniStats <strong>(KIV)</strong>",
            h2_tanistats:"Ringkasan",
            h2_overview:"Ringkasan",
            h2_crops:"Tanaman",
            h2_livestock:"Ternakan",
            h2_fisheries:"Perikanan",
            h2_aquaculture:"Akuakultur",
            h2_forestry:"Perhutanan & Pembalakan",
            h2_dataExplorer:"TableFlex",
            h2_dataRequest:"Permintaan Data",
            article_t:"Artikel Terbaharu Kami",
            article_1:"PENCAPAIAN DAN HALA TUJU SUBSEKTOR PERIKANAN (AGROMAKANAN)",
            article_2:"PENGUKUHAN SEKTOR INDUSTRI TERNAKAN",
            article_3:"SUDUT PANDANG SUBSEKTOR TANAMAN AGROMAKANAN NEGARA",
            article_date1:"Tarikh diterbitkan: 1 Oktober 2024",
            article_date2:"Tarikh diterbitkan: 22 September 2024",
            article_date3:"Tarikh diterbitkan: 21 September 2024",
            highlight_ts:"Sorotan TaniStats",
            highlight_1:"Keterjaminan Makanan",
            highlight_2:"Kenali Makanan Anda",
            highlight_s1:"Import beras Malaysia semakin meningkat sejak pandemik COVID-19. Apakah kesannya kepada keterjaminan makanan negara?",
            highlight_s2:"Selain durian, apa lagi yang anda tahu tentang makanan kegemaran rakyat Malaysia?",
            learn_more:"Baca Lagi",
            menu_overview: "Ringkasan",
            menu_crops: "Tanaman",
            menu_livestock: "Ternakan",
            menu_fisheries: "Perikanan",
            menu_aquaculture: "Akuakultur",
            menu_forestry: "Perhutanan & Pembalakan",
            title_crops: "Tanaman",
            h5_footer:"JABATAN PERANGKAAN MALAYSIA",
            p_footer:"© 2025 Pangkalan Data Statistik Pertanian Bersepadu",
            about: "Tentang Kami",
            contact: "Hubungi Kami",
            totalHoldings: "Bilangan Pegangan Pertanian Keseluruhan",
            totalFarmers: "Bilangan Usahawan Tani",
            totalCompanies: "Bilangan Syarikat",
            femaleFarmers: "Usahawan Tani Wanita",
            youngFarmers: "Usahawan Tani Muda",
            seniorFarmers: "⁠⁠Usahawan Tani Warga Emas <br> (>60 tahun)",
            foreignInvolvement: "Penglibatan Warga Asing",
            avgAge: "Purata Umur Usahawan Tani (Tahun)",
            ss1: "(2024)",
            ss2: "(<strong>98.0%</strong> kepada keseluruhan pengusaha pertanian)",
            ss3: "(<strong>2.0%</strong> kepada keseluruhan pengusaha pertanian)",
            ss4: "(<strong>28.7%</strong> kepada Usahawan Tani)",
            ss5: "(<strong>8.2%</strong> kepada Usahawan Tani)",
            ss6: "(<strong>44.6%</strong> kepada Usahawan Tani)",
            ss7: "(<strong>4.9%</strong> kepada Usahawan Tani)",
            ss8: "(2024)"
        }
    };

    function changeLanguage(lang) {
        // ✅ Update text translations
        $("[data-key]").each(function () {
            let key = $(this).attr("data-key");
            if (translations[lang][key]) {
                let textSpan = $(this).find("span:not(.fa)");
                if (textSpan.length > 0) {
                    textSpan.html(translations[lang][key]);
                } else {
                    $(this).html(translations[lang][key]);
                }
            }
        });
    
        // ✅ Store selected language in localStorage
        localStorage.setItem("lang", lang);
    
        // ✅ Update button styles (EN / MY)
        if (lang === "my") {
            $("#myLang").addClass("bg-primary text-white").removeClass("bg-light text-dark");
            $("#enLang").addClass("bg-light text-dark").removeClass("bg-primary text-white");
        } else {
            $("#enLang").addClass("bg-primary text-white").removeClass("bg-light text-dark");
            $("#myLang").addClass("bg-light text-dark").removeClass("bg-primary text-white");
        }
    
        // ✅ Update iframe for the current page
        $("iframe[data-page]").each(function () {
            let newSrc = lang === "my" ? $(this).attr("data-my") : $(this).attr("data-en");
            $(this).attr("src", newSrc);
        });
    }
    
    // ✅ Load stored language on page load
    $(document).ready(function () {
        let storedLang = localStorage.getItem("lang") || "en";
        changeLanguage(storedLang);
    
        $("#enLang, #myLang").click(function (e) {
            e.preventDefault();
            let selectedLang = $(this).attr("id") === "myLang" ? "my" : "en";
            changeLanguage(selectedLang);
        });
    });
      

    // ================= Dark Mode Functionality =================
    function enableDarkMode() {
        $("body").addClass("dark-mode");
        $("#darkModeToggle").prop("checked", true);
        localStorage.setItem("darkMode", "enabled");
    }

    function disableDarkMode() {
        $("body").removeClass("dark-mode");
        $("#darkModeToggle").prop("checked", false);
        localStorage.setItem("darkMode", "disabled");
    }

    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }

    $("#darkModeToggle").change(function () {
        if ($(this).is(":checked")) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

  $(document).ready(function () {
      let currentPath = window.location.pathname.toLowerCase().replace(/\/$/, ""); // Remove trailing slash
      console.log("Current path:", currentPath); // Debugging to see the actual path
  
      // Reset active classes
      $(".navbar-nav .nav-link").removeClass("active");
  
      // ✅ If on Home Page
      if (currentPath === "" || currentPath === "/" || currentPath === "/index") {
          $(".navbar-nav .nav-link[href='index.html']").addClass("active");
      }
  
      // ✅ Highlight the current page in Navbar
      $(".navbar-nav .nav-link").each(function () {
          let menuItem = $(this);
          let menuHref = menuItem.attr("href").toLowerCase().replace(/\/$/, ""); // Remove trailing slash
          console.log("Checking menuHref:", menuHref); // Debugging the href being checked
  
          if (currentPath === menuHref) {
              menuItem.addClass("active");
          }
      });
  
      // ✅ Keep "tanifacts" highlighted for its subpages
      let tanistatsPages = [
          "/tanifacts",             // Exact match for TaniStats
          "/overview_tanistats",    // TaniStats subpage
          "/crops",                 // TaniStats subpage
          "/livestock",             // TaniStats subpage
          "/fisheries",             // TaniStats subpage
          "/aquaculture",           // TaniStats subpage
          "/forest"                 // TaniStats subpage
      ];
  
      // Debugging: log tanistatsPages
      console.log("tanifacts Pages:", tanistatsPages);
  
      // Check if currentPath starts with any of the TaniStats pages
      if (tanistatsPages.some(page => currentPath.startsWith(page))) {
          console.log("tanifacts section detected. Highlighting 'tanifacts' link.");
          
          // Check for the link that corresponds to TaniStats and highlight it
          $(".navbar-nav .nav-link[href*='tanifacts']").addClass("active"); // Highlight "TaniStats"
      }
  });
    


window.chatbaseConfig = {
    chatbotId: "cy2o6ilqRZeNoeiKkVhh8",
  };
  
  window.addEventListener("load", () => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "cy2o6ilqRZeNoeiKkVhh8");
    document.body.appendChild(script);
  });

  $(document).ready(function () {
    // Get today's date and subtract 1 day
    const now = new Date();
    now.setDate(now.getDate() - 1); // backdate by 1 day
  
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
  
    const formattedDate = now.toLocaleDateString('en-GB', options);
  
    // Set text with fixed time
    $('#data-date').text(`Data as of ${formattedDate}, 23:59`);
  });
  

  $(document).ready(function() {
    function adjustCarousel() {
      var width = $(window).width();
      if (width <= 768) {
        // Mobile: 1 article per slide
        $('#artikelCarousel .carousel-item').each(function() {
          $(this).addClass('carousel-item-mobile').removeClass('carousel-item-desktop');
        });
      } else {
        // Desktop: 3 articles per slide
        $('#artikelCarousel .carousel-item').each(function() {
          $(this).addClass('carousel-item-desktop').removeClass('carousel-item-mobile');
        });
      }
    }

    // Adjust carousel layout on page load and window resize
    adjustCarousel();
    $(window).resize(function() {
      adjustCarousel();
    });

    // Initialize Bootstrap carousel
    var myCarousel = new bootstrap.Carousel(document.getElementById('artikelCarousel'), {
      ride: 'carousel',
      interval: 5000,  // Adjust the interval for auto-slide
      touch: true,     // Enable touch gestures
      wrap: true,      // Infinite loop
      pause: 'hover',  // Pause carousel when hovered
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Set the current language (can be dynamic, e.g., based on user preference or browser settings)
    let currentLanguage = 'en';  // Switch to 'my' for Malay
  
    const dataRows = [
      ["bi-clipboard-data", "text-success", "totalHoldings", "1,011,503", "ss1"],
      ["bi-person-badge", "text-success", "totalFarmers", "991,257", "ss2"],
      ["bi-buildings", "text-warning", "totalCompanies", "20,246", "ss3"],
      ["bi-gender-female", "text-danger", "femaleFarmers", "284,894", "ss4"],
      ["bi-gender-ambiguous", "text-secondary", "youngFarmers", "81,579", "ss5"],
      ["bi-person", "text-info", "seniorFarmers", "441,893", "ss6"],
      ["bi-globe2", "text-primary", "foreignInvolvement", "48,212", "ss7"],
      ["bi-bar-chart-line", "text-success", "avgAge", "56.4", "ss8"]
    ];

    const container = document.getElementById("glance-cards-container");
    if (!container) return;
  
    container.innerHTML = ""; // Clear any existing content
  
    dataRows.forEach(([icon, color, labelKey, valueRaw, date], index) => {
      let value = valueRaw.replace(/,/g, "");
  
      // If it's a number (excluding "Years" or other units), format it
      if (value.includes("Years") || value.includes("%") || isNaN(value)) {
        value = valueRaw;
      } else {
        value = parseFloat(value).toLocaleString();
      }
  
      if (value && value.trim() !== "") {
        const card = document.createElement("div");
        card.className = "glance-card col";
        card.innerHTML = `
          <div class="card-content">
              <i class="bi ${icon} ${color} fs-2 mb-3"></i>
              <div class="text-muted small mb-1" data-key="${labelKey}">${translations[currentLanguage][labelKey] || labelKey}</div>
              <div class="fw-bold fs-4">${value}</div>
              <div class="text-muted small" data-key="${date}">${translations[currentLanguage][date] || date}</div>
          </div>
        `;
        container.appendChild(card);
      } else {
        console.log(`Skipping empty value for row ${index}`);
      }
    });
  });
  

})(jQuery);
