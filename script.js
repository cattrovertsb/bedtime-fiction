const stories = [
    {"title":"what's for breakfast?","summary":"ค่าบ้านจ่ายทุกวันที่สี่ ข้าวเช้าฟรีตอนแปดนาฬิกา หลังห้าทุ่มห้ามเคาะประตูห้องนอน","link":"https://www.readawrite.com/a/ee25f5da8ffc8f916df0a50f8aeebfd5"},
    {"title":"ชีวะพี่โก้","summary":"เรียนกับพี่โก้รอบเดียวรู้เรื่อง","link":"https://www.readawrite.com/a/Zbivs8-%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B0%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B9%82%E0%B8%81%E0%B9%89-seokbin?r=search_article"},
    {"title":"kitty boy","summary":"รุกร่าน vs รับแซ่บ","link":"https://www.readawrite.com/a/Zajek1-kitty-boy-seokbin?r=search_article"},
    {"title":"ggg","summary":"ลูกพ่อ 100%","link":"https://www.readawrite.com/a/Zb0sju-ggg-seokbin?r=search_article"},
    {"title":"minute before ny","summary":"ค่าจ้างกินข้าวมื้อละหมื่นห้า แต่ถ้าถูกชะตาแถมโบนัส ให้ฟรี","link":"https://www.readawrite.com/a/Zal77d-minute-before-ny-seokbin?r=search_article"},
    {"title":"สรัน","summary":"ถ้าลูกค้าคนนั้นทักมาซื้อเสื้อ มึงบอกไปเลยว่ากูไม่ชายให้แฟนเก่า","link":"https://www.readawrite.com/a/Zd5m8q-%E0%B8%AA%E0%B8%A3%E0%B8%B1%E0%B8%99-40seokbin41?r=search_article"},
    {"title":"all the way home","summary":"เป็นขวัญใจเด็กแล้ว เป็นขวัญใจผู้ปกครองด้วยมั้ยครับ","link":"https://www.readawrite.com/a/Zbjswv-all-the-way-home-seokbin?r=search_article"},
    {"title":"swift heart rabbit","summary":"my ideal type : good-looking, attractive, rich, cool and still can't forget his ex","link":"https://www.readawrite.com/a/Z8dvp9-seokbin-swift-heart-rabbi?r=search_article"},
    {"title":"I love SAKUJA","summary":"ขอให้ได้แฟนหล่อๆ เหมือนพี่ต้าวงซากูจ้า","link":"https://www.readawrite.com/a/Zbbaxc-I-love-SAKUJA-Seokbin?r=search_article"},
    {"title":"office lover","summary":"พี่ไม่แต่งหนูก็ไม่แต่ง","link":"https://www.readawrite.com/a/Zd9unk-office-lover-seokbin-sung?r=search_article"},
    {"title":"ศิลา","summary":"ไถ่ถามทั่วหลัารักนั้นคือฉันใด จักให้ผู้คนยินยอมแลกได้ด้วยชีวิต","link":"https://www.readawrite.com/a/Z9g7qc-%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%B2-seokbin?r=search_article"},
    {"title":"on cloud new","summary":"ทำนิสัยแบบนี้ก็โสดไปจนตาย","link":"https://www.readawrite.com/a/f69b612565995803efb835632b8cfffc?r=user_page"},
    {"title":"taichi","summary":"いらっしゃいませ僕のパンを食べてください~","link":"https://www.readawrite.com/a/65fee7d0b0d6284274fb399c660b7b27"},
    {"title":"noodle","summary":"อยากรู้จังว่าการถูกเธอรักมันเป็นยังไง","link":"https://www.readawrite.com/a/Zbc5sc-noodle-seokbin?r=search_article"},
    {"title":"for the first time i listened to this love song","summary":"คุณเชื่อในรักแรกพบมั้ย หรือจะให้ผมเดินผ่านอีกรอบ?","link":"https://www.readawrite.com/a/Zbtleq-for-the-first-time-i-list?r=search_article"},
    {"title":"noted with love","summary":"วิกผมสี red wine กับขนตาแม่เหล็กทรงวอนยองวางอยู่บนโต๊ะนะครับ คุณบัดดี้","link":"https://www.readawrite.com/a/Zcwrj4-noted-with-love-mdash-seo?r=search_article"},
    {"title":"ดั่งตะวันให้พบรัก","summary":"อาจารย์อย่าลืมคืนบาร์เทนเดอร์ที่ร้านด้วยนะครับ","link":"https://www.readawrite.com/a/c95e7de072b426ff40dccc101262fffc?r=user_page"},
    {"title":"ตฤณ","summary":"ท่ามกลางนางโลมสวยๆพวกนั้น คุณดันมาชอบเด็กตกปลาแบบเราเนี่ยนะ","link":"https://www.readawrite.com/a/686191f86cdc31335efb670f2f4ba93b?r=search_article"},
    {"title":"Based on true feel","summary":"คุณผมเรียกคุณตั้งหลายรอบ ไม่คิดจะตอบกลับหน่อยเหรอ หูหนวกหรือไง","link":"https://www.readawrite.com/a/508f920ed81dbc855bc13bd4f5115fb8?r=search_article"},
    {"title":"hi mochi","summary":"ชอบเหรอครับความสัมพันธ์อะไรแบบนี้ ถ้าชอบก็จัดให้ได้นะ","link":"https://www.readawrite.com/a/9ce0a980de2a4ccc2d7c34904636c149?r=search_article"},
    {"title":"บัลลังก์กลีบกุหลาบ","summary":"ถ้าคุณตกลงแต่งงานกับผมครบสองปี ผมรับรองเลยว่าคุณจะได้ในสิ่งที่คุณต้องการอย่างแน่นอน - หากคุณไม่เชื่อลองดูสักหนึ่งปีก่อนก็ยังได้","link":"https://www.readawrite.com/a/7708c67d9b27e05d0f780aa1d8ebf862?r=search_article"},
    {"title":"revenge baby,","summary":"ปู่คุณก่อเรื่องชั่วช้ากับคนเขาไปทั่ว แต่ลูกหลานเสวยสุขอยู่บนสวรรค์วิมาน ไม่คิดว่าโลกนี้อยุติธรรมเกินไปหรือ? มาลงนรกกับหนูหน่อยมั้ยคะปะป๊าขา","link":"https://www.readawrite.com/a/407f82b8b53f107656deb87a5e414fd6?r=search_article"},
    {"title":"พัชรรฤต","summary":"พิชญ์มันไม่ใช่คนยึดติดอะไร 2-3 วันมันก็เบื่อแล้ว","link":"https://www.readawrite.com/a/b7dd96a2a91ad72e1a0bb56007c424a3?r=search_article"},
    {"title":"while Chanin still can","summary":"ทายาทอันดับหนึ่ง พ่วงตำแหน่งสามีอันดับห่วย","link":"https://www.readawrite.com/a/2ec277ac698490f0f71d6f05910ccd88?r=search_article"},
    {"title":"wish me baby p","summary":"บิ๊กโบร แว่นเท่ and always stupid in love","link":"https://www.readawrite.com/a/1329a6d7cd947706e39c13033a22ce82?r=search_article"},
    {"title":"ugly duckling","summary":"จัดอันดับคนที่ดวงซวยที่สุด ตกงาน อับโชค แฟนทิ้ง เรียกได้ว่าความซวยวิ่งเข้าใส่ไม่เว้นแต่ละวัน นั่นแหละชีวิตของ ยิปซี พีรตา","link":"https://www.readawrite.com/a/9e1a2056b59e51d90e15b0687e8b668f?r=search_article"},
    {"title":"you had me at goodbye","summary":"เดินผ่านกันไม่กี่ครั้งช่วงมหาลัย ทักทายกันไม่กี่หนช่วงรับปริญญา ห่างหายกันไปตั้งหลายปี แล้วเธอมาชอบเราเมื่อไหร่งั้นหรอ?","link":"https://www.readawrite.com/a/95d0263a45ae69b5b166ad5af950f8bc?r=search_article"},
    {"title":"mad fake marriage","summary":"แล้วทำไมอั๊วต้องแต่งงาน อั๊วไม่อยากใช้นามสกุลมัน สถุนซะไม่มี","link":"https://www.readawrite.com/a/8a7328644c3de12a08c684ecdc7844bc?r=search_article"},
    {"title":"dattebayo","summary":"ใครเอามังงะนารูโตะผมไป ถ้าไม่เอามาคืนภายในสามวัน ผมจะให้ผีมินาโตะไปหลอกคุณนะครับ","link":"https://www.readawrite.com/a/a85ec0c22006f2399989d5c19117c100?r=search_article"},
    {"title":"out of my league","summary":"น่ารัก หุ่นดี พูดเก่ง ยิ้มสาย เสียอย่างเดียว เป็นลูกเจ้าของค่ายมวย","link":"https://www.readawrite.com/a/Zhrai1-out-of-my-league-40seokbi?r=search_article"},
    {"title":"love hangover","summary":"เลิกกันแล้ว แล้วตื่นมาอยู่ห้องแฟนเก่าอีกได้ไงวะ","link":"https://www.readawrite.com/a/105a03aa3da57e5235abfab6e027c011?r=search_article"},
    {"title":"danika","summary":"วงการนี้ไม่มีหรอกคู่จิ้น อย่าอินให้มันมาก","link":"https://www.readawrite.com/a/51697d641a12a284858787076b9e99a9?r=search_article"},
    {"title":"พยับเมฆ","summary":"คาราข่าวฉาวแบบเธอ ต้องจับใส่ตะกร้าล้างน้ำอีกอีกสักกี่รอบถึงจะคู่ควรกับพี่","link":"https://www.readawrite.com/a/266ec370c6bec4e14889e8fd59c47a92?r=search_article"},
    {"title":"love in contract","summary":"แม้ว่าเขาจะดูแก่ เหมือนว่าเขาเป็นเพื่อนแม่ แต่ฉันไม่เคยสนใจ ก็แฟนฉันรูปหล่อ","link":"https://www.readawrite.com/a/ea70aced88524a08c281c32c10797cee?r=search_article"},
    {"title":"น่านฟ้าเหมยลี่","summary":"ให้ชื่อเหมยลี่มันโสดแค่ในหนังพอ","link":"https://www.readawrite.com/a/deecda3c7b0f2cb3fc17b124f72cadac?r=search_article"},
    {"title":"made in heaven","summary":"You'll never walk alone","link":"https://www.readawrite.com/a/34cf1db991c70f1671ee0486499fb296?r=search_article"},
    {"title":"junior and cute","summary":"ไม่เอา ไม่ชอบ เกลียด รำคาญหน้า ใครจะไปชอบคนแบบหมูจูล่ะ พูดเพราะ ใจดี สูง 180 ตาแป๋ว ยิ้มทีแก้มบุ๋มโผล่ ไม่ได้ชอบเลยสักนิด หมูจูอ้วน","link":"https://www.readawrite.com/a/9aa825164b11b5fb0968e11e247f05df?r=search_article"},
    {"title":"Left side and Right arm","summary":"ไม่ใช่หน้าที่ของผมครับ ไม่งั้นผมจะจ้างพวกคุณมาทำไมจริงมั้ย","link":"https://www.readawrite.com/a/300c9d3319c85dfeeb64a86f1ea887bc?r=search_article"},
    {"title":"สมหวัง","summary":"แม่บอกว่าไอ้หวังมันดวงอาภัพรัก ถ้าไม่มีใครก่อนอายุ 30 มันจะโสตตลอดชีวิต สงสัยคงได้เป็นงั้น นี่มันเลย 30 มา 3 ปีแล้ว","link":"https://www.readawrite.com/a/Zh6lfu-%E0%B8%AA%E0%B8%A1%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%87-seokbin?r=search_articlee"},
    {"title":"princebonnie","summary":"บอนนี่บอกว่าไม่ชอบคนแก่ง","link":"https://www.readawrite.com/a/Zi6yh9-princebonnie-40seokbin41?r=search_article"},
    {"title":"the prince(ss) diaries","summary":"คุณทำนให้ผผมมาดูแลคุณเพราะผมค่อนข้างเก่งในด้านรับมือกับเด็กไม่รู้จักโต ใช้ชีวิตไม่คิดหน้าคิดหลัง ไม่มีมารยาททางสังคม และไม่มีจิตสำนึกน่ะครับ","link":"https://www.readawrite.com/a/f35d214d4d092be43d4b07ef7cb7ea1e?r=search_article"},
    {"title":"2562","summary":"พ่อ ทำไมหนูชื่อลูกหมี","link":"https://www.readawrite.com/a/9493ff0077396c8d53fd795319828748?r=search_article"},
    {"title":"12m light years","summary":"วิธีเอาคืนครอบครัวผัวเก่ที่ง่ายที่สุดตอนนี้ คือกูตัวต้องเป็นสะใภ้ไร่นิรันดร์กาล","link":"https://www.readawrite.com/a/0c6fbfeccdb77306b5a61c0c9cf992f1?r=search_article"},
    {"title":"japeen is always happy","summary":"ถ้าเธอชอบคนติ๊งต้องเธอก็มาจีบเรา เพราะเราติ๊งต้อง เอ้ย ติ๊งต้อง เอ้ย ถูกแล้ว","link":"https://www.readawrite.com/a/d26d0c291b243745b4d47e5628c44aa5?r=search_article"},
    {"title":"packpitch","summary":"perfectionist ทั้งคู่ ต่างกันแค่คนหนึ่งเป๊ะทุกมิลลิเมตร ส่วนอีกคนโกลาหลทุกวินาที","link":"https://www.readawrite.com/a/406cf5da735d4db920f12169f9d74c98?r=search_article"},
    {"title":"3424","summary":"แปลกที่จันทร์เองก็รู้สึกดีกับคุณจ้ะ","link":"https://www.readawrite.com/a/8d259ca406d0b6c7464d02e53e6d2eb2?r=search_article"},
    {"title":"Fahkram's 8-12 work life","summary":"ยอมให้จีบวันนี้ แถมฟรีคนลาดตระเวนส่วนตัวทุกคืน","link":"https://www.readawrite.com/a/29fa9878068ec95293d7c2a0a5e446d2?r=search_article"},
    {"title":"right time right person","summary":"ลือหึ่ง! อดีตนักแสดงชื่อดังซุ่มเงียบหย่าสามีมหาเศรษฐีปัดฉากรักในตำนาน ย่องพบผู้ใหญ่หวังหวนคืนวงการในรอบ 8 ปี","link":"https://www.readawrite.com/a/27fe9dd485bd830f7c05760ae74aa9cf?r=search_article"},
    {"title":"ณรักนิลกาฬ","summary":"ถูกจับแต่งงานกับหม้ายขันหมากจะให้ยิ้มแย้มมีความสุขหรอ อย่าลืมสิว่าคนอื่นเขาไม่ได้แสดงละครเก่งเหมือนเธอ","link":"https://www.readawrite.com/a/9a22a413e925cbf654809738116db33e?r=search_article"},
    {"title":"hariboland","summary":"หาคนเล่น hariboland เป็นเพื่อนลูกครับ","link":"https://www.readawrite.com/a/b14d42c7153d7401a0a282334839a383?r=search_article"},
    {"title":"prodyipun","summary":"ตลกมากใครคิดบท","link":"https://www.readawrite.com/a/b4b22681c7ae6a48197036ca7645b558?r=search_article"},
    {"title":"the rock cats","summary":"รู้เรื่องปะเนี่ย","link":"https://www.readawrite.com/a/4ca515742e88360eeffb8ff062052b99?r=search_article"},
    {"title":"i love cat not you","summary":"ไม่ได้ชอบ","link":"https://www.readawrite.com/a/4b512ec0a9eee2e07b60478b76eda252?r=search_article"},
    {"title":"you are my rockstar","summary":"รับสมัครมือเบส 1 คน ถ้ารักแมวด้วยจะพิจารณาเป็นพิเศษ","link":"https://www.readawrite.com/a/14fe85614b0a1c853de49836a1a614f0?r=search_article"},
    {"title":"From the dining table","summary":"แหล่งข่าวฝากบอกมาว่าน่ารักดีออก","link":"https://www.readawrite.com/a/96be0f29dc972578a06b6bc13a828eb2?r=search_article"},
    {"title":"มือปราบบ้านแตก","summary":"บริษัท ปราบบ้านแตกไม่ จำกัด","link":"https://www.readawrite.com/a/32db272d2b81ddf55897d7ba6d6c8c79?r=search_article"},
    {"title":"storm laps","summary":"แค่น้อง","link":"https://www.readawrite.com/a/0debb50fa95bfbb1a5324a9a92f698bc?r=search_article"},
    {"title":"Goodbye my princess","summary":"Sorry Paris, die Stadt der Liebe ist Berlin!","link":"https://www.readawrite.com/a/7ac59037dfd97cd11bebf1476f9f6207?r=search_article"},
    {"title":"not yet closed","summary":"ผู้ชายคนนี้จัดอยู่ในหมวดหมู่พ่อเลี้ยงเดี่ยวหน้าตาดี สุภาพ เรียบร้อย ชอบกิน americano เย็น น้ำแข็งครึ่งแก้ว ขับ honda civic เบาะข้าง ๆ คือลูกชาย","link":"https://www.readawrite.com/a/f1eab521847f0a4ed530fafe47db6fe7?r=search_article"},
    {"title":"ประกายฟ้า","summary":"ต้องใช้เขาเป็นขั้นบันไดเดินขึ้นไปให้ถึงจุดที่สูงที่สุด","link":"https://www.readawrite.com/a/6357eef03a68807a5b07bf876a621c1b?r=search_article"},
    {"title":"lucky seven","summary":"17 27 37","link":"https://www.readawrite.com/a/29c6f5ca0234cfae9470efd7384ce05d?r=search_article"},
    {"title":"patrick wong e-keh","summary":"ปล่อยกู้ เlียทบดอก ตoกทบต้น","link":"https://www.readawrite.com/a/68eaa467fc039bc56f421124c4a28697?r=search_article"},
    {"title":"you're my poison","summary":"คนแบบคุณ ผมจะเกลียดไปจนวันตายนั้นและ","link":"https://www.readawrite.com/a/b46e473d04b58ab21a56b557bf81158b?r=search_article"},
    {"title":"เวียงพิงค์","summary":"ก็ลูกคนเล็กอะ ที่บ้านหวงจะตาย","link":"https://www.readawrite.com/a/6fc5a6548672b0b1acf0ce8b2fd0f3ed?r=search_article"},
    {"title":"things I can't say out loud","summary":"พลัมอดีตเดือนคณะวิทยาศาสตร์น่ะเหรอ เห็นมีรถหรูมาส่งที่คณะไม่ซ้ำกันสักวัน ใครก็รู้ว่าเป็นเด็กเลี้ยงเสี่ย","link":"https://www.readawrite.com/a/c455754ff1846f93065e38d9aaa05c7e?r=search_article"},
    {"title":"i love being dramatic with him","summary":"what i do with my soulmate during free time","link":"https://www.readawrite.com/a/12160ee5ac5c88dfd2ed7e2cd12a6b4c?r=search_article"},
    {"title":"@b9bbypurim","summary":"ปุริม ปณิธาน กองหน้าตัวเป้งเบอร์ 9 แห่งคณะศึกษาศาสตร์ เอกพลศึกษา เจ้าของความสูง 180 เซนติเมตร ดีกรีหนุ่มหล่อบ้านรวย โปรไฟล์เพอร์เฟกต์ที่ใคร ๆ ก็หมายปอง","link":"https://www.readawrite.com/a/6fd5bfe0d2053d9d1ff692daa873ef09?r=search_article"},
    {"title":"kiddo, Figaro","summary":"He is small, black and white, and often sulks or acts jealous of Pinoochio","link":"https://www.readawrite.com/a/37ba2e68b3495387d6949427066a7deb?r=search_article"},
    {"title":"saralee","summary":"ชาวบ้านเขาลือกันทั้งจังหวัดว่าภรรยานายหัวเป็นถึงดาราดังช่องสามสี","link":"https://www.readawrite.com/a/097ce097d7767f06d20343f7cd701196?r=search_article"},
    {"title":"grape juice","summary":"Never fall in love with a man who don't love you","link":"https://www.readawrite.com/a/03f5d62ae9ccaa883f14638dadf6b070?r=search_article"},
    {"title":"tomato and plum","summary":"ไออ้วน ไออ้วน นั่นคือเสียงจากนกแก้วตัวสีฟ้าข้างบ้านที่ด่าแมวส้มของผมทุกวัน","link":"https://www.readawrite.com/a/a9b297345e63de51ae8413510b285cb1"},
    {"title":"Holy cast","summary":"กูพึ่งเคยเห็นดอกฟ้าตามตื๊อหมาวัด","link":"https://www.readawrite.com/a/809d8cc5e2ba1b017d4018ff7fa78ce5"},
    {"title":"เพียงรักที่ได้พบ","summary":"ทุกหยาดเหงื่อเพื่อน้องที่รัก จากมัมหมีตัวจริง","link":"https://www.readawrite.com/a/4e3b7388ce41eb30adf193dfdc85000a?r=user_page"},
    {"title":"วันเฉลิม","summary":"ขอโทษที่หมาฟ้าอย่างกูอยากเด็ดดอกวัดแบบมึงแล้วกัน","link":"https://www.readawrite.com/a/4d05fe5711c74d48dc7316d793397857"},
    {"title":"kiss, marry or kill","summary":"มึงว่าผ่านไป 6 ปีชั้นกับมันจะรักกันได้ไหม","link":"https://www.readawrite.com/a/6f683b244d0b7289a116bbacef2152e3"},
    {"title":"พี่แวงเป็นพระเอก","summary":"เพราะรักจึงจีบ' เป็นซีรีส์วายที่กำลังเป็นกระแสตั้งแต่เริ่มถ่ายทำ แฟนคลับรอดู แฟนนิยายรอชม แต่เหมือนวงในจะแอบเล่าๆมาว่า พระ-นาย เรื่องนี้ไม่ถูกกันนะ","link":"https://www.readawrite.com/a/c305f9cd1691fc470e507f1ad4bf522c?r=user_page"},
    {"title":"good morning, december","summary":"ผมจะเจอเขาทุกวันตอน 6 โมงเช้าบนชานชาลาไม่ก็ร้านข้าวต้ม โต้รุ่ง","link":"https://www.readawrite.com/a/07ebc1a1953eaa85da99b5552f4c2d3f"},
    {"title":"at your feet","summary":"ถ้าอยากเจอผู้ชายที่ตั้งใจมารักหนู ครั้งต่อไปลองพูดชื่อพี่ตอนไปขอแฟนดูสิคะ","link":"https://www.readawrite.com/a/7e15b46d8c501b48a9fb1d95afe18a3b"},
    {"title":"fortune hunter","summary":"ยอมแต่งเพราะยากเลื่อนยศไง เข้าใจอะไรยาก","link":"https://www.readawrite.com/a/b358e862b0f838732c11be509b7e5423"},
    {"title":"not everything needs to be all dente","summary":"คุณเจดเป็นพระเอกช่องสามเซินเจิ้นหรอคะ ทำไมนิสัยไม่ดีแบบนี้","link":"https://www.readawrite.com/a/Zhem9r-not-everything-needs-to-b?r=search_article"},
    {"title":"คิรัณ","summary":"ไม่ต้องมีปฏิสัมพันธ์อะไรกันมากหรอกครับ แค่มีลูกแล้วแล้วแยกย้ายก็พอ","link":"https://www.readawrite.com/a/1b3c3932b894374e3882189c73acf02d?r=user_page"},
    {"title":"Enamored","summary":"อยากเป็นไม่ใช่หรอ ของเล่นไฮโซหน่ะ","link":"https://www.readawrite.com/a/3392e0d03ffefe387d6f942061dfd12c?r=user_page"},
    {"title":"when Poravee said yes no maybe","summary":"ป๋อ ปรวีร์ - พ่อบ้าน full time ผู้ชายมือเย็น โตในครัว ไพรเวทเซฟ พี่เลี้ยงเด็ก ครูสอนสเก็ต พี่ป๋อ อาป๋อ ลุงป๋อ ของลูกชายอดีตนักกอล์ฟทีมชาติที่ถูกปลดฟ้าผ่าเพราะข่าวท้องแต่ไร้เงาสามี","link":"https://www.readawrite.com/a/Zgxb8a-when-Poravee-said-yes-no-?r=search_article"},
    {"title":"stuck in your love","summary":"Stuck with your love till the day I die","link":"https://www.readawrite.com/a/Zh8j7r-stuck-in-your-love-seokbi?r=search_article"},
    {"title":"bad habit","summary":"here's my world for you to sleep","link":"https://www.readawrite.com/a/Z9iney-bad-habit-40seokbin41?r=search_article"},
    {"title":"คณิณภัทรา","summary":"เพื่อนเล่นเล่นเพื่อนดิวะ","link":"https://www.readawrite.com/a/Zg3dr0-%E0%B8%84%E0%B8%93%E0%B8%B4%E0%B8%93%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3%E0%B8%B2-seokbin?r=search_article"},
    {"title":"ปริญพินทร์ตรา","summary":"พระเอกแนวหน้า introvert อยู่ในวงการมาเป็น 10 ปีแต่ข่าวเดทเป็น 0","link":"https://www.readawrite.com/a/16890559f37c4b58d835a0cfa51d0bb6?r=user_page"},
    {"title":"No refund","summary":"จะซื้อก็ซื้อ ไม่ต้องมาสอน","link":"https://www.readawrite.com/a/Zhotuo-No-refund-ndash-seokbin?r=search_article"},
    {"title":"before deadline","summary":"เพื่อนก็ไม่ใช่ รุ่นพี่ก็ไม่เชิง วันๆ เอาแต่หลอกกูไปช่วยตัดโม แต่กูก็ไปนะเพราะมันบอกตัดเสร็จเดี๋ยวให้หนึ่งที","link":"https://www.readawrite.com/a/8c6d8d97d045e6bdb3f1ef49ddf3771c?r=user_pagee"},
    {"title":"ลมใต้ปีก","summary":"เพราะตั้งแต่ต้น, ทั้งคีรภัทรและวรหงส์ก็ถูกกำหนดให้ไม่มีวันได้บรรจบกัน","link":"https://www.readawrite.com/a/95d574020e445d64d0891992657d92fb"},
    {"title":"player piper","summary":"เพลย์ไม่ใช่ไทป์ เพราะไปป์ชอบผู้หญิง","link":"https://www.readawrite.com/a/Zimhib-player-piper-seokbin?r=search_article"},
    {"title":"เพลิงบูรพา","summary":"เพลิง บูรพา ชื่อนี่จำให้ชื่นใจอย่าได้ยุ่งกับคบคนของมัน","link":"https://www.readawrite.com/a/dfce239974a37c0482317266cc321480"},
    {"title":"entirely yours","summary":"คีย์เวิร์ด พูดเพราะ ทำขนม เลี้ยงแมว ชอบหมีเนย รักสัตว์ ปลูกต้นไม้ และข้อสุดท้ายต้องเป็นของเกล้ากาญคนนี้เท่านั้น...","link":"https://www.readawrite.com/a/db397a15e71068868fbe6d8ec6178614"},
    {"title":"bi-gay path","summary":"บอกตามตรงว่าพี่ไม่ใช่สเปคหนูเลย แต่ไพ่บอกว่าแฟนในอนาคตของหนูจะเป็นผู้ชายตัวสูง หุ่นลีน ใส่แว่น ติดอนิเมะ ปากหมา นิสัยไม่ค่อยดี อยู่ตึกซี แล้วก็เป็นไบเก อันนี้ไพ่บอกนะ","link":"https://www.readawrite.com/a/68e97d002418d8b6db30f78cd75b04e8"},
    {"title":"Other side of the fence","summary":"คีย์เวิร์ด ห้องดาดฟ้า พี่ข้างบ้าน ฝ่ายจัดซื้อ","link":"https://www.readawrite.com/a/Zhxw81-Other-side-of-the-fencese?r=search_article"},
    {"title":"guide me to your heart","summary":"ดวงบอกว่าจะเจอเนื้อคู่จากการเดินทาง เลยมาทำงานเป็นไกด์","link":"https://www.readawrite.com/a/5586b197182f7c70eb5355973f2f015f"},
    {"title":"พศินพราวตะวัน","summary":"ทำทุกอย่างเพื่อจะเป็นสะใภ้หิรัญวรักษ์ โดยไม่สนว่าจะแต่งกับคนไหนในตระกูล น่าสมเพชสิ้นดี้","link":"https://www.readawrite.com/a/389c35a99b2f92c7264c90508c923556"},
    {"title":"Memories 2008 remember you","summary":"สวัสดีผมเต๋อ และนี่คือปี 2008 ผมเพิ่งเคยเจอเธอครั้งแรก หรือ ผมกับเธอเคยเจอกันมาก่อนหน้านี้ไหม","link":"https://www.readawrite.com/a/382af4e1816dd538e242492f24b6bd25"},
    {"title":"You drink who drive","summary":"ไอนี่แหละที่เคยทำกุนั่งร้องไห้อยู่ในห้องน้ำชั้น 22","link":"https://www.readawrite.com/a/eadfd6fc59fc7388fa538819626691bf"},
    {"title":"แคว้นสาลิกา ; seokbin","summary":"เขาทำให้น้ำตาร่วงอาบแก้ม... และจูบชับ ในเวลาเดียวกัน","link":"https://www.readawrite.com/a/4d42786c435b14772e0ae65fb3787355"},
    {"title":"Falling like the star","summary":"Falling for you wasn't falling at all, it was walking into a house and suddenly knowing you're home. (Hogwarts AU)","link":"https://www.readawrite.com/a/944f874040b326e6c9a415ab12a7c18f"},
    {"title":"yellow flag","summary":"เจอแล้วคนที่อยากยกธงขาวให้ หมายถึงยอมแล้ว อยากทำอะไรก็ทำไป แต่ขอนั่งด้วยนะ ได้ไหม","link":"https://www.readawrite.com/a/c0f67aac9ed9681c6936fd8d34d69ffd"},
    {"title":"downtown rapstar","summary":"เบื่อพวกเก่งแต่ปากแต่ก็ไม่อยากจะจุ้นจี้ คืออยากเอาตีนไปก่ายหน้าถ้าไม่คิดซะว่าเป็นรุ่นพี่ เก่งกันจริงกันจังกับเด็กกับน้องกับนู่นนี่ ไม่รู้จริงยังกล้าผยองคือนั่นสมองหรือทุ่นขี้","link":"https://www.readawrite.com/a/a35ddec5874baa94913a6bd70106eb91"},
    {"title":"this is ตู้","summary":"นายตู้ ภูมิธรรม ชนะภัย คนส่วนใหญ่เรียกอาจารย์ แต่มันจะมีอยู่คนนึง","link":"https://www.readawrite.com/a/8c9971fb2e9c1e5313e6f033c0cf73e3"},
    {"title":"white flag, seokbin","summary":"ทำไมเกียร์อยู่ที่ใจ เกียร์เป็นอวัยวะเหรอ","link":"https://www.readawrite.com/a/9b0eae673cffb90194f84609993b935f"},
    {"title":"Mr.Paymaster","summary":"ถ้าไม่ติดว่าพี่กั้งอายุน้อยกว่าคุณตรีตั้ง 10 ปี ชั้นคงคิดว่านางเป็นคนคลอดคุณตรีออกมาแล้ว","link":"https://www.readawrite.com/a/cef8c2d415b3e60fb9204e94219224d1"},
    {"title":"Simple thing","summary":"ทางนั้นไปได้ดี แล้วทางนี้ต้องไปไสครับ","link":"https://www.readawrite.com/a/81f5ad88d11950edab68110f4cd6d8e5"},
    {"title":"pye picha","summary":"เจ้าของหัวใจกับเจ้าของแหวนบนนิ้วนางช้างซ้ายของ พาย พิชา ดาราเบอร์ใหญ่ช่องดัง เค้าคนนั้นคือใครกันนะ","link":"https://www.readawrite.com/a/1b70777e5761f576b9569f43ef7c91e2"},
    {"title":"21","summary":"i'll remember who you were and how we've bothe same.","link":"https://www.readawrite.com/a/c687cc740d25c8e131def6f4f0741f4e"},
    {"title":"between takes we fell","summary":"ช่องคิดอะไรอยู่ถึงจับพระเอกเบอร์ใหญ่พ่วงด้วยพ่อหม้ายลูกหนึ่งมาเล่นละครคู่กับดาราวายที่เพิ่งยกเลิกสัญญากับพาร์ทเนอร์เก่า","link":"https://www.readawrite.com/a/684a6ece3b077da8140ff0d7f9e3e1a0"},
    {"title":"บ๊วย","summary":"บ๊วยไม่ได้แปลว่าที่โหล่นะ","link":"https://www.readawrite.com/a/031a40402ad620a147f86dff61c2156f"},
    {"title":"not everyone will bow down to you","summary":"การศึกษาสูง ฐานะก็ร่ำรวย หน้าตาก็สะสวย ทำไมถึงได้โง่มารักคนแบบผมล่ะ","link":"https://www.readawrite.com/a/61115c8bd7f6f14a9ea208f528c37aa5"},
    {"title":"อุ่นเมืองเหนือ","summary":"i'll remember who you were and how we've both changed and stayed the same.","link":"https://www.readawrite.com/a/0a3022c5028764a190f56e68b1411aac"},
    {"title":"Easy as 1, 2, 3 or simple as Do-Re-Mi","summary":"ที่คุณนพใจร้ายกับหนูแบบนี้มันเพราะว่าอะไรคะ","link":"https://www.readawrite.com/a/5ec0cf1ac57c26555a0354fa3c490c34"},
    {"title":"jordan","summary":"เพราะแดนนิชคุณคือผู้ชายที่ไม่เคยตอบข่าวเดทให้ได้ยินเลยสักครั้งแต่ทำให้เห็นทุกวันว่านิ้วนางข้างซ้ายไม่ว่างแล้ว","link":"https://www.readawrite.com/a/0b28fc2e8876f0e6f7aba2718bf4a9f4"},
    {"title":"i'm home (not) alone","summary":"นั่งอยู่ตั้งนานแต่จะมาแย่งใช้ห้องน้ำตอน 4 ทุ่ม มันบ้าปะ","link":"https://www.readawrite.com/a/19578e3b992d36b6b415ae821eb26394"},
    {"title":"สวรรค์วิมาร","summary":"วิวาห์ในคืนจันทร์ดับ สำรับคือของเหม็นเน่า และสัญญาเมียเช่า 100 วัน","link":"https://www.readawrite.com/a/30105ef85d31fa7230b1af34df3c6bf4"},
    {"title":"デートに行ってくれますか?","summary":"เราอยากเจอเธอทุกวันครับ","link":"https://www.readawrite.com/a/fec91ad752d7a810a198e2b14e2154bc"},
    {"title":"สุดฟ้าจะแสนรัก","summary":"คนเหี้ยมี 2 ประเภท ไม่มึงก็กู #SR39 #RF11","link":"https://www.readawrite.com/a/0c50954f14d8b0bbcf8d6d61adc1c1ab"},
    {"title":"A teacher of life lessons","summary":"สวัสดี - เราคือเลขาแบม ตื่นตี 4 มาออกกำลังพร้อมฟังข่าวเศรษฐกิจ ช่วงสาย ๆ เข้าออฟฟิศพร้อม กับกระเป๋า LV และ espresso ของเจ้านาย เวลาเลิกงานไม่มี หยุดแค่วันอาทิตย์ วันลาไม่เคยได้ใช้","link":"https://www.readawrite.com/a/01e9c582d4d5e3d3597bf4b0a83d49d9"},
    {"title":"pumpkin spicy latte","summary":"it's you I see myself with, right now I know you felt it","link":"https://www.readawrite.com/a/e84256905e7c91b6d0b23c01631a96b8"},
    {"title":"dumb and dumplings","summary":"ชื่อเกี๊ยว เป็นลูกคนกลาง ขี้เหร่ที่สุดในบ้าน หน้าที่การงานก็ไม่ได้เรื่อง แถมยังชอบโดนไอ้เจ้านายหัวขวดโขกสับอย่างกับคนใช้ ถ้าวินาทีหน้ามีจริง ขอให้ลูกช้างได้กระทืบไอ้หน้าหล่อนี่สักสองสามทีด้วยเถิด","link":"https://www.readawrite.com/a/6229ac0df0403d210d9373ebb882e200"},
    {"title":"จากสมบูรณ์","summary":"จากหมูถึงสุกี้--คงนานนับเดือน นานนับปี กว่าจดหมายฉบับนี้จะถึงมือคุณ, ผมยังจำกลิ่นหอม ๆ ของสุกี้หมูที่ครัวหลังบ้าน ยังจำสีของถ้วยและจานของคุณได้ขึ้นใจ หากแต่เสียงและกลิ่นกาย ใกล้เลือนหายไปเสียเต็มที","link":"https://www.readawrite.com/a/a38c9e73b718c9ddb3e4debfd7e3b251"},
    {"title":"the intern","summary":"ฝึกรักหัดคิดถึง","link":"https://www.readawrite.com/a/f6cfb110c451bf6a831cbc1f77cbd39e"},
    {"title":"jK and Kj","summary":"ถ้าเราเป็นแฟนกันมันจะเป็นยังไง","link":"https://www.readawrite.com/a/cb46748c0fe5383ce463daa97877fac5"},
    {"title":"เล้ง เติมรัก","summary":"คำแพงจะชอบพี่มั้ย พี่พูดไทยไม่ถ่องนะ","link":"https://www.readawrite.com/a/f9f599ecb43a7846538d3dec40bddb6e"},
    {"title":"1st the art of sweet poison","summary":"เพราะว่ารักจึงเปรียบเธอนั้นเป็นดั่งชีวิต ก็เพราะว่ารักจึงเปรียบเธอนั้นเป็นดวงใจ.. ศิลา ผู้ชายที่ยอมให้สโรชาเหยียบหัวเพื่อที่เธอจะได้แก้แค้นคนทรยศ แต่ใครว่าเขาจะยอมโดนเหยียบหัวฟรี ๆ กันล่ะ","link":"https://www.readawrite.com/a/Zi53vy-1st-The-Art-of-Sweet-Pois?r=search_article"},
    {"title":"cakeaholic","summary":"คนดีๆ ที่ไหนจะมาชอบมึงอะ","link":"https://www.readawrite.com/a/Zb9yo7-cakeaholic-mdash-seokbin?r=search_article"},
    {"title":"Parak","summary":"เปิดร้านขายดอกไม้ ชอบอ่านหนังสือ พูดเกาหลีได้นิดหน่อย นอนก่อน4ทุ่ม ห้ามติดต่อไลน์ส่วนตัวถ้าไม่จำเป็น","link":"https://www.readawrite.com/a/2f1240d3ec53341e13b47e526aea9032"},
    {"title":"Jenzee","summary":"มึงเชื่อกู เกาหลีไม่มีเกย์","link":"https://www.readawrite.com/a/74eb55690c9c218c3f39963c99244e5b"},
    {"title":"ฮวงหุย","summary":"โหงวเฮ้งแบบนี้ ถ้าไม่ใช่เนื้อคู่ก็ศัตรูแน่นอน","link":"https://www.readawrite.com/a/2188981613c872f38e62c45c6b2992fc"},
    {"title":"เก๋าก๊อ","summary":"พ่อเด็กเขาฝากไว้แล้วก็ไม่กลับมาอีกเลย","link":"https://www.readawrite.com/a/01cc0d2844bac9fb96dc6797bcb88c69"},
    {"title":"ปะกอน","summary":"หนูอยากมีปกรณ์ ปกรณ์อยากมีหนูไหม","link":"https://www.readawrite.com/a/9dca816a62a02e061b0f1f032ffa5784"},
    {"title":"officially cool","summary":"ทำไมเพิ่งมาให้เจอ","link":"https://www.readawrite.com/a/ad30bf9328cf93e5a880ae38930d17d9"},
    {"title":"tote therapy","summary":"ก็ไม่ได้สนิท แค่อยู่บ้านเดียวกัน จำเบอร์ได้ ไม่เคยตัดสาย เมาแล้วมารับ ผลัดเวรทำ breakfast แชร์เพลลิสต์ตอนอาบน้ำ แต่ไม่สนิทกัน จะให้ทวนอีกรอบไหม","link":"https://www.readawrite.com/a/6ce6cb2fe4c5a74b532575917c88363e"},
    {"title":"solitude of jeng","summary":"วัน ๆ ของเจ็ง ก็มีแค่หูฟังหนึ่งคู่ ฟังเพลงวนลูป กำแพงสูงปรี๊ดที่กั้นโลกภายนอก อ่อ แล้วก็ มันมีความสามารถพิเศษในการเขี่ยผักออกจากจานได้ทุกชนิด","link":"https://www.readawrite.com/a/14e9919d4a4e81f880fac54222971fe2"},
    {"title":"party 4 you","summary":"ไม่เคยรู้มาก่อนว่าการเดินทางจากนิวยอร์กสู่ยูทาห์กว่า 2,178 ไมล์ในครั้งนี้จะทำให้พบกับรักที่ไม่มีวัน ลืมตลอดไป คำกล่าว 'ที่ยูทาห์เราจะพบกับอะไรที่ไม่คาดฝัน' มักจะจริงเสมอสินะ","link":"https://www.readawrite.com/a/2c6c0a9e8fc0ef87822368c5b87447c8"},
    {"title":"when you fall in love, give them a primrose","summary":"สายตาสั้น 450 ชอบสะสมฟิกเกอร์ ดูอนิเมะ ฟังเพลงนอกกระแส ตื่นมาชงมัทฉะตอนหกโมงเช้า เป็นเจ้าของร้านดอกไม้ และชอบดอกไม้ที่ชื่อพริมโรส","link":"https://www.readawrite.com/a/4b739ad8a39eb471c047b058009f08f3"},
    {"title":"เรื่องของถั่ว","summary":"เรื่องราวของนายถั่วงอก พนักงานซุปเปอร์มาเก็ตแผนกของสด กะกลางคืน ที่เขาต้องดิ้นรนใช้ชีวิตในโลกที่แสนจะห่วยแตกและเฮงชวยแห่งนี้ แต่แล้วเขาก็ได้พบกับคน ๆ หนึ่ง ที่ทำให้โลกของเขานั้นเปลี่ยนไปตลอดกาล","link":"https://www.readawrite.com/a/48b3193a95e92a42709cf20c5369527f"},
    {"title":"เจินหวัง","summary":"ว่านรักเจินมากกว่าที่คนใต้รักประชาธิปัตย์อีก","link":"https://www.readawrite.com/a/149268287d4762ea46db2fc64927f1cf"},
    {"title":"ป้าจี","summary":"ป้าจี : 35 , เก้ง , โสด","link":"https://www.readawrite.com/a/4ffad32abdcc62a99c6cad99a2cbd064"},
    {"title":"จากพลช","summary":"สถานะโสด (แบบมีคู่หมั้น)","link":"https://www.readawrite.com/a/025ff8626c981575d5310b992220df91"},
    {"title":"ดัมบ์","summary":"กูกลัวครับ","link":"https://www.readawrite.com/a/34d2162780065cb243a8c7c94d2c64b2"},
    {"title":"500m A long way","summary":"ระยะทางหนึ่งพันลี้","link":"https://www.readawrite.com/a/ea5bfd728f52cfb062e953210eaf2bbe"},
    {"title":"เพียงพลับพลึง","summary":"มีคำลือกันว่าเจ้าคุณเมืองเหนือหวงลูกชายมาก มึงเคยเห็นหน้าเด็กคนนั้นบ้างไหม (omegaverse)","link":"https://www.readawrite.com/a/bcd2a0e071247f30abae6f7d1070fa71"},
    {"title":"broken track","summary":"นักร้องตกอับซมซานกลับมากราบตีนโปรดิวเชอร์มือทองให้ทำเพลงให้ ในฐานะอดีตเพื่อนร่วมวง และแฟนเก่า","link":"https://www.readawrite.com/a/2378bebf26391921ea58237a6d19995e"},
    {"title":"cloud 9","summary":"เห็นผมติ๋มจะทิ่มผมเฉย","link":"https://www.readawrite.com/a/52820590d474a047a6ee264947567589"},
    {"title":"ประกาศิตรัก","summary":"สมัยนี้ไม่มีหรอกคลุมถุงชนไรนั่น","link":"https://www.readawrite.com/a/c755757dfa80311463df4e680e89fc67"},
    {"title":"perfect puma duo","summary":"2026 แล้ว เสรีด่าเมียกันครับ","link":"https://www.readawrite.com/a/71cd45dfe1e2ee427d65b35432154fba"},
    {"title":"code 911 i think i fall (in love)","summary":"มีคำสั่งให้ถอนภารกิจทันทีหากเป้าหมายเริ่มตั้งข้อสงสัย เป้าหมายเริ่มไหวตัวทัน หรือรหัสแดงที่สุด -เป้าหมายเริ่มตกหลุมรักเจ้าหน้าที่สืบสวน","link":"https://www.readawrite.com/a/db5fd3a587459c925b562338c8bdb27a"},
    {"title":"cat happens","summary":"meowing my way back into his life","link":"https://www.readawrite.com/a/ef3273df2ecb037e5d648db725b28e0e"},
    {"title":"doctor, i think i'm in love","summary":"เป็นครูอยู่บนดอยแต่หล่ออย่างกับดารา ยุคเก่าคือพีติกเจษใหม่ขึ้นมาหน่อยก็เจมส์จิ หรือถ้าเป็นดาราเกาหลีคงต้องบอกว่าเหมือนคิมยองแด","link":"https://www.readawrite.com/a/2670e1632b7e2a42f84180260c9dd7a1"},
    {"title":"noonid","summary":"แฟนหนูนิดดีที่สุดในโลก","link":"https://www.readawrite.com/a/bf69e04499bcea3b47d027724b421072"},
    {"title":"หยาดวรุณ","summary":"เมื่อใดที่คิมหันต์ทายทัก เมื่อนั้นถิ่นโคมแดงจะแผลงฤทธิ์","link":"https://www.readawrite.com/a/3297864effce780cb5d8b597c09cffe3"},
    {"title":"secret love recipe","summary":"อาหารอร่อย ราคาถูก เสิร์ฟไว บรรยากาศดี ให้ 5 ดาวแบบไม่หัก แต่ขอหักใจตัวเองแทน เพราะลูกชายเจ้าของร้านโคตรหล่อ","link":"https://www.readawrite.com/a/f7d7f86cc990480b4ae2c3c352307d36"},
    {"title":"เกล้าลิกา","summary":"เขาลือกันว่าทายาทตระกูลสิงห์กำลังตามจีบถึงได้ตามประกบทุกงาน","link":"https://www.readawrite.com/a/99f24b084c0913bca9906aacd3732dd6"},
    {"title":"1 2 3 4 5 i love you","summary":"รักตัวเองไม่เจ็บเลยสักวัน แต่คนพูดฝนตกไม่กางร่ม ป่วยไม่กินยา ชุ่มข่าม เดินสะดุด นอนดึก ซึ่งง พูดไม่รู้ เรื่อง","link":"https://www.readawrite.com/a/793e250b68c7336ce7cabe32b906a5a5"},
    {"title":"the boss's love trap","summary":"หนูคือตัวแทนของ gen 2 ที่มีความอดทน เงินเดือนหลักหมึน เจ้านายใช้งานหลักแสน ร่างกายเป็นของ บริษัท วิญญาณเป็นของดาเฟอื่น ส่วนหัว โจยังไม่ได้เป็นของ ใคร","link":"https://www.readawrite.com/a/4a0adafaf57e25898055fa01efd3e023"},
    {"title":"คุณรติ","summary":"เจนซี ติดบ้าน ชอบนอน อยู่บ้านเฉยๆก็มีสามี ยังไม่ทันขอพระแม่ แม่ประทานมาให้ก่อน ใจเย็น พูดเพราะ ชอบฟังเพลงพี่แจ้ แก่ แต่หล่อ กุโมโหว่ะ","link":"https://www.readawrite.com/a/2274ca3dd2f133753cc513f8c6385dab"},
    {"title":"love the way I am","summary":"วัน ๆ ทำแต่งาน เลิกงานมาทำตัวมอม ๆ แถมยังนอนเสียงแมวอ้วนอีก - แล้วจะมีใครที่ไหนมาชอบฉับฉัน ติสตาม","link":"https://www.readawrite.com/a/5060c16f6dc32b250f1d8913d0aedaa4"},
    {"title":"สวัสดีครับ ผมหมอนะ และนี่คือเรื่องราวของผม","summary":"ก็ถ้าคุณปวดหลัง ปวตไหล่ ไว้ใจหมอได้เลย","link":"https://www.readawrite.com/a/692330173e900eef89dfa13628e7bf21"},
    {"title":"che","summary":"หาคู่นอนเป็นหมอผีเลยไหม เผื่อชีวิตจะปลอดภัยขึ้น","link":"https://www.readawrite.com/a/587f283cf10d98f01460f685e374eb76"},
    {"title":"surrender","summary":"เขาลือกันให้แย่ดว่าอ้อใหญ่ตระกูลจางน่ะ ใจกว้างยิ่งกว่ามหาสมุทร","link":"https://www.readawrite.com/a/f2e5d2f29d7f027850d25bc5ddaf2418"},
    {"title":"Thanks But No Thank","summary":"ได้แก้แบบบ้านให้พวกตารา ? เรื่องมากชัวร์","link":"https://www.readawrite.com/a/56c398c77a4ddcd274b1da8cfce953e3"},
    {"title":"love (not) guarantee","summary":"ในหนึ่งชั่วโมงก่อนเช้าฮ่องกง ปิกเครื่องบินข้างขวายองคุณจะเกิดไฟลุก และสุดท้ายเครื่องบินทั้งทั้งล่าจะตกลงกลางทะเลโดยไม่มีใครรอดชีวิต ... กรุณาซ่าระ 500 ที่บัญชีพร้อมเพย์เพื่อปลดล็อกคำทำทำทำนายต่อไป","link":"https://www.readawrite.com/a/6afb65c60da3af89f86c2aea4a0d95e5"},
    {"title":"Hey mr.gawin! I'm not yha","summary":"ตื่นมาอีกทีก็เข้ามาอยู่ในซีรีส์ที่เพิ่งดูเมื่อคืน แถมพระเอกใจร้ายอีกต่างหาก","link":"https://www.readawrite.com/a/de5362f4571fab29e858dc9b94bea13b"},
    {"title":"wife and sniper","summary":"การทะลุมิติ แค่นี้ก็น่าเหลือเชื่อแล้ว งั้นถ้าเป็นการทะลุมิติเข้ามาในนิยาย Y ของเพื่อน เล่าไปใครจะเชื่อบ้างว่ามันเกิดขึ้นแล้วกับผม เกย์ผู้มีความลับข้อแรกคือการเป็นมือสังหารระดับพระกาฬ","link":"https://www.readawrite.com/a/c4bc0c2badf37fde925e93d5fe4dcf10"},
    {"title":"summer's","summary":"สรุปว่าคิวเราได้วันไหน","link":"https://www.readawrite.com/a/7088717b3013ec380b2877f0dc6ab14c"},
    {"title":"ไอ้เต้อไอที","summary":"อาการก่อนซ่อม : อกหัก","link":"https://www.readawrite.com/a/ed0a9afbac7338fb854d1e20ade59582"},
    {"title":"ดาว","summary":"แด่ความทรงจำและวันพัง ๆ ของเรา","link":"https://www.readawrite.com/a/0c95ca411e67b2dcc4159356dc4df695"},
    {"title":"tachibana","summary":"ใครก็รู้ว่าท่านโทมะแต่งงานกับตระกูลนั้นก็เพียงเพราะสงสาร รอหล่อนเดินได้เมื่อไหร่เกรงว่าคงถึงคราวหย่ากัน","link":"https://www.readawrite.com/a/70efe547db8b3c176a845e6635cdaf13"},
    {"title":"1st pimjai","summary":"ใคร ๆ ต่างก็บอกว่า \"พ่อเลี้ยงศิลา\" เจ้าของไร่องุ่นวรดิษฐ์ ไม่ชอบคุณหนูพิมพ์ใจ เจ้าของฟาร์มดอกไม้ไร่ข้าง ๆ (แต่ลูกชายชอบ)","link":"https://www.readawrite.com/a/5678649c9eeaa159980a79d50e92d6ce"},
    {"title":"surrender","summary":"เขาลือกันให้แซ่ดว่าซ้อใหญ่ตระกูลจางน่ะใจกว้างยิ่งกว่ามหาสมุทร","link":"https://www.readawrite.com/a/f2e5d2f29d7f027850d25bc5ddaf2418"},
    {"title":"Countdown attack 3 2 1","summary":"พ่อหม้ายเมียตาย บ้านอยู่ท้ายไร่กับแมวหนึ่งตัว อย่าไปยุ่งกับแกมากเลย","link":"https://www.readawrite.com/a/323010440fc6444ad1be0e38d805bc3a"},
    {"title":"darin j.","summary":"beauty is a key but confidence is the power","link":"https://www.readawrite.com/a/012a5387335677268143c55d47bd4676"},
    {"title":"nowayback","summary":"รักคุณเข้าอีกแล้ว","link":"https://www.readawrite.com/a/55846150b17db01d2ff0fac9a10fe7d3"}
]

  const doorButton = document.getElementById("doorButton");
  const result = document.getElementById("result");
  const storyTitle = document.getElementById("storyTitle");
  const storySummary = document.getElementById("storySummary");
  const readButton = document.getElementById("readButton");
  const randomButton = document.getElementById("randomButton");
  const doorScene = document.querySelector(".door-scene");
  const characterA1 = document.querySelector(".character-left");
  const characterA2 = document.querySelector(".character-right");
  
  let storyQueue = [];
  let lastStoryIndex = -1;
  let currentLink = "";
  let resizeTimer;
  let previousViewportWidth = window.innerWidth;
  
  randomButton.classList.add("is-hidden");
  
  function refillStoryQueue() {
      storyQueue = stories.map(function (_, index) {
          return index;
      });
  
      for (let index = storyQueue.length - 1; index > 0; index -= 1) {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          const temporaryIndex = storyQueue[index];
  
          storyQueue[index] = storyQueue[randomIndex];
          storyQueue[randomIndex] = temporaryIndex;
      }
  
      if (
          storyQueue.length > 1 &&
          storyQueue[0] === lastStoryIndex
      ) {
          const temporaryIndex = storyQueue[0];
  
          storyQueue[0] = storyQueue[1];
          storyQueue[1] = temporaryIndex;
      }
  }
  
  function randomStory() {
      if (stories.length === 0) {
          return;
      }
  
      if (storyQueue.length === 0) {
          refillStoryQueue();
      }
  
      const index = storyQueue.shift();
      const selectedStory = stories[index];
  
      lastStoryIndex = index;
      storyTitle.textContent = selectedStory.title;
      storySummary.textContent =
          selectedStory.summary ||
          "เรื่องนี้ยังไม่มีสปอยล์ ลองเข้าไปอ่านได้เลย ♡";
      currentLink = selectedStory.link;
  }
  
  function moveA1AboveA2() {
      const a1 = characterA1.getBoundingClientRect();
      const a2 = characterA2.getBoundingClientRect();
      const isSmallScreen =
          window.matchMedia("(max-width: 600px)").matches;
  
      let moveX;
      let moveY;
  
      if (isSmallScreen) {
          const centerA1 = a1.left + a1.width / 2;
          const centerA2 = a2.left + a2.width / 2;
  
          moveX = centerA2 - centerA1;
          moveY = a2.top - a1.bottom - 30;
      } else {
          moveX = a2.left - a1.left;
          moveY = a2.top - a1.height - a1.top + 25;
      }
  
      characterA1.style.setProperty(
          "--move-x",
          moveX + "px"
      );
  
      characterA1.style.setProperty(
          "--move-y",
          moveY + "px"
      );
  
      doorScene.classList.add("opened");
  }
  
  function openDoor() {
      randomStory();
      moveA1AboveA2();
  
      doorButton.classList.add("open");
      result.classList.add("show");
      randomButton.classList.remove("is-hidden");
  }
  
  doorButton.addEventListener("click", openDoor);
  
  randomButton.addEventListener("click", function () {
      result.classList.remove("show");
  
      setTimeout(function () {
          randomStory();
          result.classList.add("show");
      }, 200);
  });
  
  readButton.addEventListener("click", function () {
      if (currentLink === "") {
          return;
      }
  
      window.open(
          currentLink,
          "_blank",
          "noopener,noreferrer"
      );
  });
  
  window.addEventListener("resize", function () {
      const currentViewportWidth = window.innerWidth;
      const widthDifference = Math.abs(
          currentViewportWidth - previousViewportWidth
      );
  
      if (widthDifference < 5) {
          return;
      }
  
      previousViewportWidth = currentViewportWidth;
      clearTimeout(resizeTimer);
  
      resizeTimer = setTimeout(function () {
          const isOpened =
              doorScene.classList.contains("opened");
  
          if (!isOpened) {
              return;
          }
  
          doorScene.classList.add("recalculating");
          doorScene.classList.remove("opened");
  
          characterA1.style.removeProperty("--move-x");
          characterA1.style.removeProperty("--move-y");
  
          requestAnimationFrame(function () {
              moveA1AboveA2();
  
              requestAnimationFrame(function () {
                  doorScene.classList.remove("recalculating");
              });
          });
      }, 200);
  });