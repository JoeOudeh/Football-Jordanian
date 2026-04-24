const PLAYERS = [
  {
    id: 1, name: "Baha' Faisal", nameAr: "بهاء فيصل",
    fullName: "Baha' Faisal Al-Awamleh", fullNameAr: "بهاء فيصل العوملة",
    position: "Forward", positionAr: "مهاجم",
    age: 28, club: "Al-Faisaly SC", clubAr: "الفيصلي",
    nationality: "Jordanian", nationalityAr: "أردني",
    image: "image/player_1.png", number: 9,
    stats: { goals: 18, assists: 7, matches: 26, rating: 7.8 },
    bio: "One of Jordan's most exciting attackers, Baha' Faisal has been a consistent goal scorer in the Jordanian Pro League. Known for his blistering pace and clinical finishing, he made his senior debut at 19.",
    bioAr: "يُعدّ بهاء فيصل واحداً من أكثر المهاجمين إثارةً في الأردن، وقد كان مسجلاً رئيسياً في الدوري الأردني المحترف. عُرف بسرعته الخاطفة وتهديفه الدقيق، إذ بدأ مسيرته الاحترافية في سن التاسعة عشرة وأصبح ركيزةً أساسية في ناديه والمنتخب الوطني.",
    achievements: ["Jordan Pro League Top Scorer 2022", "Jordan National Team Regular"]
  },
  {
    id: 2, name: "Musa Al-Taamari", nameAr: "موسى التعمري",
    fullName: "Musa Ahmad Al-Taamari", fullNameAr: "موسى أحمد التعمري",
    position: "Midfielder", positionAr: "لاعب وسط",
    age: 25, club: "Montpellier HSC", clubAr: "مونبيليه الفرنسي",
    nationality: "Jordanian", nationalityAr: "أردني",
    image: "image/player_2.png", number: 10,
    stats: { goals: 9, assists: 14, matches: 30, rating: 8.1 },
    bio: "Musa Al-Taamari is widely considered one of the best Jordanian players of his generation. Currently playing in Ligue 1 for Montpellier HSC, he was a key figure in Jordan's historic 2023 AFC Asian Cup run.",
    bioAr: "يُعدّ موسى التعمري واحداً من أفضل اللاعبين الأردنيين في جيله. يلعب حالياً في الدوري الفرنسي الأول مع مونبيليه، وكان عاملاً محورياً في مسيرة الأردن التاريخية إلى نهائي كأس آسيا 2023. يتميز بإبداعه ورؤيته الاستثنائية في الملعب.",
    achievements: ["AFC Asian Cup 2023 Runner-Up", "Ligue 1 Player", "Jordan PFA Player of the Year"]
  },
  {
    id: 3, name: "Yazeed Abo Laila", nameAr: "يزيد أبو ليلى",
    fullName: "Yazeed Mousa Abo Laila", fullNameAr: "يزيد موسى أبو ليلى",
    position: "Goalkeeper", positionAr: "حارس مرمى",
    age: 32, club: "Al-Wehdat SC", clubAr: "الوحدات",
    nationality: "Jordanian", nationalityAr: "أردني",
    image: "image/player_3.png", number: 1,
    stats: { goals: 0, assists: 0, matches: 24, rating: 7.6 },
    bio: "Yazeed Abo Laila is a veteran shot-stopper who has held the Jordanian national team goalkeeping position for years. Renowned for his commanding presence in goal and exceptional penalty-saving ability.",
    bioAr: "يزيد أبو ليلى حارس مرمى محنّك حافظ على مرمى المنتخب الأردني لسنوات طوال. يُشتهر بحضوره الطاغي في المرمى وردوده السريعة وقدرته الاستثنائية على التصدي للركلات الترجيحية. قائد حقيقي في غرفة الملابس.",
    achievements: ["Jordan Pro League Championship 2021", "Best Goalkeeper Award 2020", "100+ National Team Appearances"]
  },
  {
    id: 4, name: "Hamza Al-Dardour", nameAr: "حمزة الدرداور",
    fullName: "Hamza Issam Al-Dardour", fullNameAr: "حمزة عصام الدرداور",
    position: "Forward", positionAr: "مهاجم",
    age: 30, club: "Al-Ahli SC", clubAr: "الأهلي",
    nationality: "Jordanian", nationalityAr: "أردني",
    image: "image/player_4.png", number: 7,
    stats: { goals: 22, assists: 5, matches: 28, rating: 7.9 },
    bio: "Hamza Al-Dardour is Jordan's all-time top scorer in international football and a legend in the Jordanian Pro League. His ability to score from anywhere makes him a constant threat.",
    bioAr: "حمزة الدرداور هو الهداف التاريخي الأول للمنتخب الأردني وأسطورة في الدوري الأردني المحترف. قدرته على التهديف من أي مكان في الملعب تجعله تهديداً دائماً، ولعب دوراً محورياً في مسيرة الأردن بكأس آسيا 2023.",
    achievements: ["AFC Asian Cup 2023 Top Scorer", "Jordan All-Time Top Scorer", "Multiple League Championships"]
  },
  {
    id: 5, name: "Ahmad Hayel", nameAr: "أحمد هايل",
    fullName: "Ahmad Nawaf Hayel", fullNameAr: "أحمد نواف هايل",
    position: "Defender", positionAr: "مدافع",
    age: 27, club: "Al-Faisaly SC", clubAr: "الفيصلي",
    nationality: "Jordanian", nationalityAr: "أردني",
    image: "image/player_5.png", number: 5,
    stats: { goals: 3, assists: 8, matches: 27, rating: 7.4 },
    bio: "Ahmad Hayel is a versatile left-back known for his attacking runs and defensive composure. A key component of the Jordanian national team's back line.",
    bioAr: "أحمد هايل ظهير أيسر متعدد المواهب، يتميز بهجماته الارتدادية وحنكته الدفاعية. ركيزة أساسية في دفاع المنتخب الوطني الأردني، وقدرته على المساهمة هجوماً مع الحفاظ على التنظيم الدفاعي تجعله لاعباً لا غنى عنه.",
    achievements: ["Jordan Pro League Best Defender 2023", "National Team Regular"]
  },
  {
    id: 6, name: "Noor Al-Rawabdeh", nameAr: "نور الراوبدة",
    fullName: "Noor Khaled Al-Rawabdeh", fullNameAr: "نور خالد الراوبدة",
    position: "Midfielder", positionAr: "لاعب وسط",
    age: 23, club: "Al-Wehdat SC", clubAr: "الوحدات",
    nationality: "Jordanian", nationalityAr: "أردني",
    image: "image/player_1.png", number: 8,
    stats: { goals: 5, assists: 11, matches: 25, rating: 7.5 },
    bio: "The youngest on this list, Noor Al-Rawabdeh is considered Jordan's brightest young talent. His technical ability and football intelligence belie his young age.",
    bioAr: "أصغر لاعب في هذه القائمة، نور الراوبدة يُعدّ أبرز المواهب الشابة الأردنية. مهارته التقنية وذكاؤه الكروي يتجاوزان عمره الزمني، وبات مقيتاً أساسياً في الدوري يجذب اهتمام أندية عالمية.",
    achievements: ["Jordan Young Player of the Year 2023", "Rising Star Award"]
  }
];

