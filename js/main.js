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
          headline_text:"📢 Integrated Agricultural Statistical System (TaniStats) Launches New Dashboard! &nbsp;&nbsp;&nbsp; 🌱 Explore TaniStats Today! &nbsp;&nbsp;&nbsp; 🚜 Support Sustainable Agriculture Through Data!",
          home: "Home",
          d_explorer: "TableFlex",
          d_request: "Data Request",
          logo_title:"Integrated Agricultural Statistical System",
          title: "Integrated Agricultural Statistical System (TaniStats):",
          subtitle: "Integrated Data, Sustainable Agriculture, Secured Food Supply",
          description: 'The <strong>Integrated Agricultural Statistical System(TaniStats)</strong> is a centralized digital system that organizes and simplifies agricultural data. It brings together information from different sources, making it easier to monitor, analyze, and plan for a stronger and more sustainable agricultural sector.',
          faq_question_1:"What is TaniStats?",
          body_msagr:"The <strong>Integrated Agricultural Statistical System(TaniStats)</strong> is a centralized data platform that integrates and synchronizes Malaysia’s agricultural data across multiple agencies and institutions. Developed in conjunction with the 2024 Agriculture Census, TaniStats combines census data, administrative records, and real-time agricultural information into a single, unified system.<br><br> By merging various datasets—ranging from farmer demographics, crop production, and land use to supply chain data and market trends—TaniStats eliminates data silos, ensuring accurate, updated, and readily accessible information. This integrated approach enables policymakers, researchers, and industry players to make informed, data-driven decisions that enhance the sector’s productivity, efficiency, and sustainability.",
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
          carousel_subtitle_3:"Strengthening Food Security Through Integrated Agricultural Statistics",
          carousel_subtitle_4:"Leveraging Technology for Efficient Agriculture",
          carousel_subtitle_5:"Driving Sustainability Through Innovation",
          glance_mysagr:"Agriculture at a Glance: Number of Agricultural Holdings",
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
          article_1:"Achievement and Way Forward of Fisheries Subsector (Agrofood)",
          article_2:"Strengthening the Livestock Industry",
          article_3:"Point of View of the National Agrofood Crop Subsector",
          article_date1:"Published date: 1 October 2024",
          article_date2:"Published date: 22 September 2024",
          article_date3:"Published date: 21 September 2024",
          highlight_ts:"TaniStats Highlight",
          highlight_1:"Self Sufficient",
          highlight_2:"Know Your Food",
          highlight_s1:"Malaysia has been importing more rice since the COVID-19 pandemic. But what does this mean for our food security?",
          highlight_s2:"Besides durian, how much do you know about Malaysians’ favourite food?",
          learn_more:"Learn More",
          drop_article:"Article",
          drop_publication:"Publication",
          drop_travelog:"Travelog",
          menu_overview: "Sector Overview",
          menu_crops: "Crops",
          menu_livestock: "Livestock",
          menu_fisheries: "Fisheries",
          menu_aquaculture: "Aquaculture",
          menu_forestry: "Forestry & Logging",
          menu_agro_overview: "AgroChain Overview",
          title_crops: "Crops",
          h5_footer:"DEPARTMENT OF STATISTICS MALAYSIA",
          p_footer:"© 2025 Integrated Agricultural Statistical System",
          about: "About Us",
          contact: "Contact Us",
          reference_tf: "2023 Reference Year",
          totalHoldings: "<strong>Overall</strong>",
          totalFarmers: "<strong>Individual</strong>",
          totalCompanies: "<strong>Establishment</strong>",
          femaleFarmers: "<strong>Female-Owned Individual</strong>",
          youngFarmers: "<strong>Youth-Owned Individual</strong>",
          seniorFarmers: "<strong>Senior-Owned Individual <br> (>60 years)</strong>",
          foreignInvolvement: "<strong>Foreign Individual</strong>",
          avgAge: "<strong>Average Age of Individual <br> (Years)</strong>",
          ss1: "(<strong>2023</strong> Reference Data)",
          ss2: "(<strong>97.9%</strong> of total individual agricultural holdings)",
          ss3: "(<strong>2.1%</strong> of total agricultural establishment)",
          ss4: "(<strong>25.3%</strong> of total individual agricultural holdings)",
          ss5: "(<strong>13.9%</strong> of total individual agricultural holdings)",
          ss6: "(<strong>45.4%</strong> of total individual agricultural holdings)",
          ss7: "(<strong>0.8%</strong> of total individual agricultural holdings)",
          ss8: "(<strong>2023</strong> Reference Data)"


      },
      my: {
          headline_text:"📢 Sistem Statistik Pertanian Bersepadu (TaniStats) Melancarkan Dashboard Baharu! &nbsp;&nbsp;&nbsp; 🌱 Teroka TaniStats Hari Ini! &nbsp;&nbsp;&nbsp; 🚜 Sokong Pertanian Mampan Melalui Data!",
          home: "Utama",
          d_explorer: "TableFlex",
          d_request: "Permintaan Data",
          logo_title:"Sistem Statistik Pertanian Bersepadu",
          title: "Sistem Statistik Pertanian Bersepadu (TaniStats):",
          subtitle: "Data Bersepadu, Pertanian Mampan, Bekalan Makanan Terjamin",
          description: "<strong>Sistem Statistik Pertanian Bersepadu (TaniStats)</strong> ialah sistem digital berpusat yang mengatur dan memudahkan data pertanian. Ia mengumpulkan maklumat dari pelbagai sumber, menjadikannya lebih mudah untuk memantau, menganalisis, dan merancang sektor pertanian yang lebih kukuh dan mampan.",
          faq_question_1:"Apa itu TaniStats?",
          body_msagr:"<strong>Sistem Statistik Pertanian Bersepadu (TaniStats)</strong> ialah satu platform data berpusat yang mengintegrasikan dan menyelaraskan maklumat pertanian Malaysia merentasi pelbagai agensi kerajaan. Sistem ini dibangunkan berasaskan dapatan Banci Pertanian 2024 serta menggabungkan pelbagai maklumat rasmi sektor pertanian ke dalam satu sistem bersepadu. <br><br> Dengan menghimpunkan pelbagai set data – termasuk profil petani, hasil tanaman, penggunaan tanah, rantaian bekalan, dan trend pasaran – TaniStats menghapuskan silo maklumat dan memastikan data yang lebih tepat, terkini, dan mudah diakses. Melalui pendekatan ini, TaniStats membolehkan penggubal dasar, penyelidik, dan pemain industri membuat keputusan lebih bijak berasaskan data yang kukuh, sekaligus mempertingkatkan produktiviti, kecekapan, dan daya tahan sektor pertanian.",
          faq_question_2:"Mengapa TaniStats dibangunkan?",
          q2_a:"Selama bertahun-tahun, sektor pertanian Malaysia berdepan cabaran data yang tidak seragam dan tidak berpusat. Kali terakhir Banci Pertanian dijalankan adalah pada 2005, menyebabkan jurang maklumat yang menyukarkan perancangan dasar dan pengagihan sumber secara berkesan. Selain itu, data pertanian yang dikendalikan oleh pelbagai agensi sering digunakan dan diurus secara silo, menjadikan usaha menyusun strategi pembangunan mampan lebih mencabar. <br> Untuk mengatasi cabaran ini, TaniStats dibangunkan dengan objektif utama berikut:",
          q2_b:"Mengintegrasikan Data – Menyatukan pelbagai sumber data pertanian ke dalam satu platform yang mudah diakses.",
          q2_c:"Memastikan Ketepatan & Ketepatan Masa Data – Menyediakan statistik masa nyata yang membolehkan keputusan lebih berinformasi.",
          q2_d:"Memperkukuh Sekuriti Makanan – Memantau bekalan makanan negara, trend pengeluaran, dan mengenal pasti risiko berpotensi lebih awal.",
          q2_e:"Mengoptimumkan Pengurusan Sumber – Memastikan pengagihan subsidi, bantuan kewangan, dan program sokongan pertanian dilakukan secara bersasar.",
          q2_f:"Menyokong Pertanian Lestari – Menggunakan analisis data bagi membimbing amalan pertanian yang lebih mesra alam, cekap, dan berdaya tahan.",
          faq_question_3:"Siapa yang Boleh Mendapat Manfaat daripada TaniStats?",
          q3_a:"Ketiadaan data yang tepat, komprehensif, dan terkini merupakan salah satu faktor yang menyukarkan usaha menyokong kemajuan sektor pertanian Malaysia. Pembangunan TaniStats sebagai pusat data sehenti membantu memperkukuh pengurusan dan perancangan sektor ini secara menyeluruh.<br> Berikut adalah sebab utama mengapa TaniStats menjadi pemangkin perubahan dalam landskap pertanian negara:",
          q3_b:"Pemerkasaan Dasar dan Perancangan:<br> Dengan TaniStats, pembuat dasar boleh membuat keputusan berdasarkan data yang tepat dan menyeluruh, ke arah pertanian yang lebih mampan dan berdaya saing.",
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
          carousel_subtitle_3:"Memperkasa Keterjaminan Makanan Melalui Integrasi Statistik Pertanian",
          carousel_subtitle_4:"Memanfaatkan Teknologi untuk Pertanian yang Cekap",
          carousel_subtitle_5:"Mendorong Kelestarian Melalui Inovasi",
          glance_mysagr:"Pertanian Sepintas Lalu: Bilangan Pegangan Pertanian",
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
          article_1:"Pencapaian dan Hala Tuju Subsektor Perikanan (Agromakanan)",
          article_2:"Pengukuhan Sektor Industri Ternakan",
          article_3:"Sudut Pandang Subsektor Tanaman Agromakanan Negara",
          article_date1:"Tarikh diterbitkan: 1 Oktober 2024",
          article_date2:"Tarikh diterbitkan: 22 September 2024",
          article_date3:"Tarikh diterbitkan: 21 September 2024",
          highlight_ts:"Sorotan TaniStats",
          highlight_1:"Keterjaminan Makanan",
          highlight_2:"Kenali Makanan Anda",
          highlight_s1:"Import beras Malaysia semakin meningkat sejak pandemik COVID-19. Apakah kesannya kepada keterjaminan makanan negara?",
          highlight_s2:"Selain durian, apa lagi yang anda tahu tentang makanan kegemaran rakyat Malaysia?",
          learn_more:"Baca Lagi",
          drop_article:"Artikel",
          drop_publication:"Penerbitan",
          drop_travelog:"Travelog",
          menu_overview: "Tinjauan Sektor",
          menu_crops: "Tanaman",
          menu_livestock: "Ternakan",
          menu_fisheries: "Perikanan",
          menu_aquaculture: "Akuakultur",
          menu_forestry: "Perhutanan & Pembalakan",
          menu_agro_overview: "AgroChain Overview",
          title_crops: "Tanaman",
          h5_footer:"JABATAN PERANGKAAN MALAYSIA",
          p_footer:"© 2025 Sistem Statistik Pertanian Bersepadu",
          about: "Tentang Kami",
          contact: "Hubungi Kami",
          reference_tf: "Tahun Rujukan 2023",
          totalHoldings: "<strong>Keseluruhan</strong>",
          totalFarmers: "<strong>Individu</strong>",
          totalCompanies: "<strong>Pertubuhan</strong>",
          femaleFarmers: "<strong>Individu Milikan Wanita</strong>",
          youngFarmers: "<strong>Individu Milikan Belia</strong>",
          seniorFarmers: "⁠⁠<strong>Individu Milikan Warga Emas <br> (>60 tahun)</strong>",
          foreignInvolvement: "<strong>Penglibatan Warga Asing</strong>",
          avgAge: "<strong>Purata Umur Individu <br> (Tahun)</strong>",
          ss1: "(Data Rujukan <strong>2023</strong>)",
          ss2: "(<strong>97.9%</strong> daripada jumlah pegangan pertanian individu)",
          ss3: "(<strong>2.1%</strong> daripada jumlah pegangan pertanian pertubuhan)",
          ss4: "(<strong>25.3%</strong> daripada jumlah pegangan pertanian individu)",
          ss5: "(<strong>13.9%</strong> daripada jumlah pegangan pertanian individu)",
          ss6: "(<strong>45.4%</strong> daripada jumlah pegangan pertanian individu)",
          ss7: "(<strong>0.8%</strong> daripada jumlah pegangan pertanian individu)",
          ss8: "(Data Rujukan <strong>2023</strong>)"
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

      // ✅ Update article PDF links based on selected language
      $("a[data-my][data-en]").each(function () {
          let newHref = lang === "my" ? $(this).attr("data-my") : $(this).attr("data-en");
          $(this).attr("href", newHref);
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


    // On window resize, adjust iframe src and height
    $(window).resize(function () {
      let currentLang = localStorage.getItem("lang") || "en";
      switchIframeSrcForMobile(currentLang);
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

  // $(document).ready(function () {
  //   let currentPath = window.location.pathname.toLowerCase().replace(/\/$/, ""); // Remove trailing slash
  //   console.log("Current path:", currentPath); // Debugging

  //   // Reset active classes on all nav links
  //   $(".navbar-nav .nav-link").removeClass("active");

  //   // Highlight exact page links
  //   $(".navbar-nav .nav-link").each(function () {
  //     let menuItem = $(this);
  //     let menuHref = menuItem.attr("href");
  //     if (!menuHref) return; // Skip if no href
  //     menuHref = menuHref.toLowerCase().replace(/\/$/, "");
  //     console.log("Checking menuHref:", menuHref);

  //     // If current path exactly matches link href, highlight it
  //     if (currentPath === menuHref) {
  //       menuItem.addClass("active");
  //     }
  //   });

  //   // Define pages that belong to CitraTani dropdown
  //   let citraTaniPages = [
  //     "/tanifacts",
  //     "/overview_tanifacts",
  //     "/crops",
  //     "/livestock",
  //     "/fisheries",
  //     "/aquaculture",
  //     "/forest",
  //     "/agroprice",
  //     "/agrochain",
  //     "/myfoodstats"

  //   ];

  //   // If currentPath starts with any of these, highlight the dropdown toggle (#tanifactsDropdown)
  //   if (citraTaniPages.some(page => currentPath.startsWith(page))) {
  //     console.log("CitraTani dropdown active");
  //     $("#tanifactsDropdown").addClass("active");
  //   }
  // });

  $(document).ready(function () {
    // Normalize current path: lowercase, strip trailing slash and .html
    let currentPath = window.location.pathname.toLowerCase()
      .replace(/\/$/, "")         // remove trailing slash
      .replace(/\.html$/, "");    // remove .html from end
  
    console.log("Current path:", currentPath);
  
    $(".navbar-nav .nav-link").removeClass("active");
  
    $(".navbar-nav .nav-link").each(function () {
      let menuItem = $(this);
      let menuHref = menuItem.attr("href");
      if (!menuHref) return;
  
      // Skip if it's the external caknaTani link
      if (menuHref.includes("caknatani")) return;
  
      // Normalize href
      menuHref = menuHref.toLowerCase()
        .replace(/\/$/, "")
        .replace(/\.html$/, "");
  
      console.log("Checking menuHref:", menuHref);
  
      if (currentPath.endsWith(menuHref)) {
        menuItem.addClass("active");
      }
    });
  
    // Optional: dropdown highlight
    let citraTaniPages = [
      "tanifacts",
      "overview_tanifacts",
      "crops",
      "livestock",
      "fisheries",
      "aquaculture",
      "forest",
      "agroprice",
      "agrochain",
      "myfoodstats"
    ];
  
    if (citraTaniPages.some(page => currentPath.endsWith(page))) {
      $("#tanifactsDropdown").addClass("active");
    }
  
    // Remove focus from caknaTani after click
    $('a.nav-link[href*="caknatani"]').on('click', function () {
      $(this).blur();
    });
  });



   (function () {
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
  
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        },
      });
    }
  
    const onLoad = function () {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "cy2o6ilqRZeNoeiKkVhh8";
      script.domain = "www.chatbase.co";
      document.body.appendChild(script);
    };
  
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
  })(); 

// window.copilotChatConfig = {
//   buttonSrc: "https://backend.chatbase.co/storage/v1/object/public/chat-icons/4c5502be-6173-4a25-affc-11a7c7f4a6b6/NayFwE8gl8kgDuXaZoh3n.jpg",
//   iframeSrc: "https://copilotstudio.microsoft.com/environments/Default-373e90d2-d9a3-43b5-832e-c8e9847a79f8/bots/cr145_taniStatsChatbot/webchat?__version__=2",
// };

// window.addEventListener("load", () => {
//   const copilotIframe = document.createElement("iframe");
//   copilotIframe.setAttribute("id", "chatbot-container");
//   copilotIframe.setAttribute("src", window.copilotChatConfig.iframeSrc);
//   copilotIframe.setAttribute("frameborder", "0");
//   document.body.appendChild(copilotIframe);

//   const copilotButtonImage = document.createElement("img");
//   copilotButtonImage.setAttribute("src", window.copilotChatConfig.buttonSrc);
//   copilotButtonImage.setAttribute("alt", "Chatbot");

//   const copilotButton = document.createElement("button");
//   copilotButton.setAttribute("id", "chatbot-toggle");
//   copilotButton.appendChild(copilotButtonImage);

//   copilotButton.addEventListener("click", () => {
//     copilotIframe.style.display = copilotIframe.style.display === "none" ? "block" : "none";
//   });

//   document.body.appendChild(copilotButton);
// });



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
    ["bi-clipboard-data", "text-success", "totalHoldings", "1,030,020", "ss1"],
    ["bi-person-badge", "text-success", "totalFarmers", "1,008,829", "ss2"],
    ["bi-buildings", "text-warning", "totalCompanies", "21,191", "ss3"],
    ["bi-gender-female", "text-danger", "femaleFarmers", "255,690", "ss4"],
    ["bi-gender-ambiguous", "text-secondary", "youngFarmers", "142,888", "ss5"],
    ["bi-person", "text-info", "seniorFarmers", "458,263", "ss6"],
    ["bi-globe2", "text-primary", "foreignInvolvement", "8,301", "ss7"],
    ["bi-bar-chart-line", "text-success", "avgAge", "56.5", "ss8"]
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


(function($) {

"use strict";

var fullHeight = function() {

  $('.js-fullheight').css('height', $(window).height());
  $(window).resize(function(){
    $('.js-fullheight').css('height', $(window).height());
  });

};
fullHeight();

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

})(jQuery);

$(document).ready(function () {
function enableHoverDropdown() {
  if (window.innerWidth >= 992) { // Only on desktop
    $('.hover-dropdown').hover(
      function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
      },
      function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
      }
    );
  }
}

enableHoverDropdown();

// Reapply on resize
$(window).resize(function () {
  $('.hover-dropdown').off('mouseenter mouseleave'); // Remove previous handlers
  enableHoverDropdown();
});
});

document.addEventListener("DOMContentLoaded", function () {
// Get current path without trailing slash (e.g. /tanifacts or /tanifacts/)
let path = window.location.pathname.toLowerCase();
if (path.endsWith('/')) {
  path = path.slice(0, -1);
}

// Define paths to check (no .html, because deployed URLs don't have them)
const pathsToMatch = ["/tanifacts", "/agroprice", "/myfoodstats", "/agrochain"];

// Check if current path matches any defined path exactly
const isActive = pathsToMatch.includes(path);

if (isActive) {
  const dropdownLink = document.getElementById("tanifactsDropdown");
  if (dropdownLink) {
    dropdownLink.classList.add("active");
  }
}
});


document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('scrollToTopBtn');

  if (!btn) return; // Prevent error if element doesn't exist

  // Scroll to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show only after scrolling down a bit
  window.addEventListener('scroll', () => {
    btn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
  });

  // Initially hidden
  btn.style.display = 'none';
});