const CLUBS = [
  {
    id: 1, name: "Al-Faisaly SC", nameAr: "نادي الفيصلي",
    city: "Amman", cityAr: "عمّان", founded: 1932,
    emoji: "🔴", bgGradient: "linear-gradient(135deg, #CE1126, #8B0000)",
    history: "Al-Faisaly Sporting Club is one of the most storied football clubs in Jordan and arguably the most successful. Founded in 1932, they are a founding member of the Jordanian football scene and have a fierce rivalry with Al-Wehdat.",
    historyAr: "نادي الفيصلي الرياضي هو أحد أكثر الأندية شهرةً في الأردن وبلا شك الأكثر نجاحاً. تأسس عام 1932 وهو من مؤسسي المشهد الكروي الأردني، ويخوض منافسة شرسة مع نادي الوحدات في أعظم كلاسيكو أردني. يتمتع بقاعدة جماهيرية ضخمة في جميع أرجاء المملكة.",
    achievements: ["33x Jordan Premier League Champions", "8x Jordan FA Cup Winners", "AFC Champions League"],
    achievementsAr: ["33x بطل الدوري الأردني", "8x كأس الأردن", "دوري أبطال آسيا"],
    status: "Currently competing in the Jordan Pro League First Division as one of the title contenders.",
    statusAr: "يتنافس حالياً في الدوري الأردني المحترف الممتاز كأحد المرشحين الرئيسيين للقب.",
    trophies: ["🏆 33x League Champions", "🥇 8x FA Cup", "🌍 AFC Participant"],
    trophiesAr: ["🏆 33x بطل الدوري", "🥇 8x كأس الأردن", "🌍 دوري أبطال آسيا"]
  },
  {
    id: 2, name: "Al-Wehdat SC", nameAr: "نادي الوحدات",
    city: "Amman", cityAr: "عمّان", founded: 1956,
    emoji: "🟢", bgGradient: "linear-gradient(135deg, #007A3D, #004D27)",
    history: "Al-Wehdat SC was founded in 1956 and represents the Wehdat refugee camp in Amman. The club grew to become one of Jordan's most successful and widely followed clubs globally among the Palestinian diaspora.",
    historyAr: "تأسس نادي الوحدات عام 1956 ويمثل مخيم الوحدات في عمّان. نما النادي ليصبح أحد أكثر الأندية نجاحاً وشهرةً في صفوف الجاليات الفلسطينية حول العالم. ثقافة الجماهير المتحمسة لا مثيل لها على المستوى الأردني.",
    achievements: ["22x Jordan Premier League Champions", "7x Jordan FA Cup Winners", "Asian Club Championship"],
    achievementsAr: ["22x بطل الدوري الأردني", "7x كأس الأردن", "بطل آسيا للأندية"],
    status: "Active in the Jordan Pro League and consistently competing for the championship.",
    statusAr: "نشط في الدوري الأردني المحترف ويتنافس باستمرار على لقب البطولة في كل موسم.",
    trophies: ["🏆 22x League Champions", "🥇 7x FA Cup", "🌍 Asian Club Champion"],
    trophiesAr: ["🏆 22x بطل الدوري", "🥇 7x كأس الأردن", "🌍 بطل آسيا للأندية"]
  },
  {
    id: 3, name: "Al-Jazeera Club", nameAr: "نادي الجزيرة",
    city: "Amman", cityAr: "عمّان", founded: 1945,
    emoji: "🔵", bgGradient: "linear-gradient(135deg, #003087, #001f5b)",
    history: "Al-Jazeera Club, founded in 1945, is one of Jordan's oldest and most respected football institutions. The 'Blue Wave' have had periods of great success in Jordanian football.",
    historyAr: "نادي الجزيرة، المؤسس عام 1945، هو أحد أقدم وأعرق المؤسسات الكروية الأردنية. 'الموجة الزرقاء' كما يُعرف لدى الجماهير، حقق فترات مجد رائعة في كرة القدم الأردنية ويبقى ركيزةً في المشهد الكروي بالعاصمة.",
    achievements: ["6x Jordan Premier League Champions", "5x FA Cup Winners", "Regional Competition"],
    achievementsAr: ["6x بطل الدوري الأردني", "5x كأس الأردن", "منافسات إقليمية"],
    status: "Competing in the First Division seeking to return to their glory days.",
    statusAr: "يتنافس في الدوري الأول سعياً للعودة إلى أيام مجده والتحقق من مكانته في قمة الكرة الأردنية.",
    trophies: ["🏆 6x League Champions", "🥇 5x FA Cup", "🌟 Historic Club"],
    trophiesAr: ["🏆 6x بطل الدوري", "🥇 5x كأس الأردن", "🌟 نادٍ تاريخي"]
  },
  {
    id: 4, name: "Shabab Al-Ordon", nameAr: "شباب الأردن",
    city: "Amman", cityAr: "عمّان", founded: 1970,
    emoji: "🟡", bgGradient: "linear-gradient(135deg, #F59E0B, #B45309)",
    history: "Shabab Al-Ordon Club, formed in 1970, emerged as a major force in Jordanian football in the 1980s and 90s. Known for nurturing young Jordanian talent.",
    historyAr: "نادي شباب الأردن، المؤسس عام 1970، برز كقوة رئيسية في الثمانينيات والتسعينيات. يُعرف بتطوير المواهب الأردنية الشابة ولديه سجل مشرف في تخريج لاعبين للمنتخب الوطني عبر أكاديمياته المتميزة.",
    achievements: ["Jordan FA Cup Winners", "Asia Champions League Qualifier", "Academy Award"],
    achievementsAr: ["كأس الأردن", "المؤهل لدوري أبطال آسيا", "جائزة الأكاديمية"],
    status: "Actively competing in the Jordan Pro League with strong youth development focus.",
    statusAr: "يتنافس بنشاط في الدوري الأردني المحترف مع تركيز قوي على تطوير كرة قدم الشباب.",
    trophies: ["🥇 FA Cup Winners", "🌍 Asia Qualifier", "🌟 Youth Champions"],
    trophiesAr: ["🥇 كأس الأردن", "🌍 مؤهل آسيا", "🌟 بطل الشباب"]
  },
  {
    id: 5, name: "Al-Ramtha SC", nameAr: "نادي الرمثا",
    city: "Al-Ramtha", cityAr: "الرمثا", founded: 1943,
    emoji: "🟤", bgGradient: "linear-gradient(135deg, #92400E, #78350F)",
    history: "Al-Ramtha Sporting Club from the northern city of Al-Ramtha is one of the oldest clubs outside the capital. Founded in 1943, they represent the northern region of Jordan with pride.",
    historyAr: "نادي الرمثا الرياضي من مدينة الرمثا الشمالية هو أحد أقدم الأندية خارج العاصمة. تأسس عام 1943 ويمثل المنطقة الشمالية من الأردن بفخر، محققاً نجاحات على المستويين المحلي والآسيوي.",
    achievements: ["Jordan League Champions", "3x FA Cup", "AFC Champions League Group Stage"],
    achievementsAr: ["بطل الدوري الأردني", "3x كأس الأردن", "المرحلة الجماعية دوري أبطال آسيا"],
    status: "One of the few clubs outside Amman competing consistently at the top level.",
    statusAr: "أحد الأندية القليلة خارج عمّان التي تتنافس باستمرار في قمة الدوري الأردني المحترف.",
    trophies: ["🏆 League Champions", "🥇 3x FA Cup", "🌍 AFC Group Stage"],
    trophiesAr: ["🏆 بطل الدوري", "🥇 3x كأس الأردن", "🌍 المرحلة الجماعية"]
  },
  {
    id: 6, name: "Al-Hussein SC", nameAr: "نادي الحسين",
    city: "Irbid", cityAr: "إربد", founded: 1964,
    emoji: "🟣", bgGradient: "linear-gradient(135deg, #7C3AED, #5B21B6)",
    history: "Al-Hussein SC from Irbid, the second largest city in Jordan, has been a significant representation of northern Jordanian football. Named in honor of the late King Hussein.",
    historyAr: "نادي الحسين من مدينة إربد، ثاني أكبر مدن الأردن، يمثل كرة القدم في الشمال الأردني باقتدار. سُمّي تخليداً لذكرى المغفور له الملك الحسين، ويحمل النادي أهمية تاريخية رمزية تتجاوز حدود الرياضة.",
    achievements: ["Jordan League Runner-Up", "FA Cup Finalist", "Northern Region Champions"],
    achievementsAr: ["وصيف الدوري الأردني", "المتأهل لنهائي كأس الأردن", "بطل منطقة الشمال"],
    status: "Competing to bring the league title to northern Jordan once again.",
    statusAr: "يسعى لإعادة كأس الدوري إلى شمال الأردن مجدداً وإثبات قوة الكرة الشمالية.",
    trophies: ["🥈 League Runner-Up", "🥇 FA Cup Finalist", "🌟 Northern Champs"],
    trophiesAr: ["🥈 وصيف الدوري", "🥇 متأهل نهائي الكأس", "🌟 بطل الشمال"]
  }
];

const STADIUMS = [
  {
    name: "King Abdullah II International Stadium", nameAr: "استاد الملك عبدالله الثاني الدولي",
    capacity: 25000, location: "Amman, Jordan", locationAr: "عمّان، الأردن",
    emoji: "🏟️",
    description: "The largest stadium in Jordan and the home of the Jordan national football team. Located in Amman, it has hosted numerous AFC qualifiers and international friendlies and is considered the fortress of Jordanian football.",
    descriptionAr: "أكبر ملعب في الأردن ومقر المنتخب الوطني لكرة القدم. يقع في عمّان وقد استضاف العديد من مباريات التأهل الآسيوية والمباريات الودية الدولية، ويُعدّ معقل الكرة الأردنية وقد تم تجديده وفق أحدث المعايير.",
    openedYear: 1999, surface: "Natural Grass", surfaceAr: "عشب طبيعي",
    hostClub: "Jordan National Team", hostClubAr: "المنتخب الوطني الأردني",
    capacityPercent: 100
  },
  {
    name: "Prince Mohammed Stadium", nameAr: "استاد الأمير محمد",
    capacity: 17000, location: "Zarqa, Jordan", locationAr: "الزرقاء، الأردن",
    emoji: "⚽",
    description: "One of the most important multi-purpose stadiums in Jordan, located in the industrial city of Zarqa. The stadium has a rich history hosting domestic league matches and has been the home ground for several top Jordanian clubs.",
    descriptionAr: "أحد أهم الملاعب متعددة الأغراض في الأردن، يقع في مدينة الزرقاء الصناعية. للملعب تاريخ عريق في استضافة مباريات الدوري المحلي وكان ملعباً لعدة أندية أردنية كبرى على مر السنين.",
    openedYear: 1982, surface: "Natural Grass", surfaceAr: "عشب طبيعي",
    hostClub: "Al-Ahli SC", hostClubAr: "النادي الأهلي",
    capacityPercent: 68
  },
  {
    name: "King Hussein Sports City", nameAr: "مدينة الملك حسين الرياضية",
    capacity: 13000, location: "Amman, Jordan", locationAr: "عمّان، الأردن",
    emoji: "🏟️",
    description: "A premier sports complex in western Amman featuring a modern football stadium surrounded by extensive sporting facilities. It serves as home stadium for multiple Amman-based clubs.",
    descriptionAr: "مجمع رياضي متميز في غرب عمّان، يضم استاداً حديثاً للكرة تحيط به مرافق رياضية شاملة. يخدم عدة أندية في العاصمة وقد تم تحديثه وتحسين مرافقه للمشجعين.",
    openedYear: 1988, surface: "Artificial Turf", surfaceAr: "عشب صناعي",
    hostClub: "Al-Jazeera Club", hostClubAr: "نادي الجزيرة",
    capacityPercent: 52
  },
  {
    name: "Al-Faisaly Al-Wehdat Stadium", nameAr: "استاد الفيصلي والوحدات",
    capacity: 15000, location: "Amman, Jordan", locationAr: "عمّان، الأردن",
    emoji: "⚽",
    description: "One of the most atmospheric stadiums in Jordan, known for hosting the fiercely contested El Clasico of Jordanian football between Al-Faisaly and Al-Wehdat. The partisan atmosphere on derby day is unmatched.",
    descriptionAr: "من أكثر الملاعب حيويةً في الأردن، يشتهر باستضافة الكلاسيكو الأردني الأشرس بين الفيصلي والوحدات. الأجواء الجماهيرية المشحونة في أيام المباريات الكبرى تجعله بيئة استثنائية لا تُنسى.",
    openedYear: 1975, surface: "Natural Grass", surfaceAr: "عشب طبيعي",
    hostClub: "Al-Faisaly & Al-Wehdat", hostClubAr: "الفيصلي والوحدات",
    capacityPercent: 60
  },
  {
    name: "Irbid International Stadium", nameAr: "استاد إربد الدولي",
    capacity: 10000, location: "Irbid, Jordan", locationAr: "إربد، الأردن",
    emoji: "🏟️",
    description: "Serving the bustling northern city of Irbid, this stadium is the hub of northern Jordanian football. Home to Al-Hussein SC, it has undergone recent upgrades to improve its infrastructure.",
    descriptionAr: "يخدم مدينة إربد النابضة بالحياة في الشمال، وهو مركز الثقل الكروي في شمال الأردن. الملعب الرئيسي لنادي الحسين، تم تحديثه مؤخراً لتحسين بنيته التحتية وتجربة المشجعين.",
    openedYear: 1995, surface: "Natural Grass", surfaceAr: "عشب طبيعي",
    hostClub: "Al-Hussein SC", hostClubAr: "نادي الحسين",
    capacityPercent: 40
  }
];

const STANDINGS = [
  { pos:1,  name:"Al-Faisaly SC",       nameAr:"الفيصلي",         city:"Amman",     cityAr:"عمّان",    emoji:"🔴", pl:26, w:18, d:5,  l:3,  gf:52, ga:22, pts:59, form:["W","W","W","D","W"] },
  { pos:2,  name:"Al-Wehdat SC",        nameAr:"الوحدات",         city:"Amman",     cityAr:"عمّان",    emoji:"🟢", pl:26, w:17, d:5,  l:4,  gf:49, ga:24, pts:56, form:["W","D","W","W","L"] },
  { pos:3,  name:"Al-Ramtha SC",        nameAr:"الرمثا",          city:"Al-Ramtha", cityAr:"الرمثا",   emoji:"🟤", pl:26, w:14, d:6,  l:6,  gf:40, ga:29, pts:48, form:["W","W","D","L","W"] },
  { pos:4,  name:"Al-Hussein SC",       nameAr:"الحسين",          city:"Irbid",     cityAr:"إربد",     emoji:"🟣", pl:26, w:12, d:7,  l:7,  gf:38, ga:31, pts:43, form:["D","W","D","W","D"] },
  { pos:5,  name:"Shabab Al-Ordon",     nameAr:"شباب الأردن",     city:"Amman",     cityAr:"عمّان",    emoji:"🟡", pl:26, w:11, d:5,  l:10, gf:35, ga:35, pts:38, form:["L","W","W","D","L"] },
  { pos:6,  name:"Al-Jazeera Club",     nameAr:"الجزيرة",         city:"Amman",     cityAr:"عمّان",    emoji:"🔵", pl:26, w:10, d:7,  l:9,  gf:33, ga:34, pts:37, form:["W","L","D","W","L"] },
  { pos:7,  name:"Al-Ahli SC",          nameAr:"الأهلي",          city:"Amman",     cityAr:"عمّان",    emoji:"⚪", pl:26, w:9,  d:8,  l:9,  gf:30, ga:32, pts:35, form:["D","D","W","L","D"] },
  { pos:8,  name:"Ittihad Al-Ramtha",   nameAr:"اتحاد الرمثا",    city:"Al-Ramtha", cityAr:"الرمثا",   emoji:"🟠", pl:26, w:9,  d:5,  l:12, gf:28, ga:38, pts:32, form:["L","L","W","D","W"] },
  { pos:9,  name:"Al-Jazira SC",        nameAr:"الجزيرة العقبة",  city:"Aqaba",     cityAr:"العقبة",   emoji:"🩵", pl:26, w:7,  d:8,  l:11, gf:26, ga:37, pts:29, form:["D","L","D","W","L"] },
  { pos:10, name:"Al-Ahli Irbid",       nameAr:"الأهلي إربد",     city:"Irbid",     cityAr:"إربد",     emoji:"🟥", pl:26, w:6,  d:7,  l:13, gf:23, ga:41, pts:25, form:["L","L","D","L","W"] },
  { pos:11, name:"Manshiet Bani Hassan",nameAr:"منشية بني حسن",   city:"Mafraq",    cityAr:"المفرق",   emoji:"🔶", pl:26, w:5,  d:6,  l:15, gf:20, ga:46, pts:21, form:["L","D","L","L","D"] },
  { pos:12, name:"Shari Al-Maghreb",    nameAr:"شاري المغرب",     city:"Amman",     cityAr:"عمّان",    emoji:"🟫", pl:26, w:3,  d:5,  l:18, gf:15, ga:53, pts:14, form:["L","L","L","D","L"] },
];
