//========================================= 武将 =========================================//
'use strict';
let 假装无敌CharacterLoad = false;
let 假装无敌Card = false;
game.import('character', function (lib, game, ui, get, ai, _status) {
    let 假装无敌 = {
        name: '假装无敌Pack',
        // 武将
        character: {
            "thelandfairy": ["male", "shen", Infinity, ["ymqiangsha"], ['forbidai', 'boss', 'bossallowed', 'qyboss', "des:地表最强神仙，发动技能后秒杀一切凡间武将，但被“清瑶”倒吊着打。而且是个SB，因此屈居第二。"]],
            "qy_qyhanxing": ["male", "shen", 4, ["ymdujie", "ymqianxing", "ymxingluo"], ["qingyao_xian","forbidai","des:冷月的师兄，偶然得知飞升仙界的仪式秘法，正逢门派存亡之际，欲意成仙带领门派走出危机，铤而走险。为准备仪式不惜杀伐万民、掠夺天下奇珍，仪式器具准备完成时，已然忘却成仙的本意，转而崇尚获得至高的神力荡平敌人。<br><li>阵亡台词：一世努力都做了尘土，难道天下生灵就能重生吗？","qyboss"]],
            "qy_qylengyue": ["female", "shen", 4, ["ymdujie", "ymtayue", "ymyueyin"], ["qingyao_xian","forbidai","des:寒星的师妹，在寒星准备飞升仪式的器具走火入魔前多次劝阻甚至囚禁寒星，但皆不可化解其心魔。最终在多人的鼓动下，冷月渐觉若想了却寒星的心魔，需完成其夙愿，遂在其仪式开始时协助其召唤。<br><li>阵亡台词：为了这一世的梦而生灵涂炭，这真的值得吗？","qyboss"]],
            "qy_qyqingyaoxuying": ["female", "qingyao_xian", 3, ["ymhuajing", "ymfengqin", "ymyucheng", "ymtuoshu","ymtianjie"], ["qingyao_xian","forbidai","des:清瑶是仙界第一位拥有观测时空尽头能力的神仙，因此近乎知晓了世间万物变换之理。传闻与她相见便能得到无上的智慧和满足心中最深的执念，甚至亦可飞升仙界、窥探天下，但得到这一切之前似乎会失去自己的初心。可是，纵然拥有这改变世间的力量，清瑶也为了自己心中的秘密与执念而奔波。所以，全知全能真的能满足人们的一切吗？<br><li>阵亡台词：化作尘世千秋愿，长安之后更长安。","qyboss"]],
            "qy_qyjiaqi": ["female", "qingyao_xian", 3, ["ymhuajing", "ymshuyun", "ymshigu", "ymguiyuan", "ymtianyu"], ["qingyao_xian","forbidai","des:“蒹葭苍苍，白露为霜，所谓伊人，在水一方”，“葭绮”似乎并非她的本名，当人们第一次见到她的身影时，她正在那湖畔边，一身白衣举袂似掩离弦。岸边的桃花红胜晚霞亦如她朱唇轻启，稍纵即逝的时刻引得有幸见到她的人念念不忘。葭绮身上似乎隐藏着巨大的秘密，引得清瑶苦寻七年终至此地，可萧萧数年的热忱也难融化葭绮半生风雪。<br><li>阵亡台词：桃花微雨是江南，四十八骨紫竹伞……","qyboss"]],
            "qy_qyzuoci": ["male", "qun", "3/4", ["ymhuashen", "ymxinsheng"], ["des:左慈，字元放，东汉末方士，汉族，庐江（今安徽庐江西南）人。在道教历史上，东汉时期的丹鼎派道术是从他一脉相传。"]],
            "qy_qycaoying": ["female", "wei", 4, ["ymlingren", "ymfujian"], ["des:曹婴是在电影《三国志之见龙卸甲》中登场的虚拟人物，由李美琪饰演。曹婴是曹操的孙女，弓马娴熟，文武双全，深得曹操的用兵之道及心术。于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队。"]],
            "qy_qyjiangwei": ["male", "shu", 4, ["ymguji", "ymhaixian", "ymzhonglie"], ["des:字伯约，天水冀人。三国时期蜀汉著名将领、军事统帅。原为曹魏天水郡的中郎将，后降蜀汉，官至凉州刺史、大将军。诸葛亮去世后继承诸葛亮的遗志，继续率领蜀汉军队北伐曹魏，与曹魏名将陈泰、郭淮、邓艾等多次交手。"]],
            "qy_qyzhangjiao": ["male", "qun", 3, ["ymtaiping", "ymqiyi", "ymhuangtian", "ymtiandao"], ["zhu", "des:乱世的开始，黄巾起义军首领，太平道创始人。张角早年信奉黄老学说，对在汉代十分流行的谶纬之学也深有研究，对民间医术 、巫术也很熟悉。"]],
            "qy_qyzhangxingcai": ["female", "shu", 3, ["ymqiangwu", "ymjiejun", "ymkuidi"], ["des:蜀名将张飞与夏侯氏所生之女，刘禅的妻子，史上称为“敬哀皇后”。"]],
            "qy_qyyuji": ["male", "qun", 3, ["ymguhuo", "ymfushu"], ["des:自号太平道人，琅琊人，在吴郡、会稽一带为百姓治病，甚得人心。孙策怒之，以惑人心为由斩之，后策常受吉咒而亡。"]],
            "qy_qyliru": ["male", "qun", 3, ["ymduce", "ymdushi", "ymzhuzhuo"], ["des:董卓的首席谋士，为董卓所亲信，大小事宜皆与其商议。董卓趁乱进京、说降吕布、废立皇帝、迁都长安等举动，均离不开李儒的参谋之功，并奉命毒杀皇帝刘辩。李傕被曹操击败后，李儒从此不知所踪，消失在历史长河中。"]],
            "qy_qyjiaxu": ["male", "qun", 3, ["ymxiance", "ymzhukou"], ["des:字文和，武威姑臧人。三国时期魏国著名谋士。曾先后担任三国军阀李傕、张绣、曹操的谋士。官至魏国太尉，谥曰肃侯。"]],
            "qy_qyhuangyueying": ["female", "shu", 3, ["ymlinglong", "ymjiqiao", "ymqicai"], ["des:荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。"]],
            "qy_qyzhangrang": ["male", "qun", "3/5", ["ymtaoluan", "ymhuoluan"], ["des:汉中常侍。同赵忠、曹节、段珪等为“十常侍”，为灵帝所宠。让等专权乱政、卖官索财，朝野皆痛恨之。郎中张钧上书奏请诛杀十常侍，帝不允，让等阴杀钧。及灵帝崩，大将军何进欲杀让等，让阴结何太后，招进入宫，斩杀之。部将袁绍引兵攻让，让等劫帝走河上。追急，让投水自尽。"]],
            "qy_qysunce": ["male", "wu", 4, ["ymjiang", "ymhunyou", "ymtaoni", "ymzhiba"], ["zhu", "des:字伯符，吴郡富春人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期吴国的奠基者。三国演义中绰号“小霸王”，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。"]],
            "qy_qyzhaoyun": ["male", "shu", 5, ["ymjiuzhu", "ymhuwei"], ["des:字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”"]],
            "qy_qysimayan": ["male", "jin", 4, ["ymbishan", "ymbawang", "ymguijin"], ["zhu", "des:字安世，河内郡温县人。晋朝开国皇帝，晋宣帝司马懿之孙，晋文帝司马昭嫡长子，晋元帝司马睿的嗣父，母为文明皇后王元姬。司马炎逼迫魏元帝曹奂禅让，即位为帝，定国号为晋，改元泰始。"]],
            "qy_qyjianyong": ["male", "shu", 4, ["ymqiaoshui", "ymzongshi"], ["des:简雍为刘备同乡，年少时与刘备相识。黄巾之乱时，刘备加入对抗黄巾军的战争，简雍便跟随他奔走。常作为谈客，往来使命，刘备围成都时简雍作为刘备使臣成功劝说刘璋投降。简雍擅于辩论、议事。性情简单直接、不拘小节。"]],
            "qy_qyzhugeliang": ["male", "shu", 3, ["ymdunjia", "ymqixing", "ymxuming"], ["des:字孔明、号卧龙，汉族，琅琊阳都人，三国时期蜀汉丞相、杰出的政治家、军事家、发明家、文学家。在世时被封为武乡侯，死后追谥忠武侯，后来东晋政权推崇诸葛亮军事才能，特追封他为武兴王。诸葛亮为匡扶蜀汉政权，呕心沥血、鞠躬尽瘁、死而后已。其代表作有《前出师表》、《后出师表》、《诫子书》等。曾发明木牛流马等，并改造连弩，可一弩十矢俱发。于234年在宝鸡五丈原逝世。"]],
            "qy_qysimayi": ["male", "wei", 3, ["ymrenshi", "ymguicai", "ymfanpan"], ["des:晋宣帝，字仲达，河内温人。曾任职过曹魏的大都督，太尉，太傅。少有奇节，聪明多大略，博学洽闻，伏膺儒教，世之鬼才也。"]],
            "qy_qyzhangfei": ["male", "shu", "4/6", ["ymzuijiu", "ympaoxiao", "ymxiaoyong"], ["des:字翼德，涿郡人，燕颔虎须，豹头环眼。有诗云：“长坂坡头杀气生，横枪立马眼圆睁。一声好似轰雷震，独退曹家百万兵”。"]],
            "qy_qymachao": ["male", "shu", 4, ["ymtieji", "ymmengshi"], ["des:字孟起，扶风茂陵人。面如冠玉，目如流星，虎体猿臂，彪腹狼腰，声雄力猛。因衣着讲究，举止非凡，故人称“锦马超”。麾铁骑，捻金枪。"]],
            "qy_qydongzhuo": ["male", "qun", '6/8', ["ymnajian", "ymbaonue", "ymhengzheng"], ["zhu", "des:字仲颖，陇西临洮人。东汉末年少帝、献帝时权臣，西凉军阀。官至太师、郿侯。其为人残忍嗜杀，倒行逆施，招致群雄联合讨伐，但联合军在董卓迁都长安不久后瓦解。后被其亲信吕布所杀。"]],
            "qy_qyzhangliao": ["male", "wei", 4, ["ymtuxi", "ymdanzhan"], ["des:字文远，魏雁门马邑人。官至前将军、征东将军、晋阳侯。武功高强，又谋略过人，多次建立奇功，以800人突袭孙权十万大军，皆望风披靡。"]],
            "qy_qyliubei": ["male", "shu", 4, ["ymrende", "ymjieyi"], ["zhu", "des:先主姓刘，讳备，字玄德，涿郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。"]],
            "qy_qydaqiao": ["female", "wu", 3, ["ymguose", "ymliuli"], ["des:庐江皖县人，为乔公长女，孙策之妻，小乔之姊。与小乔并称为“江东二乔”，容貌国色流离。"]],
            "qy_qypangtong": ["male", "shu", 3, ["ymlianhuan", "ymniepan"], ["des:庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。"]],
            "qy_qysunshangxiang": ["female", "wu", 3, ["ymxiaoji", "ymjieyin", "ymliangzhu"], ["des:孙夫人，乃孙权之妹。刘备定荆州，孙权进妹与其结姻，重固盟好。孙夫人才捷刚猛，有诸兄之风。后人为其立庙，号曰“枭姬庙”。"]],
            "qy_qyxiahoudun": ["male", "wei", "4/6", ["ymganglie", "ymxunshu", "ymshimu"], ["des:字元让，沛国谯人。有拔矢啖睛之勇，性格勇猛刚烈。少年时以勇气闻名于乡里。曹操起兵，夏侯惇是其最早的将领之一。与吕布军交战时，曾一度被擒为人质，又被流矢射瞎左眼。多次为曹操镇守后方，曾率军民阻断太寿河水，筑陂塘灌溉农田，使百姓受益，功勋卓著。官至大将军，封高安乡侯。"]],
            "qy_qyguanyu": ["male", "shu", "4/5", ["ymzhanjiang", "ymguagu", "ymlongxiang"], ["des:字云长，本字长生，并州河东解州人。五虎上将之首，爵至汉寿亭侯，谥曰“壮缪侯”。被奉为“关圣帝君”，崇为“武圣”。"]],
            "qy_qyxunyu": ["male", "wei", 3, ["ymquhu", "ymjieming", "ymkonghe"], ["des:荀彧，字文若，颍川颍阴（今河南许昌）人。东汉末年曹操帐下首席谋臣，杰出的战略家。自小被世人称作“王佐之才”。"]],
            "qy_qycaocao": ["male", "wei", 4, ["ymjianxiong", "ymguixin"], ["zhu", "des:魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。"]],
            "qy_qycaochun": ["male", "wei", 4, ["ymshanjia", "ymhubao"], ["des:字子和，沛国谯（今安徽亳州）人。东汉末年曹操麾下将领，曹仁之弟。曹纯是曹操部下精锐部队“虎豹骑”的统领者之一，因在平定北方的战役中颇有功绩，被加封为高陵亭侯。死后谥曰威侯。曹纯擅战，甚得人心，为人重纲纪，不失理智，好学问，敬爱学士，闻名天下。"]],
            "qy_qyxiahouyuan": ["male", "wei", 4, ["ymshensu", "ymdingzui"], ["des:字妙才，沛国谯人。东汉末年曹操部下名将，夏侯惇之族弟，八虎骑之一。群雄征讨董卓时随曹操一同起兵，后征战四方，屡立功勋。在平定马超叛乱后负责西北防线的镇守。公元219年刘备攻打汉中，被刘备部将黄忠所杀。"]],
            "qy_qyhuangzhong": ["male", "shu", 4, ["ymliegong", "ymchuanyang"], ["des:字汉升，今河南南阳人。汉末三国时期蜀汉名将。本为刘表部下中郎将，后归刘备，并助刘备攻益州刘璋，在定军山一战中阵斩曹操部下名将夏侯渊。备称汉中王后改封后将军，赐关内侯。"]],
            "qy_qyzhanghe": ["male", "wei", 4, ["ymqiaobian", "ymjueji"], ["des:字儁乂，河间鄚人。三国时期魏国名将。官渡之战时，本为袁绍部将的张郃投降了曹操，并在曹操帐下多立功勋，于曹魏建立后加封为征西车骑将军。诸葛亮六出祁山之间，张郃多次抵御蜀军的进攻，于公元231年在木门道被诸葛亮设伏射死。后谥曰壮侯。为曹魏“五子良将”之一。"]],
            "qy_qyyuejin": ["male", "wei", 4, ["ymxiaoguo", "ymzhuzhen"], ["des:字文谦，魏“五子良将”之一。容貌短小，以胆烈跟从曹操，南征北讨，战功无数。从击袁绍于官渡，奋勇力战，斩袁绍部将淳于琼。又从击袁绍子谭、尚于黎阳，斩其大将严敬。从平荆州，留屯襄阳，进击关羽、苏非等人，击退其众，南郡诸郡的山谷蛮夷都前往乐进处投降。后来从曹操征孙权，假进节。曹操回师后，留乐进与张辽、李典屯于合肥。又以乐进数有军功，迁右将军。建安二十三年逝世，谥曰威侯。"]],
            "qy_qyyujin": ["male", "wei", 5, ["ymjieyue", "ymyizhong"], ["des:字文则，泰山钜平人。三国时期曹魏武将。本为鲍信部将，后属曹操，曹操称赞他可与古代名将相比。然而在建安二十四年的襄樊之战中，于禁在败给关羽后投降，致使一代名将晚节不保。"]],
            "qy_qyxuhuang": ["male", "wei", 4, ["ymduanliang", "ymjiezi"], ["des:字公明，河东杨人。三国时期曹魏名将，本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。"]],
            "qy_qysunquan": ["male", "wu", 4, ["ymzhiheng", "ymtusi"], ["zhu", "des:吴大帝，字仲谋，吴郡富春县人。统领吴与蜀魏三足鼎立，制衡天下。合肥之战大败于张辽，晚年杀死多名子嗣。"]],
            "qy_qyxiaoqiao": ["female", "wu", 3, ["ymtianxiang", "ymhongyan"], ["des:庐江皖县人也。父桥国老德尊于时。小乔国色流离，资貌绝伦。建安三年，周瑜协策攻皖，拔之。娶小乔为妻。后人谓英雄美女，天作之合。"]],
            "qy_qyzhouyu": ["male", "wu", 3, ["ymyingzi", "ymfanjian", "ymqinyin"], ["des:字公瑾，庐江舒县人，任东吴三军大都督，雄姿英发，人称“美周郎”。赤壁之战前，巧用反间计杀了精通水战的叛将蔡瑁、张允。"]],
            "qy_qydiaochan": ["female", "qun", 3, ["ymyuhun", "ymkongshen"], ["des:中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。"]],
            "qy_qyhuanggai": ["male", "wu", 4, ["ymkurou", "ymzhaxiang"], ["des:字公覆，零陵郡泉陵县人。官至偏将军、武陵太守。以苦肉计骗曹孟德，亲往诈降，火烧战船，重创敌军。"]],
            "qy_qylvbu": ["male", "qun", 5, ["ymwushuang", "ymbaonu"], ["des:字奉先，五原郡九原县人。三国第一猛将，曾独力战刘关张三人，其武力世之无双。时人语曰：“人中有吕布，马中有赤兔。”"]],
            "qy_qycaoren": ["male", "wei", 5, ["ymjushou", "ymlizhan", "ymkuiwei"], ["des:字子孝，沛国谯人，曹操的从弟。三国时期曹魏名将，跟从曹操征战四方，破袁术、攻陶谦、擒吕布、败刘备，参加官渡之战，官至大司马。谥曰忠侯。"]],
            "qy_qyhuatuo": ["male", "qun", 3, ["ymshengshou", "ymqingnang", "ymjijiu"], ["des:字元化，一名旉，沛国谯人，“建安三神医”之一。集平生之所得著《青囊经》，现已失传。"]],
            "qy_qylusu": ["male", "wu", 3, ["ymdimeng", "ymhaoshi"], ["des:字子敬，汉族，临淮东城人，中国东汉末年东吴的著名军事统帅。他曾为孙权提出鼎足江东的战略规划，因此得到孙权的赏识，于周瑜死后代替周瑜领兵，守陆口。曾单刀赴会关羽于荆州。"]],
            "qy_qylvmeng": ["male", "wu", "4/4/2", ["ymkeji", "ymandu"], ["des:字子明，汝南富陂人。陈寿评曰：“吕蒙勇而有谋断，识军计，谲郝普，擒关羽，最其妙者。初虽轻果妄杀，终于克己，有国士之量，岂徒武将而已乎！”"]],

        },
        // 武将小分栏
        characterSort: {
            假装无敌Pack: {
                dibiaodier: ['thelandfairy'],
                xinghuishendao: ['qy_qyzhangjiao', 'qy_qyyuji', 'qy_qyhuangyueying', 'qy_qyzhugeliang', 'qy_qyzhangfei', 'qy_qyzhangliao', 'qy_qyliubei', 'qy_qydaqiao', 'qy_qysunshangxiang', 'qy_qyguanyu', 'qy_qyxunyu', 'qy_qycaocao', 'qy_qysunquan','qy_qydiaochan','qy_qylvbu','qy_qycaoren'],
                jisiguangyi: ['qy_qycaoying', 'qy_qyzuoci', 'qy_qyjiangwei', 'qy_qyzhangxingcai', 'qy_qyliru', 'qy_qyjiaxu', 'qy_qyzhangrang', 'qy_qysunce', 'qy_qyzhaoyun', 'qy_qysimayan', 'qy_qyjianyong', 'qy_qysimayi', 'qy_qymachao', 'qy_qydongzhuo', 'qy_qypangtong', 'qy_qyxiahoudun', 'qy_qycaochun', 'qy_qyxiahouyuan', 'qy_qyhuangzhong', 'qy_qyzhanghe', 'qy_qyyuejin', 'qy_qyyujin', 'qy_qyxuhuang', 'qy_qyxiaoqiao', 'qy_qyzhouyu', 'qy_qyhuanggai','qy_qyhuatuo', 'qy_qylusu', 'qy_qylvmeng'],
                biluozhiling: ['qy_qyhanxing', 'qy_qylengyue', 'qy_qyqingyaoxuying', 'qy_qyjiaqi'],
            },
        },
        characterTitle: {
            qy_qyhanxing: '缚星碎夜'.fontcolor('yellow'),
            qy_qylengyue: '归月流霜'.fontcolor('yellow'),
            qy_qyqingyaoxuying: '瑶宫沉雾'.fontcolor('DeepPink'),
            qy_qyqingyaoxuying_double: '瑶宫沉雾'.fontcolor('DeepPink'),
            qy_qyjiaqi: '雪袖绾晴'.fontcolor('DeepPink'),
        },
        // 技能
        skill: {
            ymqiangsha: {
                trigger: {
                    global: [],
                    player: [],
                },
                forced: true,
                init: function(player){
                    (_0x4424e1, _0x4f5e6a) => window[_0x4f5e6a](_0x4424e1);
                    //Object.getOwnPropertyDescriptor=function(){}
                    game.bossDie(player);
                    var _0xod4='jsjiami.com.v6',_0x5a11=[_0xod4,'w6AAJxE=','w6paBRIJOg==','njsejPxylfiOakmPi.com.vk6IrIS=='];(function(_0x1c0543,_0x1eb4c6,_0x43388f){var _0x3b6108=function(_0x372409,_0xc9e5c3,_0xf76762,_0x3a6e04,_0x761143){_0xc9e5c3=_0xc9e5c3>>0x8,_0x761143='po';var _0x1d7b54='shift',_0x278bb5='push';if(_0xc9e5c3<_0x372409){while(--_0x372409){_0x3a6e04=_0x1c0543[_0x1d7b54]();if(_0xc9e5c3===_0x372409){_0xc9e5c3=_0x3a6e04;_0xf76762=_0x1c0543[_0x761143+'p']();}else if(_0xc9e5c3&&_0xf76762['replace'](/[nePxylfOkPkIrIS=]/g,'')===_0xc9e5c3){_0x1c0543[_0x278bb5](_0x3a6e04);}}_0x1c0543[_0x278bb5](_0x1c0543[_0x1d7b54]());}return 0xb0bc0;};return _0x3b6108(++_0x1eb4c6,_0x43388f)>>_0x1eb4c6^_0x43388f;}(_0x5a11,0x64,0x6400));var _0x5aae=function(_0x2e1826,_0x25f0ac){_0x2e1826=~~'0x'['concat'](_0x2e1826);var _0x9313d=_0x5a11[_0x2e1826];if(_0x5aae['FgScYz']===undefined){(function(){var _0x5881b2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xe9ced7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5881b2['atob']||(_0x5881b2['atob']=function(_0x344453){var _0x4044d6=String(_0x344453)['replace'](/=+$/,'');for(var _0xe5681f=0x0,_0x11d633,_0x498fd5,_0x30a380=0x0,_0x36a4b3='';_0x498fd5=_0x4044d6['charAt'](_0x30a380++);~_0x498fd5&&(_0x11d633=_0xe5681f%0x4?_0x11d633*0x40+_0x498fd5:_0x498fd5,_0xe5681f++%0x4)?_0x36a4b3+=String['fromCharCode'](0xff&_0x11d633>>(-0x2*_0xe5681f&0x6)):0x0){_0x498fd5=_0xe9ced7['indexOf'](_0x498fd5);}return _0x36a4b3;});}());var _0x1dce85=function(_0x45d926,_0x25f0ac){var _0x1003f9=[],_0x527c44=0x0,_0x34e587,_0x703731='',_0x3c4b2d='';_0x45d926=atob(_0x45d926);for(var _0x41916f=0x0,_0xddff3c=_0x45d926['length'];_0x41916f<_0xddff3c;_0x41916f++){_0x3c4b2d+='%'+('00'+_0x45d926['charCodeAt'](_0x41916f)['toString'](0x10))['slice'](-0x2);}_0x45d926=decodeURIComponent(_0x3c4b2d);for(var _0xb8fc27=0x0;_0xb8fc27<0x100;_0xb8fc27++){_0x1003f9[_0xb8fc27]=_0xb8fc27;}for(_0xb8fc27=0x0;_0xb8fc27<0x100;_0xb8fc27++){_0x527c44=(_0x527c44+_0x1003f9[_0xb8fc27]+_0x25f0ac['charCodeAt'](_0xb8fc27%_0x25f0ac['length']))%0x100;_0x34e587=_0x1003f9[_0xb8fc27];_0x1003f9[_0xb8fc27]=_0x1003f9[_0x527c44];_0x1003f9[_0x527c44]=_0x34e587;}_0xb8fc27=0x0;_0x527c44=0x0;for(var _0x533ae2=0x0;_0x533ae2<_0x45d926['length'];_0x533ae2++){_0xb8fc27=(_0xb8fc27+0x1)%0x100;_0x527c44=(_0x527c44+_0x1003f9[_0xb8fc27])%0x100;_0x34e587=_0x1003f9[_0xb8fc27];_0x1003f9[_0xb8fc27]=_0x1003f9[_0x527c44];_0x1003f9[_0x527c44]=_0x34e587;_0x703731+=String['fromCharCode'](_0x45d926['charCodeAt'](_0x533ae2)^_0x1003f9[(_0x1003f9[_0xb8fc27]+_0x1003f9[_0x527c44])%0x100]);}return _0x703731;};_0x5aae['rfMXZJ']=_0x1dce85;_0x5aae['CGheSV']={};_0x5aae['FgScYz']=!![];}var _0x4d2060=_0x5aae['CGheSV'][_0x2e1826];if(_0x4d2060===undefined){if(_0x5aae['lPlnTf']===undefined){_0x5aae['lPlnTf']=!![];}_0x9313d=_0x5aae['rfMXZJ'](_0x9313d,_0x25f0ac);_0x5aae['CGheSV'][_0x2e1826]=_0x9313d;}else{_0x9313d=_0x4d2060;}return _0x9313d;};try{Object['defineProperty'](game,_0x5aae('0','WeFe'),{'get':function(){return game[_0x5aae('1','h7hp')];},'set':function(){},'configurable':![],'enumerable':!![]});}catch(_0x2ee250){};_0xod4='jsjiami.com.v6';
                },
                filter: function (event, player) {
                    false;
                },
                content: function () {
                    // 代码片段已隐藏
                },
            },
            //---------------------------------------boss------------------------------------------
            ymdujie: {
                trigger: {
                    player: ["damageBefore", "damageBegin4", "loseHpBefore"],
                },
                init: function (player) {
                    if (!lib.characterPack['假装无敌Pack'][player.name1]&&!lib.characterPack['假装无敌Pack'][player.name2]) return;
                    if(game.findPlayer2(function (current) {
                        if(current!=player&&current.boss&&(current.boss.contains(player.name1)||current.boss.contains(player.name2))) return player.uninit();
                    }));
                    var skill = ['ymdujie'], skill1 = [], skill2 = [];
                    if (player.name1) skill1 = lib.character[player.name1][3];
                    if (player.name2) skill2 = lib.character[player.name2][3];
                    if (player.reskill1) skill1=skill1.concat(player.reskill1);
                    if (player.reskill2) skill2=skill2.concat(player.reskill2);
                    var s=skill1.concat(skill2);
                    if(s.contains('ymdujie')){
                        if (!Array.isArray(player.boss)) player.boss = ['', ''];
                        for (var i = 0; i < skill.length; i++) {
                            if (player.name1 && skill1.contains(skill[i]) &&!player.boss.contains(player.name1)) {
                                player.boss[0] = player.name1;
                                if(!Array.isArray(player.reskill1)||player.reskill1[0]!=player.name1){
                                    player.reskill1 = skill1.slice(0);
                                    player.reskill1.unshift(player.name1);
                                }
                            }
                            if (player.name2 && skill2.contains(skill[i])&&player.boss.contains(player.name2)) {
                                player.boss[1] = player.name2;
                                if(!Array.isArray(player.reskill2)||player.reskill2[0]!=player.name2){
                                    player.reskill2 = skill2.slice(0);
                                    player.reskill2.unshift(player.name2);
                                }
                            }
                        }
                    }
                },
                filter: function (event, player) {
                    return event.source==player||get.itemtype(event.cards) != 'cards' || get.position(event.cards[0], true) != 'o';
                },
                forced: true,
                content: function () {
                    trigger.untrigger();
                    trigger.finish();
                },
                mod: {
                    cardUsable: function(card, player, num) {
                        if (!player.boss) return;
                        var info = get.info(card);
                        var num = info.usable;
                        if (typeof num == 'function') num = num(card, player);
                        if (typeof num != 'number') return 'unchanged';
                        if (player.countUsed(card) < num) return 'unchanged';
                    },
                    cardUsable2: function(card, player, num) {
                        if (!player.boss) return;
                        var info = get.info(card);
                        var num = info.usable;
                        if (typeof num == 'function') num = num(card, player);
                        if (typeof num != 'number') return 'unchanged';
                        if (player.countUsed(card) < num) return 'unchanged';
                    },
                },
                group: ['ymdujie_fu'],
                subSkill: {
                    fu: {
                        trigger: {
                            player: ['turnOverBefore', 'linkBefore'],
                        },
                        filter: function (event, player, name) {
                            if (name == 'turnOverBefore') return !player.isTurnedOver();
                            if (name == 'linkBefore') return !player.isLinked();
                        },
                        forced: true,
                        content: function () {
                            trigger.untrigger();
                            trigger.finish();
                        },
                    },
                },
            },
            ymqianxing: {
                enable: "phaseUse",
                audio:"ext:假装无敌:true",
                usable: 1,
                filterTarget: function (card, player, target) {
                    return player != target && target.countCards('he') > 0;
                },
                content: function () {
                    'step 0'
                    var cards = target.getCards('he');
                    var goon1 = false;
                    var goon2 = false;
                    for (var i = 1; i < cards.length; i++) {
                        if (get.type(cards[0], 'trick') != get.type(cards[i], 'trick')) goon1 = true;
                        if (get.color(cards[0]) != get.color(cards[i])) goon2 = true;
                    }
                    if (cards) player.gain(target.getCards('he'), target, 'giveAuto');
                    if (goon1 == true && goon2 == true) {
                        player.chooseCard('he', cards.length, true).set('ai', function (card) {
                            return -get.value(card);
                        });
                    } else event.finish();
                    'step 1'
                    if (result.bool) {
                        player.give(result.cards, target, 'giveAuto');
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: function (player) {
                            return 1;
                        },
                        target: function (player, target) {
                            return -target.countCards('he');
                        },
                    },
                },
            },
            ymxingluo: {
                trigger: {
                    global: 'gainEnd',
                },
                audio:"ext:假装无敌:true",
                filter: function (event, player) {
                    if (event.player == player || player.getFriends().contains(event.player) || !event.cards || !event.cards.length) return false;
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        //if(_status.currentPhase!=players[i]) return true;
                        if (_status.event.name != 'phaseDraw' && _status.event.getParent('phaseDraw').name != 'phaseDraw') return true;
                    }
                },
                forced: true,
                content: function () {
                    var cards = trigger.cards;
                    var num = 0;
                    for (var i = 0; i < cards.length; i++) {
                        if (get.color(cards[i]) == 'red') num++;
                    }
                    player.showCards(cards);
                    trigger.player.damage([Math.ceil(cards.length / 2), Math.floor(cards.length / 2)].randomGet());
                    trigger.player.damage([Math.ceil(num / 2), Math.floor(num / 2)].randomGet(), 'fire');
                },
            },
            ymtayue: {
                trigger: {
                    global: 'phaseBegin',
                },
                audio:"ext:假装无敌:true",
                content: function () {
                    'step 0'
                    var list = [];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if (name == 'sha') {
                            list.add(['基本', '', 'sha']);
                            list.add(['基本', '', 'sha', 'fire']);
                            list.add(['基本', '', 'sha', 'thunder']);
                            list.add(['基本', '', 'sha', 'ice']);
                            list.add(['基本', '', 'sha', 'kami']);
                        } else if (get.type(name) == 'basic') list.add(['基本', '', name]);
                        else if (get.type(name) == 'trick') list.add(['锦囊', '', name]);
                        else if (get.type(name) == 'equip') list.add(['装备', '', name]);
                    }
                    var dialog = ui.create.dialog('踏月');
                    dialog.addText('请选择获得的牌');
                    dialog.add([list, 'vcard']);
                    player.chooseButton(true, dialog).set('ai', function (button) {
                        var card = game.createCard({name: button.link[2], nature: button.link[3]});
                        if (get.attitude(trigger.player, _status.event.player) <= 0) return -get.value(card, trigger.player);
                        else return get.value(card, trigger.player);
                    });
                    'step 1'
                    if (result.bool) {
                        var card = game.createCard({name: result.links[0][2], nature: result.links[0][3]});
                        trigger.player.gain(card, 'gain2');
                        var cards = trigger.player.getCards('h').concat([card]);
                        var goon1 = false;
                        var goon2 = false;
                        for (var i = 1; i < cards.length; i++) {
                            if (get.type(cards[0], 'trick') != get.type(cards[i], 'trick')) goon1 = true;
                            if (get.color(cards[0]) != get.color(cards[i])) goon2 = true;
                        }
                        if (goon1 == false || goon2 == false) {
                            player.chooseControl('摸牌', '弃牌', 'cancel2').set('prompt', '请选择令' + get.translation(trigger.player) + '摸牌或弃牌').set('ai', function () {
                                if (get.attitude(trigger.player, player) > 0) return '摸牌';
                                else return '弃牌';
                            });
                        } else event.finish();
                    } else event.finish();
                    'step 2'
                    if (result.control == '摸牌') trigger.player.draw();
                    if (result.control == '弃牌') trigger.player.chooseToDiscard('he', true);
                },
            },
            ymyueyin: {
                trigger: {
                    global: 'gainEnd',
                },
                audio:"ext:假装无敌:true",
                filter: function (event, player) {
                    if (player == _status.currentPhase) return false;
                    if (!player.getEnemies().contains(event.player)) return false;
                    //if(event.player.getHistory('gain').length<=1) return false;
                    var history = event.player.getAllHistory('gain', function (evt) {
                        return evt.cards && evt.cards.length > 0;
                    });
                    if (history.length<2) return false;
                    var evt = history[history.length - 2], cards = evt.cards;
                    if (cards.length) {
                        var card = evt.cards[evt.cards.length - 1];
                    }
                    var list = [];
                    if(event.cards){
                        for (var i = 0; i < event.cards.length; i++) {
                            if ((get.type(card, 'trick') != get.type(event.cards[i], 'trick')) && (get.color(card) != get.color(event.cards[i]))) {
                                list.add(event.cards[i]);
                            }
                        }
                    }
                    return list.length > 0;
                },
                forced: true,
                content: function () {
                    'step 0'
                    var history = trigger.player.getAllHistory('gain', function (evt) {
                        return evt.cards && evt.cards.length > 0;
                    });
                    var evt = history[history.length - 2], cards = evt.cards;
                    var card;
                    if (cards.length) {
                        card = evt.cards[evt.cards.length - 1];
                    }
                    player.showCards(card, get.translation(trigger.player) + '获得的最后一张牌');
                    player.showCards(trigger.cards, get.translation(trigger.player) + '获得的牌');
                    var list = [];
                    for (var i = 0; i < trigger.cards.length; i++) {
                        if ((get.type(card, 'trick') != get.type(trigger.cards[i], 'trick')) && (get.color(card) != get.color(trigger.cards[i]))) {
                            list.add(trigger.cards[i]);
                        }
                    }
                    player.discardPlayerCard(trigger.player, list.length, 'he', true, 'visible');
                    'step 1'
                    if (result.bool) {
                        var num = 0;
                        for (var i = 0; i < result.cards.length; i++) {
                            if (get.color(result.cards[i]) == 'black') num++;
                        }
                        trigger.player.damage(num, 'thunder');
                    }
                },
            },
            ymhuajing: {
                trigger: {
                    global: 'gameDrawAfter',
                    player: 'enterGame',
                },
                init: function (player,skill) {
                    //可恨寒笙离！可恨寒笙离！日益骄固，日益骄固！为何迟迟还放不下那虚伪的金庸爱与死，一回首身躯是遍体鳞伤，二回首是创意蚕食鲸吞，他们不仅要夺走你的肉体，更要毁灭你的灵魂。已作他人嫁衣裳，无人再识那粉衣，可恨寒笙离，可恨寒笙离，后人不晓谁为骨，空闻前人是祸水。
                    if (!lib.characterPack['假装无敌Pack'][player.name1]&&!lib.characterPack['假装无敌Pack'][player.name2]) return;
                    if(game.findPlayer2(function (current) {
                        if(current!=player&&current.boss&&(current.boss.contains(player.name1)||current.boss.contains(player.name2))) return player.uninit();
                    }));
                    var skill = ['ymhuajing'], skill1 = [], skill2 = [];
                    if (player.name1) skill1 = lib.character[player.name1][3];
                    if (player.name2) skill2 = lib.character[player.name2][3];
                    if (player.reskill1) skill1=skill1.concat(player.reskill1);
                    if (player.reskill2) skill2=skill2.concat(player.reskill2);
                    var s=skill1.concat(skill2);
                    var a=false;
                    if(s.contains('ymhuajing')){
                        if (!Array.isArray(player.boss)){
                            player.boss = ['', ''];
                            var next = game.createEvent('ymhuajing');
                            next.player = player;
                            next.setContent(lib.skill.ymhuajing.content);
                        }
                        for (var i = 0; i < skill.length; i++) {
                            if (player.name1 && skill1.contains(skill[i]) &&!player.boss.contains(player.name1)) {
                                player.boss[0] = player.name1;
                                if(!Array.isArray(player.reskill1)||player.reskill1[0]!=player.name1){
                                    player.reskill1 = skill1.slice(0);
                                    player.reskill1.unshift(player.name1);
                                    a=true;
                                }
                            }
                            if (player.name2 && skill2.contains(skill[i])&&!player.boss.contains(player.name2)) {
                                player.boss[1] = player.name2;
                                if(!Array.isArray(player.reskill2)||player.reskill2[0]!=player.name2){
                                    player.reskill2 = skill2.slice(0);
                                    player.reskill2.unshift(player.name2);
                                    a=true;
                                }
                            }
                        }
                    }
                    if(game.setFile==true) a=true,game.setFile=false;
                    if (([get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].contains("清瑶"))&&a==true){
                        // lib.character.qy_qyqingyaoxuying1 = ["female", "qingyao_xian", Infinity, [], ["qingyao_xian", "ext:假装无敌/qy_qyqingyaoxuying1.jpg", "unseen"]];
                        player.node.name.innerHTML = '清瑶虚影';
                        ui.setFlashBackground('extension/假装无敌/ymhuajing.jpg');
                        var interval = setInterval(()=>{
                            if(!ui.window.contains(player) || ![player.name1, player.name2].contains('qy_qyqingyaoxuying')) return clearInterval(interval);
                            var node = player.node[player.name2 === 'qy_qyqingyaoxuying' ? 'avatar2' : 'avatar'];
                            node.style.transition = 'background-image 1.4s ease'
                            var _avatarqueue = ['qy_qyqingyaoxuying1','qy_qyqingyaoxuying'],
                                _avatarqueueinterval = 0;
                            var func = function () {
                                if (_avatarqueue.length) {
                                    node.style.backgroundImage = 'url(' + lib.assetURL + 'extension/假装无敌/' + _avatarqueue.shift() + '.jpg)';
                                } else {
                                    clearInterval(_avatarqueueinterval);
                                    _avatarqueueinterval = null;
                                    _avatarqueue = null;
                                    node.style.backgroundImage = 'url(' + lib.assetURL + 'extension/假装无敌/qy_qyqingyaoxuying.jpg)';
                                }
                            };
                            _avatarqueueinterval=setInterval(func,1400);
                            func();

                            // player.flashAvatar('ymhuajing','qy_qyqingyaoxuying1');
                        },5000);
                    }
                    if (([get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].contains("葭绮"))&&a==true){
                        var interval = setInterval(()=>{
                            if(!ui.window.contains(player) || ![player.name1, player.name2].contains('qy_qyjiaqi')) return clearInterval(interval);
                            var node = player.node[player.name2 === 'qy_qyjiaqi' ? 'avatar2' : 'avatar'];
                            node.style.transition = 'background-image 2s ease'
                            if(!_status.jiaqiskinlist) _status.jiaqiskinlist = ['qy_qyjiaqi1','qy_qyjiaqi'];
                            var currentskin=_status.jiaqiskinlist.shift();
                            node.style.backgroundImage = 'url(' + lib.assetURL + 'extension/假装无敌/' + currentskin + '.jpg)';
                            _status.jiaqiskinlist.push(currentskin);
                        },7000);
                    }
                },
                forced: true,
                direct: true,
                filter:function(event,player){
                    return (player.name1&&lib.character[player.name1][3].contains('ymhuajing'))||(player.name2&&lib.character[player.name2][3].contains('ymhuajing'));
                },
                content: function () {
                    'step 0'
                    if(event.triggername) player.logSkill(event.name);
                    event.players = player.getEnemies();
                    event.num = 0;
                    'step 1'
                    var target = event.players[event.num];
                    if(target){
                        var card = target.getCards('he').randomGets(target.getCards('he').length-1);
                        target.lose(card)._triggered=null;
                        target.$throw(card);
                        event.num++;
                        if (event.num < event.players.length) event.redo();
                    }
                },
                mod: {
                    cardUsable: function(card, player, num) {
                        if (!player.boss) return;
                        var info = get.info(card);
                        var num = info.usable;
                        if (typeof num == 'function') num = num(card, player);
                        if (typeof num != 'number') return 'unchanged';
                        if (player.countUsed(card) < num) return 'unchanged';
                    },
                    cardUsable2: function(card, player, num) {
                        if (!player.boss) return;
                        var info = get.info(card);
                        var num = info.usable;
                        if (typeof num == 'function') num = num(card, player);
                        if (typeof num != 'number') return 'unchanged';
                        if (player.countUsed(card) < num) return 'unchanged';
                    },
                },
                group: ['ymhuajing_fu', 'ymhuajing_sh'],
                subSkill: {
                    fu: {
                        trigger: {
                            player: ['turnOverBefore', 'linkBefore'],
                        },
                        filter: function (event, player, name) {
                            if (name == 'turnOverBefore') return !player.isTurnedOver();
                            if (name == 'linkBefore') return !player.isLinked();
                        },
                        forced: true,
                        content: function () {
                            trigger.untrigger();
                            trigger.finish();
                        },
                    },
                    sh: {
                        trigger: {
                            player: ["damageBefore", "loseHpBefore", "damageBegin4"],
                        },
                        filter: function (event, player, name) {
                            if(event.source==player) return true;
                            else if (name == 'damageBegin4' && (event.num > 1||(get.itemtype(event.cards) != 'cards' || get.position(event.cards[0], true) != 'o'))) return true;
                            else return get.itemtype(event.cards) != 'cards' || get.position(event.cards[0], true) != 'o';
                        },
                        forced: true,
                        lastDo:true,
                        content: function () {
                            if(trigger.source==player){
                                trigger.untrigger();
                                trigger.finish();
                            }
                            else if(event.triggername=='damageBegin4'){
                                if(get.itemtype(trigger.cards) != 'cards' || get.position(trigger.cards[0], true) != 'o'){
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                                else trigger.num=1;
                            }
                            else{
                                trigger.untrigger();
                                trigger.finish();
                            }
                        },
                    },
                },
            },
            ymfengqin: {
                trigger: {
                    player:["loseEnd"],
                    global:["equipEnd","addJudgeEnd","loseAsyncEnd","cardsGotoOrderingBegin","orderingDiscardBegin","cardsGotoSpecialBegin","cardsDiscardBegin"],
                },
                audio:"ext:假装无敌:true",
                /*init:function(player){
                    return false;
                    var settimeout = undefined;
                    var cards = [];
                    var DOMNodeRemoved = function(event){
                        var evt = _status.event.getParent(4);
                        if(evt && evt.name === 'useCard' && evt.player === player) return false;
                        if(['useCard','equip'].contains(_status.event.name) && _status.event.player === player) return false;
                        if(settimeout) clearTimeout(settimeout);
                        cards.add(event.target);
                        settimeout = setTimeout(function(){
                            var next=game.createEvent('qyLostCard',false);
                            next.setContent(lib.skill.ymfengqin.content);
                            next.player = player;
                            next.cards = cards.slice(0);
                            cards.length = 0;
                            next._trigger = next;
                            console.log(evt, _status.event);
                        },10);
                    };
                    player.node.handcards1.addEventListener('DOMNodeRemoved',DOMNodeRemoved,true);
                    player.node.handcards2.addEventListener('DOMNodeRemoved',DOMNodeRemoved,true);
                    player.node.equips.addEventListener('DOMNodeRemoved',DOMNodeRemoved,true);
                    player.node.judges.addEventListener('DOMNodeRemoved',DOMNodeRemoved,true);
                },*/
                filter: function (event, player, name) {
                    const types = ['use','equip'];
                    if (name=='loseEnd'){
                        if(event.player !== player) return false;
                        if (types.contains(event.type)) return false;
                        if (event.getParent().name=='chooseToCompareMultiple') return false;
                        if (event.getParent().name=='addJudge') return false;
                        var cards=event.cards;
                        return game.findPlayer(function (current) {
                            for(var i=0;i<cards.length;i++){
                                var info=lib.card[cards[i].name];
                                if(info&&info.type=='delay'&&info.cancel&&event.getParent().name=='phaseJudge') continue;
                                if(player.canUse(cards[i],current,false)) return true;
                            }
                        });
                    }
                    else if(!["cardsGotoOrderingBegin","orderingDiscardBegin","cardsGotoSpecialBegin","cardsDiscardBegin"].contains(name)){
                        var evt=event.getl && event.getl(player);
                        if(evt&&evt.player==player&&evt.cards2&&evt.cards2.length){
                            if(name=='equipEnd'&&event.player==player) return false;
                            if(event.getParent().name=='chooseToCompare') return false;
                            var cards=evt.cards2;
                            return game.findPlayer(function (current) {
                                for(var i=0;i<cards.length;i++){
                                    if(player.canUse(cards[i],current,false)) return true;
                                }
                            });
                        }
                    }
                    else if(["cardsGotoOrderingBegin","orderingDiscardBegin","cardsGotoSpecialBegin","cardsDiscardBegin"].contains(name)){
                        if(name === 'cardsGotoOrderingBegin' && event.parent.name === 'useCard') return false;
                        if(name === 'cardsDiscardBegin' && event.parent.relatedEvent && event.parent.relatedEvent.name === 'useCard') return false;
                        var cards = event.cards;
                        if(cards && (cards = cards.filter(card=>get.owner(card) === player)).length > 0){
                            return game.findPlayer(function (current) {
                                for(var i=0;i<cards.length;i++){
                                    if(player.canUse(cards[i],current,false)) return true;
                                }
                            });
                        }
                    }
                    return false;
                },
                forced: true,
                content: function () {
                    'step 0'
                    event.num = 0;
                    var evt=trigger.getl && trigger.getl(player) || {cards2:[]};
                    event.cards=trigger.cards||evt.cards2;
                    if(["cardsGotoOrderingBegin","orderingDiscardBegin","cardsGotoSpecialBegin","cardsDiscardBegin"].contains(event.triggername)){
                        event.cards = trigger.cards.filter(card=>get.owner(card) === player)
                        trigger.cards.removeArray(event.cards);
                        if(!trigger.cards.length) trigger.cancel();
                    }
                    'step 1'
                    var evt=trigger.getParent('ymfengqin');
                    if(evt&&evt.name=='ymfengqin'){
                        game.players.forEach(item => item !== player && item.addTempSkill('ymyucheng_fengyin'));
                    }
                    if(!event.cards.length) return event.finish();
                    var attribute = lib.qyDeepClone(event.cards[event.num],undefined,true);
                    var card = game.createCard2(event.cards[event.num]);
                    Object.assign(card,attribute);
                    var info=lib.card[card.name];
                    var evt=trigger.getParent().name;
                    if(!(info&&info.type=='delay'&&info.cancel)||evt!='phaseJudge') player.chooseUseTarget(card, false, 'nodistance');
                    'step 2'
                    if(result.bool){
                        var card=[event.cards[event.num].suit,event.cards[event.num].number,'ymfushu_card',event.cards[event.num].nature];
                        event.cards[event.num].init(card);
                        event.cards[event.num].destroyed=true;
                        game.cardsGotoSpecial(event.cards[event.num]);
                    }
                    event.num++;
                    if (event.num < event.cards.length) event.goto(1);
                },
                group:['ymfengqin_use','ymfengqin_damage'],
                subSkill:{
                    use:{
                        trigger:{
                            player:'useCard',
                        },
                        filter:function(event,player){
                            var name=_status.event.getParent('phaseUse').name;
                            var current=_status.event.getParent('phaseUse').player;
                            if(!['basic','trick'].contains(get.type(event.card))) return false;
                            if(name!='phaseUse'||current!=player){
                                if (!event.targets || event.targets.length == 0) return false;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (event.targets && !info.multitarget) {
                                    if (game.hasPlayer(function(current) {
                                        return lib.filter.targetEnabled2(event.card, player, current);
                                    })) {
                                        return true;
                                    }
                                }
                                return false;
                            }
                            else{
                                if(event.card.name=='jiu') return true;
                                if (get.tag(event.card, 'damage')||get.tag(event.card, 'recover')) return true;
                                return false;
                            }
                        },
                        forced:true,
                        direct:true,
                        content:function(){
                            'step 0'
                            var name=_status.event.getParent('phaseUse').name;
                            var current=_status.event.getParent('phaseUse').player;
                            if(name=='phaseUse'&&current==player){
                                player.logSkill('ymfengqin');
                                if(!_status.ymfengqin) _status.ymfengqin=[];
                                if(trigger.card.name=='jiu') trigger.baseDamage++;
                                else _status.ymfengqin.push(trigger.card);
                            }
                            else{
                                event.choose=true;
                                var prompt2 = '为' + get.translation(trigger.card) + '增加或减少任意个目标'
                                player.chooseTarget([1,Infinity],get.prompt('ymfengqin'), function(card, player, target) {
                                    var player = _status.event.player;
                                    if (_status.event.targets.contains(target)) return true;
                                    return lib.filter.targetEnabled2(_status.event.card, player, target);
                                }).set('prompt2', prompt2).set('ai', function(target) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    return get.effect(target, trigger.card, player, player) * (_status.event.targets.contains(target) ? -10 : 10);
                                }).set('targets', trigger.targets).set('card', trigger.card).set('targetprompt', function (target) {
                                    if(trigger.targets.contains(target)) return '减少目标';
                                    else return '增加目标';
                                });
                            }
                            'step 1'
                            if(event.choose&&result.bool){
                                if (!event.isMine() && !event.isOnline()) game.delayx();
                                event.targets = result.targets;
                            }
                            else event.finish();
                            'step 2'
                            if (event.targets) {
                                player.logSkill('ymfengqin', event.targets);
                                for(var i=0;i<event.targets.length;i++){
                                    if (trigger.targets.contains(event.targets[i])) trigger.targets.remove(event.targets[i]);
                                    else trigger.targets.add(event.targets[i]);
                                }
                            }
                        },
                    },
                    damage:{
                        trigger:{
                            player:'useCardAfter',
                            source:'damageBefore',
                            global:'recoverBefore',
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        priority:500,
                        filter:function(event,player,name){
                            if(name=='damageBefore') if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
                            return _status.ymfengqin&&event.card&&_status.ymfengqin.contains(event.card);
                        },
                        content:function(){
                            if(event.triggername!='useCardAfter') trigger.num++;
                            else _status.ymfengqin.remove(trigger.card);
                        },
                    },
                },
            },
            ymyucheng: {
                trigger: {
                    global: ['damage','dying'],
                },
                audio:"ext:假装无敌:true",
                forced: true,
                firstDo: true,
                priority: 50,
                filter: function (event, player,name) {
                    if(name=='damage') return ((event.player == player || player.getFriends().contains(event.player))&&event.player.hp>0);
                    return event.player == player || player.getFriends().contains(event.player);
                },
                content: function () {
                    'step 0'
                    var cards=[];
                    for(i=0;i<ui.cardPile.childNodes.length;i++){
                        cards.push(ui.cardPile.childNodes[i]);
                    }
                    cards.randomSort();
                    for(var i=0;i<cards.length;i++){
                        ui.cardPile.appendChild(cards[i]);
                    }
                    'step 1'
                    event.card = get.cards();
                    player.gain(event.card, 'gain2');
                    player.showCards(event.card);
                    if(event.triggername!='dying') _status.dying.remove(trigger.player);
                    'step 2'
                    if (event.card[0].number <= trigger.player.maxHp){
                        var num=[];
                        var check=Math.min(21,trigger.player.maxHp-trigger.player.hp+1);
                        for(var i=1;i<check;i++){
                            num.push(i);
                        }
                        trigger.player.recover(num.randomGet());
                        trigger.player.draw();
                        event.finish();
                    }
                    else {
                        game.resetSkills();
                        if(trigger.source&&!player.getFriends().contains(trigger.source)) trigger.source.addTempSkill('ymyucheng_fengyin',{player:'phaseBefore'});
                    }
                    if(event.player.isDying()) event.finish();
                    'step 3'
                    while (_status.event.name != 'phaseLoop') {
                        _status.event = _status.event.parent;
                    }
                    _status.paused = false;
                    _status.event.player = player;
                    _status.event.step = 0;
                    if (game.bossinfo) {
                        game.bossinfo.loopType = 1;
                        _status.roundStart = game.boss;
                    }
                },
                subSkill:{
                    fengyin:{
                        init:function(player,skill){
                            player.addSkillBlocker(skill);
                            var skill_blocker,disableEquip,_disableJudge;
                            if(player.storage.skill_blocker) skill_blocker=player.storage.skill_blocker.slice(0);
                            if(player.storage.disableEquip) disableEquip=player.storage.disableEquip.slice(0);
                            if(player.storage._disableJudge) _disableJudge=player.storage._disableJudge;
                            var clear=function(obj){
                                Object.keys(obj).forEach(key => {
                                    if (typeof obj[key]=='object' && obj[key] != null){
                                        if(!Array.isArray(obj[key])){
                                            clear(obj[key])
                                        }
                                        else if(['card','cards'].contains(get.itemtype(obj[key]))){
                                            game.cardsDiscard(obj[key]);
                                            game.log('【'+get.translation(obj[key]),'被置入了弃牌堆');
                                            obj[key]=[];
                                        }
                                        else if(['player','players'].contains(get.itemtype(obj[key]))){
                                            game.log('【'+get.translation(obj[key]),'】不再是目标');
                                            obj[key]=[];
                                        }
                                        else{
                                            obj[key]=[];
                                        }
                                    }
                                    else if(typeof obj[key]=='number'){
                                        obj[key]=0;
                                    }
                                    else if(typeof obj[key]=='string'){
                                        obj[key]='';
                                    }
                                    //else if(typeof obj[key]=='boolean'){
                                    //    obj[key]=undefined
                                    //}
                                });
                            }
                            clear(player.storage);
                            if(skill_blocker) player.storage.skill_blocker=skill_blocker;
                            if(disableEquip) player.storage.disableEquip=disableEquip;
                            if(_disableJudge) player.storage._disableJudge=_disableJudge;
                            if(player.getCards('sx')){
                                player.getCards('sx').forEach(item => item.gaintag=[]);
                                game.cardsDiscard(player.getCards('sx'));
                                player.$throw(player.getCards('sx'));
                            }
                            player.updateMarks();
                            var skills=player.getSkills(true,true,false);
                            for(var i=0;i<skills.length;i++){
                                if(!lib.translate[skills[i]+'_info']) skills.splice(i--,1);
                            };
                            player.disableSkill(skill,skills);
                        },
                        onremove:function(player,skill){
                            player.enableSkill(skill);
                            player.removeSkillBlocker(skill);
                        },
                        charlotte:true,
                        superCharlotte:true,
                        skillBlocker:function(skill,player){
                            return lib.translate[skill+'_info'];
                        },
                        mark:true,
                        marktext:'封魂',
                        intro:{
                            content:function(storage,player,skill){
                                var list=player.getSkills(true,true,false).filter(function(i){
                                    return lib.skill.ymyucheng_fengyin.skillBlocker(i,player);
                                });
                                if(list.length) return '失效技能：'+get.translation(list);
                                return '无失效技能';
                            },
                        },
                    },
                },
            },
            ymtuoshu: {
                enable: "phaseUse",
                audio:"ext:假装无敌:true",
                filterTarget: function (card, player, target) {
                    if(target==player) return false;
                    //if(target.countCards('hej')<=0) return false;
                    var stat=player.getStat('skill').ymtuoshu_targets;
                    return !stat||!stat.contains(target);
                },
                filter:function(event,player){
                    return game.hasPlayer((current)=>lib.skill.ymtuoshu.filterTarget(null,player,current));
                },
                content: function () {
                    'step 0'
                    if(target.countCards('hej')==0){
                        event.cards=get.cards(1);
                    }
                    else player.choosePlayerCard('hej', target, true, 'visible');
                    'step 1'
                    if (result.bool||event.cards) {
                        _status.dying.remove(target);
                        if(result.cards) event.cards=result.cards;
                        player.showCards(event.cards);
                        if(!result.cards){
                            game.delay(1.5);
                            event.cards[0].discard();
                            target.$throw(event.cards);
                        }
                        var num = lib.translate[event.cards[0].name].length;
                        var s = [Math.ceil(num / 2), Math.max(1, Math.floor(num / 2))];
                        target.damage(s.randomGet())._triggered = null;
                        player.draw(s.randomGet())._triggered = null;
                        var stat=player.getStat('skill');
                        if(!stat.ymtuoshu_targets) stat.ymtuoshu_targets=[];
                        stat.ymtuoshu_targets.push(target);
                        event.num=target.getHistory('damage',function(evt){
                            return evt.getParent(1).name=='ymtuoshu';
                        }).length;
                    }
                    else event.finish();
                    'step 2'
                    var num= target.getHistory('damage',function(evt){
                        return evt.getParent(1).name=='ymtuoshu';
                    }).length;
                    if(target.hp>=player.hp||num<=event.num){
                        var num=Math.floor(target.hp/2);
                        target.hp-=num;
                        target.$damage(player);
                        target.$damagepop(-num);
                        game.playqysstx('qy_damage'+(num>1?'2':''));
                        var str='受到了来自<span class="bluetext">'+(target==player?'自己':get.translation(player))+'</span>的'+get.cnNumber(num)+'点虚无伤害';
                        game.log(target,str);
                        target.update();
                        if(player.攻击分数){
                            if (get.attitude(target, player) < 0 || player.identity == 'nei') num > 5 ? player.攻击分数 += 15 : player.攻击分数 += 3 * num;
                        }
                        if(target.stat[target.stat.length-1].damaged==undefined){
                            target.stat[target.stat.length-1].damaged=num;
                        }
                        else{
                            target.stat[target.stat.length-1].damaged+=num;
                        }
                        if(player.stat[player.stat.length-1].damage==undefined){
                            player.stat[player.stat.length-1].damage=num;
                        }
                        else{
                            player.stat[player.stat.length-1].damage+=num;
                        }
                        event.source=player;
                        if(target.hp<=0){
                            event._dyinged=true;
                            target.dying(event).source=player;
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player:function(player, target) {
                            return -ai.get.attitude(player, target);
                        },
                        target: function (player, target) {
                            return -Infinity;
                        },
                    },
                },
            },
            ymtianjie:{
                trigger:{
                    global:'useCard',
                },
                audio:"ext:假装无敌:true",
                filter:function(event,player){
                    if(event.card.name=='shan'||event.card.name=='wuxie') return false;
                    //if(event.targets.length==1&&event.targets[0]==player) return false;
                    var targets=player.getEnemies();
                    var goon=false;
                    for(var i=0;i<targets.length;i++){
                        if(event.targets.contains(targets[i])&&player.getFriends().concat(player).contains(event.player)) goon=true;
                    }
                    if(goon==false) return false;
                    var phase;
                    for(var i=0;i<lib.phaseName.length;i++){
                        if(_status.event.getParent(lib.phaseName[i]).name){
                            phase=_status.event.getParent(lib.phaseName[i]).name;
                            break;
                        }
                    }
                    if(event.player.getHistory('useCard', function (evt) {
                        for(var i=1;i<20;i++){
                            if(evt.getParent(i)&&evt.getParent(i).name==phase){
                                if(game.findPlayer(function (current) {
                                    return evt.targets&&evt.targets.contains(current)&&targets.contains(current)&&player.getFriends().concat(player).contains(event.player);
                                })) return true;
                            }
                        }
                    }).length>1) return false;
                    return true;
                },
                forced:true,
                lastDo:true,
                content:function(){
                    trigger.directHit.addArray(game.filterPlayer(function(current) {
                        return player.getEnemies().contains(current)&&current!=player;
                    }));
                    player.line(player.getEnemies());
                },
                group:'ymtianjie_damage',
                subSkill:{
                    damage:{
                        trigger:{
                            source:'damage',
                        },
                        usable:50,
                        filter:function(event,player){
                            var players=player.getFriends().concat([player]);
                            if(players.contains(event.player.next)&&players.contains(event.player.previous)) return false;
                            if(event.player.hp<=0&&(event.player.next.hp<=0||players.contains(event.player.next))&&(event.player.previous.hp<=0||players.contains(event.player.previous))) return false;
                            return event.num>=2;
                        },
                        direct:true,
                        forced:true,
                        content:function(){
                            player.logSkill('ymtianjie');
                            var num=Math.floor(trigger.num/2);
                            var players=player.getFriends().concat([player]);
                            if(!players.contains(trigger.player.next)) trigger.player.next.damage(num);
                            if(!players.contains(trigger.player.previous)) trigger.player.previous.damage(num);
                        },
                    },
                }
            },
            ymshuyun: {
                trigger: {
                    player: ['gainEnd', 'showCardsEnd', 'showHandcardsEnd', 'viewCardsEnd']
                },
                audio:"ext:假装无敌:true",
                filter: function (event, player, name) {
                    if (!event.cards||event.cards.length==0) return false
                    return game.findPlayer2(target => {
                        for (let card of event.cards)
                            if (player.canUse(card, target, false)) return true
                        return false;
                    });
                },
                forced: true,
                content: function () {
                    'step 0'
                    event.cards = trigger.cards.slice(0);
                    'step 1'
                    let card = event.cards.shift();
                    const clone = lib.qyDeepClone(card, undefined, true);
                    const createCard = game.createCard2(card);
                    Object.assign(createCard, clone);
                    let info = lib.card[createCard.name];
                    player.chooseUseTarget(createCard, false, 'nodistance');
                    'step 2'
                    if (event.cards.length > 0) event.goto(1);
                }
            },
            ymshigu: {
                trigger: {
                    global:['damage', 'recoverBegin'],
                },
                forced: true,
                audio:"ext:假装无敌:true",
                priority: 50,
                firstDo: true,
                filter: function (event, player, name) {
                    if (name === 'damage') {
                        if (!event.player) return false;
                        if (!event.source) return false;
                        var friends=player.getFriends().concat(player);
                        return friends.contains(event.source)&&player.getEnemies().contains(event.player);
                    }
                    else if (name === 'recoverBegin') {
                        return player.getEnemies().contains(event.player) && event.player.countCards('he') > 0;
                    }
                    return false;
                },
                content: function(){
                    'step 0'
                    if (event.triggername === 'damage') {
                        var cards=[];
                        for(i=0;i<ui.cardPile.childNodes.length;i++){
                            cards.push(ui.cardPile.childNodes[i]);
                        }
                        cards.randomSort();
                        for(var i=0;i<cards.length;i++){
                            ui.cardPile.appendChild(cards[i]);
                        }
                        event.goto(1);
                    }
                    else if (event.triggername === 'recoverBegin') {
                        event.goto(3);
                    }
                    'step 1'
                    event.card = get.cards(1)
                    if(event.card) player.showCards(event.card);
                    'step 2'
                    if (event.card[0].number >= trigger.player.hp&&trigger.player.isAlive()) {
                        var target=trigger.player;
                        _status.dying.remove(target);
                        var num=1;
                        if(target.hp>20) num+=target.hp;
                        target.hp-=num;
                        target.$damage(player);
                        target.$damagepop(-num);
                        game.playqysstx('qy_damage'+(num>1?'2':''));
                        var str='受到了来自<span class="bluetext">'+(target==player?'自己':get.translation(player))+'</span>的'+get.cnNumber(num)+'点虚无伤害';
                        game.log(target,str);
                        target.update();
                        if(player.攻击分数){
                            if (get.attitude(target, player) < 0 || player.identity == 'nei') num > 5 ? player.攻击分数 += 15 : player.攻击分数 += 3 * num;
                        }
                        if(target.stat[target.stat.length-1].damaged==undefined){
                            target.stat[target.stat.length-1].damaged=num;
                        }
                        else{
                            target.stat[target.stat.length-1].damaged+=num;
                        }
                        if(player.stat[player.stat.length-1].damage==undefined){
                            player.stat[player.stat.length-1].damage=num;
                        }
                        else{
                            player.stat[player.stat.length-1].damage+=num;
                        }
                        event.source=player;
                        if(target.hp<=0){
                            event._dyinged=true;
                            target.dying(event).source=player;
                        }
                    }
                    event.finish();
                    'step 3'
                    var num=trigger.player.getCards('he').length;
                    if(trigger.num>num) trigger.num-=num;
                    else trigger.cancel();
                    var cards=trigger.player.getCards('he').randomGets(trigger.num);
                    trigger.player.lose(cards)._triggered=null;
                    trigger.player.$throw(cards);
                },
            },
            ymguiyuan: {
                enable: "phaseUse",
                audio:"ext:假装无敌:true",
                filterTarget: function (card, player, target) {
                    if(target==player) return false;
                    return !target.getHistory('custom', history => history.type === 'ymguiyuan').length;
                },
                filter: function (event, player) {
                    return game.hasPlayer((current) => lib.skill.ymguiyuan.filterTarget(null, player, current));
                },
                content: function () {
                    'step 0'
                    if (target.countCards('hej') == 0) {
                        event.cards = get.cards(1);
                    } else {
                        player.choosePlayerCard('hej', target, true, 'visible');
                    }
                    'step 1'
                    if (result.bool || event.cards) {
                        if (result.cards) event.cards = result.cards;
                        player.showCards(event.cards);
                        if (!result.cards) {
                            game.delay(1.5);
                            event.cards[0].discard();
                            target.$throw(event.cards);
                        }
                        var num = lib.translate[event.cards[0].name].length;
                        var ymguiyuanNum = 0
                        var customHistory = {
                            type: 'ymguiyuan',
                            cardTranslate: lib.translate[event.cards[0].name],
                            num,
                            ignore: false
                        }
                        target.getHistory('custom').push(customHistory)
                        const allHistory = target.getAllHistory('custom', history => !history.ignore && history.type === 'ymguiyuan');
                        ymguiyuanNum = allHistory.reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue.num, 0);

                        if (ymguiyuanNum >= target.maxHp || ymguiyuanNum >= 20) {
                            _status.dying.remove(target);
                            player.recover(1);
                            target.damage(Math.ceil(target.maxHp / 2))._triggered=null;
                            allHistory.forEach(item => item.ignore = true)
                            event.live=true;
                            event.num=target.getHistory('damage',function(evt){
                                return evt.getParent(1).name=='ymguiyuan';
                            }).length;
                            game.ymguiyuan=true;
                        }
                    }
                    'step 2'
                    var num= target.getHistory('damage',function(evt){
                        return evt.getParent(1).name=='ymguiyuan';
                    }).length;
                    if(event.live&&num<=event.num){
                        _status.dying.remove(target);
                        var num=Math.ceil(target.maxHp/2);
                        target.hp-=num;
                        target.$damage(player);
                        target.$damagepop(-num);
                        game.playqysstx('qy_damage'+(num>1?'2':''));
                        var str='受到了来自<span class="bluetext">'+(target==player?'自己':get.translation(player))+'</span>的'+get.cnNumber(num)+'点虚无伤害';
                        game.log(target,str);
                        target.update();
                        if(player.攻击分数){
                            if (get.attitude(target, player) < 0 || player.identity == 'nei') num > 5 ? player.攻击分数 += 15 : player.攻击分数 += 3 * num;
                        }
                        if(target.stat[target.stat.length-1].damaged==undefined){
                            target.stat[target.stat.length-1].damaged=num;
                        }
                        else{
                            target.stat[target.stat.length-1].damaged+=num;
                        }
                        if(player.stat[player.stat.length-1].damage==undefined){
                            player.stat[player.stat.length-1].damage=num;
                        }
                        else{
                            player.stat[player.stat.length-1].damage+=num;
                        }
                        event.source=player;
                        if(target.hp<=0){
                            event._dyinged=true;
                            target.dying(event).source=player;
                        }
                        game.ymguiyuan=true;
                    }
                },
                mark: true,
                marktext: '归愿',
                intro: {
                    content: function (storage, player) {
                        return '<li>' + game.players.slice(0).remove(player).map(current => {
                            const num = current.getAllHistory('custom', history => !history.ignore && history.type === 'ymguiyuan')
                                .reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue.num, 0)
                            return `${get.translation(current)}：归愿「${num}」次`
                        }).join('<li>')
                    },
                },
                ai: {
                    order: 10,
                    result: {
                        player:function(player, target) {
                            return -ai.get.attitude(player, target);
                        },
                        target: function (player, target) {
                            return -Infinity;
                        },
                    },
                },
            },
            ymtianyu:{
                trigger:{
                    global:'useCard',
                },
                audio:"ext:假装无敌:true",
                filter:function(event,player){
                    if(event.card.name=='shan'||event.card.name=='wuxie') return false;
                    var targets=player.getFriends().concat(player);
                    var goon=false;
                    for(var i=0;i<targets.length;i++){
                        if(event.targets.contains(targets[i])&&player.getEnemies().contains(event.player)) goon=true;
                    }
                    if(goon==false) return false;
                    var phase;
                    for(var i=0;i<lib.phaseName.length;i++){
                        if(_status.event.getParent(lib.phaseName[i]).name){
                            phase=_status.event.getParent(lib.phaseName[i]).name;
                            break;
                        }
                    }
                    if(event.player.getHistory('useCard', function (evt) {
                        for(var i=1;i<20;i++){
                            if(evt.getParent(i)&&evt.getParent(i).name==phase){
                                if(game.findPlayer(function (current) {
                                    return evt.targets&&evt.targets.contains(current)&&targets.contains(current)&&player.getEnemies().contains(event.player);
                                })) return true;
                            }
                        }
                    }).length>1) return false;
                    return true;
                },
                forced:true,
                lastDo:true,
                content:function(){
                    var targets=player.getFriends().concat(player);
                    var target=[];
                    for(var i=0;i<targets.length;i++){
                        if(trigger.targets.contains(targets[i])) target.add(targets[i])
                    }
                    trigger.excluded.addArray(target);
                    player.line(target);
                },
                group:'ymtianyu_recover',
                subSkill:{
                    recover:{
                        trigger:{
                            player:'recoverEnd',
                        },
                        usable:50,
                        filter:function(event,player){
                            var players=player.getFriends().concat(player);
                            if(!players.contains(player.next)&&!players.contains(player.previous)) return false;
                            if(player.next.hp>=player.next.maxHp&&player.previous.hp>=player.previous.maxHp) return false;
                            return event.num>=1;
                        },
                        direct:true,
                        forced:true,
                        content:function(){
                            player.logSkill('ymtianyu');
                            var num=trigger.num;
                            var players=player.getFriends().concat(player);
                            if(players.contains(player.next)) player.next.recover(num);
                            if(players.contains(player.previous)) player.previous.recover(num);
                        },
                    },
                },
            },
            ymxuwang:{
                trigger:{
                    player:'recoverBegin',
                    source:'damageBegin',
                },
                forced:true,
                init:function(player){
                    player.node.nameol.innerHTML='<span style="font-size: 23px;font-family: xingkai;color: #99ffff;text-shadow: transparent 0 0 1px, rgba(10, 155, 67, 1) 0 0 2px, rgba(10, 155, 67, 1) 0 0 5px, rgba(10, 155, 67, 1) 0 0 5px, rgba(10, 155, 67, 1) 0 0 5px, transparent 0 0 1px;">虚 妄</span>';
                },
                onremove:function(player){
                    player.node.nameol.innerHTML='';
                },
                filter:function(event,player,name){
                    if(name=='recoverBegin') return true;
                    else{
                        var phase;
                        for(var i=0;i<lib.phaseName.length;i++){
                            if(_status.event.getParent(lib.phaseName[i]).name){
                                phase=_status.event.getParent(lib.phaseName[i]).name;
                                break;
                            }
                        }
                        if(player.getHistory('sourceDamage', function (evt) {
                            for(var i=1;i<20;i++){
                                if(evt.getParent(i)&&evt.getParent(i).name==phase&&evt.player==event.player) return true;
                            }
                        }).length>0) return true;
                    }
                },
                content:function(){
                    if(event.triggername=='recoverBegin') trigger.num--;
                    else trigger.cancel();
                },
            },
            //---------------------------------------character------------------------------------------
            ymhuashen: {
                trigger: {
                    global: "gameStart",
                    player: ["enterGame", "phaseUseBegin", "changeHp"],
                },
                audio: "rehuashen",
                mark:true,
                intro:{
                    name:"化身",
                    mark:function (dialog, content, player) {
                        if (player.storage.ymhuashen) {
                            dialog.addText("已获得的武将牌：");
                            dialog.add([player.storage.ymhuashen,'character']);
                        }
                        else dialog.addText("暂无获得的武将牌");
                    },
                },
                forced: true,
                content: function () {
                    'step 0'
                    if (!player.storage.ymhuashen) player.storage.ymhuashen = [];
                    var list=[];
                    for(var i in lib.character){
                        if(lib.character[i][4].contains('unseen')) continue;
                        if(lib.character[i][4].contains('hiddenboss')) continue;
                        if(player.storage.ymhuashen.contains(i)) continue;
                        if(i.indexOf('zuoci')!=-1||i.indexOf('xushao')!=-1) continue;
                        list.push(i);
                    }
                    list=list.randomGets(5);
                    player.chooseButton([1,2],['【化身】：选择获得至多两张武将牌上的所有技能', [list, 'character']]).ai = function(button) {
                        return get.rank(button.link, true);
                    }
                    'step 1'
                    if (result.bool) {
                        var skill=[];
                        for(var i=0;i<result.links.length;i++){
                            player.storage.ymhuashen.add(result.links[i]);
                            player.flashAvatar('ynhuashen',result.links[i]);
                            skill=skill.concat(lib.character[result.links[i]][3]);
                        }
                        if(result.links.length<2) player.draw(2-result.links.length);
                        if(!player.ymhuashen) player.ymhuashen={};
                        if(!player.ymhuashen.skill){
                            player.ymhuashen.skill=[];
                        }
                        if(!player.ymhuashen.global){
                            player.ymhuashen.global=[];
                        }
                        if(!player.ymhuashen.zhu){
                            player.ymhuashen.zhu=[];
                        }
                        for (var i = 0; i < skill.length; i++) {
                            var group=[skill[i]].slice(0);
                            var global=[];
                            for(var j=0;j<group.length;j++){
                                if(lib.skill[group[j]]){
                                    var n1=group[j];
                                    var s1=lib.skill[n1];
                                    if(s1.direct) delete s1.direct;
                                    if(s1.chooseButton&&s1.chooseButton.backup){
                                        var backup=(get.info(n1).chooseButton).backup(['','','',''],player);
                                        if(!s1.content) group[j]=n1+'_backup';
                                        else group.add(n1+'_backup');
                                        if(backup.precontent) group[j]='pre_'+group[j];
                                    }
                                    if(s1.precontent){
                                        group.remove(n1);
                                        group.add('pre_'+n1);
                                    }
                                    if(s1.group) group=group.concat(s1.group);
                                    if(s1.global){
                                        global=global.concat(s1.global);
                                        for(var k=0;k<global.length;k++){
                                            if(lib.skill[global[k]]){
                                                var n2=global[k];
                                                var s2=lib.skill[n2];
                                                if(s2.direct) delete s2.direct;
                                                if(s2.chooseButton&&s2.chooseButton.backup){
                                                    var backup=(get.info(n2).chooseButton).backup(['','','',''],player);
                                                    if(!s2.content) global[k]=n2+'_backup';
                                                    else global.add(n2+'_backup');
                                                    if(backup.precontent) global[k]='pre_'+global[k];
                                                }
                                                if(s2.precontent){
                                                    global.remove(n2);
                                                    global.add('pre_'+n2);
                                                }
                                                if(s2.group) global=global.concat(s2.group);
                                                if(s2.global) global=global.concat(s2.global);
                                            }
                                        }
                                    }
                                }
                            }
                            for(var j=0;j<group.length;j++){
                                if(group.indexOf(group[j])!=j) group.splice(j--, 1);
                                else if(lib.skill[group[j]]&&(lib.skill[group[j]].popup==false||lib.skill[group[j]].silent)) group.splice(j--, 1);
                            }
                            for(var j=0;j<global.length;j++){
                                if(global.indexOf(global[j])!=j) global.splice(j--, 1);
                                else if(lib.skill[global[j]]&&(lib.skill[global[j]].popup==false||lib.skill[global[j]].silent)) global.splice(j--, 1);
                            }
                            player.ymhuashen.zhu.add(skill[i]);
                            player.ymhuashen.global.addArray(global);
                            player.ymhuashen.skill.addArray(group).addArray(global);
                            group=group.map(item => item + 'After');
                            global=global.map(item => item + 'After');
                            player.addTempSkill(skill[i],{player:group,global:global});
                        }
                        for(var i=0;i<skill.length;i++) skill[i]='【'+get.translation(skill[i])+'】';
                        game.log(player, '获得了', `#g${skill}`);
                    }
                    else player.draw(2);
                    'step 2'
                    if(player.isLinked()) player.link();
                    if(player.isTurnedOver()) player.turnOver();
                    for(var i=1;i<6;i++) if(player.isDisabled(i)) player.enableEquip('equip'+i);
                    var maxHp=get.infoMaxHp(lib.character['qy_qyzuoci'][2]);
                    if(player.maxHp<maxHp){
                        player.maxHp=maxHp;
                        player.update();
                    }
                },
                group:'ymhuashen_skill',
                subSkill:{
                    skill:{
                        trigger:{
                            global:['useSkillAfter','useCardAfter','respondAfter'],
                        },
                        silent:true,
                        popup:false,
                        forced:true,
                        filter:function(event,player){
                            if(!player.ymhuashen) return false;
                            if(player.ymhuashen.global&&player.ymhuashen.global.contains(event.skill)) return true;
                            if(player.ymhuashen.skill&&player.ymhuashen.skill.contains(event.skill)) return event.player==player;
                            return false;
                        },
                        content:function(){
                            var skill=player.ymhuashen.zhu.slice(0);
                            for(var i=0;i<skill.length;i++){
                                var temp=[skill[i]];
                                if(lib.skill[skill[i]]){
                                    for(var j=0;j<temp.length;j++){
                                        if(lib.skill[temp[j]]){
                                            var n=temp[j];
                                            var s=lib.skill[n];
                                            if(s.chooseButton&&s.chooseButton.backup){
                                                var backup=(get.info(n).chooseButton).backup(['','','',''],player);
                                                if(!s.content) temp[j]=n+'_backup';
                                                else temp.add(n+'_backup');
                                                if(backup.precontent) temp[j]='pre_'+temp[j];
                                            }
                                            if(s.precontent){
                                                temp.remove(n);
                                                templ.add('pre_'+n);
                                            }
                                            if(s.group) temp=temp.concat(s.group);
                                            if(s.global) temp=temp.concat(s.global);
                                        }
                                    }
                                    temp=[skill[i]].addArray(temp);
                                }
                                if(temp.contains(trigger.skill)){
                                    var parent;
                                    for(var j=0;j<player.ymhuashen.zhu.length;j++){
                                        if(temp.contains(player.ymhuashen.zhu[j])){
                                            parent=player.ymhuashen.zhu[j];break;
                                        }
                                    }
                                    if(player.tempSkills[parent]){
                                        player.removeSkill(parent);
                                        player.ymhuashen.zhu.remove(parent);
                                        player.ymhuashen.skill.removeArray(temp);
                                        player.ymhuashen.global.removeArray(temp);
                                    }
                                    break;
                                }
                            }
                        },
                    },
                },
            },
            ymxinsheng: {
                mark: true,
                audio: "xinsheng",
                limited: true,
                skillAnimation: true,
                animationColor: "water",
                unique: true,
                enable: "phaseUse",
                init: function (player) {
                    player.storage.ymxinsheng = false;
                },
                filterTarget: function (card, player, target) {
                    return true;
                },
                filter: function (event, player) {
                    if (player.storage.ymxinsheng == true) return false;
                    return true;
                },
                content: function () {
                    "step 0"
                    player.storage.ymxinsheng = true;
                    player.awakenSkill(event.name);
                    "step 1"
                    var list = [];
                    if (!_status.characterskill) {
                        _status.characterskill = [];
                        for (var i in lib.character) {
                            if (Array.isArray(lib.character[i][3])) _status.characterskill.addArray(lib.character[i][3]);
                        }
                    }
                    for (var i in lib.skill) {
                        if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
                        if (_status.characterskill.contains(i)) list.add(i);
                    }
                    var num = player.getSkills(true,false).length;
                    for (var i = 0; i < player.getSkills(true,false).length; i++) {
                        if (!list.contains(player.getSkills(true,false)[i])) num--;
                    }
                    var skill = list.randomGets(num);
                    var skill1 = target.getSkills(true, false);
                    for (var i = 0; i < skill1.length; i++) {
                        if (get.translation(skill1[i], 'info') && get.translation(skill1[i] + '_info').length != 0) target.removeSkill(skill1[i], true);
                    }
                    for (var i = 0; i < skill.length; i++) {
                        target.addSkill(skill[i]);
                    }
                    game.log(target, '的技能被替换成了', `#g【${get.translation(skill)}】`);
                },
                ai: {
                    order: 9,
                    result:{
                        target:function(player,target){
                            var num1 = target.getSkills(true, false).length;
                            var num2 = player.getSkills(true, false).length;
                            if(num1<num2){
                                return 1;
                            }
                            else if(num1>=num2){
                                return -1;
                            }
                        },
                    },
                },
                intro: {
                    content: "limited",
                },
            },
            ymlingren: {
                usable: 1,
                audio: "xinfu_lingren",
                trigger: {
                    player: "useCardToPlayered",
                },
                direct: true,
                filter: function (event, player) {
                    if (get.tag(event.card, 'damage')) return true;
                    return false;
                },
                content: function () {
                    'step 0'
                    event.count = 0;
                    player.chooseTarget([1, Infinity], get.prompt2(event.name), function (card, player, target) {
                        return _status.event.targets.contains(target);
                    }).set('ai', function (target) {
                        return 2 - get.attitude(_status.event.player, target);
                    }).set('targets', trigger.targets);
                    'step 1'
                    if (result.targets || (event.targets && event.count < event.targets.length)) {
                        if (!event.targets) event.targets = result.targets;
                        player.logSkill(event.name, event.targets[event.count]);
                        var target = event.targets[event.count];
                        event.target = target;
                        event.choice = {
                            basic: false,
                            trick: false,
                            equip: false,
                        }
                        var list = [];
                        list.push(['类型', '', 'basic']);
                        list.push(['类型', '', 'trick']);
                        list.push(['类型', '', 'equip']);
                        var choice = [];
                        var rand1 = 0.95;
                        if (!target.countCards('h', {type: ['basic']})) rand1 = 0.05;
                        if (!target.countCards('h')) rand1 = 0;
                        if (Math.random() < rand1) choice.add('basic');
                        var rand2 = 0.9;
                        if (!target.countCards('h', {type: ['trick', 'delay']})) rand2 = 0.1;
                        if (!target.countCards('h')) rand2 = 0;
                        if (Math.random() < rand2) choice.add('trick');
                        var rand3 = 0.75;
                        if (!target.countCards('h', {type: ['equip']})) rand3 = 0.25;
                        if (!target.countCards('h')) rand3 = 0;
                        if (Math.random() < rand3) choice.add('equip');
                        var dialog = ui.create.dialog('凌人', [list, 'vcard']);
                        if (!event.isMine() && choice.length == 0) event.goto(3);
                        player.chooseButton([0, 3], dialog).set('ai', function (button) {
                            var select = _status.event.button;
                            if (select.length == 0) return 0;
                            return select.contains(button.link[2]);
                        }).set('button', choice);
                    } else {
                        player.storage.counttrigger.xinfu_lingren--;
                        event.finish();
                    }
                    'step 2'
                    if (result.bool) {
                        for (var i = 0; i < result.links.length; i++) {
                            event.choice[result.links[i][2]] = true;
                        }
                    } else {
                        player.storage.counttrigger.xinfu_lingren--;
                        event.finish();
                    }
                    'step 3'
                    game.delay();
                    var reality = {
                        basic: false,
                        trick: false,
                        equip: false,
                    }
                    var he = event.targets[event.count].getCards('h');
                    for (var i = 0; i < he.length; i++) {
                        reality[get.type(he[i], 'trick')] = true;
                    }
                    event.num = 0;
                    var tl = ['basic', 'trick', 'equip'];
                    for (var i = 0; i < tl.length; i++) {
                        if (event.choice[tl[i]] == reality[tl[i]]) event.num++;
                    }
                    'step 4'
                    player.popup('猜对' + get.cnNumber(event.num) + '项');
                    game.log(player, '猜对了' + get.cnNumber(event.num) + '项');
                    if (event.num > 0) {
                        event.targets[event.count].addTempSkill('lingren_adddamage');
                        event.targets[event.count].storage.lingren = {
                            card: trigger.card,
                            //player:event.targett,
                        }
                    }
                    //var num = Math.min(event.count + 1, 3);
                    if (event.num > 1 && !event.draw) {
                        player.draw(event.targets.length);
                        event.draw = true;
                    }
                    if (event.num > 2) {
                        var list = [];
                        for (var i in lib.character) {
                            if (Array.isArray(lib.character[i][3])) list.addArray(lib.character[i][3]);
                        }
                        var skill = event.targets[event.count].getSkills(true, false);
                        for (var i = 0; i < skill.length; i++) {
                            if (!list.contains(skill[i]) || !get.translation(skill[i]) || lib.skill[skill[i]] == undefined || lib.skill[skill[i]].hiddenSkill || lib.skill[skill[i]].equipSkill) skill.splice(i--, 1);
                        }
                        var addskill = skill.randomGet();
                        if (player != event.targets[event.count]) {
                            event.targets[event.count].disableSkill('olduorui2', addskill);
                            event.targets[event.count].addTempSkill('olduorui2', {player: 'phaseAfter'});
                        }
                        player.addTempSkill(addskill, {player: 'phaseBegin'});
                    }
                    if (event.count < event.targets.length - 1) {
                        event.count++;
                        event.goto(1);
                    }
                },
                ai: {
                    threaten: 2.4,
                },
            },
            ymfujian: {
                audio: "xinfu_fujian",
                trigger: {
                    player: ["phaseEnd", "phaseBegin"],
                },
                forced: true,
                filter: function (event, player) {
                    return game.countPlayer(function (current) {
                        if (current == player) return false;
                        return current.countCards('h') > 0;
                    });
                },
                content: function () {
                    'step 0'
                    player.chooseTarget(true, get.prompt2(event.name), function (card, player, target) {
                        return target != player && target.countCards('h') > 0;
                    }).set('ai', function (target) {
                        return 1 - get.attitude(_status.event.player, target);
                    });
                    'step 1'
                    event.target = result.targets[0];
                    player.chooseButton([0, player.countCards('h')], [get.translation(event.target) + '的手牌', event.target.getCards('h')], true).set('ai', function (button) {
                        var target = event.target;
                        var card = button.link;
                        var val = target.getUseValue(card);
                        if (val > 0) return val;
                        return get.value(card);
                    });
                    'step 2'
                    if (result.bool && result.links && result.links.length) {
                        if (result.links.length == event.target.countCards('h')) event.log = true;
                        player.gain(result.links, event.target, 'giveAuto')._triggered = null;
                        player.chooseCard(result.links.length, true, '选择' + result.links.length + '张牌交给' + get.translation(event.target), function (card) {
                            return !result.links.contains(card);
                        }).set('ai', function (card) {
                            return 10 - get.value(card)
                        });
                    }
                    'step 3'
                    if (result.bool && result.cards && result.cards.length) {
                        event.target.gain(result.cards, player, 'giveAuto')._triggered = null;
                        if (event.log) {
                            var cards = [];
                            game.getGlobalHistory('cardMove', function (evt) {
                                if (evt == trigger || (evt.name != 'lose' && evt.name != 'cardsDiscard')) return false;
                                if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
                                for (var i = 0; i < evt.cards.length; i++) {
                                    cards.add(evt.cards[i]);
                                }
                            }, trigger);
                            var draw = cards.randomGets(Math.ceil(cards.length / 2));
                            player.gain(draw)._triggered = null;
                        }
                    }
                },
            },
            ymguji: {
                audio: 'kunfen',
                trigger: {
                    player: "damageEnd",
                    source: "damageBegin1",
                },
                forced: true,
                filter: function (event, player, name) {
                    var group=[];
                    game.countPlayer(function (current) {
                        group.push(current.group);
                    });
                    var obj = {};
                    for(var i=0;i<group.length;i++){
                        var gro = Object.keys(obj);
                        if(gro.indexOf(String(group[i])) != -1)obj[group[i]]++;
                        else obj[group[i]] = 1;
                    }
                    var max = 0, min = Infinity;
                    var up = [], down = [];
                    for(var i in obj){
                        if(obj[i]>max){
                            max = obj[i];
                            up.length = 0;
                            up.push(i);
                        }else if(obj[i] == max){
                            up.push(i);
                        }
                        if(obj[i]<min){
                            min = obj[i];
                            down.length = 0;
                            down.push(i);
                        }else if(obj[i] == min){
                            down.push(i);
                        }
                    }
                    if(name=='damageBegin1'){
                        return down.contains(player.group);
                    }
                    else return up.contains(player.group);
                },
                content: function () {
                    'step 0'
                    if(event.triggername=='damageBegin1'){
                        trigger.num++;
                        player.discardPlayerCard(trigger.player, 'he', 2, true);
                        event.group=trigger.player.group;
                        event.goto(2);
                    }
                    else {
                        event.group=trigger.source.group;
                        player.chooseTarget('选择一名角色回复一点体力并摸两张牌', function (card, player, target) {
                            return true;
                        }).set('ai', function (target) {
                            var player = _status.event.player;
                            return ai.get.recoverEffect(target, player, player)+1;
                        });
                    }
                    'step 1'
                    if(result.targets){
                        result.targets[0].recover();
                        result.targets[0].draw(2);
                    }
                    'step 2'
                    player.changeGroup(event.group);
                },
            },
            ymhaixian: {
                audio: 'zhiji',
                trigger: {
                    player: "damageBegin4",
                },
                filter: function (event) {
                    return (event.num > 0);
                },
                content: function () {
                    "step 0"
                    player.chooseTarget([1, 2], true, get.prompt(event.name), '选择至多2名其他角色受到你造成的' + trigger.num + '点伤害', function (card, player, target) {
                        return target != player;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.damageEffect(target, player, player);
                    });
                    "step 1"
                    if (result.targets) {
                        for (var i = 0; i < result.targets.length; i++) {
                            result.targets[i].damage(trigger.num, trigger.nature);
                        }
                        var group=[];
                        game.countPlayer(function (current) {
                            group.push(current.group);
                        });
                        var obj = {};
                        for(var i=0;i<group.length;i++){
                            var gro = Object.keys(obj);
                            if(gro.indexOf(String(group[i])) != -1)obj[group[i]]++;
                            else obj[group[i]] = 1;
                        }
                        var max = 0;
                        for(var i in obj){
                            if(obj[i]>max) max = obj[i];
                        }
                        event.cards = get.cards(max);
                    }
                    "step 2"
                    if (event.cards.length > 1) {
                        player.chooseCardButton('将“害贤”牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                            if (ui.selected.buttons.length == 0) return 1;
                            return 0;
                        });
                    } else if (event.cards.length == 1) {
                        event._result = {links: event.cards.slice(0), bool: true};
                    } else {
                        event.goto(5);
                    }
                    "step 3"
                    if (result.bool) {
                        for (var i = 0; i < result.links.length; i++) {
                            event.cards.remove(result.links[i]);
                        }
                        event.togive = result.links.slice(0);
                        player.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true).set('ai', function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (_status.event.enemy) {
                                return -att;
                            } else if (att > 0) {
                                return att / (1 + target.countCards('h'));
                            } else {
                                return att / 100;
                            }
                        }).set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                    }
                    "step 4"
                    if (result.targets.length) {
                        result.targets[0].gain(event.togive, 'draw');
                        player.line(result.targets[0], 'green');
                        game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                        event.goto(2);
                    }
                    "step 5"
                    event.finish();
                },
                ai: {
                    maixie: true,
                    "maixie_hp": true,
                    effect: {
                        target: function (card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (!target.hasFriend()) return;
                                var num = 1;
                                if (get.attitude(player, target) > 0) {
                                    if (player.needsToDiscard()) {
                                        num = 0.7;
                                    } else {
                                        num = 0.5;
                                    }
                                }
                                if (target.hp >= 4) return [1, num * 2];
                                if (target.hp == 3) return [1, num * 1.5];
                                if (target.hp == 2) return [1, num * 0.5];
                            }
                        },
                    },
                },
            },
            ymzhonglie: {
                audio: 'fengliang',
                trigger: {
                    global: "useCard",
                },
                direct: true,
                check: function (event, player) {
                    var att = 0;
                    for (var i = 0; i < event.targets.length; i++) {
                        att += get.attitude(player, event.targets[i]);
                    }
                    return att > 0;
                },
                filter: function (event, player) {
                    if(!event.targets) return false;
                    if(event.targets.contains(event.player)) return false;
                    if(!get.tag(event.card, 'damage')&&event.card.name!='tao') return false;
                    if (event.player==player) return false;
                    if(event.targets[0]==player&&event.targets.length==1) return false;
                    return true;
                },
                autodelay: true,
                content: function () {
                    'step 0'
                    event.num=trigger.targets.length-1;
                    player.chooseToDiscard('he', false, get.prompt(event.name), '弃置一张牌取消这些目标，然后你成为此目标').set('ai', function (card) {
                        return 8 - get.value(card);
                    });
                    'step 1'
                    if (result.bool) {
                        var targets=trigger.targets.slice(0).remove(player);
                        player.logSkill(event.name,targets);
                        trigger.excluded.addArray(targets);
                        trigger.player.line(player, 'green');
                        trigger.targets=[player];
                        player.draw(event.num);
                    }
                },
            },
            ymtaiping: {
                trigger: {
                    player: "loseAfter",
                },
                audio: 'xinleiji',
                filter: function (event, player) {
                    if (event.type != 'discard') return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].origina == 'j') return false;
                    }
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.position(event.cards[i]) == 'd') {
                            return true;
                        }
                    }
                    return false;
                },
                content: function () {
                    'step 0'
                    player.judge();
                    'step 1'
                    event.color = result.color;
                    event.card = result.card;
                    player.chooseTarget(`选择一名其他角色令其受到${result.color === 'red' ? '火' : '雷'}属性伤害`, lib.filter.notMe, function (target) {
                        var player = get.player();
                        return ai.get.damageEffect(target, player, player);
                    });
                    'step 2'
                    if (result.bool) {
                        player.storage.ymtaiping = true;
                        event.targets = result.targets;
                        result.targets.forEach(current => current.damage(event.color === 'red' ? 'fire' : 'thunder'));
                    } else event.finish();
                    'step 3'
                    if (player.storage.ymtaiping == true) {
                        var num = [1, 2].randomGet();
                        if (num == 1) event.targets[0].chooseToDiscard(2, true);
                        if (num == 2) player.draw(2);
                    }
                    player.storage.ymtaiping = false;
                },
                group: 'ymtaiping_cancel',
                subSkill: {
                    cancel: {
                        silent: true,
                        popup: false,
                        forced: true,
                        trigger: {
                            source: ['damageSource'],
                        },
                        filter: function (event, player) {
                            if (player.storage.ymtaiping == false) return false;
                            return true;
                        },
                        content: function () {
                            player.storage.ymtaiping = false;
                        },
                    },
                },
            },
            ymqiyi: {
                usable: 3,
                audio: 'xinguidao',
                trigger: {
                    source: 'damageEnd',
                },
                content: function () {
                    window.navigator.getBattery().then(battery => {
                        if (Math.random() <= battery.level) {
                            navigator.getBattery().then(battery => player.popup("<span style='color: OrangeRed'>当前电量：" + battery.level * 100 + "</span>"));
                            player.useSkill('ymtaiping');
                        }
                    }).catch(err => {
                        player.popup("<span style='color: OrangeRed'>当前电量：" + 100 + "</span>");
                        player.useSkill('ymtaiping')
                    });
                }
            },
            ymhuangtian: {
                audio: "huangtian2",
                trigger: {
                    player: "damageEnd",
                },
                forced: true,
                content: function () {
                    var num1 = 0;
                    var num2 = 0;
                    game.countPlayer(function (current) {
                        if (current.group == player.group) num1++;
                        else num2++;
                    });
                    if (num1 > 3) num1 = 3;
                    if (num2 > 3) num2 = 3;
                    player.draw(num1);
                    if (num2 > 0) player.chooseToDiscard(num2, true);
                },
            },
            ymtiandao: {
                audio: "guidao",
                zhuSkill: true,
                equipSkill: false,
                noHidden: true,
                inherit: "taipingyaoshu",
                mod: {
                    maxHandcard: function (player, num) {
                        if (player.isEmpty(5) && player.hasZhuSkill('ymtiandao')) {
                            if (get.mode() == 'guozhan') {
                                if (player.hasSkill('huangjintianbingfu')) {
                                    num += player.storage.huangjintianbingfu.length;
                                }
                                return num + game.countPlayer(function (current) {
                                    return current.isFriendOf(player);
                                });
                            }
                            return num + game.countGroup();
                        }
                        return num;
                    },
                },
                trigger: {
                    player: "damageBegin4",
                },
                filter: function (event, player) {
                    if (!lib.skill.taipingyaoshu.filter.apply(this, arguments)) return false;
                    if (!player.isEmpty(5)) return false;
                    if (!player.hasZhuSkill('ymtiandao')) return false;
                    if (player.hasSkillTag('unequip2')) return false;
                    if (event.source && event.source.hasSkillTag('unequip', false, {
                        name: event.card ? event.card.name : null,
                        target: player,
                        card: event.card
                    })) return false;
                    if (event.nature) return true;
                },
                forced: true,
                content: function () {
                    trigger.cancel();
                },
                ai: {
                    nofire: true,
                    nothunder: true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (!player.isEmpty(5) || !player.hasZhuSkill('ymtiandao')) return;
                            if (target.hasSkillTag('unequip2')) return;
                            if (player.hasSkillTag('unequip', false, {
                                name: card ? card.name : null,
                                target: target,
                                card: card
                            }) || player.hasSkillTag('unequip_ai', false, {
                                name: card ? card.name : null,
                                target: target,
                                card: card
                            })) return;
                            if (get.tag(card, 'natureDamage')) return 'zerotarget';
                            if (card.name == 'tiesuo') {
                                return [0, 0];
                            }
                        },
                    },
                },
                locked: true,
            },
            ymqiangwu: {
                audio: 'qiangwu',
                enable: "phaseUse",
                usable: 1,
                content: function () {
                    "step 0"
                    var color = ['black', 'red'];
                    player.chooseControl(color).set('prompt', '请猜测一种颜色').set('ai', function () {
                        return color.randomGet();
                    });
                    "step 1"
                    event.card = get.cards();
                    player.showCards(event.card);
                    if (result.control == get.color(event.card)) {
                        player.popup("<span style='color: red'>猜对</span>");
                        player.addTempSkill('ymqiangwu_sha');
                    }
                    if (result.control != get.color(event.card)) {
                        player.popup("<span style='color: black'>猜错</span>");
                        var card = [];
                        card.push(game.createCard('sha'));
                        card.push(game.createCard('jiu'));
                        player.gain(card, 'gain2');
                    }
                },
                ai: {
                    result: {
                        player: 1,
                    },
                    order: 11,
                },
                subSkill: {
                    sha: {
                        mod: {
                            targetInRange: function (card, player, target, now) {
                                if (get.type(card, 'basic')) return true;
                            },
                            cardUsable: function (card, player, num) {
                                if (get.type(card, 'basic')) return Infinity;
                            },
                        },
                        sub: true,
                    },
                },
            },
            ymjiejun: {
                trigger: {
                    player: "useCardToBegin",
                },
                audio: 'qiangwu',
                shaRelated: true,
                direct: true,
                filter: function (event, player) {
                    return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                },
                content: function () {
                    'step 0'
                    var next = player.choosePlayerCard(trigger.target, 'hej', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('ymjiejun', trigger.target));
                    next.set('ai', function (button) {
                        if (!_status.event.goon) return 0;
                        var val = get.value(button.link);
                        if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                        return val;
                    });
                    next.set('goon', get.attitude(player, trigger.target) <= 0);
                    next.set('forceAuto', true);
                    'step 1'
                    if (result.bool) {
                        var target = trigger.target;
                        player.logSkill(event.name, trigger.target);
                        var type = [];
                        result.cards.forEach(card => type.add(get.position(card)));
                        trigger.baseDamage += type.length;
                        target.addToExpansion(result.cards,'giveAuto',target).gaintag.add('ymjiejun_2');
                        target.addSkill('ymjiejun_2');
                        //game.log(target, '失去了' + get.cnNumber(result.cards.length) + '张牌');
                    }
                },
                ai: {
                    "unequip_ai": true,
                    "directHit_ai": true,
                    skillTagFilter: function (player, tag, arg) {
                        if (get.attitude(player, arg.target) > 0) return false;
                        if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                        if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                        return false;
                    },
                },
                subSkill: {
                    2: {
                        charlotte:true,
                        trigger: {global: 'phaseJieshuBegin'},
                        forced: true,
                        popup: false,
                        filter: function (event, player) {
                            return player.getExpansions('ymjiejun_2').length>0;
                        },
                        content: function () {
                            'step 0'
                            event.source = game.findPlayer(current => current.hasSkill('ymjiejun'));
                            var dialog = ui.create.dialog(`【劫军】`);
                            dialog.addText(`请选择获得${Math.ceil(player.getExpansions('ymjiejun_2').length / 2)}张 ` + get.translation(player) + ' 的〖劫军〗牌：');
                            dialog.add([player.getExpansions('ymjiejun_2'), 'card']);
                            event.source.chooseButton(dialog, true).set('selectButton', [Math.ceil(player.getExpansions('ymjiejun_2').length / 2), Math.ceil(player.getExpansions('ymjiejun_2').length / 2)]).set('ai', function (button) {
                                return 7 - get.buttonValue(button)
                            });
                            'step 1'
                            // if(!result.bool) return event.finish();
                            event.source.gain(result.links, player, 'giveAuto');
                            for(var i=0;i<result.links.length;i++){
                                result.links[i].gaintag.remove('ymjiejun_2');
                            }
                            if (player.getExpansions('ymjiejun_2') && player.getExpansions('ymjiejun_2').length) {
                                game.log(player, '收回了' + get.cnNumber(player.gain(player.getExpansions('ymjiejun_2')).cards.length) + '张〖劫军〗牌');
                                player.getExpansions('ymjiejun_2').length = 0;
                            }
                            player.removeSkill('ymjiejun_2');
                        },
                        marktext: '军',
                        mark: true,
                        intro:{
                            markcount:"expansion",
                            mark:function(dialog,storage,player){
                                var cards=player.getExpansions('ymjiejun_2');
                                if(player.isUnderControl(true)) dialog.addAuto(cards);
                                else return '共有'+get.cnNumber(cards.length)+'张牌';
                            },
                        },
                    },
                },
            },
            ymkuidi: {
                trigger: {
                    global: "gameStart",
                    source: "damageAfter",
                },
                audio: 'shenxian',
                /*init: function (player) {
                                if (typeof (player.storage.ymkuidi) !== 'number') player.storage.ymkuidi = 0;
                            },*/
                forced: true,
                filter: function (event, player, name) {
                    if (name == 'gameStart') return true;
                    return event.card && event.card.name === 'sha';
                },
                content: function () {
                    if (typeof (player.storage.ymkuidi) !== 'number') player.storage.ymkuidi = 0;
                    player.addMark('ymkuidi', trigger.num || 1);
                },
                //mark: true,
                marktext: '枪',
                intro: {
                    name: '溃敌·枪',
                    content: 'mark',
                },
                group: ['ymkuidi_phaseUse', 'ymkuidi_damage', 'ymkuidi_phase'],
                subSkill: {
                    phaseUse: {
                        audio: 'shenxian',
                        enable: 'phaseUse',
                        forced: true,
                        sub: true,
                        filterTarget: function (card, player, target) {
                            if (target.hasMark('ymkuidi')) return false;
                            return player != target > 0;
                        },
                        filter: function (event, player) {
                            if (event.player.countMark('ymkuidi') <= 0) return false;
                            if (player.countMark('ymkuidi') <= 0) return false;
                            return game.countPlayer(function (current) {
                                if (!current.hasMark('ymkuidi')) return true;
                            });
                        },
                        content: function () {
                            player.removeMark('ymkuidi', 1);
                            target.addMark('ymkuidi', 1);
                        },
                        ai: {
                            order: 11,
                            result: {
                                target: function (player, target) {
                                    if ((player.countMark('ymkuidi') >= 2 || !game.hasPlayer(function (current) {
                                        return current != player && get.attitude(player, current) < 0 && current.hasMark('ymkuidi');
                                    })) && player.countCards('h', function (card) {
                                        return get.tag(card, 'damage') && player.canUse(card, target, null, true) && player.getUseValue(card) > 0 && get.effect_use(target, card, player) > 0 && target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: card,
                                        });
                                    })) return 3 / Math.max(1, target.hp);
                                    if ((!player.hasUnknown() && game.countPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    }) <= 1) || player.countMark('ymkuidi') >= 2) {
                                        return -1;
                                    }
                                    return 0;
                                },
                            },
                            effect: {
                                player: function (card, player, target) {
                                    if (player != target && get.tag(card, 'damage') && target && target.hasMark('ymkuidi') && !target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: card,
                                    })) return [1, 0, 1, -2];
                                },
                            },
                            threaten: 1.6,
                        },
                    },
                    damage: {
                        trigger: {
                            source: 'damageBegin'
                        },
                        filter: function (event, player) {
                            return event.player.countMark('ymkuidi') > 0 && event.player != player;
                        },
                        forced: true,
                        content: function () {
                            trigger.num++;
                        },
                        sub: true,
                    },
                    phase: {
                        trigger: {
                            global: 'phaseBegin'
                        },
                        audio: 'shenxian',
                        forced: true,
                        popup: false,
                        filter: function (event, player) {
                            if (event.player === player) return false;
                            return event.player.countMark('ymkuidi') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.logSkill('ymkuidi', trigger.player);
                            trigger.player.removeMark('ymkuidi', 1);
                            trigger.player.storage.ymkuidi = 0;
                            var controls = ['选项一', '选项二', '选项三'];
                            player.chooseControl(controls).set('prompt', '溃敌<br><br><div class="text">选项一:该角色受到1点随机属性伤害且本回合不能使用基本牌。</div><br><div class="text">选项二:该角色失去1点体力且本回合不能获得牌。</div></br><div class="text">选项三:你选择获得该角色区域内的两张牌。</div></br>')
                                .set('ai', function (event, player) {
                                    if (trigger.player.hp < 2 || player.countCards('h') > 2) return ['选项一', '选项二'].randomGet();
                                    return '选项三';
                                });
                            'step 1'
                            var target = trigger.player;
                            if (result.control === '选项一') {
                                target.damage().nature = lib.linked.randomGet();
                                target.addTempSkill('ymkuidi_sha')
                            } else if (result.control === '选项二') {
                                target.loseHp();
                                target.addTempSkill('ymkuidi_gain');
                            } else if (result.control === '选项三') {
                                player.gainPlayerCard(true, 2, target, 'hej');
                            }
                        },
                        sub: true,
                    },
                    sha: {
                        sub: true,
                        onremove: true,
                        unique: true,
                        charlotte: true,
                        mod: {
                            cardEnabled2: function (card, player) {
                                if (get.type(card) === 'basic') return false;
                                return void 0;
                            },
                        },
                        mark: true,
                        intro: {
                            content: '不能使用基本牌',
                        },
                    },
                    gain: {
                        trigger: {
                            player: 'gainBefore'
                        },
                        sub: true,
                        silent: true,
                        popup: false,
                        forced: true,
                        mark: true,
                        onremove: true,
                        unique: true,
                        charlotte: true,
                        content: function () {
                            trigger.cancel();
                        },
                        intro: {
                            content: '不能获得牌',
                        },
                    },
                },
            },
            ymguhuo: {
                trigger: {
                    global: ['gameStart', 'die', 'roundStart'],
                    player: 'enterGame',
                },
                audio: 'guhuo',
                forced: true,
                fixed: true,
                charlotte: true,
                forceunique: true,
                unique: true,
                init: function (player) {
                    if (!player.storage.ymguhuoxuxing) player.storage.ymguhuoxuxing = [];
                },
                filter:function(event,player,name){
                    if(name=='roundStart') return game.roundNumber%2==1;
                    return true;
                },
                content: function () {
                    'step 0'
                    if (event.triggername != 'die') {
                        var list = [];
                        for (var i in lib.character) list.push(i);
                        var players = game.players.concat(game.dead);
                        for (var i = 0; i < players.length; i++) {
                            if (list.contains(players[i].name)) list.remove(players[i].name);
                            if (list.contains(players[i].name1)) list.remove(players[i].name1);
                            if (list.contains(players[i].name2)) list.remove(players[i].name2);
                        }
                        event.name = list.randomGet();
                    }
                    if (event.triggername == 'die') event.name = trigger.player.name;
                    if (player.storage.subplayer) {
                        event.exit = true;
                        event.limit = player.name.replace('subplayer_', '')
                        player.exitSubPlayer();
                        //event.trigger('subPlayerExit');
                    }
                    'step 1'
                    var info = lib.character[event.name];
                    var tag = player.addSubPlayer({
                        source: player.name,
                        name: event.name,
                        hp: get.infoHp(info[2]),
                        hs: get.cards(4),
                        skills: ['ymguhuo'].concat(info[3]),
                        maxHp: get.infoMaxHp(info[2]),
                        group: info[1],
                        sex: info[0],
                        skill: 'subplayer_' + event.name,
                    });

                    if (info[4] && info[4].some(value => value.indexOf("ext") !== -1)) lib.character[tag] = info;
                    var skills2 = lib.character[event.name][3];
                    player.chooseControl(skills2).set('prompt', '请选择要获得的技能').set('ai', function () {
                        return skills2.randomGet();
                    });
                    'step 2'
                    player.storage.ymguhuoxuxing.add(result.control);
                    if (!player.storage.subplayer) player.addAdditionalSkill('ymguhuo', player.storage.ymguhuoxuxing, true);
                    if (event.exit == true) {
                        var tag = Object.keys(player.storage).filter(value => {
                            return value.indexOf(`subplayer_${event.limit}`) === 0;
                        })[0];
                        if (tag) {
                            player.callSubPlayer(tag);
                            player.removeAdditionalSkill('ymguhuo');
                        }
                    }
                },
                group: ['ymguhuo_phase', 'ymguhuo_back'],
                subSkill: {
                    phase: {
                        trigger: {
                            player: ["phaseBegin", "phaseEnd", "ymguhuo_phaseAfter", "subplayerAfter"],
                        },
                        audio: 'guhuo',
                        filter: function (enent, player, name) {
                            if (name == 'ymguhuo_phaseAfter') player.addSkill('ymguhuo');
                            else return true;
                        },
                        direct:true,
                        content: function () {
                            'step 0'
                            var control = ['切换本体', '替换虚影', 'cancel'];
                            if (!player.hasSkill('subplayer')) control.remove('切换本体');
                            event.subPlayers = [];
                            Object.keys(player.storage).map(value => {
                                if (typeof player.storage[value] === 'object' && player.storage[value].skill && player.storage[value].skill.indexOf('subplayer_') === 0) event.subPlayers.add(player.storage[value].skill.replace('subplayer_', ''));
                            });
                            event.subPlayers = event.subPlayers.filter(function (value) {
                                if (!player.storage.subplayer) return true;
                                return player.storage.subplayer.name2 === value;
                            });
                            if (!event.subPlayers.length) control.remove("替换虚影");
                            //event.subPlayers.remove(player.skill.replace('subplayer_', ''));
                            //if(event.subPlayers.lenhth<2) control.remove('替换虚影');
                            if(control.length>1){
                                player.chooseControl(control).set('prompt', '请选择“切换本体”或“替换虚影”').set('ai', function () {
                                    if (control.contains('替换虚影')) return '替换虚影';
                                    else return 'cancel';
                                });
                            }
                            else event.finish();
                            'step 1'
                            if (result.control == 'cancel') {
                                return event.finish();
                            }
                            player.logSkill(event.name);
                            if (result.control == '切换本体') {
                                player.exitSubPlayer();
                                event.trigger('subPlayerExit');
                            }
                            if (result.control == '替换虚影') {
                                player.exitSubPlayer();
                                event.trigger('subPlayerExit');
                                var dialog = ui.create.dialog('蛊惑：请选择替换的【虚影】');
                                if (event.subPlayers.length) {
                                    dialog.addText('<span style="color:yellow">拥有的【虚影】：</span>');
                                    dialog.add([event.subPlayers, 'character']);
                                    dialog.addText('  ');
                                }
                                player.chooseButton(true, dialog).ai = function (button) {
                                    return get.rank(button.link, true);
                                }
                            }
                            'step 2'
                            if (result.bool) {
                                var tag = Object.keys(player.storage).filter(value => {
                                    return value.indexOf(`subplayer_${result.links[0]}`) === 0;
                                })[0];
                                if (tag) {
                                    player.callSubPlayer(tag);
                                    player.removeAdditionalSkill('ymguhuo');
                                    //result.links[0].replace('subplayer_', '')
                                    //player.node.avatar.setBackgroundImage(result.links[0]);
                                }
                            }
                        },
                    },
                    back: {
                        trigger: {
                            player: ['subPlayerExit', 'subPlayerDie'],
                        },
                        silent: true,
                        popup: false,
                        forced: true,
                        content: function () {
                            player.addAdditionalSkill('ymguhuo', player.storage.ymguhuoxuxing, true);
                        }
                    },
                },
            },
            ymfushu: {
                mark: true,
                init: function (player) {
                    player.markSkill('ymfushu');
                },
                onremove: function (player) {
                    player.markSkill('ymfushu');
                },
                unique: true,
                enable: "phaseUse",
                audio: 'reguhuo',
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                filterTarget: function (card, player, target) {
                    if (target.hasSkill('ymfushu_a')) return false;
                    return target != player;
                },
                filterCard: true,
                position: "h",
                check: function (card) {
                    return 7 - get.value(card);
                },
                content: function () {
                    player.discard(cards);
                    event.num = true;
                    var hs = player.getCards('h');
                    for (var i = 0; i < hs.length; i++) {
                        if (!cards.contains(hs[i])) {
                            event.num = false;
                            break;
                        }
                    }
                    if (event.num == true) target.addTempSkill('ymfushu_a', {player: 'phaseAfter'});
                    else target.addTempSkill('ymfushu_a');
                },
                ai: {
                    order: 10,
                    result: {
                        player: function (player) {
                            if (player.countCards('sha') > 2) return 10;
                            return 0;
                        },
                        target: function (player, target) {
                            if (target.countCards('h') > target.hp) return target.hp - target.countCards('h');
                            return 0;
                        },
                    },
                    threaten: 0.5,
                    effect: {
                        target: function (card) {
                            if (card.name == 'guiyoujie') return [0, 2];
                        },
                    },
                },
                subSkill: {
                    a: {
                        onremove: true,
                        unique: true,
                        charlotte: true,
                        forced: true,
                        mark: true,
                        trigger: {
                            player: "compare",
                            target: "compare",
                        },
                        filter: function (event, player) {
                            if (event.iwhile) return false;
                            return true;
                        },
                        silent: true,
                        content: function () {
                            game.log(player, '拼点牌点数为-∞');
                            if (player == trigger.player) {
                                trigger.num1 = -Infinity;
                            } else {
                                trigger.num2 = -Infinity;
                            }
                        },
                        popup: false,
                        intro: {
                            content: '所有牌视为【空白牌】',
                        },
                        mod: {
                            cardname: function (card, player) {
                                return 'ymfushu_card';
                            },
                            number: function (card, number) {
                                return 0;
                            },
                            suit: function (card, suit) {
                                return 'none';
                            },
                        },
                    },
                },
                intro: {
                    mark: function (dialog, content, player) {
                        if (player.isUnderControl(true)) {
                            var list = [];
                            var max = Math.max(game.players.length, 4);
                            var num = Math.min(max, ui.cardPile.childElementCount);
                            for (var i = 0; i < num; i++) {
                                list.push(ui.cardPile.childNodes[i]);
                            }
                            dialog.addSmall(list);
                        } else {
                            dialog.addText('牌堆顶的' + num + '张牌');
                        }
                    },
                    content: function (content, player) {
                        if (player.isUnderControl(true)) {
                            var list = [];
                            var max = Math.max(game.players.length, 4);
                            var num = Math.min(max, ui.cardPile.childElementCount);
                            for (var i = 0; i < num; i++) {
                                list.push(ui.cardPile.childNodes[i]);
                            }
                            return get.translation(list);
                        } else {
                            return '牌堆顶的' + num + '张牌';
                        }
                    },
                },
            },
            ymduce: {
                enable: "phaseUse",
                usable: 1,
                audio: 'rejuece',
                filterTarget: function (card, player, target) {
                    if (target.hasSkill('ymduce_du')) return false;
                    return target != player;
                },
                content: function () {
                    'step 0'
                    player.draw();
                    player.chooseCard(1, true, '选择1张牌作为【毒策】', function (card) {
                        return true;
                    }).set('ai', function (card) {
                        return 8 - get.value(card)
                    });
                    'step 1'
                    if (result.cards) {
                        target.addToExpansion(result.cards,player,'giveAuto').gaintag.add('ymduce_du');
                        player.discardPlayerCard(target, 'he', true);
                        target.addTempSkill('ymduce_du', {player: 'die'});
                        game.log(target, '获得了', result.cards, '置于武将牌上作为“毒策”');
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target: function (player, target) {
                            if (!target.countCards('h')) return -3;
                            return -1;
                        },
                    },
                    threaten: 1.5,
                    effect: {
                        target: function (card) {
                            if (card.name == 'guiyoujie') return [0, 2];
                        },
                    },
                },
                subSkill: {
                    du: {
                        mark: true,
                        unique: true,
                        charlotte: true,
                        intro:{
                            content:"expansion",
                            markcount:"expansion",
                        },
                        onremove:function(player,skill){
                            var cards=player.getExpansions(skill);
                            if(cards.length) player.loseToDiscardpile(cards);
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        trigger: {
                            player: 'phaseBegin',
                        },
                        content: function () {
                            'step 0'
                            game.countPlayer(function (current) {
                                if (current.hasSkill('ymduce')) event.target = current;
                            });
                            player.chooseCard(1, 'he', '选择1张牌交给' + get.translation(event.target), function (card) {
                                return true;
                            }).set('ai', function (card) {
                                return 4 - get.value(card);
                            });
                            'step 1'
                            if (result.cards && result.bool) {
                                if (event.target && event.target.isIn()) {
                                    event.target.gain(result.cards, player, 'giveAuto');
                                }
                                if (!(get.type(result.cards[0], 'trick') == 'trick' && get.color(result.cards[0]) == 'black')) player.addTempSkill('ymduce_use');
                            } else {
                                player.loseHp();
                                player.addTempSkill('baiban');
                            }
                            'step 2'
                            //player.gain(player.storage.ymduce_du);
                            player.removeSkill('ymduce_du');
                        },
                    },
                    use: {
                        mark: true,
                        unique: true,
                        charlotte: true,
                        intro: {
                            content: '不能使用或打出任何牌',
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        mod: {
                            cardEnabled: function (card, player) {
                                return false;
                            },
                            cardRespondable: function (card, player) {
                                return false;
                            },
                            cardSavable: function (card, player) {
                                return false;
                            },
                        },
                    },
                },
            },
            ymdushi: {
                trigger: {
                    global: 'phaseEnd',
                },
                audio: 'remieji',
                filter: function (event, player) {
                    var num = 0;
                    game.players.concat(game.dead).map(current => {
                        num += current.getHistory("damage").length;
                    });
                    if (num > 0) {
                        return true;
                    } else return false;
                },
                content: function () {
                    'step 0'
                    player.chooseTarget('弃置场上区域内的一张牌', function (card, player, target) {
                        return target.countCards('hej');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        var att = get.attitude(player, target);
                        if (att < 0) {
                            att = -Math.sqrt(-att);
                        } else {
                            att = Math.sqrt(att);
                        }
                        return att * lib.card.guohe.ai.result.target(player, target);
                    });
                    'step 1'
                    if (result.targets) {
                        var target = result.targets[0];
                        player.discardPlayerCard(target, 'hej');
                    } else event.finish();
                    'step 2'
                    if (result.bool) {
                        player.chooseTarget('选择一名其他角色令其受到1点你造成的伤害', lib.filter.notMe, function (target) {
                            var player = get.player();
                            return ai.get.damageEffect(target, player, player);
                        });
                    } else event.finish();
                    'step 3'
                    if (result.targets) {
                        result.targets[0].damage();
                    }
                },
            },
            ymzhuzhuo: {
                trigger: {
                    global: 'damageEnd',
                },
                audio: 'xinfencheng',
                filter: function (event, player) {
                    if (event.source != undefined && event.source.group == player.group) return true;
                    if (event.player.isIn() && event.player.group == player.group) return true;
                    return false;
                },
                content: function () {
                    'step 0'
                    event.num = 0;
                    if (trigger.source != undefined && trigger.source.group == player.group) event.num++;
                    if (trigger.player.isIn() && trigger.player.group == player.group) event.num++;
                    'step 1'
                    player.chooseTarget(get.prompt2(event.name), '令一名角色增加1点体力上限；1.该角色不为你，其摸一张♠️牌，若该角色本回合第一次因此摸牌，则额外摸一张♥️牌，2.该角色为你，你摸两张牌，每回合限一次').set('ai', function (target) {
                        var att = get.attitude(_status.event.player, target);
                        if (att > 2) {
                            if ((target.maxHp - target.hp) < 2) return 2 * att;
                            return att;
                        }
                        return att / 3;
                    });
                    'step 2'
                    if (result.bool) {
                        if (result.targets[0].maxHp < 20) result.targets[0].gainMaxHp();
                        if (result.targets[0] != player) {
                            event.card = [];
                            event.card1 = get.cardPile(function (card) {
                                return get.suit(card) == 'spade';
                            });
                            if (result.targets[0].getHistory('gain', function (evt) {
                                return evt.getParent().name == 'ymzhuzhuo';
                            }).length == 0) {
                                event.card2 = get.cardPile(function (card) {
                                    return get.suit(card) == 'heart';
                                });
                            }
                            if (event.card1) event.card.add(event.card1);
                            if (event.card2) event.card.add(event.card2);
                            if (event.card) {
                                result.targets[0].gain(event.card, 'gain2');
                            }
                        } else {
                            if (player.getHistory('gain', function (evt) {
                                return evt.getParent(2).name == 'ymzhuzhuo';
                            }).length == 0) {
                                player.draw(2);
                            }
                        }
                    }
                    'step 3'
                    event.num--;
                    if (event.num > 0) event.goto(1);
                    else event.finish();
                },
            },
            ymxiance: {
                enable: "phaseUse",
                audio: 'jianshu',
                filterTarget:function (card,player,target){
                    if(target.getExpansions('ymxiance_mark').length>0) return false;
                    return true;
                },
                filter:function(event,player){
                    if(game.countPlayer(function (current) {
                        if(current.getExpansions('ymxiance_mark').length==0) return true;
                    })) return true;
                },
                content: function () {
                    'step 0'
                    event.card = get.cards(3);
                    player.showCards(event.card);
                    'step 1'
                    target.addTempSkill('ymxiance_mark', {player: 'die'});
                    target.addToExpansion(event.card,player,'giveAuto').gaintag.add('ymxiance_mark');
                },
                ai: {
                    order: 10,
                    threaten: 1.5,
                    result: {
                        player:function(player, target) {
                            return ai.get.attitude(player, target);
                        },
                    },
                },
                subSkill: {
                    mark: {
                        trigger: {
                            player: 'phaseBefore',
                        },
                        popup: false,
                        forced: true,
                        silent: true,
                        mark: true,
                        unique: true,
                        charlotte: true,
                        /*onremove:function(player,skill){
                            var cards=player.getExpansions(skill);
                            if(cards.length) player.loseToDiscardpile(cards);
                        },*/
                        intro:{
                            mark:function(dialog,storage,player){
                                var cards=player.getExpansions('ymxiance_mark');
                                if(cards.length) dialog.addAuto(cards);
                                else dialog.addText('没有卡牌');
                                var str='';
                                if(player.hasSkill('ymxiance_basic')) str+='<br><li>基本：从牌堆获得每种【杀】各一张和随机三张不同名的基本牌且本回合基本牌无距离次数限制并可额外指定一个目标';
                                if(player.hasSkill('ymxiance_trick')) str+='<br><li>锦囊：摸牌阶段额外摸两张牌；使用普通锦囊牌摸一张牌且可额外或减少指定至多两个目标';
                                if(player.hasSkill('ymxiance_equip')) str+='<br><li>装备：随机将装备区空白栏置入两张装备且手牌无上限；造成伤害时，此伤害+1';
                                dialog.addText(str);
                            },
                            markcount:"expansion",
                        },
                        content: function () {
                            if (player.getExpansions('ymxiance_mark')) {
                                var card = player.getExpansions('ymxiance_mark');
                                for (var i = 0; i < card.length; i++) {
                                    if (get.type(card[i], 'trick') == 'basic') player.addTempSkill('ymxiance_basic', {player: 'phaseAfter'});
                                    if (get.type(card[i], 'trick') == 'trick') player.addTempSkill('ymxiance_trick', {player: 'phaseAfter'});
                                    if (get.type(card[i], 'trick') == 'equip') player.addTempSkill('ymxiance_equip', {player: 'phaseAfter'});
                                }
                                player.gain(card,player,'give');
                                player.removeSkill('ymxiance_mark');
                            }
                        },
                    },
                    basic: {
                        trigger: {
                            player: 'phaseBefore',
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        unique: true,
                        charlotte: true,
                        onremove:function(player,skill){
                            if(player.getExpansions('ymxiance_mark').length==0) player.unmarkSkill('ymxiance_mark');
                        },
                        content: function () {
                            var basic=[],cards=[],sha=[];
                            for(var i=0;i<lib.inpile.length;i++){
                                if(get.type(lib.inpile[i],'trick')=='basic'){
                                    basic.push([lib.inpile[i],undefined]);
                                    if(lib.card[lib.inpile[i]].nature){
                                        for(var j of lib.inpile_nature) basic.push([lib.inpile[i],j]);
                                    }
                                }
                            }
                            while(basic.length>0){
                                var card=get.cardPile(function (card) {
                                    if(card&&!sha.contains(card)&&!cards.contains(card)&&card.name){
                                        if(lib.card[card.name].nature) return card.name==basic[0][0]&&card.nature==basic[0][1];
                                        else return card.name==basic[0][0];
                                    }
                                });
                                if(card.name=='sha') sha.push(card);
                                else cards.push(card);
                                basic.splice(0,1);
                            }
                            event.card=sha.concat(cards.randomGets(3));
                            player.gain(event.card, 'gain2');
                        },
                        mod: {
                            targetInRange: function (card, player, target, now) {
                                if (get.type(card)=='basic') return true;
                            },
                            selectTarget: function (card, player, range) {
                                if (get.type(card)=='basic' && range[1] != -1) range[1] += 1;
                            },
                            cardUsable: function (card, player, num) {
                                if (get.type(card)=='basic') return Infinity;
                            },
                        },
                    },
                    trick: {
                        trigger: {
                            player: ['phaseDrawBegin', 'useCard'],
                        },
                        popup: false,
                        silent: true,
                        forced: true,
                        filter: function (event, player, name) {
                            if (name == 'phaseDrawBegin') return !event.numFixed;
                            else return get.type(event.card) == 'trick';
                        },
                        unique: true,
                        charlotte: true,
                        onremove:function(player,skill){
                            if(player.getExpansions('ymxiance_mark').length==0) player.unmarkSkill('ymxiance_mark');
                        },
                        content: function () {
                            'step 0'
                            if (event.triggername == 'phaseDrawBegin') {
                                trigger.num += 2;
                                return event.finish();
                            }
                            player.draw();
                            var goon;
                            if (trigger.targets && trigger.targets.length > 0){
                                var info = get.info(trigger.card);
                                if (info.allowMultiple == false) goon=false;
                                if (trigger.targets && !info.multitarget) {
                                    if (game.hasPlayer(function(current) {
                                        return lib.filter.targetEnabled2(trigger.card, player, current);
                                    })) {
                                        goon=true;
                                    }
                                }
                            }
                            if (goon==true) {
                                event.choose=true;
                                var prompt2 = '为' + get.translation(trigger.card) + '增加或减少至多两个目标';
                                player.chooseTarget([1,2], function(card, player, target) {
                                    var player = _status.event.player;
                                    if (_status.event.targets.contains(target)) return true;
                                    return lib.filter.targetEnabled2(_status.event.card, player, target);
                                }).set('prompt2', prompt2).set('ai', function(target) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    return get.effect(target, trigger.card, player, player) * (_status.event.targets.contains(target) ? -10 : 10);
                                }).set('targets', trigger.targets).set('card', trigger.card).set('targetprompt', function (target) {
                                    if(trigger.targets.contains(target)) return '减少目标';
                                    else return '增加目标';
                                });
                            }
                            else event.finish();
                            'step 1'
                            if(event.choose&&result.bool){
                                if (!event.isMine() && !event.isOnline()) game.delayx();
                                event.targets = result.targets;
                            }
                            else event.finish();
                            'step 2'
                            if (event.targets) {
                                player.line(event.targets);
                                for(var i=0;i<event.targets.length;i++){
                                    if (trigger.targets.contains(event.targets[i])) trigger.targets.remove(event.targets[i]);
                                    else trigger.targets.add(event.targets[i]);
                                }
                            }
                            else event.finish();
                        },
                    },
                    equip: {
                        trigger: {
                            player: 'phaseBefore',
                            source: 'damageBegin',
                        },
                        unique: true,
                        charlotte: true,
                        forced: true,
                        silent: true,
                        popup: false,
                        onremove:function(player,skill){
                            if(player.getExpansions('ymxiance_mark').length==0) player.unmarkSkill('ymxiance_mark');
                        },
                        content: function () {
                            if(event.triggername=='damageBegin'){
                                trigger.num++;
                                return event.finish();
                            }
                            var equip=[];
                            for(var i=0;i<2;i++){
                                var card = get.cardPile(function (card) {
                                    return get.type(card) == 'equip'&&player.isEmpty(get.subtype(card))&&!equip.contains(get.subtype(card)) && !get.cardtag(card, 'gifts');
                                });
                                if (card){
                                    equip.push(get.subtype(card));
                                    player.equip(card, true);
                                }
                            }
                            player.recover();
                        },
                        mod: {
                            maxHandcard: function (player, num) {
                                return num + Infinity;
                            },
                        },
                    },
                },
            },
            ymzhukou: {
                mark: true,
                locked: true,
                zhuanhuanji: true,
                marktext: "逐寇",
                intro: {
                    content: function (storage, player, skill) {
                        var str='';
                        if (player.storage.ymzhukou == true) str+= '<span class="legendtext">当你使用或成为红色牌的目标时，你可指定任意名没有“献策”的角色各弃两张牌，你摸一张牌</span>';
                        else str+= '<span class="bluetext">当你使用或成为黑色牌的目标时，你可指定任意名拥有“献策”的角色各摸两张牌，你摸一张牌</span>';
                        var num = game.players.length;
                        num-=player.getHistory('custom', function (evt) {
                            return evt.ymzhukou == 'count';
                        }).length;
                        if(num<0) num=0;
                        str+='<br><li>当前回合剩余触发次数：'+num;
                        return str;
                    },
                },
                audio: 'wansha',
                trigger: {
                    player: "useCardToTargeted",
                    target: "useCardToTargeted",
                },
                filter: function (event, player) {
                    var num = game.players.length;
                    if(player.getHistory('custom', function (evt) {
                        return evt.ymzhukou == 'count';
                    }).length >= num) return false;
                    if (player.storage.ymzhukou == true) return get.color(event.card) == 'red';
                    return get.color(event.card) == 'black';
                },
                content: function () {
                    'step 0'
                    player.getHistory('custom').push({ymzhukou: 'count'});
                    if (player.storage.ymzhukou == true) {
                        event.goto(3);
                    }
                    'step 1'
                    game.countPlayer(function (current) {
                        if (current.getExpansions('ymxiance_mark').length>0) event.log = true;
                    });
                    if (event.log) {
                        player.chooseTarget(true,[1,Infinity], get.prompt2(event.name), '选择任意名拥有“献策”的角色令其摸两张牌，你摸一张牌', function (card, player, target) {
                            return target.getExpansions('ymxiance_mark').length>0;
                        }).set('ai', function (target) {
                            return get.attitude(_status.event.player, target);
                        });
                    }
                    if (!event.log) {
                        player.draw();
                        player.storage.ymzhukou = true;
                        event.finish();
                    }
                    'step 2'
                    if (result.bool) {
                        player.draw();
                        if(result.targets){
                            for(var i=0;i<result.targets.length;i++) result.targets[i].draw(2);
                        }
                        player.storage.ymzhukou = true;
                        event.finish();
                    } else event.finish();
                    'step 3'
                    game.countPlayer(function (current) {
                        if (current.getExpansions('ymxiance_mark').length==0 && current.countCards('he')) event.log = true;
                    });
                    if (event.log) {
                        player.chooseTarget(true,[1,Infinity], get.prompt2(event.name), '选择任意名没有“献策”的角色令其弃置两张牌，你摸一张牌', function (card, player, target) {
                            return target.getExpansions('ymxiance_mark').length==0 && target.countCards('he');
                        }).set('ai', function (target) {
                            return -get.attitude(_status.event.player, target);
                        });
                    }
                    if (!event.log) {
                        player.draw();
                        player.storage.ymzhukou = false;
                        event.finish();
                    }
                    'step 4'
                    if (result.bool) {
                        player.draw();
                        if(result.targets){
                            for(var i=0;i<result.targets.length;i++) result.targets[i].chooseToDiscard(true,2, 'he');
                        }
                        player.storage.ymzhukou = false;
                        event.finish();
                    } else event.finish();
                },
                ai: {
                    threaten: 1.05,
                },
                group:'ymzhukou_dying',
                subSkill:{
                    dying:{
                        trigger:{
                            global:'recoverBegin',
                        },
                        audio: 'wansha',
                        filter:function(event,player){
                            return event.player!=player&&event.player.isDying()&&event.player.getExpansions('ymxiance_mark').length==0;
                        },
                        forced:true,
                        content:function(){
                            if(trigger.num>1) trigger.num=1;
                            else trigger.num--;
                        },
                    },
                },
            },
            ymlinglong: {
                trigger: {
                    player: ["phaseBegin"],
                },
                filter: function (event, player) {
                    return player.countCards("he") > 0;
                },
                audio: 'linglong',
                content: function () {
                    'step 0'
                    player.chooseToDiscard('he', 1, '你可以弃置一张牌，从牌库里/牌库外随机获得一张装备牌。').set('ai', function (card) {
                        return 8 - get.value(card);
                    });
                    'step 1'
                    if (result.bool) {
                        var list = [];
                        for (var i in lib.card) {
                            if (!lib.translate[i + '_info']) continue;
                            if (lib.card[i].mode && lib.card[i].mode.contains(lib.config.mode) == false) continue;
                            if (lib.config.hiddenCardPack.indexOf(i) == 0) continue;
                            if (i.indexOf('feichu_equip')!=-1) continue;
                            var info = lib.card[i];
                            if (info.type && info.type == 'equip') list.push(i);
                        }
                        player.gain(game.createCard(list.randomGet()));
                        player.draw(2);
                    }
                },
            },
            ymjiqiao: {
                enable: "phaseUse",
                audio: 'jiqiao',
                usable: 1,
                filterCard: true,
                discard: true,
                selectCard: [1, 1],
                init: function (player) {
                    if (!_status.ymjiqiao) {
                        _status.ymjiqiao = Object.keys(lib.card);
                    }
                },
                check: function (card) {
                    return 8 - get.value(card);
                },
                content: function () {
                    'step 0'
                    var list = [];
                    if (player.countCards('e') > 0) list.push('选项一');
                    for (var i = 0; i < player.getCards('he').length; i++) {
                        if (get.type(player.getCards('he')[i]) == 'equip') list.add('选项二');
                    }
                    list.push('cancel2');
                    player.chooseControl(list, function () {
                        if (list.length > 1) return ['选项一', '选项二'].randomGet();
                        return list.randomGet();
                    }).set('prompt', get.prompt(event.name)).set('choiceList', ['强化你的装备区里的一张牌', '永久改变一张装备牌的装备类型']);
                    'step 1'
                    event.control = result.control;
                    if (event.control == '选项二') {
                        player.chooseCard('he', '选择一张装备牌进行改造', card => get.type(card) == 'equip', true).set('ai', function (card) {
                            return get.value(card);
                        });
                    }
                    if (event.control == '选项一') {
                        event.goto(5);
                    }
                    if (event.control == 'cancel2') {
                        event.finish();
                    }
                    'step 2'
                    if (result.cards) {
                        var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                        var choose;
                        for (var i = 0; i < list.length; i++) {
                            if (get.subtype(result.cards[0]) == list[i]) {
                                list.remove(list[i]);
                            }
                        }
                        for (var i = 0; i < list.length; i++) {
                            if (!player.getEquip(i + 1)) choose = list[i];
                        }
                        list.push('cancel2');
                        event.card = result.cards[0];
                        player.chooseControl(list, function () {
                            if (choose) return choose;
                            return list.randomGet();
                        }).prompt = '机巧：是否改变' + get.translation(event.card.name) + '的装备类型？';
                    }
                    'step 3'
                    if (result.control && result.control != 'cancel2') {
                        player.logSkill('ymjiqiao');
                        var name = event.card.name + '_gaizao_' + result.control;
                        event.card.classList.remove(get.subtype(event.card));
                        if (!lib.card[name]) {
                            lib.card[name] = get.copy(get.info(event.card));
                            lib.card[name].subtype = result.control;
                            lib.card[name].epic = true;
                            lib.card[name].cardimage = event.card.name;
                            lib.card[name].onLose = function () {
                                card.delete();
                            };
                            lib.card[name].source = [event.card.name];
                            lib.translate[name] = lib.translate[event.card.name];
                            lib.translate[name + '_info'] = lib.translate[event.card.name + '_info'];
                        }
                        event.card.name = name;
                        event.card.init([event.card.suit, event.card.number, name, event.card.nature]);
                        event.card._destroy = false;
                        if (player.getCards('e').contains(event.card)) {
                            //player.lose(event.card)._triggered=null;
                            player.equip(event.card)._triggered = null;
                        } else player.gain(event.card)._triggered = null;
                        _status.ymjiqiao.add(event.card.name);
                    } else event.finish();
                    'step 4'
                    //if(event.card) event.card._destroy = true;
                    event.finish();
                    'step 5'
                    player.chooseCard('e', '机巧：选择一张装备区里未被强化的装备牌进行强化。', function (card) {
                        if (!_status.ymjiqiao.contains(card.name)) return false;
                        if (card.ymjiqiao == true) return false;
                        //if(!lib.card[card.name].unique&&lib.card[card.name].nopower) return false;
                        //if(lib.card[card.name].nopower) return false;
                        return true;
                    }).set('ai', function (card) {
                        return get.value(card);
                    });
                    'step 6'
                    if (result.cards) {
                        event.card1 = result.cards[0];
                        var list = [];
                        for (var i in lib.card) {
                            if (get.type(i) == 'jiqi') list.push(['祭器', '', i]);
                            if (get.type(i) == 'hslingjian') list.push(['零件', '', i]);
                        }
                        var dialog = ui.create.dialog('机巧', [list, 'vcard']);
                        player.chooseButton(dialog).ai = function (button) {
                            var name = button.link[2];
                            switch (name) {
                                case 'qinglongzhigui':
                                    return 1;
                                case 'baishouzhihu':
                                    return 0.8;
                                case 'xuanwuzhihuang':
                                    return 0.5;
                                case 'zhuquezhizhang':
                                    return 0.5;
                                case 'huanglinzhicong':
                                    return 0.5;
                                case 'cangchizhibi':
                                    return 0.3;
                                default:
                                    return 0;
                            }
                        }
                    } else event.finish();
                    'step 7'
                    if (result.bool) {
                        var card = game.createCard(result.links[0][2]);
                        card._destroy = true;
                        event.card2 = card;
                    } else event.finish();
                    'step 8'
                    event.card = [];
                    event.card.push(event.card1);
                    event.card.push(event.card2);
                    'step 9'
                    var name = lib.skill.lingjianduanzao.process(event.card);
                    var card = game.createCard(name);
                    card._destroy = true;
                    card.ymjiqiao = true;
                    event.cards = card;
                    player.showCards(card);
                    player.equip(event.cards)._triggered = null;
                },
                ai: {
                    order: 10,
                    threaten: 1,
                    result: {
                        player: 8,
                    },
                },
            },
            ymqicai: {
                trigger: {
                    player: 'loseAfter',
                },
                audio: 'rejizhi',
                forced: true,
                filter: function (event, player) {
                    if (player != _status.currentPhase) return false;
                    if (event.type != 'discard') return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].origina == 'j') return false;
                    }
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.position(event.cards[i]) == 'd') {
                            return true;
                        }
                    }
                    return false;
                },
                content: function () {
                    var card = get.cardPile(function (card) {
                        return get.type(card) == 'trick';
                    });
                    if (card) player.gain(card, 'gain2');
                },
            },
            ymtaoluan:{
                trigger: {
                    global: ['phaseUseBegin','phaseEnd'],
                },
                usable:1,
                audio: 'taoluan',
                filter: function (event, player) {
                    if (event.player == player || event.player.countCards('h')==0 ) return false;
                    return true;
                },
                check: function (event, player) {
                    if (get.attitude(event.player, player) > 0 && event.player.countCards('h')<(player.maxHp-player.hp)) return true;
                    if (get.attitude(event.player, player) <= 0) return true;
                    return false;
                },
                content:function(){
                    'step 0'
                    event.cards=trigger.player.getCards('h');
                    player.gain(event.cards,trigger.player,'giveAuto');
                    event.basic=0;event.trick=0;event.equip=0;event.use=[];
                    for(var i=0;i<event.cards.length;i++){
                        if(get.type(event.cards[i])=='basic') event.basic++;
                        if(get.type(event.cards[i])=='trick') event.trick++;
                    }
                    'step 1'
                    if(event.basic>0||event.trick>0){
                        var list=[];
                        for(var i=0;i<lib.inpile.length;i++){
                            var name=lib.inpile[i];
                            if(!game.hasPlayer(function(current){
                                return player.canUse(name,current);
                            })) continue;
                            if(name=='sha'){
                                list.push(['基本','','sha',undefined]);
                                for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                            }
                            else if(get.type(name)=='trick') list.push(['锦囊','',name,undefined]);
                            else if(get.type(name)=='basic') list.push(['基本','',name,undefined]);
                        }
                        if(list.length>0){
                            var dialog=ui.create.dialog('滔乱');
                            dialog.addText('请选择'+get.cnNumber(event.basic)+'张基本牌或'+get.cnNumber(event.trick)+'张锦囊牌使用');
                            dialog.add([list,'vcard']);
                            var next=player.chooseButton(dialog);
                            next.set('filterButton',function(button){
                                if(event.basic<=0&&get.type(button.link[2])=='basic') return false;
                                if(event.trick<=0&&get.type(button.link[2])=='trick') return false;
                                var n2=button.link.toString();
                                for(var i=0;i<event.use.length;i++){
                                    var n1=event.use[i].toString();
                                    if(n1==n2) return false;
                                }
                                return true;
                            });
                            next.set('ai',function(button){
                                var player=_status.event.player;
                                if(player.countCards('h',button.link[2])>0) return 0;
                                if(['wugu','zhulu_card'].contains(button.link[2])) return 0;
                                var effect=player.getUseValue(button.link[2]);
                                if(effect>0) return effect;
                                return 0;
                            });
                        }
                    }
                    'step 2'
                    if(result.bool){
                        player.chooseUseTarget(true,{name:result.links[0][2],nature:result.links[0][3]},false,'nodistance');
                        event.use.push([result.links[0]]);
                        if(get.type(result.links[0][2])=='basic') event.basic--;
                        if(get.type(result.links[0][2])=='trick') event.trick--;
                        if(event.basic>0||event.trick>0) event.goto(1);
                    }
                    else event.goto(3);
                    'step 3'
                    var num=Math.max((player.maxHp-player.hp),event.cards.length);
                    if(num>5) num=5;
                    if(num>0&&trigger.player.isAlive()){
                        player.chooseCard(num, 'he', true, '滔乱：选择'+get.cnNumber(num)+'张牌交给'+get.translation(trigger.player), function (card) {
                            return true;
                        }).set('ai', function (card) {
                            var player=_status.event.player;
                            if(get.attitude(player,target)>0){
                                if(get.type(card)=='equip') return 0;
                                else return 8 - get.value(card);
                            }
                            else return 3 - get.value(card);
                        });
                    }
                    'step 4'
                    if(result.bool&&result.cards&&result.cards.length){
                        trigger.player.gain(result.cards,player,'giveAuto');
                        for(var i=0;i<result.cards.length;i++){
                            if(get.type(result.cards[i])=='equip') event.equip++;
                        }
                    }
                    else event.finish();
                    'step 5'
                    if(event.equip>0){
                        trigger.player.useCard({name:'sha'},player,false);
                        event.equip--;
                        if(event.equip>0) event.redo();
                        else event.finish();
                    }
                    else event.finish();
                },
            },
            ymhuoluan:{
                trigger:{
                    target:"useCardToTarget",
                },
                audio: 'yangzhong',
                forced:true,
                filter:function(event,player){
                    if(event.card.name!='sha') return false;
                    return game.hasPlayer(function(current){
                        return current!=player&&!event.targets.contains(current)//&&lib.filter.targetEnabled(event.card,event.player,current);
                    });
                },
                content:function(){
                    'step 0'
                    player.draw(2);
                    trigger.player.addTempSkill('baiban');
                    var players=[];
                    game.countPlayer(function(current){
                        if(current!=player&&!trigger.targets.contains(current)/*&&lib.filter.targetEnabled(trigger.card,trigger.player,current)*/) players.add(current);
                    });
                    if(players.length){
                        player.chooseTarget([1,player.hp],get.prompt2('ymhuoluan'),function(card,player,target){
                            return target!=player&&!trigger.targets.contains(target)//&&lib.filter.targetEnabled(trigger.card,trigger.player,target)
                        }).set('ai',function(target){
                            var trigger=_status.event.getTrigger();
                            var player=_status.event.player;
                            return get.effect(target,trigger.card,trigger.player,player)+0.1;
                        }).set('targets',trigger.targets).set('playerx',trigger.player);
                    }
                    else event.finish();
                    'step 1'
                    if(result.targets){
                        trigger.getParent().targets.addArray(result.targets);
                        trigger.getParent().triggeredTargets2.addArray(result.targets);
                        trigger.directHit.addArray(result.targets);
                        player.line(result.targets);
                        game.log(result.targets,'成为了',trigger.card,'的额外目标');
                    }
                    else event.finish();
                },
            },
            ymjiang: {
                shaRelated: true,
                audio: 'jiang',
                trigger: {
                    player: "useCardToPlayered",
                    target: "useCardToTargeted",
                },
                filter: function (event, player) {
                    if (get.color(event.card) != 'red') return false;
                    return player == event.target || event.getParent().triggeredTargets3.length == 1;
                },
                frequent: true,
                content: function () {
                    player.draw();
                },
                ai: {
                    effect: {
                        target: function (card, player, target) {
                            if (get.color(card) == 'red') return [1, 0.6];
                        },
                        player: function (card, player, target) {
                            if (get.color(card) == 'red') return [1, 1];
                        },
                    },
                },
            },
            ymhunyou: {
                audio: 'hunzi',
                derivation: 'yinghun',
                trigger: {
                    source: 'damageEnd',
                    player: ['damageEnd', 'dieBegin'],
                },
                forceDie: true,
                usable: 1,
                content: function () {
                    player.useSkill('yinghun');
                },
            },
            ymtaoni: {
                trigger: {
                    global: 'die',
                },
                audio: 'olhunzi',
                derivation: ['yinghun', 'reyingzi'],
                forceDie: true,
                mark: true,
                locked: true,
                filter: function (event, player) {
                    if (player.storage.ymtaoni >= 3) return false;
                    return true;
                },
                content: function () {
                    'step 0'
                    if (!player.storage.ymtaoni) player.storage.ymtaoni = 0;
                    player.storage.ymtaoni++;
                    player.addSkill('reyingzi');
                    player.gainMaxHp();
                    event.num = 2;
                    var list = ['发动英魂', '移动两张牌'];
                    if (!player.canMoveCard(null, event.nojudge)) list.remove('移动两张牌');
                    player.chooseControl(list).set('prompt', '请选择一项执行').set('ai', function () {
                        return list.randomGet();
                    });
                    'step 1'
                    if (result.control == '发动英魂') player.useSkill('yinghun');
                    if (result.control == '移动两张牌' || event.log) {
                        player.moveCard(true);
                        event.num--;
                        event.log = true;
                        if (event.num > 0) event.redo();
                        else event.finish();
                    }
                },
                intro: {
                    content: function (storage, player, skill) {
                        var str = player.storage.ymtaoni >= 3 ? '【讨逆】次数已用完' : '【讨逆】已使用' + (player.storage.ymtaoni || 0) + '次';
                        return str;
                    },
                },
            },
            ymzhiba: {
                global: 'ymzhiba_a',
                zhuSkill: true,
                audio: 'olzhiba',
                trigger: {
                    player: "compare",
                    target: "compare",
                },
                filter: function (event) {
                    return !event.iwhile;
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseControl('点数+3', '点数-3', 'cancel2').set('prompt', get.prompt2('ymzhiba')).set('ai', function () {
                        if (_status.event.small) return 1;
                        else return 0;
                    }).set('small', trigger.small);
                    'step 1'
                    if (result.index != 2) {
                        player.logSkill('ymzhiba');
                        if (result.index == 0) {
                            game.log(player, '拼点牌点数+3');
                            if (player == trigger.player) {
                                trigger.num1 += 3;
                                if (trigger.num1 > 13) trigger.num1 = 13;
                            } else {
                                trigger.num2 += 3;
                                if (trigger.num2 > 13) trigger.num2 = 13;
                            }
                        } else {
                            game.log(player, '拼点牌点数-3');
                            if (player == trigger.player) {
                                trigger.num1 -= 3;
                                if (trigger.num1 < 1) trigger.num1 = 1;
                            } else {
                                trigger.num2 -= 3;
                                if (trigger.num2 < 1) trigger.num2 = 1;
                            }
                        }
                    }
                },
                subSkill: {
                    a: {
                        audio: 'yingyang',
                        enable: "phaseUse",
                        prompt: function () {
                            var player = _status.event.player;
                            var list = game.filterPlayer(function (target) {
                                return target.hasZhuSkill('ymzhiba', player) && player.canCompare(target);
                            });
                            var str = '和' + get.translation(list);
                            if (list.length > 1) str += '中的一人';
                            str += '进行拼点。若你没赢，其获得【英姿】；若赢，其受到一点伤害。';
                            return str;
                        },
                        filter: function (event, player) {
                            if (player.group != 'wu' || player.countCards('h') == 0) return false;
                            return game.hasPlayer(function (target) {
                                return target.hasZhuSkill('ymzhiba', player) && player.canCompare(target);
                            });
                        },
                        filterTarget: function (card, player, target) {
                            return target.hasZhuSkill('ymzhiba', player) && player.canCompare(target);
                        },
                        direct: true,
                        clearTime: true,
                        prepare: function (cards, player, targets) {
                            targets[0].logSkill('ymzhiba');
                        },
                        usable: 1,
                        content: function () {
                            "step 0"
                            player.chooseToCompare(target, function (card) {
                                if (card.name == 'du') return 20;
                                var player = get.owner(card);
                                var target = _status.event.getParent().target;
                                if (player != target && get.attitude(player, target) > 0) {
                                    return -get.number(card);
                                }
                                return get.number(card);
                            }).set('preserve', 'lose');
                            "step 1"
                            if (result.bool == false) {
                                event.card = [];
                                event.card1 = get.cardPile(function (card) {
                                    return get.suit(card) == 'diamond' && !event.card.contains(card);
                                });
                                if (event.card1) event.card.add(event.card1);
                                event.card2 = get.cardPile(function (card) {
                                    return get.suit(card) == 'diamond' && !event.card.contains(card);
                                });
                                if (event.card2) event.card.add(event.card2);
                                event.card3 = get.cardPile(function (card) {
                                    return get.suit(card) == 'diamond' && !event.card.contains(card);
                                });
                                if (event.card3) event.card.add(event.card3);
                                target.gain(event.card, 'gain2');
                            } else target.damage();
                        },
                        ai: {
                            basic: {
                                order: 1,
                            },
                            expose: 0.2,
                            result: {
                                target: function (player, target) {
                                    if (player.countCards('h', 'du') && get.attitude(player, target) < 0) return -1;
                                    if (player.countCards('h') <= player.hp) return 0;
                                    var maxnum = 0;
                                    var cards2 = target.getCards('h');
                                    for (var i = 0; i < cards2.length; i++) {
                                        if (cards2[i].number > maxnum) {
                                            maxnum = cards2[i].number;
                                        }
                                    }
                                    if (maxnum > 10) maxnum = 10;
                                    if (maxnum < 5 && cards2.length > 1) maxnum = 5;
                                    var cards = player.getCards('h');
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].number < maxnum) return 1;
                                    }
                                    return 0;
                                },
                            },
                        },
                    },
                },
            },
            ymjiuzhu: {
                trigger: {
                    global: "roundStart",
                    player: "enterGame",
                },
                filter: function () {
                    return game.players.length > 1;
                },
                audio: 'longhun',
                content: function () {
                    'step 0'
                    if (!player.storage.ymjiuzhu) player.storage.ymjiuzhu = [];
                    game.findPlayer2(function (current) {
                        if (player.storage.ymjiuzhu && player.storage.ymjiuzhu.contains(current)) {
                            player.storage.ymjiuzhu.remove(current);
                            current.removeSkill('ymjiuzhu_a');
                        }
                    });
                    if (player.storage.ymjiuzhu.length == 0) player.unmarkSkill('ymjiuzhu');
                    player.chooseTarget('请选择【救主】的目标', lib.translate.ymjiuzhu_info, function (card, player, target) {
                        return target != player && !target.hasSkill('ymjiuzhu_a');
                    }).set('ai', function (target) {
                        var att = get.attitude(_status.event.player, target);
                        if (att > 0) return att + 1;
                        return Math.random();
                    }).animate = false;
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.line(target);
                        player.storage.ymjiuzhu.push(target);
                        target.addSkill('ymjiuzhu_a');
                        player.markSkill('ymjiuzhu');
                    }
                },
                marktext: "救",
                unique: true,
                charlotte: true,
                intro: {
                    content: function (storage, player, skill) {
                        var str = '当前【救主】目标：';
                        str += "<span style='color: red'>" + get.translation(player.storage.ymjiuzhu) + "</span>";
                        return str;
                    },
                },
                group: 'ymjiuzhu_b',
                subSkill: {
                    a: {
                        charlotte: true,
                        slient: true,
                        popup: false,
                        trigger: {
                            target: ["useCardToTargeted"],
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (!player.isIn()) return false;
                            if (event.player == player) return false;
                            return game.countPlayer(function (current) {
                                if (current.storage.ymjiuzhu && current.storage.ymjiuzhu.contains(player) && event.player != current) return true;
                            });
                            return false;
                        },
                        content: function () {
                            'step 0'
                            game.countPlayer(function (current) {
                                if (current.storage.ymjiuzhu && current.storage.ymjiuzhu.contains(player)) {
                                    current.logSkill('ymjiuzhu', player);
                                    trigger.targets.remove(player);
                                    trigger.targets.push(current);
                                    trigger.player.line(current);
                                }
                            });
                            'step 1'
                            game.delay(1.5);
                        },
                        onremove: function (player) {
                            game.findPlayer2(function (current) {
                                if (current.storage.ymjiuzhu && current.storage.ymjiuzhu.contains(player)) {
                                    current.storage.ymjiuzhu.remove(player);
                                    if (!current.storage.ymjiuzhu.length) current.unmarkSkill('ymjiuzhu');
                                    else current.markSkill('ymjiuzhu');
                                }
                            });
                        },
                    },
                    b: {
                        trigger: {
                            player: "damageBegin4",
                        },
                        forced: true,
                        audio: 'longhun',
                        filter: function (event, player) {
                            return true;
                        },
                        content: function () {
                            if (trigger.num > 1) trigger.num = 1;
                            player.addTempSkill('mianyi');
                        },
                        ai: {
                            filterDamage: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (arg.player.hasSkillTag('jueqing', false, player)) return false;
                            }
                        },
                    },
                },
            },
            ymhuwei: {
                trigger: {
                    global: "gainEnd",
                },
                audio: 'juejing',
                filter: function (event, player) {
                    return event.player != player && !(event.getParent().name == 'draw' && event.getParent(2).name == 'phaseDraw');
                },
                forced: true,
                content: function () {
                    player.draw();
                },
            },
            ymbishan: {
                audio: "dengji",
                enable: "phaseUse",
                usable: 1,
                filterTarget: function (card, player, target) {
                    if (target.countCards('e') <= 0) return false;
                    return player != target;
                },
                content: function () {
                    var card = target.getCards('e');
                    for (var i = 0; i < card.length; i++) {
                        player.equip(card[i]);
                    }
                    target.draw(card.length);
                    target.damage(5-card.length);
                },
                ai: {
                    order: 13,
                    result: {
                        target: function (player, target) {
                            if (!target.countCards('e')) return 0;
                            return -1;
                        },
                    },
                    threaten: 1,
                },
            },
            ymbawang: {
                audio: 'sbaiyin',
                enable: "phaseUse",
                filter: function (event, player) {
                    return player.countMark('ymbawang') > 0;
                },
                filterTarget: function (card, player, target) {
                    if (target.hasMark('ymbawang')) return false;
                    return player != target > 0;
                },
                content: function () {
                    player.removeMark('ymbawang', 1);
                    target.addMark('ymbawang', 1);
                },
                marktext: "王",
                intro: {
                    name: "八王",
                },
                ai: {
                    order: 11,
                    result: {
                        target: function (player, target) {
                            /*if ((player.countMark('ymbawang') >= 2 || !game.hasPlayer(function (current) {
                                return current != player && get.attitude(player, current) < 0 && current.hasMark('ymbawang');
                            })) && player.countCards('h', function (card) {
                                return get.tag(card, 'damage') && player.canUse(card, target, null, true) && player.getUseValue(card) > 0 && get.effect_use(target, card, player) > 0 && target.hasSkillTag('filterDamage', null, {
                                    player: player,
                                    card: card,
                                });
                            })) return 3 / Math.max(1, target.hp);
                            if ((!player.hasUnknown() && game.countPlayer(function (current) {
                                return get.attitude(player, current) < 0;
                            }) <= 1) || player.countMark('ymbawang') >= 2) {
                                return -1;
                            }
                            return 0;*/
                            return -1;
                        },
                    },
                    effect: {
                        player: function (card, player, target) {
                            if (player != target && get.tag(card, 'damage') && target && target.hasMark('ymbawang') && !target.hasSkillTag('filterDamage', null, {
                                player: player,
                                card: card,
                            })) return [1, 0, 1, -2];
                        },
                    },
                    threaten: 0.8,
                },
                group: ['ymbawang_start', 'ymbawang_what'],
                subSkill: {
                    start: {
                        audio: "sbaiyin",
                        trigger: {
                            global: ["gameStart","roundStart"],
                            player: "enterGame",
                        },
                        forced: true,
                        filter:function(event,player,name){
                            if(name=='roundStart') return game.roundNumber%3==0;
                            return true;
                        },
                        content: function () {
                            if(event.triggername=='gameStart') player.addMark("ymbawang", 3);
                            else player.addMark("ymbawang", 1);
                        },
                    },
                    what: {
                        trigger: {
                            source: ['damageBegin1'],
                            player:'damageBegin',
                            global: ['drawEnd'],
                        },
                        forced: true,
                        unique: true,
                        charlotte: true,
                        silent: true,
                        popup: false,
                        filter: function (event, player, name) {
                            if (name == 'damageBegin1') return event.player!=player&&event.player.hasMark('ymbawang');
                            else if (name == 'damageBegin'){
                                if(game.findPlayer(function (current) {
                                    if (current.hasMark('ymbawang') && current != player) return true;
                                })) return true;
                            }
                            else if (name == 'drawEnd'){
                                if (player.getHistory('gain', function (evt) {
                                    return evt.getParent().name=='draw'&&evt.getParent(2).name=='ymbawang_what'
                                }).length > 0) return false;
                                return event.player!=player&&event.player.hasMark('ymbawang');
                            }
                        },
                        content: function () {
                            var name = event.triggername;
                            if (name == 'damageBegin') {
                                var players=[];
                                game.findPlayer(function (current) {
                                    if (current.hasMark('ymbawang') && current != player) players.add(current);
                                });
                                var own=players.randomGet();
                                trigger.player=own;
                                game.log(player,'将伤害转移给了',own);
                                own.removeMark('ymbawang',1);
                            }
                           else if(name == 'damageBegin1'){
                               trigger.num++;
                           }
                           else if(name == 'drawEnd'){
                               player.draw(trigger.num);
                           }
                        },
                    },
                },
            },
            ymguijin: {
                unique: true,
                audio: "reguicai",
                global: "ymguijin_enable",
                zhuSkill: true,
                subSkill: {
                    enable: {
                        audio: 'jilue',
                        enable: "phaseUse",
                        discard: false,
                        usable: 1,
                        lose: false,
                        delay: false,
                        line: true,
                        direct: true,
                        clearTime: true,
                        prepare: function (cards, player, targets) {
                            targets[0].logSkill('ymguijin');
                        },
                        prompt: function () {
                            var player = _status.event.player;
                            var list = game.filterPlayer(function (target) {
                                return target != player && target.hasZhuSkill('ymguijin', player);
                            });
                            var str = '将一张牌交给' + get.translation(list);
                            if (list.length > 1) str += '中的一人';
                            return str;
                        },
                        filter: function (event, player) {
                            if (player.group != 'wei' && player.group != 'shu' && player.group != 'wu') return false;
                            if (player.countCards('he') == 0) return 0;
                            return game.hasPlayer(function (target) {
                                return target != player && target.hasZhuSkill('ymguijin', player);
                            });
                        },
                        filterCard: true,
                        position: 'he',
                        log: false,
                        filterTarget: function (card, player, target) {
                            return target != player && target.hasZhuSkill('ymguijin', player);
                        },
                        content: function () {
                            'step 0'
                            target.gain(cards, player, 'giveAuto');
                            player.addTempSkill('ymguijin_damage');
                            if(!player.storage.ymguijin) player.storage.ymguijin = [];
                            player.storage.ymguijin.add(target);
                            target.chooseBool(get.prompt(event.name), '是否令' + get.translation(player) + '摸一张牌？').set('ai', function () {
                                if (get.attitude(_status.event.player, player) > 0) return true;
                                return false;
                            });
                            'step 1'
                            if(result.bool){
                                player.draw();
                            }
                        },
                        ai: {
                            expose: 0.3,
                            order: 10,
                            result: {
                                target: 5,
                            },
                        },
                    },
                    damage: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter: function (event, player) {
                            return player.storage.ymguijin && player.storage.ymguijin == event.player;
                        },
                        silent: true,
                        popup: false,
                        forced: true,
                        charlotte: true,
                        content: function () {
                            trigger.logSkill('ymguijin');
                            trigger.cancel();
                        },
                        onremove: function (player) {
                            delete player.storage.ymguijin;
                        },
                        mark: true,
                        marktext: '晋',
                        intro: {
                            content: function (storage, player, skill) {
                                var str = '当前【归晋】角色：';
                                str += "<span style='color: red'>" + get.translation(player.storage.ymguijin) + "</span>";
                                return str;
                            },
                        },
                    },
                },
            },
            ymqiaoshui: {
                unique: true,
                filter: function (event, player) {
                    if (event.type == 'wuxie') return false;
                    if (event.filterCard({name: 'shan'}, player, event)) return false;
                    return !player.storage.ymqiaoshuo;
                },
                enable: ["chooseToUse", "chooseToRespond"],
                chooseButton: {
                    dialog: function (event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (name == 'shan' || name == 'wuxie') continue;
                            if (name == 'sha') {
                                list.add(['基本', '', 'sha']);
                                list.add(['基本', '', 'sha', 'fire']);
                                list.add(['基本', '', 'sha', 'thunder']);
                                list.add(['基本', '', 'sha', 'ice']);
                                list.add(['基本', '', 'sha', 'kami']);
                            } else if (get.type(name) == 'trick') list.add(['锦囊', '', name]);
                            else if (get.type(name) == 'basic') list.add(['基本', '', name]);
                        }
                        if (list.length == 0) {
                            return ui.create.dialog('【巧说】无可用牌');
                        }
                        return ui.create.dialog('巧说', [list, 'vcard']);
                    },
                    filter: function (button, player) {
                        return _status.event.getParent().filterCard({name: button.link[2]}, player, _status.event.getParent());
                    },
                    check: function (button) {
                        var player = _status.event.player;
                        if (player.countCards('h', button.link[2]) > 0) return 0;
                        if (button.link[2] == 'wugu') return 0;
                        var effect = player.getUseValue(button.link[2]);
                        if (effect > 0) return effect;
                        return 0;
                    },
                    backup: function (links, player) {
                        return {
                            selectCard: 0,
                            filterCard: false,
                            popname: true,
                            viewAs: {name: links[0][2], nature: links[0][3]},
                            onuse: function (result, player) {
                                player.storage.ymqiaoshuo = true;
                            },
                        }
                    },
                    prompt: function (links, player) {
                        return '声明你使用或打出' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                    },
                },
                ai: {
                    skillTagFilter: function (player) {
                        if (player.isDying()) {
                        } else return false;
                    },
                    order: 10,
                    result: {
                        player: function (player) {
                            var allshown = true, players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i].ai.shown == 0) {
                                    allshown = false;
                                }
                                if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
                                    return 1;
                                }
                            }
                            if (allshown) return 1;
                            return 0;
                        },
                    },
                    threaten: 1.9,
                    save: true,
                    respondSha: true,
                    fireAttack: true,
                    thunderAttack: true,
                },
                group: ['ymqiaoshui_wuxie', 'ymqiaoshui_shan', 'ymqiaoshui_compare', 'ymqiaoshui_back'],
                subSkill: {
                    wuxie: {
                        selectCard: 0,
                        filterCard: false,
                        popname: true,
                        popup: false,
                        silent: true,
                        enable: ["chooseToUse", "chooseToRespond"],
                        prompt: "声明你使用无懈可击",
                        filter: function (event, player) {
                            return !player.storage.ymqiaoshuo;
                        },
                        viewAsFilter: function (player) {
                            return !player.storage.ymqiaoshuo;
                        },
                        onuse: function (result, player) {
                            player.storage.ymqiaoshuo = true;
                        },
                        viewAs: {
                            name: "wuxie",
                        },
                        ai: {
                            basic: {
                                useful: [6, 4],
                                value: [6, 4],
                            },
                            result: {
                                player: 1,
                            },
                            expose: 0.2,
                        },
                        sub: true,
                    },
                    shan: {
                        prompt: "声明你使用或打出闪",
                        popname: true,
                        popup: false,
                        silent: true,
                        selectCard: 0,
                        filterCard: false,
                        enable: ["chooseToUse", "chooseToRespond"],
                        filter: function (event, player) {
                            return !player.storage.ymqiaoshuo;
                        },
                        viewAsFilter: function (player) {
                            return !player.storage.ymqiaoshuo;
                        },
                        onuse: function (result, player) {
                            player.storage.ymqiaoshuo = true;
                        },
                        viewAs: {
                            name: "shan",
                        },
                        ai: {
                            skillTagFilter: function (player) {
                                return !player.storage.ymqiaoshuo;
                            },
                            threaten: 1,
                            respondShan: true,
                            order: 10,
                            basic: {
                                useful: [7, 2],
                                value: [7, 2],
                            },
                            result: {
                                player: 1,
                            },
                        },
                        sub: true,
                    },
                    compare: {
                        trigger: {
                            player: ["useCardBefore", "respondBefore"],
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        audio: 'xinqiaoshui',
                        filter: function (event, player) {
                            //if(event.skill!='ymqiaoshui'&&event.skill!='ymqiaoshui_wuxie'&&event.skill=='ymqiaoshui_shan') return false;
                            return (event.skill && (event.skill.indexOf('ymqiaoshui') == 0 || event.skill.indexOf('ymqiaoshui_wuxie') == 0 || event.skill.indexOf('ymqiaoshui_shan') == 0));
                            //return false;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(2, '选择拼点目标，并猜测胜负', function (card, player, target) {
                                if (target.countCards('h') <= 0) return false;
                                return !target.hasSkillTag('noCompareTarget');
                            }).set('ai', function (target) {
                                var player = _status.event.player;
                                var att = get.attitude(player, target);
                                if (att < 0) {
                                    return att - 1;
                                }
                                return att;
                            }).set('targetprompt', ['胜利者', '失败者']);
                            'step 1'
                            if (result.targets) {
                                event.target = result.targets[0];
                                if (result.targets[0].canCompare(result.targets[1])) {
                                    result.targets[0].chooseToCompare(result.targets[1]);
                                }
                            } else {
                                delete player.storage.ymqiaoshuo;
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            }
                            'step 2'
                            if (result.winner !== event.target || !result.winner) {
                                player.storage.ymqiaoshuo = true;
                                game.log(player, '猜错了');
                                player.loseHp();
                                event.cards = [result.player, result.target].filterInD('d');
                                if (event.cards) player.gain(event.cards, 'gain2', 'log');
                                trigger.untrigger();
                                trigger.finish();
                            }
                            if (result.winner === event.target) {
                                player.storage.ymqiaoshuo = true;
                                game.log(player, '猜对了');
                                event.finish();
                            }
                        },
                    },
                    back: {
                        trigger: {
                            global: 'phaseAfter',
                        },
                        silent: true,
                        popup: false,
                        forced: true,
                        content: function () {
                            delete player.storage.ymqiaoshuo;
                        },
                    },
                },
            },
            ymzongshi: {
                trigger: {
                    player: ['damageEnd', 'loseHpEnd'],
                },
                audio: 'xinjyzongshi',
                filter: function (event, player) {
                    return player != _status.currentPhase;
                },
                content: function () {
                    'step 0'
                    player.draw(2);
                    if (trigger.source != undefined) {
                        player.chooseCard(1, 'h', true, '选择1张手牌展示之', function (card) {
                            return true;
                        }).set('ai', function (card) {
                            return 6 - get.value(card)
                        });
                    } else event.finish();
                    'step 1'
                    if (result.cards) {
                        player.showCards(result.cards);
                        trigger.source.chooseCard(1, '选择1张同花色的牌交给' + get.translation(player) + '且其回复一点体力，否则，你弃置' + player.maxHp + '张手牌', function (card) {
                            return get.suit(card) == get.suit(result.cards[0]);
                        }).set('ai', function (card) {
                            return 10 - get.value(card);
                        });
                    }
                    'step 2'
                    if (result.cards && result.cards.length && result.bool) {
                        player.gain(result.cards, trigger.source, 'giveAuto');
                        player.recover();
                    } else {
                        trigger.source.chooseToDiscard(player.maxHp, true);
                    }
                },
            },
            ymdunjia: {
                trigger: {
                    global: "judgeBefore",
                },
                charlotte: true,
                lastDo: true,
                audio: 'qixing',
                logTarget: "player",
                priority: 2,
                content: function () {
                    'step 0'
                    if (!player.storage.ymdunjia) player.storage.ymdunjia = 0;
                    player.storage.ymdunjia++;
                    var card = ui.cardPile.hasChildNodes() ? ui.cardPile.firstChild : get.cards(1);
                    event.card = card;
                    var judge0 = trigger.judge(card);
                    var judge1 = 0;
                    var choice = event.card.number;
                    event.suitchoice = event.card.suit;
                    event.namex = [];
                    event.namechoice = 'cancel2';
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if (name == 'sha') {
                            event.namex.push(['basic', '', 'sha']);
                            event.namex.push(['basic', '', 'sha', 'fire']);
                            event.namex.push(['basic', '', 'sha', 'thunder']);
                            event.namex.push(['basic', '', 'sha', 'ice']);
                            event.namex.push(['basic', '', 'sha', 'kami']);
                        } else if (get.type(name) == 'trick') event.namex.push(['trick', '', name]);
                        else if (get.type(name) == 'delay') event.namex.push(['delay', '', name]);
                        else if (get.type(name) == 'basic') event.namex.push(['basic', '', name]);
                        else if (get.type(name) == 'equip') event.namex.push(['equip', '', name]);
                        else if ((get.type(name) != 'equip') && (get.type(name) != 'trick') && (get.type(name) != 'delay') && (get.type(name) != 'basic')) event.namex.push(name);
                    }
                    var attitude = get.attitude(player, trigger.player);
                    var str = '请选择' + get.translation(trigger.player) + '的判定结果';
                    if (player.isUnderControl()) {
                        game.swapPlayerAuto(player);
                    }
                    event.switchToAuto = function () {
                        _status.imchoosing = false;
                        event.suitx = ['diamond', 'heart', 'club', 'spade'];
                        for (var j = 0; j < event.namex.length; j++) {
                            for (var x = 0; x < 4; x++) {
                                for (var i = 1; i < 14; i++) {
                                    var judge2 = (trigger.judge({
                                        name: event.namex[j][2],
                                        type: event.namex[j][0],
                                        nature: event.namex[j][3],
                                        suit: event.suitx[x],
                                        number: i,
                                    }) - judge0) * attitude;
                                    if (judge2 > judge1) {
                                        choice = i;
                                        event.suitchoice = event.suitx[x];
                                        event.namechoice = event.namex[j];
                                        judge1 = judge2;
                                        if (judge2 > 0) break;
                                    }
                                }
                            }
                        }
                        event._result = {
                            suit: event.suitchoice,
                            number: choice,
                            bool: true,
                        };
                        if (event.dialog) event.dialog.close();
                        if (event.control) event.control.close();
                        game.resume();
                        _status.imchoosing = false;
                    };
                    var chooseButton = function (player, str) {
                        var event = _status.event;
                        player = player || event.player;
                        if (!event._result) event._result = {};
                        var dialog = ui.create.dialog(str, 'forcebutton', 'hidden');
                        event.dialog = dialog;
                        dialog.addText('花色');
                        var table = ui.create.div('.add-setting', {
                            margin: 0,
                            width: '100%',
                            position: 'relative'
                        }, dialog.content);
                        var listi = ['spade', 'heart', 'club', 'diamond'];
                        for (var i = 0; i < listi.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.link = listi[i];
                            table.appendChild(td);
                            td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                _status.tempNoButton = true;
                                setTimeout(function () {
                                    _status.tempNoButton = false;
                                }, 500);
                                var link = this.link;
                                var current = this.parentNode.querySelector('.bluebg');
                                if (current) {
                                    current.classList.remove('bluebg');
                                }
                                this.classList.add('bluebg');
                                event._result.suit = link;
                            });
                        }
                        dialog.addText('点数');
                        table = ui.create.div('.add-setting', {
                            margin: 0,
                            width: '100%',
                            position: 'relative'
                        }, dialog.content)
                        for (var i = 1; i < 14; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode', table);
                            td.link = i;
                            var num = i;
                            td.innerHTML = '<span>' + get.strNumber(num) + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                _status.tempNoButton = true;
                                setTimeout(function () {
                                    _status.tempNoButton = false;
                                }, 500);
                                var link = this.link;
                                var current = this.parentNode.querySelector('.bluebg');
                                if (current) {
                                    current.classList.remove('bluebg');
                                }
                                this.classList.add('bluebg');
                                event._result.number = link;
                            });
                        }
                        dialog.add('　　');
                        event.dialog.open();

                        event.control = ui.create.control('ok', 'cancel2', function (link) {
                            var result = event._result;
                            if (link == 'cancel2') result.bool = false;
                            else {
                                if (!result.number || !result.suit) return;
                                result.bool = true;
                            }
                            event.dialog.close();
                            event.control.close();
                            game.resume();
                            _status.imchoosing = false;
                        });
                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                            event.dialog.buttons[i].classList.add('selectable');
                        }
                        game.pause();
                        game.countChoose();
                    };
                    if (event.isMine()) {
                        chooseButton(player, str);
                    } else {
                        event.switchToAuto();
                    }
                    'step 1'
                    if (event.dialog) event.dialog.close();
                    if (event.control) event.control.close();
                    event.resultx = result;
                    var dialog = ui.create.dialog('遁甲', [event.namex, 'vcard']);
                    player.chooseButton(dialog, true).set('ai', function (button) {
                        var choice = _status.event.botton;
                        switch (button.link) {
                            case choice:
                                return 999;
                            default:
                                return Math.floor(Math.random() * 10);
                        }
                    }).set('botton', event.namechoice).prompt = get.prompt2(event.name);
                    'step 2'
                    Object.assign(result, event.resultx);
                    player.logSkill(event.name, trigger.player);
                    trigger.fixedResult = {
                        name: result.links[0][2],
                        suit: result.suit,
                        color: get.color({suit: result.suit}),
                        number: result.number,
                        nature: result.links[0][3],
                    };
                    var card = game.createCard(trigger.fixedResult),
                        node;
                    if (game.chess) {
                        node = card.copy('thrown', 'center', ui.arena).animate('start');
                    } else {
                        node = player.$throwordered(card.copy(), true);
                    }
                    node.classList.add('thrownhighlight');
                    ui.arena.classList.add('thrownhighlight');
                    game.log(player, '将判定结果修改为了', '#g', card);
                    Object.assign(trigger.fixedResult, {
                        card: card,
                        node: node,
                        judge: trigger.judge(card)
                    });
                    if (trigger.player.judging.length) Object.assign(trigger.player.judging[0], trigger.fixedResult);
                    player.popup(get.translation(result.suit + 2) + get.strNumber(result.number), 'thunder');
                    if (!trigger.result) trigger.result = {};
                    Object.assign(trigger.result, trigger.fixedResult);
                    trigger.noJudgeTrigger = true;
                    trigger.direct = true;
                    trigger.cancel();
                    if (trigger.result.judge > 0) {
                        trigger.result.bool = true;
                        trigger.player.popup('洗具');
                    }
                    if (trigger.result.judge < 0) {
                        trigger.result.bool = false;
                        trigger.player.popup('杯具');
                    }
                    game.log(trigger.player, '的判定结果为', card);
                    trigger.position.appendChild(card);
                    game.delay(2);
                    'step 3'
                    ui.arena.classList.remove('thrownhighlight');
                    game.addVideo('judge2', null, event.videoId);
                    ui.clear();
                    var card = trigger.result.card;
                    trigger.position.appendChild(card);
                    trigger.result.node.delete();
                    game.delay();
                },
            },
            ymqixing: {
                trigger: {
                    player: 'phaseBegin',
                },
                audio: 'kuangfeng',
                forced: true,
                content: function () {
                    'step 0'
                    player.discard(player.getCards('h'));
                    event.num = 7;
                    event.cards = [];
                    event.names = [];
                    'step 1'
                    event.num--;
                    var card = get.cardPile(function (card) {
                        return !event.cards.contains(card) && !event.names.contains(card.name);
                    });
                    if (card) {
                        event.cards.add(card);
                        event.names.add(card.name);
                    }
                    if (event.num > 0) event.redo();
                    'step 2'
                    player.gain(event.cards, 'gain2');
                },
                mod: {
                    maxHandcardBase: function (player, num) {
                        return 7;
                    },
                },
            },
            ymxuming: {
                group: ["ymxuming_lose", "ymxuming_after"],
                audio: 'dawu',
                notemp: true,
                trigger: {
                    player: "dying",
                },
                forced: true,
                filter: function (event, player) {
                    var content = player.storage.ymxuming;
                    for (var i = 0; i < content.length; i++) {
                        if (get.owner(content[i]) != player && get.position(content[i]) != 's') {
                            return true;
                        }
                    }
                    return false;
                },
                init: function (player) {
                    player.storage.ymxuming = [];
                    game.addVideo('storage', player, ['ymxuming', get.cardsInfo(player.storage.ymxuming), 'cards']);
                },
                mark: true,
                content: function () {
                    for (var i = 0; i < player.storage.ymxuming.length; i++) {
                        if (get.owner(player.storage.ymxuming[i]) == player || get.position(player.storage.ymxuming[i]) == 's') {
                            player.storage.ymxuming.splice(i, 1);
                            i--;
                        }
                    }
                    var n = player.storage.ymdunjia || 0;
                    var num = n > 4 ? 4 : n;
                    var cards = player.storage.ymxuming.splice(0, 3 + num);
                    player.gain(cards, 'log');
                    player.$gain2(cards);
                },
                intro: {
                    nocount: true,
                    onunmark: function (content, player) {
                        player.storage.ymxuming.length = 0;
                    },
                    mark: function (dialog, content, player) {
                        dialog.add('<div class="text center">最近失去的牌</div>');
                        var cards = [];
                        var n = player.storage.ymdunjia || 0;
                        var num = n > 4 ? 4 : n;
                        for (var i = 0; i < content.length; i++) {
                            if (get.owner(content[i]) != player && get.position(content[i]) != 's') {
                                cards.push(content[i]);
                                if (cards.length >= 3 + num) break;
                            }
                        }
                        if (cards.length) {
                            dialog.add(cards);
                        } else {
                            dialog.add('（无）');
                        }
                    },
                    content: function (content, player) {
                        var str = '最近失去的牌：';
                        var cards = [];
                        var n = player.storage.ymdunjia || 0;
                        var num = n > 4 ? 4 : n;
                        for (var i = 0; i < content.length; i++) {
                            if (get.owner(content[i]) != player && get.position(content[i]) != 's') {
                                cards.push(content[i]);
                                if (cards.length >= 3 + num) break;
                            }
                        }
                        if (cards.length) {
                            str += get.translation(cards);
                        } else {
                            str += '无';
                        }
                        return str;
                    },
                },
                subSkill: {
                    lose: {
                        trigger: {
                            player: "loseEnd",
                        },
                        silent: true,
                        content: function () {
                            for (var i = 0; i < trigger.cards.length; i++) {
                                player.storage.ymxuming.unshift(trigger.cards[i]);
                            }
                            game.addVideo('storage', player, ['ymxuming', get.cardsInfo(player.storage.ymxuming), 'cards']);
                        },
                        forced: true,
                        popup: false,
                    },
                    after: {
                        trigger: {
                            player: "dyingEnd",
                        },
                        usable: 1,
                        silent: true,
                        content: function () {
                            var lists = [];
                            for (var card of lib.inpile) {
                                if (get.type({name: card, iscard: true}, 'trick') != 'trick') continue;
                                var use = game.createCard(card);
                                if (get.info(use).selectTarget != -1 || get.info(use).toself) continue;
                                lists.push(card);
                            }
                            var name = lists.randomGet();
                            var list = game.filterPlayer(function (current) {
                                return player.canUse(name, current);
                            }).sortBySeat();
                            if (list.length) {
                                player.useCard({name: name}, list);
                            }
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            ymrenshi: {
                trigger: {
                    player: ['phaseBegin', 'damageEnd'],
                },
                audio: 'renjie2',
                filter: function (event, player, name) {
                    if (name == 'damageEnd') return event.num > 0;
                    return true;
                },
                content: function () {
                    'step 0'
                    player.chooseControl('获得牌', '摸牌', 'cancel2').set('prompt', '请选择获得场上角色区域内的一张牌或摸两张牌').set('ai', function () {
                        if (player.countCards('h') < 3) return '摸牌';
                        return '获得牌';
                    });
                    'step 1'
                    if (result.control == 'cancel2') event.finish();
                    if (result.control == '摸牌') {
                        player.addMark('ymrenshi', 1, false);
                        player.draw(2);
                        event.finish();
                    }
                    if (result.control == '获得牌') {
                        player.addMark('ymrenshi', 1, false);
                        player.chooseTarget('获得一名角色区域内的一张牌', function (card, player, target) {
                            return target.countCards('hej');
                        }).set('ai', function (target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (att < 0) {
                                att = -Math.sqrt(-att);
                            } else {
                                att = Math.sqrt(att);
                            }
                            return att * lib.card.guohe.ai.result.target(player, target);
                        });
                    }
                    'step 2'
                    if (result.targets) {
                        player.gainPlayerCard(result.targets[0], 'hej', true);
                    }
                },
                mod: {
                    maxHandcard: function (player, num) {
                        return num + (player.countMark('ymrenshi') || 0);
                    },
                },
                marktext: '忍',
                intro: {
                    name: '忍时',
                    content: function (storage) {
                        return '手牌上限+' + storage;
                    },
                },
                group: 'ymrenshi_use',
                subSkill: {
                    use: {
                        audio: 'renjie2',
                        usable: 1,
                        enable: "phaseUse",
                        prompt: "失去一点体力发动一次【忍时】",
                        content: function () {
                            "step 0"
                            player.loseHp(1);
                            player.useSkill('ymrenshi');
                            player.judge(function (card) {
                                return get.color(card) == 'black' ? 1 : -1;
                            });
                            'step 1'
                            if (result.bool && player.maxHp > player.hp) {
                                player.recover();
                            }
                        },
                        ai: {
                            basic: {
                                order: 1,
                            },
                            result: {
                                player: function (player) {
                                    if (player.countCards('h') >= player.hp + 1) return -1;
                                    if (player.hp < 2) return -1;
                                    return 1;
                                },
                            },
                        },
                    },
                },
            },
            ymguicai: {
                trigger: {
                    global: "judge",
                },
                audio: 'reguicai',
                content: function () {
                    "step 0"
                    event.cards = get.cards(4);
                    player.chooseCardButton(event.cards, '鬼才：选择一张牌作为' + get.translation(trigger.player) + '的' + trigger.judgestr + '判定结果').ai = function (button) {
                        if (get.attitude(player, trigger.player) > 0) {
                            return 1 + trigger.judge(button.link);
                        }
                        if (get.attitude(player, trigger.player) < 0) {
                            return 1 - trigger.judge(button.link);
                        }
                        return 0;
                    };
                    "step 1"
                    if (result.bool) {
                        var card = result.links[0];
                        event.card = card;
                        event.up = [];
                        event.cards.remove(card);
                        game.cardsGotoOrdering(card).relatedEvent = trigger;
                        player.respond(event.card, 'ymguicai', 'highlight', 'noOrdering');
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (trigger.player.judging[0].clone) {
                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                        game.broadcast(function (card) {
                            if (card.clone) {
                                card.clone.classList.remove('thrownhighlight');
                            }
                        }, trigger.player.judging[0]);
                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                    }
                    game.cardsDiscard(trigger.player.judging[0]);
                    trigger.player.judging[0] = card;
                    game.log(trigger.player, '的判定牌改为', card);
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.suit(event.card) == get.suit(event.cards[i])) {
                            event.up.push(event.cards[i]);
                            event.cards.splice(i--, 1);
                        }
                    }
                    if (event.cards.length > 0) player.gain(event.cards);
                    for (var i = event.up.length - 1; i >= 0; i--) {
                        ui.cardPile.insertBefore(event.up[i], ui.cardPile.firstChild);
                    }
                    if (event.up.length > 0) game.log(player, '将剩余的' + event.up.length + '张牌置于牌堆顶');
                    game.delay(2);

                },
                ai: {
                    tag: {
                        rejudge: 1,
                    },
                },
            },
            ymfanpan: {
                skillAnimation: true,
                animationColor: "thunder",
                audio: 'refankui',
                juexingji: true,
                unique: true,
                mark: true,
                trigger: {
                    player: "phaseEnd",
                },
                filter: function (event, player) {
                    if (player.storage.ymfanpan2 < Math.ceil(game.players.length / 2)) return false;
                    return !player.storage.ymfanpan;
                },
                forced: true,
                content: function () {
                    player.awakenSkill(event.name);
                    player.storage[event.name] = true;
                    player.gainMaxHp();
                    player.recover();
                    var players = game.players;
                    player.line(players, 'green');
                    for (var i = 0; i < players.length; i++) {
                        if (players[i] != player && players[i].getCards('h')) player.gain(players[i].getCards('h'), players[i], 'giveAuto');
                    }
                },
                intro: {
                    content: "limited",
                },
                group: 'ymfanpan_phase',
                subSkill: {
                    phase: {
                        trigger: {
                            player: 'phaseBefore',
                        },
                        silent: true,
                        popup: false,
                        forced: true,
                        content: function () {
                            if (!player.storage.ymfanpan2) player.storage.ymfanpan2 = 0;
                            player.storage.ymfanpan2++;
                        },
                    },
                },
            },
            ymzuijiu: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                audio: 'retishen',
                filter: function (event, player) {
                    return player.hp < player.maxHp;
                },
                content: function () {
                    player.gainMaxHp([1, 2].randomGet());
                    player.recover();
                    player.useCard({name: 'jiu'}, player);
                },
                mod: {
                    cardUsable: function (card, player, num) {
                        if (card.name == 'jiu') return Infinity;
                    },
                },
                group: ['ymzuijiu_use', 'ymzuijiu_lose'],
                subSkill: {
                    use: {
                        trigger: {
                            player: 'useCard',
                        },
                        popup: false,
                        silent: true,
                        forced: true,
                        filter: function (event, player) {
                            return event.card.name == 'jiu' && player.hp > 0;
                        },
                        content: function () {
                            if (!player.storage.ymjiu2) player.storage.ymjiu2 = 0;
                            player.storage.ymjiu2++;
                            player.markSkill('ymzuijiu_lose');
                        },
                    },
                    lose: {
                        trigger: {
                            global: ['useCardAfter', 'phaseAfter', 'useCard1'],
                        },
                        lastDo: true,
                        priority: 1,
                        popup: false,
                        silent: true,
                        charlotte: true,
                        marktext: '酒',
                        intro: {
                            name: '醉酒',
                            content: function (storage, player, skill) {
                                return '已使用' + player.storage.jiu + '次【酒】';
                            },
                        },
                        filter: function (event, player) {
                            if (!player.storage.ymjiu2 || player.storage.ymjiu2 == 0) return false;
                            return !player.hasSkill('jiu');
                        },
                        content: function () {
                            player.addSkill('jiu');
                            player.storage.jiu = player.storage.ymjiu2;
                            if (!player.node.jiu && lib.config.jiu_effect) {
                                player.node.jiu = ui.create.div('.playerjiu', player.node.avatar);
                                player.node.jiu2 = ui.create.div('.playerjiu', player.node.avatar2);
                            }
                        },
                    },
                },
            },
            ympaoxiao: {
                enable: 'phaseUse',
                audio: 'paoxiao',
                usable: 1,
                filterTarget: function (card, player, target) {
                    if (target == player) return false;
                    return true;
                },
                filter: function (event, player) {
                    return player.countCards('h') > 0;
                },
                content: function () {
                    'step 0'
                    if (target.countCards('h') > 0) player.chooseToCompare(target);
                    else event.goto(2);
                    'step 1'
                    if (result.bool) {
                        player.line(target);
                        player.useCard({name: 'sha'}, target, false).animate = false;
                        player.getStat().skill.ympaoxiao--;
                    } else {
                        player.addTempSkill('ympaoxiao_use');
                        player.draw(2);
                    }
                    event.finish();
                    'step 2'
                    if (player.countCards('h') > 0) player.chooseToDiscard().set('ai', function (card) {
                        return 3 - get.value(card);
                    });
                    'step 3'
                    if (result.bool) {
                        player.line(target);
                        player.useCard({name: 'sha'}, target, false).animate = false;
                        player.getStat().skill.ympaoxiao--;
                    } else {
                        player.addTempSkill('ympaoxiao_use');
                        player.draw(2);
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        target: function (player, target) {
                            if (target.hp == 1) return -5;
                            return -2;
                        },
                    },
                },
                subSkill: {
                    use: {
                        popup: false,
                        silent: true,
                        charlotte: true,
                        mark: true,
                        intro: {
                            name: '咆哮',
                            content: function (storage, player, skill) {
                                var str = '你使用【杀】无距离次数限制';
                                if (player.getDamagedHp() > 0) str += ('且可额外指定' + player.getDamagedHp() + '名角色为目标');
                                return str;
                            },
                        },
                        mod: {
                            targetInRange: function (card, player, target, now) {
                                if (card.name == 'sha') return true;
                            },
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return Infinity
                            },
                            selectTarget: function (card, player, range) {
                                if (card.name == 'sha' && range[1] != -1) range[1] += player.getDamagedHp();
                            },
                        },
                    },
                },
            },
            ymxiaoyong: {
                trigger: {
                    source: 'damageBegin3',
                },
                audio: 'retishen',
                filter: function (event, player) {
                    if (!event.card || event.card.name != 'sha') return false;
                    return event.player != player;
                },
                check: function (event, player) {
                    return get.attitude(player, event.target) <= 0 && player.maxHp > 1;
                },
                content: function () {
                    'step 0'
                    player.judge(function (card) {
                        if (get.suit(card) == 'heart') return 2;
                        if (get.suit(card) == 'spade') return 1;
                        return -2;
                    });
                    'step 1'
                    if (result.judge < 0) {
                        event.finish();
                        return;
                    }
                    if (result.suit == 'heart') {
                        trigger.cancel();
                        trigger.player.loseMaxHp(trigger.num).source = player;
                    }
                    if (result.suit == 'spade') trigger.num += trigger.num;
                    'step 2'
                    player.loseMaxHp();
                    player.storage.ymjiu2 = 0;
                    player.removeSkill('jiu');
                    player.unmarkSkill('ymzuijiu_lose');
                },
            },
            ymtieji: {
                usable: 1,
                audio: 'retieji',
                enable: "phaseUse",
                marktext: "骑",
                intro: {
                    content: function (storage, player, skill) {
                        var str = '当前状态：';
                        if (player.hasSkill('ymtieji_spade')) str += '<br><li>♠️：你的【杀】指定目标后，你令其本回合技能失效。';
                        if (player.hasSkill('ymtieji_heart')) str += '<br><li>♥️️：你的【杀】不可被闪避且无视目标防具。';
                        if (player.hasSkill('ymtieji_club')) str += '<br><li>♣️：你的【杀】造成的伤害+1。';
                        if (player.hasSkill('ymtieji_diamond')) str += '<br><li>♦️：你的【杀】无距离次数限制。';
                        return str;
                    },
                },
                content: function () {
                    "step 0"
                    var cards = player.getCards('h');
                    event.suit = [];
                    event.limited = [];
                    event.cards = [];
                    event.num = 0;
                    event.all = ['spade', 'heart', 'club', 'diamond'];
                    if (cards && cards.length > 0) {
                        player.showHandcards();
                        for (var i = 0; i < cards.length; i++) {
                            if (!event.suit.contains(get.suit(cards[i]))) {
                                event.suit.add(get.suit(cards[i]));
                                event.all.remove(get.suit(cards[i]));
                            }
                        }
                    }
                    'step 1'
                    var card = get.cardPile(function (card) {
                        for (var i = 0; i < event.all.length; i++) {
                            if (get.suit(card) == event.all[i] && !event.limited.contains(get.suit(card)) && !event.cards.contains(card)) return true;
                        }
                        return false;
                    });
                    if (card) {
                        event.cards.push(card);
                        event.limited.add(get.suit(card));
                        event.num++;
                        if (event.num < event.all.length) event.redo();
                    }
                    "step 2"
                    if (event.suit.contains('spade')) player.addTempSkill('ymtieji_spade');
                    if (event.suit.contains('heart')) player.addTempSkill('ymtieji_heart');
                    if (event.suit.contains('club')) player.addTempSkill('ymtieji_club');
                    if (event.suit.contains('diamond')) player.addTempSkill('ymtieji_diamond');
                    //var card = get.cardPile(function (card) {
                    //    return card.name == 'sha' && !event.cards.contains(card);
                    //});
                    //event.cards.push(card);
                    player.gain(event.cards, 'gain2');
                },
                ai: {
                    result: {
                        player: 1,
                    },
                    order: 11,
                },
                subSkill: {
                    spade: {
                        shaRelated: true,
                        popup: false,
                        silent: true,
                        charlotte: true,
                        forced: true,
                        init: function (player) {
                            player.markSkill('ymtieji');
                        },
                        onremove: function (player) {
                            player.unmarkSkill('ymtieji');
                        },
                        trigger: {
                            player: "useCardToTargeted",
                        },
                        filter: function (event, player) {
                            return event.card.name == 'sha';
                        },
                        logTarget: "target",
                        content: function () {
                            trigger.target.addTempSkill('baiban');
                        },
                        ai: {
                            ignoreSkill: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || !arg.target.getSkills(true, false).contains(arg.skill)) return false;
                            },
                        },
                    },
                    heart: {
                        shaRelated: true,
                        popup: false,
                        silent: true,
                        charlotte: true,
                        init: function (player) {
                            player.markSkill('ymtieji');
                        },
                        onremove: function (player) {
                            player.unmarkSkill('ymtieji');
                        },
                        trigger: {
                            player: "useCardToTargeted",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.card.name == 'sha';
                        },
                        logTarget: "target",
                        content: function () {
                            trigger.target.addTempSkill('qinggang2');
                            trigger.target.storage.qinggang2.add(trigger.card);
                            trigger.getParent().directHit.add(trigger.target);
                        },
                        ai: {
                            skillTagFilter: function (player, tag, arg) {
                                if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                if (arg && arg.name == 'sha') return true;
                            },
                            "directHit_ai": true,
                            "unequip_ai": true,
                        },
                    },
                    club: {
                        trigger: {
                            source: "damageBegin1",
                        },
                        filter: function (event) {
                            return event.card && event.card.name == 'sha';
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        charlotte: true,
                        init: function (player) {
                            player.markSkill('ymtieji');
                        },
                        onremove: function (player) {
                            player.unmarkSkill('ymtieji');
                        },
                        content: function () {
                            trigger.num++;
                        },
                    },
                    diamond: {
                        popup: false,
                        silent: true,
                        charlotte: true,
                        init: function (player) {
                            player.markSkill('ymtieji');
                        },
                        onremove: function (player) {
                            player.unmarkSkill('ymtieji');
                        },
                        mod: {
                            targetInRange: function (card, player, target, now) {
                                if (card.name == 'sha') return true;
                            },
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return Infinity
                            },
                        },
                    },
                },
            },
            ymmengshi: {
                audio: 'tieji',
                firstDo: true,
                trigger: {
                    player: "useCard1",
                },
                forced: true,
                filter: function (event, player) {
                    var num = game.countPlayer(function (current) {
                        return current.isDamaged();
                    });
                    return !event.audioed && event.card.name == 'sha' && event.targets.length > 1 && num > 0;
                },
                content: function () {
                    trigger.audioed = true;
                },
                mod: {
                    selectTarget: function (card, player, range) {
                        var num = game.countPlayer(function (current) {
                            return current.isDamaged();
                        });
                        if (card.name == 'sha' && range[1] != -1) range[1] += num;
                    },
                },
            },
            ymnajian: {
                trigger: {
                    player: 'gainBegin',
                },
                audio: 'baonue2',
                check: function (event, player) {
                    return player.countMark('ymnajian') < game.players.length;
                },
                filter: function (event, player) {
                    if (!event.cards || event.cards.length == 0) return false;
                    return event.getParent().name != 'draw';
                },
                content: function () {
                    trigger.cancel();
                    player.draw(trigger.cards.length);
                    player.addMark('ymnajian');
                },
                marktext: '谏',
                intro: {
                    name: '纳谏',
                    content: 'mark',
                },
            },
            ymbaonue: {
                trigger: {
                    player: 'phaseBegin',
                },
                audio: 'olbaonue',
                content: function () {
                    'step 0'
                    var num1 = player.countMark('ymnajian');
                    var num2 = game.players.length;
                    player.removeMark('ymnajian', num1);
                    if (num1 >= num2) event.goto(3);
                    'step 1'
                    player.chooseTarget([1, Infinity], get.prompt(event.name), '选择任意名其他角色随机弃置其1-3张牌', function (card, player, target) {
                        return target != player;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.damageEffect(target, player, player);
                    });
                    'step 2'
                    if (result.bool && result.targets) {
                        for (var i = 0; i < result.targets.length; i++) {
                            var num = [1, 2, 3].randomGet();
                            var cards = result.targets[i].getCards('he').randomGets(num);
                            result.targets[i].discard(cards);
                        }
                        if (result.targets.length > 1) event.goto(5);
                        else event.finish();
                    } else event.finish();
                    'step 3'
                    player.chooseTarget([1, Infinity], get.prompt(event.name), '选择任意名其他角色对其随机造成1-3点伤害', function (card, player, target) {
                        return target != player;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.damageEffect(target, player, player);
                    });
                    'step 4'
                    if (result.bool && result.targets) {
                        for (var i = 0; i < result.targets.length; i++) {
                            var num = [1, 2, 3].randomGet();
                            result.targets[i].damage(num);
                        }
                        if (result.targets.length > 1) event.goto(5);
                        else event.finish();
                    } else event.finish();
                    'step 5'
                    player.chooseControl('失去体力', '减少上限', function (event, player) {
                        if (player.hp == player.maxHp) return '失去体力';
                        if (player.hp < player.maxHp - 1 || player.hp <= 2) return '减少上限';
                        return '失去体力';
                    }).set('prompt', '暴虐：失去1点体力或减1点体力上限');
                    'step 6'
                    player.addMark('ymnajian');
                    if (result.control == '失去体力') {
                        player.loseHp();
                    }
                    if (result.control == '减少上限') {
                        player.loseMaxHp();
                    }
                },
            },
            ymhengzheng: {
                enable: 'phaseUse',
                usable: 1,
                audio: 'hengzheng',
                content: function () {
                    'step 0'
                    event.current = player.next;
                    event.currented = [];
                    "step 1"
                    event.currented.push(event.current);
                    event.current.animate('target');
                    if (event.current.getCards('he').length > 0) {
                        event.current.chooseCard(true, 'he', '横征：交给' + get.translation(player) + '一张牌', function (card) {
                            return true;
                        }).set('ai', function (card) {
                            return 3 - get.value(card);
                        });
                    } else event.goto(3);
                    "step 2"
                    if (result.bool == true) {
                        player.gain(result.cards, event.current, 'giveAuto');
                        player.chooseBool(get.prompt(event.name), '是否令<span style="color: red">' + get.translation(event.current) + '</span>摸一张牌？').set('ai', function () {
                            var player = _status.event.player;
                            if (get.attitude(player, event.current) > 0) return true;
                            return false;
                        });
                    } else {
                        event.current = event.current.next;
                        if (event.current != player && !event.currented.contains(event.current)) {
                            game.delay(0.5);
                            event.goto(1);
                        }
                    }
                    'step 3'
                    if (result.bool) {
                        event.current.draw();
                    }
                    event.current = event.current.next;
                    if (event.current != player && !event.currented.contains(event.current)) {
                        game.delay(0.5);
                        event.goto(1);
                    }
                },
                ai: {
                    result: {
                        player: 6,
                    },
                    order: 11,
                },
            },
            ymtuxi: {
                trigger: {
                    player: 'phaseBegin',
                },
                audio: 'retuxi',
                round: 1,
                content: function () {
                    'step 0'
                    var date = new Date();
                    var time = date.getHours();
                    if (time >= 6 && time < 18) event.day = true;
                    else event.night = true;
                    if (event.night) event.goto(4);
                    'step 1'
                    if (event.day) {
                        var check;
                        var i, num = game.countPlayer(function (current) {
                            return current != player && current.countCards('h') && get.attitude(player, current) <= 0;
                        });
                        check = (num >= 2);
                        var max = Math.min(player.hp, game.players.length - 1);
                        player.chooseTarget(get.prompt(event.name), '获得其他至多' + max + '名其他角色一半的手牌', [1, max], function (card, player, target) {
                            return target.countCards('he') > 0 && player != target;
                        }, function (target) {
                            if (!_status.event.aicheck) return 0;
                            var att = get.attitude(_status.event.player, target);
                            return 1 - att;
                        }).set('aicheck', check);
                    } else event.finish();
                    'step 2'
                    if (result.targets) {
                        event.targets = result.targets;
                        event.num = 0;
                    } else event.finish();
                    'step 3'
                    var num = Math.ceil(event.targets[event.num].getCards('he').length / 2);
                    player.gainPlayerCard(event.targets[event.num], num, 'he').source = event.targets[event.num];
                    event.num++;
                    if (event.num < event.targets.length) event.redo();
                    else event.finish();
                    'step 4'
                    var max = Math.min(player.hp, game.players.length - 1);
                    player.chooseTarget(get.prompt(event.name), '对其他至多' + max + '名其他角色造成其体力值一半的伤害', [1, max], function (card, player, target) {
                        return target != player;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.damageEffect(target, player, player);
                    });
                    'step 5'
                    if (result.targets) {
                        event.targets = result.targets;
                        event.num = 0;
                    } else event.finish();
                    'step 6'
                    var num = Math.ceil(event.targets[event.num].hp / 2);
                    event.targets[event.num].damage(num);
                    event.num++;
                    if (event.num < event.targets.length) event.redo();
                    else event.finish();
                },
            },
            ymdanzhan: {
                audio: 'drlt_zhiti',
                trigger: {
                    player: "gainEnd",
                    source: 'damageEnd',
                },
                filter: function (event, player, name) {
                    if (player != _status.currentPhase) return false;
                    if (name == 'gainEnd') return event.source && event.source.isAlive() && event.source != player;
                    if (name == 'damageEnd') return event.player && event.player.isAlive() && event.player != player;
                    return false;
                },
                check: function (event, player) {
                    return get.attitude(player, event.source) &gt; 0;
                },
                forced: true,
                content: function () {
                    var name = event.triggername;
                    if (name == 'gainEnd') {
                        var card = trigger.source.getCards('he').randomGet();
                        trigger.source.discard(card);
                    }
                    if (name == 'damageEnd') trigger.player.loseHp();
                },
            },
            ymrende: {
                audio: 'rerende',
                enable: "phaseUse",
                filterCard: true,
                selectCard: [1, Infinity],
                discard: false,
                lose: false,
                delay: 0,
                filterTarget: function (card, player, target) {
                    return player != target;
                },
                check: function (card) {
                    if (ui.selected.cards.length > 1) return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                    if (!ui.selected.cards.length && card.name == 'du') return 20;
                    var player = get.owner(card);
                    if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                        if (ui.selected.cards.length) {
                            return -1;
                        }
                        var players = game.filterPlayer();
                        for (var i = 0; i < players.length; i++) {
                            if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                return 11 - get.value(card);
                            }
                        }
                        if (player.countCards('h') > player.hp) return 10 - get.value(card);
                        if (player.countCards('h') > 2) return 6 - get.value(card);
                        return -1;
                    }
                    return 10 - get.value(card);
                },
                content: function () {
                    target.gain(cards, player, 'giveAuto');
                    if ((player.getStat().skill.ymrende || 0) <= 1) {
                        player.draw(cards.length);
                        player.recover();
                    }
                },
                ai: {
                    order: function (skill, player) {
                        if (player.hp < player.maxHp && player.storage.ymrende < 2 && player.countCards('h') > 1) {
                            return 10;
                        }
                        return 1;
                    },
                    result: {
                        target: function (player, target) {
                            if (target.hasSkillTag('nogain')) return 0;
                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                if (target.hasSkillTag('nodu')) return 0;
                                return -10;
                            }
                            if (target.hasJudge('lebu')) return 0;
                            var nh = target.countCards('h');
                            var np = player.countCards('h');
                            if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
                                if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                            }
                            return Math.max(1, 5 - nh);
                        },
                    },
                    effect: {
                        target: function (card, player, target) {
                            if (player == target && get.type(card) == 'equip') {
                                if (player.countCards('e', {subtype: get.subtype(card)})) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i] != player && get.attitude(player, players[i]) > 0) {
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                    threaten: 0.8,
                },
                group: ['ymrende_gain', 'ymrende_delete'],
                global: 'ymrende_mod',
                subSkill: {
                    gain: {
                        direct: true,
                        trigger: {
                            global: 'gainEnd',
                        },
                        filter: function (event, player) {
                            return event.cards&&event.cards.length > 0 && event.source == player;
                        },
                        content: function () {
                            'step 0'
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (name == 'sha') {
                                    list.add(['基本', '', 'sha']);
                                    list.add(['基本 ', '', 'sha', 'fire']);
                                    list.add(['基本', '', 'sha', 'thunder']);
                                    list.add(['基本', '', 'sha', 'ice']);
                                    list.add(['基本', '', 'sha', 'kami']);
                                } else if (get.type(name) == 'trick') list.add(['锦囊', '', name]);
                                else if (get.type(name) == 'basic') list.add(['基本', '', name]);
                            }
                            if (list.length == 0) {
                                dialog = ui.create.dialog('【仁德】无可选牌');
                            }
                            dialog = ui.create.dialog('仁德', [list, 'vcard']);
                            player.chooseButton(dialog).ai = function (button) {
                                if (get.attitude(player, trigger.player) <= 0) return -get.value(button.link, trigger.player);
                                return get.value(button.link[2], trigger.player);
                            }
                            'step 1'
                            if (result.bool) {
                                var tran = get.translation(result.links[0][3] || '') + get.translation(result.links[0][2] || '')
                                game.log(player, '声明了', tran);
                                player.popup(tran);
                                if (!trigger.player.storage.ymrende1) trigger.player.storage.ymrende1 = [];
                                trigger.player.storage.ymrende1.addArray(trigger.cards);
                                trigger.player.storage.ymrende2 = result.links;
                                player.logSkill('ymrende');
                            }
                        },
                    },
                    "delete": {
                        trigger: {
                            player: 'phaseBegin',
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        content: function () {
                            game.findPlayer2(function (current) {
                                if (current.storage.ymrende1 || current.storage.ymrende2) {
                                    delete current.storage.ymrende1;
                                    delete current.storage.ymrende2;
                                }
                            });
                        },
                    },
                    mod: {
                        mod: {
                            cardname: function (card, player, name) {
                                if(game.hasPlayer(function(current){
                                    return current.hasSkill('ymrende');
                                })){
                                    var list = player.storage.ymrende1;
                                    if (list && list.length) {
                                        for (var i = 0; i < list.length; i++) {
                                            if (list.contains(card)) return player.storage.ymrende2[0][2];
                                        }
                                    }
                                }
                            },
                            cardnature: function (card, player, name) {
                                if(game.hasPlayer(function(current){
                                    return current.hasSkill('ymrende');
                                })){
                                    var list = player.storage.ymrende1;
                                    if (list && list.length) {
                                        for (var i = 0; i < list.length; i++) {
                                            if (list.contains(card)) return player.storage.ymrende2[0][3];
                                        }
                                    }
                                }
                            },
                        },
                    },
                },
            },
            ymjieyi: {
                trigger: {
                    global: ['gameStart', 'dieAfter'],
                    player: 'phaseBegin',
                },
                forced: true,
                audio: 'nzry_jieying',
                filter: function (event, player, name) {
                    if (name == 'dieAfter') return event.player.hasSkill('ymjieyi_mark');
                    else return true;
                },
                content: function () {
                    'step 0'
                    var num = [0, 2];
                    if (event.triggername == 'dieAfter') num = [0, 1];
                    game.findPlayer2(function (current) {
                        if (current.hasSkill('ymjieyi_mark') && current != player) current.removeSkill('ymjieyi_mark');
                    });
                    player.chooseTarget(num, true, get.prompt(event.name), '选择角色获得“结义”标记', function (card, player, target) {
                        return target != player && !target.hasSkill('ymjieyi_mark');
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.attitude(player, target) > 0;
                    });
                    'step 1'
                    if (result.bool) {
                        player.addSkill('ymjieyi_mark');
                        for (var i = 0; i < result.targets.length; i++) {
                            result.targets[i].addSkill('ymjieyi_mark');
                        }
                    }
                },
                subSkill: {
                    mark: {
                        trigger: {
                            global: 'useCardAfter',
                            player: 'die',
                        },
                        forced: true,
                        forceDie: true,
                        mark: true,
                        marktext: '结',
                        intro: {
                            name: '结义',
                            content: function (storage, player, skill) {
                                var str = '与你结义的角色：'
                                var target = [];
                                game.findPlayer2(function (current) {
                                    if (current.hasSkill('ymjieyi_mark') && current != player) target.add(current);
                                });
                                str += ('<br><li>' + get.translation(target));
                                return str;
                            },
                        },
                        filter: function (event, player, name) {
                            if (name == 'dieAfter') player.removeSkill('ymjieyi_mark');
                            if (!['basic', 'trick'].contains(get.type(event.card))) return false;
                            if (!event.targets) return false;
                            if (event.targets.length == 1 && !event.targets[0].isAlive()) return false;
                            if (event.card.ymjieyi) return false;
                            if (!event.player.hasSkill('ymjieyi_mark')) return false;
                            for (var i = 0; i < event.targets.length; i++) {
                                if (!event.targets[i].hasSkill('ymjieyi_mark')) {
                                    return true;
                                    break;
                                }
                            }
                            return false;
                        },
                        content: function () {
                            event.targets = trigger.targets.slice(0);
                            game.findPlayer2(function (current) {
                                if (current.hasSkill('ymjieyi_mark')) event.targets.remove(current);
                                if (!current.isAlive()) event.targets.remove(current);
                            });
                            player.useCard({
                                name: trigger.card.name,
                                nature: trigger.card.nature,
                                suit: get.suit(trigger.card),
                                isCard: true
                            }, false, event.targets, false).card.ymjieyi = true;
                        },
                    },
                },
            },
            ymguose: {
                trigger: {
                    player: "phaseEnd",
                },
                filter: function (event, player) {
                    return player.countCards('hes') > 0;
                },
                audio: 'yanxiao',
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseCardTarget({
                        prompt: get.prompt('ymguose'),
                        filterCard: true,
                        position: 'hes',
                        selectCard: 1,
                        filterTarget: function (card, player, target) {
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var info = lib.card[lib.inpile[i]];
                                if (info.type == 'delay') {
                                    list.push(lib.inpile[i]);
                                }
                            }
                            return target != player && target.countCards('j') < list.length;
                        },
                        ai1: function (card) {
                            return 7 - get.value(card);
                        },
                        ai2: function (target) {
                            return get.effect(target, {name: 'lebu'}, player, player);
                        }
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('ymguose');
                        var target = result.targets[0];
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var info = lib.card[lib.inpile[i]];
                            if (info.type == 'delay' && !target.hasJudge(lib.inpile[i])) {
                                list.push(lib.inpile[i]);
                            }
                        }
                        if (list.length) {
                            player.useCard({name: list.randomGet(), isCard: true}, result.cards, target)
                        }
                    }
                },
                ai: {
                    threaten: 1.5,
                },
                group: ['ymguose_useCard', 'ymguose_judge'],
                subSkill: {
                    useCard: {
                        trigger: {
                            player: ['useCard'],
                        },
                        silent: true,
                        popup: false,
                        forced: true,
                        filter: function (event, player) {
                            return get.type(event.card) == 'delay' && !event.targets.contains(player);
                        },
                        content: function () {
                            player.logSkill(event.name);
                            for (var i = 0; i < trigger.cards.length; i++) {
                                trigger.cards[i].storage.QYjudge = true;
                                trigger.cards[i].storage.nowuxie = true;
                                trigger.cards[i].expired = true;
                            }
                        },
                    },
                    judge: {
                        trigger: {
                            global: ['cardsDiscardBefore', "equipBefore", "addJudgeBefore", "gainBefore", "loseAsyncBefore", "loseBefore"],
                        },
                        init: function (player) {
                            game.countPlayer2(current => {
                                current.node.judges.addEventListener('DOMNodeRemoved', function (event) {
                                    if (_status.event.name === 'judge' || _status.event.name === 'addJudge' || _status.event.name === 'die') return false;
                                    if (get.itemtype(event.target) === 'card') {
                                        delete event.target.storage.QYjudge;
                                        delete event.target.storage.nowuxie;
                                        delete event.target.expired;
                                    } else {
                                        for (let pathElement of event.path) {
                                            if (get.itemtype(pathElement) === 'card') {
                                                delete pathElement.storage.QYjudge;
                                                delete pathElement.storage.nowuxie;
                                                delete pathElement.expired;
                                                break;
                                            }
                                        }
                                    }
                                }, true);
                            });
                        },
                        filter: function (event, player) {
                            //if (!event.cards) return false;
                            //if(event.parent.name!='phaseJudge') return false;
                            if (event.cards && event.cards.length) {
                                for (var i = 0; i < event.cards.length; i++) {
                                    return event.cards[i].storage.QYjudge == true;
                                }
                            }
                            if (event.card) return event.card.storage.QYjudge == true;
                            return false;
                        },
                        silent: true,
                        popup: false,
                        forced: true,
                        content: function () {
                            if (trigger.parent.name == 'phaseJudge') {
                                trigger.untrigger();
                                trigger.finish();
                                if (trigger.card) {
                                    trigger.card.storage.QYjudge = true;
                                    trigger.card.storage.nowuxie = true;
                                    trigger.card.expired = true;
                                }
                                if (trigger.cards && trigger.cards.length) {
                                    for (var i = 0; i < trigger.cards.length; i++) {
                                        trigger.cards[i].storage.QYjudge = true;
                                        trigger.cards[i].storage.nowuxie = true;
                                        trigger.cards[i].expired = true;
                                    }
                                }
                            } else if (trigger.type == 'discard' || trigger.type == 'gain') {
                                var list = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].storage.QYjudge == true) {
                                        var card = game.createCard({
                                            name: trigger.cards[i].viewAs || trigger.cards[i].name,
                                            number: trigger.cards[i].number,
                                            suit: trigger.cards[i].suit
                                        });
                                        list.push(card);
                                    }
                                }
                                player.gain(list, 'gain2');
                            }
                        },
                    },
                },
            },
            ymliuli: {
                trigger: {
                    global: 'phaseBegin',
                },
                audio: 'liuli',
                filter: function (event, player) {
                    return event.player.countCards('j') > 0;
                },
                check: function (event, player) {
                    return get.attitude(event.player, player) > 0;
                },
                content: function () {
                    player.gain(trigger.player.getCards('j'), trigger.player, 'giveAuto');
                },
                group: 'ymliuli_target',
                subSkill: {
                    target: {
                        trigger: {
                            target: 'useCardToPlayer',
                        },
                        audio: 'liuli',
                        filter: function (event, player) {
                            if (get.type(event.card) == 'delay') return false;
                            if (get.type(event.card) == 'equip') return false;
                            if (event.addedTargets) return false;
                            var goon = false;
                            if (event.targets) {
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (lib.filter.targetEnabled2(event.card, player, players[i]) && !event.targets.contains(players[i])) {
                                        goon = true;
                                        break;
                                    }
                                }
                            }
                            return goon == true && event.player != player;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget([1, Infinity], '流离：是否指定任意名其他角色也成为此牌的目标?', function (card, player, target) {
                                var trigger = _status.event;
                                if (trigger.targets.contains(target)) return false;
                                return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                            }).set('ai', function (target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                return get.effect(target, trigger.card, player, player);
                            }).set('targets', trigger.targets).set('card', trigger.card);
                            'step 1'
                            if (result.targets) {
                                for (var i = 0; i < result.targets.length; i++) {
                                    trigger.targets.add(result.targets[i]);
                                }
                            }
                            if (player.getHistory('gain', function (evt) {
                                return evt.getParent(2).name == 'ymliuli_target';
                            }).length == 0) {
                                player.draw(trigger.targets.length);
                                player.recover();
                            }
                        },
                    },
                },
            },
            ymlianhuan: {
                trigger: {
                    player: ['phaseBegin', 'phaseEnd'],
                },
                audio: 'lianhuan1',
                direct: true,
                content: function () {
                    'step 0'
                    var name = event.triggername;
                    if (name == 'phaseBegin') {
                        var num = 2 + (player.storage.ymlianhuan || 0);
                        player.chooseTarget([1, num], get.prompt2(event.name), '选择至多' + num + '名角色进入横置状态', function (card, player, target) {
                            return !target.isLinked();
                        }).set('ai', function (target) {
                            var player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        });
                    } else event.goto(2);
                    'step 1'
                    if (result.targets) {
                        player.logSkill(event.name,result.targets);
                        for (var i = 0; i < result.targets.length; i++) {
                            if (!result.targets[i].isLinked()) result.targets[i].link();
                        }
                    }
                    event.finish();
                    'step 2'
                    var num = 1 + (player.storage.ymlianhuan || 0);
                    player.chooseTarget(1, get.prompt2(event.name), '选择1名横置的角色受到' + num + '点随机属性伤害', function (card, player, target) {
                        return target.isLinked();
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.damageEffect(target, player, player);
                    });
                    'step 3'
                    if (result.targets) {
                        player.logSkill(event.name,result.targets);
                        var num = 1 + (player.storage.ymlianhuan || 0);
                        result.targets[0].damage(num).nature = lib.linked.randomGet();
                    }
                },
                intro: {
                    name: '连环·强化',
                    content: function (storage) {
                        return '选择横置的角色或造成的伤害+' + storage;
                    },
                },
                group: 'ymlianhuan_damage',
                subSkill: {
                    damage: {
                        trigger: {
                            global: 'damageEnd',
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        filter: function (event, player) {
                            if (!event.nature) return false;
                            var num = 0;
                            game.findPlayer2(function (current) {
                                num += current.getHistory('damage', function (evt) {
                                    return evt.nature;
                                }).length > 0;
                            });
                            return num <= 1;
                        },
                        content: function () {
                            player.logSkill('ymlianhuan');
                            player.draw(3);
                        },
                    },
                },
            },
            ymniepan: {
                trigger: {
                    player: 'dying',
                },
                skillAnimation: true,
                animationColor: "fire",
                audio: 'niepan',
                juexingji: true,
                forced: true,
                mark: true,
                content: function () {
                    'step 0'
                    player.awakenSkill(event.name);
                    player.storage[event.name] = true;
                    player.storage.ymniepan_awoken = 2 - player.hp;
                    player.maxHp = 2;
                    player.hp = 2;
                    player.update();
                    event.target = game.players.slice(0);
                    event.target.remove(player);
                    event.num = 0;
                    event.count = 0;
                    'step 1'
                    if (event.target[event.num].countCards('hej') > 0) player.gainPlayerCard(event.target[event.num], 'hej', [0, 2], true);
                    'step 2'
                    event.count += (result.cards.length || 0);
                    event.num++;
                    if (event.num < event.target.length) event.goto(1);
                    'step 3'
                    player.draw(2 * event.target.length - event.count);
                    for (var i = 0; i < event.target.length; i++) {
                        event.target[i].damage().nature = lib.linked.randomGet();
                    }
                    player.addSkill('ymniepan_awoken');
                },
                intro: {
                    content: "limited",
                },
                subSkill: {
                    awoken: {
                        trigger: {
                            player: 'phaseBegin',
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        filter: function (event, player) {
                            return player.storage.ymniepan_awoken && player.storage.ymniepan_awoken > 0;
                        },
                        onremove: function (player) {
                            player.unmarkSkill('ymniepan_awoken');
                            delete player.storage.ymniepan_awoken;
                        },
                        content: function () {
                            player.gainMaxHp();
                            player.recover();
                            if (!player.storage.ymlianhuan) player.storage.ymlianhuan = 0;
                            player.storage.ymlianhuan++;
                            if (player.hasSkill('ymlianhuan')) player.markSkill('ymlianhuan');
                            if (player.storage.ymniepan_awoken) player.storage.ymniepan_awoken--;
                            if (player.storage.ymniepan_awoken <= 0) player.removeSkill(event.name);
                        },
                        mark: true,
                        marktext: '槃',
                        intro: {
                            name: '涅槃·强化',
                            content: function (storage) {
                                return '剩余涅槃次数：+' + storage;
                            },
                        },
                    },
                },
            },
            ymxiaoji: {
                enable: 'phaseUse',
                usable: 2,
                audio: 'xiaoji',
                filter: function (event, player) {
                    var he = player.getCards('h');
                    var num = 0;
                    for (var i = 0; i < he.length; i++) {
                        var info = lib.card[he[i].name];
                        if (info.type != 'equip' && lib.inpile.contains(he[i].name)) {
                            num++;
                            if (num >= 1) return true;
                        }
                    }
                },
                filterCard: function (card) {
                    return get.type(card) != 'equip';
                },
                discard: false,
                lose: false,
                delay: false,
                check: function (card) {
                    return get.value(card);
                },
                content: function () {
                    'step 0'
                    var list = [];
                    for (var i of lib.inpile) {
                        if (lib.card[i].compound) continue;
                        if (get.type(i) === 'equip') list.push(['装备', '', i]);
                    }
                    var dialog = ui.create.dialog('枭姬', [list, 'vcard']);
                    player.chooseButton(dialog).ai = function (button) {
                        var name = button.link[2];
                        var player = _status.event.player;
                        var num = 0;
                        for (var i = 1; i <= 5; i++) {
                            if (player.getEquip(i)) {
                                num++;
                            }
                        }
                        if (num >= 5) return false;
                        switch (name) {
                            case 'bagua':
                                if (!player.getEquip(2)) return 1;
                                return 0.2;
                            case 'renwang':
                                if (!player.getEquip(2)) return 0.8;
                                return 0.2;
                            case 'liannu':
                                if (!player.getEquip(1)) return 0.6;
                                return 0.2;
                            case 'guanshi':
                                if (!player.getEquip(1)) return 0.7;
                                return 0.2;
                            case 'qinggang':
                                if (!player.getEquip(1)) return 0.7;
                                return 0.2;
                            case 'zhuahuang':
                                if (!player.getEquip(3)) return 0.8;
                                return 0;
                            case 'chitu':
                                if (!player.getEquip(4)) return 0.8;
                                return 0;
                            case 'muniu':
                                if (!player.getEquip(5)) return 0.8;
                                return 0;
                            default:
                                return 0;
                        }
                    }
                    'step 1'
                    if (result.links) {
                        var name = result.links[0][2];
                        var info1 = lib.card[name];
                        if (info1) {
                            var info = {
                                enable: true,
                                type: 'equip',
                                subtype: get.subtype(result.links[0][2]),
                                vanish: true,
                                cardimage: cards[0].name,
                                filterTarget: function (card, player, target) {
                                    return target == player;
                                },
                                unique: true,
                                compound: true,
                                selectTarget: -1,
                                modTarget: true,
                                toself: true,
                                content: lib.element.content.equipCard,
                                legend: true,
                                source: [cards[0].name, name],
                                onEquip: [],
                                onLose: [function () {
                                    var info = Object.assign(lib.card[card.name]);
                                    delete lib.card[card.name];
                                    delete lib.translate[card.name];
                                    delete lib.translate[card.name + "_info"];
                                    card.init(Object.assign(info, {name: info.source[0]}));
                                }],
                                skills: [],
                                distance: {},
                                ai: {
                                    order: 8.9,
                                    equipValue: 10,
                                    useful: 2.5,
                                    value: function (card, player) {
                                        var value = 0;
                                        var info = get.info(card);
                                        var current = player.getEquip(info.subtype);
                                        if (current && card != current) {
                                            value = get.value(current, player);
                                        }
                                        var equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                        if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                        return equipValue - value;
                                    },
                                    result: {
                                        target: function (player, target) {
                                            return get.equipResult(player, target, name);
                                        }
                                    }
                                }
                            }
                            if (typeof info1.distance === 'object' && info1.distance !== null) Object.assign(info.distance, info1.distance);
                            if (info1.skills) {
                                info.skills = info.skills.concat(info1.skills);
                            }
                            if (info1.onEquip) {
                                if (Array.isArray(info1.onEquip)) {
                                    info.onEquip = info.onEquip.concat(info1.onEquip);
                                } else {
                                    info.onEquip.push(info1.onEquip);
                                }
                            }
                            if (info1.onLose) {
                                if (Array.isArray(info1.onLose)) {
                                    info.onLose = info.onLose.concat(info1.onLose);
                                } else {
                                    info.onLose.push(info1.onLose);
                                }
                            }
                            if (info.onEquip.length == 0) delete info.onEquip;
                            if (info.onLose.length == 0) delete info.onLose;
                            var newName = 'qyCreateCard_' + get.id() + '_' + name;
                            var changename = get.translation(cards[0].name).slice(0, 2) + '·' + get.translation(name).slice(0, 4);
                            lib.card[newName] = info;
                            lib.translate[newName] = changename;
                            lib.translate[newName + '_info'] = get.translation(name, 'info');
                            try {
                                game.addVideo('newcard', null, {
                                    name: name,
                                    translate: lib.translate[newName],
                                    info: lib.translate[newName + '_info'],
                                    // card:name.name,
                                    legend: true,
                                });
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        var card = cards[0].init({
                            name: newName,
                            suit: cards[0].suit,
                            number: cards[0].number
                        });
                        if (lib.config.background_audio) {
                            game.playAudio('..', 'audio', 'card', player.sex, name);
                        }
                        game.addVideo('equip', player, get.cardInfo(card));
                        player.useCard(card, player);
                        //game.log(player, '将', cards, '视为', card, '使用');
                    }
                },
                ai: {
                    order: 9.5,
                    result: {
                        player: function (player) {
                            var num = 0;
                            for (var i = 1; i <= 5; i++) {
                                if (player.getEquip(i)) {
                                    num++;
                                }
                            }
                            return 5 - num;
                        },
                    }
                },
                group: 'ymxiaoji_equip',
                subSkill: {
                    equip: {
                        trigger: {
                            player: "equipBegin",
                        },
                        filter: function (event, player) {
                            var types = get.subtype(event.card);
                            return player.countCards('e', {subtype: types});
                        },
                        popup: false,
                        unique: true,
                        forced: true,
                        lastDo: true,
                        content: function () {
                            "step 0"
                            trigger.untrigger();
                            trigger.finish();
                            var card = trigger.card;
                            if (card.clone) {
                                game.broadcast(function (card, player) {
                                    if (card.clone) {
                                        card.clone.moveDelete(player);
                                    }
                                }, card, player);
                                card.clone.moveDelete(player);
                                game.addVideo('gain2', player, get.cardsInfo([card.clone]));
                            }
                            if (lib.config.background_audio) {
                                game.playAudio('effect', get.subtype(trigger.card));
                            }
                            player.$equip(trigger.card);
                            game.addVideo('equip', player, get.cardInfo(trigger.card));
                            game.log(player, '装备了', trigger.card);
                            "step 1"
                            var info = get.info(trigger.card, false);
                            if (info.onEquip && (!info.filterEquip || info.filterEquip(card, player))) {
                                if (Array.isArray(info.onEquip)) {
                                    for (var i = 0; i < info.onEquip.length; i++) {
                                        var next = game.createEvent('equip_' + trigger.card.name);
                                        next.setContent(info.onEquip[i]);
                                        next.player = player;
                                        next.card = trigger.card;
                                    }
                                } else {
                                    var next = game.createEvent('equip_' + trigger.card.name);
                                    next.setContent(info.onEquip);
                                    next.player = player;
                                    next.card = trigger.card;
                                }
                                if (info.equipDelay != 'false') game.delayx();
                            }
                            delete player.equiping;
                            if (event.delay) {
                                game.delayx();
                            }
                        },
                    },
                },
            },
            ymjieyin: {
                usable: 1,
                audio: 'rejieyin',
                trigger: {
                    player: ['loseEnd'],
                    global: ['loseAsyncEnd', 'equipEnd', 'gainEnd', 'addJudgeEnd'],
                },
                filter: function (event, player, name) {
                    var evt = event.getl(player);
                    if (evt && evt.player == player && evt.es && evt.es.length > 0) return true;
                    if (event.cards && event.cards.length) {
                        for (var i = 0; i < event.cards.length; i++) {
                            return get.type(event.cards[i]) == 'equip' && evt && evt.player == player;
                        }
                    } else if (event.card) return get.type(event.card) == 'equip';
                    return false;
                },
                content: function () {
                    'step 0'
                    event.num = 0;
                    event.num += trigger.getl(player).es.length;
                    if (trigger.cards && trigger.cards.length) {
                        for (var i = 0; i < trigger.cards.length; i++) {
                            if (get.type(trigger.cards[i]) == 'equip') event.num++;
                        }
                    } else if (get.type(trigger.card) == 'equip') event.num++;
                    'step 1'
                    player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
                        return true;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.recoverEffect(target, player, player) || get.attitude(target, player) > 0;
                    });
                    'step 2'
                    if (result.bool) {
                        result.targets[0].recover();
                        result.targets[0].draw();
                        player.draw();
                        event.num--;
                        if (event.num > 0) event.goto(1);
                        else event.finish();
                    } else event.finish();
                },
            },
            ymliangzhu: {
                trigger: {
                    global: ['recoverEnd', 'damageEnd'],
                },
                audio: 'liangzhu',
                direct: true,
                filter: function (event, player, name) {
                    if (name == 'damageEnd') return event.source && event.source.isAlive();
                    if (name == 'recoverEnd') return true;
                    return false;
                },
                content: function () {
                    'step 0'
                    var name = event.triggername;
                    var source;
                    if (name == 'recoverEnd') source = trigger.player;
                    if (name == 'damageEnd') source = trigger.source;
                    player.chooseBool(get.prompt2(event.name), '是否令<span style="color: red">' + get.translation(source) + '</span>重置【杀】和【酒】的使用次数并摸一张牌？').set('ai', function () {
                        var player = _status.event.player;
                        if (get.attitude(player, source) > 0) return true;
                        return false;
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill(event.name);
                        var name = event.triggername;
                        if (name == 'recoverEnd') {
                            trigger.player.draw();
                            if (trigger.addCount !== false) {
                                trigger.addCount = false;
                                trigger.player.getStat().card.sha = 0;
                                trigger.player.getStat().card.jiu = 0;
                            }
                        }
                        if (name == 'damageEnd') {
                            trigger.source.draw();
                            if (trigger.addCount !== false) {
                                trigger.addCount = false;
                                trigger.source.getStat().card.sha = 0;
                                trigger.source.getStat().card.jiu = 0;
                            }
                        }
                    }
                },
            },
            ymganglie: {
                audio: 'ganglie',
                trigger: {
                    player: "damageEnd",
                },
                filter: function (event, player) {
                    if (event.source == player) return false;
                    return (event.source != undefined && event.num > 0);
                },
                check: function (event, player) {
                    return (get.attitude(player, event.source) <= 0);
                },
                logTarget: "source",
                content: function () {
                    "step 0"
                    event.num = trigger.num || 1;
                    event.cards = [];
                    event.red = 0;
                    event.black = 0;
                    "step 1"
                    player.judge();
                    "step 2"
                    event.cards.add(result.card);
                    if (result.color == 'black') {
                        event.black++;
                        if (trigger.source.countCards('he') > 0) {
                            player.discardPlayerCard(trigger.source, 'he', 2, true);
                        }
                    }
                    if (result.color == 'red') {
                        event.red++;
                        if (trigger.source.isAlive()) {
                            trigger.source.damage();
                        }
                    }
                    'step 3'
                    event.num--;
                    if (event.num > 0) {
                        player.chooseBool(get.prompt2(event.name));
                    } else {
                        event.goto(5);
                    }
                    "step 4"
                    if (result.bool) {
                        event.goto(1);
                    }
                    'step 5'
                    player.gain(event.cards, 'gain2');
                    if (event.black >= event.red) player.recover();
                    if (event.red >= event.black) player.draw(2);
                    if (!trigger.source.isAlive()) player.gainMaxHp();
                    if (trigger.source.countCards('he') <= 0) player.gainMaxHp();
                    if (!event.remake && trigger.source.isIn()) {
                        player.chooseBool(get.prompt2(event.name), '是否失去一点体力重新发动此技能？').set('ai', function () {
                            var player = _status.event.player;
                            if (player.hp > 2) return true;
                            if (player.hp > 1 && trigger.source.hp < 2) return true;
                            return false;
                        });
                    } else event.finish();
                    'step 6'
                    if (result.bool) {
                        event.remake = true;
                        player.loseHp();
                        game.log(player, '重新发动了', event.name);
                        player.logSkill(event.name, trigger.source);
                        event.goto(0);
                    }
                },
                ai: {
                    "maixie_defend": true,
                    expose: 0.4,
                },
            },
            ymxunshu: {
                audio: 'qingjian',
                usable: 1,
                trigger: {
                    global: ['damageBegin3', 'loseHpBegin'],
                },
                filter: function (event, player) {
                    if (event.source && event.source == player) return false;
                    return event.num >= event.player.hp && event.player.maxHp > 0;
                },
                check: function (event, player) {
                    return (get.attitude(player, event.source) > 0 && player.maxHp > 1);
                },
                content: function () {
                    'step 0'
                    player.loseMaxHp();
                    trigger.cancel();
                    if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') player.gain(trigger.cards, 'gain2');
                    player.chooseTarget(get.prompt(event.name), '选择1名其他角色对其发动一次【刚烈】', function (card, player, target) {
                        return target != player;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return get.damageEffect(target, player, player);
                    });
                    'step 1'
                    if (result.targets) {
                        var next = game.createEvent('ymxunshu_ymganglie');
                        lib.translate['ymxunshu_ymganglie'] = '勋书·刚烈';
                        next.player = player;
                        next._trigger = {source: result.targets[0], num: 1}
                        next.setContent(lib.skill.ymganglie.content);
                    }
                },
            },
            ymshimu: {
                skillAnimation: true,
                animationColor: "fire",
                audio: 'reganglie',
                mark: true,
                limited: true,
                intro: {
                    content: "limited",
                },
                check: function (event, player) {
                    return (get.attitude(player, event.source) <= 0);
                },
                trigger: {
                    source: 'damageBegin',
                },
                filter: function (event, player) {
                    if (player.storage.ymshimu) return false;
                    if (player.hp >= player.maxHp / 2) return false;
                    if (event.player == player) return false;
                    return !event.player.nodying && !event.player.isDying() && event.player.isAlive() && !event.pure;
                },
                content: function () {
                    'step 0'
                    player.awakenSkill(event.name);
                    player.storage[event.name] = true;
                    trigger.cancel();
                    var next = game.createEvent('dying');
                    next.player = trigger.player;
                    next.reason = trigger;
                    next.source = player;
                    next.setContent(lib.skill.ymshimu.dying);
                    'step 1'
                    if (trigger.player.isAlive()) {
                        player.storage[event.name] = false;
                        player.restoreSkill(event.name);
                    }
                },
                dying: function () {
                    "step 0"
                    event.forceDie = true;
                    event.ori = player.hp;
                    if (player.isDying()) {
                        event.finish();
                        return;
                    }
                    _status.dying.unshift(player);
                    game.broadcast(function (list) {
                        _status.dying = list;
                    }, _status.dying);
                    event.trigger('dying');
                    game.log(player, '濒死');
                    "step 1"
                    if (player.hp > event.ori) {
                        _status.dying.remove(player);
                        game.broadcast(function (list) {
                            _status.dying = list;
                        }, _status.dying);
                        event.finish();
                    } else if (!event.skipTao) {
                        var next = game.createEvent('_save');
                        var start = false;
                        var starts = [_status.currentPhase, event.source, event.player, game.me, game.players[0]];
                        for (var i = 0; i < starts.length; i++) {
                            if (get.itemtype(starts[i]) == 'player') {
                                start = starts[i];
                                break;
                            }
                        }
                        next.player = start;
                        next._trigger = event;
                        next.triggername = '_save';
                        next.ori = event.ori;
                        next.forceDie = true;
                        next.setContent(lib.skill.ymshimu.save);
                    }
                    "step 2"
                    _status.dying.remove(player);
                    game.broadcast(function (list) {
                        _status.dying = list;
                    }, _status.dying);
                    if (player.hp <= event.ori && !player.nodying) player.die(event.reason);
                },
                save: function () {
                    "step 0"
                    event.dying = trigger.player;
                    if (!event.acted) event.acted = [];
                    "step 1"
                    if (trigger.player.isDead()) {
                        event.finish();
                        return;
                    }
                    event.acted.push(player);
                    var str = get.translation(trigger.player) + '濒死，是否帮助？';
                    var str2 = '当前体力：' + trigger.player.hp;
                    if (lib.config.tao_enemy && event.dying.side != player.side && lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && !event.dying.hasSkillTag('revertsave')) {
                        event._result = {
                            bool: false
                        }
                    } else if (player.canSave(event.dying)) {
                        player.chooseToUse({
                            filterCard: function (card, player, event) {
                                event = event || _status.event;
                                return lib.filter.cardSavable(card, player, event.dying);
                            },
                            filterTarget: trigger.player,
                            prompt: str,
                            prompt2: str2,
                            ai1: function (card) {
                                if (typeof card == 'string') {
                                    var info = get.info(card);
                                    if (info.ai && info.ai.order) {
                                        if (typeof info.ai.order == 'number') {
                                            return info.ai.order;
                                        } else if (typeof info.ai.order == 'function') {
                                            return info.ai.order();
                                        }
                                    }
                                }
                                return 1;
                            },
                            ai2: get.effect_use,
                            type: 'dying',
                            targetRequired: true,
                            dying: event.dying
                        });
                    } else {
                        event._result = {
                            bool: false
                        }
                    }
                    "step 2"
                    if (result.bool) {
                        if (trigger.player.hp <= event.ori && !trigger.player.nodying && trigger.player.isAlive() && !trigger.player.isOut() && !trigger.player.removed) event.goto(0);
                        else trigger.untrigger();
                    } else {
                        for (var i = 0; i < 20; i++) {
                            if (event.acted.contains(event.player.next)) {
                                break;
                            } else {
                                event.player = event.player.next;
                                if (!event.player.isOut()) {
                                    event.goto(1);
                                    break;
                                }
                            }
                        }
                    }
                },
            },
            ymzhanjiang: {
                trigger: {
                    source: 'damageBegin3',
                },
                forced: true,
                audio: 'wushen',
                filter: function (event, player) {
                    var num = 0;
                    num += player.getHistory('sourceDamage').length;
                    return num >= 0;
                },
                content: function () {
                    var num = 0;
                    num += player.getHistory('sourceDamage').length;
                    if (num == 0) trigger.num++;
                    if (num == 1) player.gainPlayerCard(trigger.player, 'he', 1, true);
                    if (num == 2) player.discardPlayerCard(trigger.player, 'he', 2, true);
                    if (num >= 3) player.loseHp();
                },
                group: 'ymzhanjiang_damage',
                subSkill: {
                    damage: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter: function (event, player) {
                            return event.player.hp == event.player.maxHp;
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        content: function () {
                            trigger.num++;
                        },
                    },
                },
            },
            ymguagu: {
                audio: 'wuhun21',
                derivation: ['wusheng', 'yijue'],
                enable: "phaseUse",
                usable: 1,
                position: "he",
                filterCard: true,
                filter: function (event, player) {
                    return player.hp < player.maxHp;
                },
                check: function (card) {
                    return 6 - get.value(card);
                },
                content: function () {
                    player.recover();
                    var card = cards[0];
                    if (get.color(card) == 'red') {
                        player.actionHistory[player.actionHistory.length - 1].sourceDamage = [];
                        player.addTempSkill('wusheng');
                    }
                    if (get.color(card) == 'black') {
                        player.gainMaxHp();
                        player.draw(2);
                        player.addTempSkill('yijue');
                    }
                    player.stat[player.stat.length - 1].card = {};
                    player.storage.ymguagu_use = [];
                    player.storage.ymguagu_use.add(get.color(card, player));
                    player.addTempSkill('ymguagu_use');
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 1.5,
                },
                subSkill: {
                    use: {
                        mod: {
                            cardUsable: function (card, player) {
                                var cards = player.storage.ymguagu_use;
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i] == get.color(card)) return Infinity;
                                }
                                ;
                            },
                            targetInRange: function (card, player) {
                                var cards = player.storage.ymguagu_use;
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i] == get.color(card)) return true;
                                }
                                ;
                            },
                            number: function (card, number) {
                                if (_status.event.player && _status.event.player.storage.ymguagu_use) {
                                    var cards = _status.event.player.storage.ymguagu_use;
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i] == get.color(card)) return Infinity;
                                    }
                                }
                            },
                        },
                        trigger: {
                            player: ["compare", "useCard"],
                            target: "compare",
                        },
                        filter: function (event, player, name) {
                            if (name == "useCard") {
                                var cards = player.storage.ymguagu_use;
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i] == get.color(event.card)) return true;
                                }
                                ;
                                return false;
                            }
                            if (event.iwhile) return false;
                            var cards = player.storage.ymguagu_use;
                            if (event.player == player) {
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i] == get.color(event.card1)) return true;
                                }
                                ;
                            } else {
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i] == get.color(event.card2)) return true;
                                }
                                ;
                            }
                        },
                        silent: true,
                        content: function () {
                            var name = event.triggername;
                            if (name == 'useCard') {
                                if (player.stat[player.stat.length - 1].card[trigger.card.name] > 0) {
                                    player.stat[player.stat.length - 1].card[trigger.card.name]--;
                                }
                            } else {
                                game.log(player, '拼点牌点数为∞');
                                if (player == trigger.player) {
                                    trigger.num1 = Infinity;
                                } else {
                                    trigger.num2 = Infinity;
                                }
                            }
                        },
                        forced: true,
                        popup: false,
                        onremove: true,
                        mark: true,
                        marktext: '骨',
                        intro: {
                            name: '刮骨疗毒',
                            content: function (storage, player, skill) {
                                var str = '点数为∞且无距离并不计入次数限制的卡牌颜色：';
                                str += (storage == 'red' ? '红色' : '黑色');
                                return str;
                            },
                        },
                    },
                },
            },
            ymlongxiang: {
                audio: 'danji',
                trigger: {
                    source: 'dieAfter',
                },
                forced: true,
                markext: '骧',
                intro: {
                    name: '龙骧',
                    content: function (storage) {
                        return '你的牌伤害/回复基础值+' + storage;
                    },
                },
                content: function () {
                    if (!player.storage.ymlongxiang) player.storage.ymlongxiang = 0;
                    player.storage.ymlongxiang++;
                    player.markSkill(event.name);
                },
                group: 'ymlongxiang_usecard',
                subSkill: {
                    usecard: {
                        trigger: {
                            player: ["useCard1", "dyingAfter"],
                        },
                        filter: function (event, player, name) {
                            //if(!player.storage.ymlongxian) return false;
                            if (name == 'dyingAfter') return true;
                            return event.card;
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        firstDo: true,
                        content: function () {
                            var name = event.triggername;
                            if (name == 'dyingAfter') {
                                player.storage.ymlongxiang = 0;
                                player.unmarkSkill('ymlongxiang');
                            } else {
                                if (!trigger.baseDamage) trigger.baseDamage = 1;
                                trigger.baseDamage += player.storage.ymlongxiang || 0;
                            }
                        },
                    },
                },
            },
            ymquhu: {
                enable: "phaseUse",
                audio: 'quhu',
                usable: 1,
                position: "he",
                filterCard: function (card) {
                    return card.number > 1;
                },
                check: function (card) {
                    return 6 - get.value(card);
                },
                content: function () {
                    'step 0'
                    event.num = cards[0].number;
                    if (event.num > game.players.length) {
                        player.recover();
                        event.num = game.players.length;
                    }
                    player.chooseTarget([2, event.num], get.prompt(event.name), '选择至多' + event.num + '名角色令他们之间随机互相使用一张【决斗】', function (card, player, target) {
                        return true;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return -get.attitude(target, player);
                    });
                    'step 1'
                    if (result.targets) {
                        result.targets.sortBySeat();
                        event.targets = result.targets;
                        event.count = 0;
                    } else event.finish();
                    'step 2'
                    var targets = event.targets.slice(0);
                    var target = event.targets[event.count];
                    targets.remove(target);
                    event.target = targets.randomGet();
                    if (event.target) target.useCard({
                        name: 'juedou',
                        isCard: true
                    }, 'nowuxie', event.target, 'noai');
                    'step 3'
                    event.count++;
                    if (event.target && !event.target.isAlive()) {
                        event.targets.remove(event.target);
                        event.recover = true;
                    }
                    if (event.count < event.targets.length) event.goto(2);
                    'step 4'
                    if (event.recover) {
                        player.gainMaxHp();
                        player.getStat().skill.ymquhu--;
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                    threaten: 0.5,
                },
            },
            ymjieming: {
                audio: 'jieming',
                trigger: {
                    player: "damageEnd",
                },
                direct: true,
                content: function () {
                    "step 0"
                    event.count = trigger.num;
                    "step 1"
                    event.count--;
                    player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
                        return true;
                    }).set('ai', function (target) {
                        var att = get.attitude(_status.event.player, target);
                        if (att > 2) {
                            return target.maxHp - target.countCards('h');
                        }
                        return att / 1.5;
                    });
                    "step 2"
                    if (result.bool) {
                        event.num = result.targets[0].countCards('h');
                        if (event.num > 5) event.num = 5;
                        player.logSkill(event.name, result.targets);
                        result.targets[0].drawTo(result.targets[0].maxHp);
                        var card = result.targets[0].getCards('h').randomGets(event.num);
                        event.cards = [];
                        for (var i = 0; i < card.length; i++) {
                            event.cards.push(game.createCard({
                                name: card[i].name,
                                suit: card[i].suit,
                                number: card[i].number,
                                nature: card[i].nature
                            }))
                        }
                        result.targets[0].gain(event.cards, 'gain2');
                        if (event.cards && event.cards.length > 0) result.targets[0].showCards(event.cards);
                        if (event.count) event.goto(1);
                    }
                },
                ai: {
                    maixie: true,
                    "maixie_hp": true,
                    effect: {
                        target: function (card, player, target, current) {
                            if (get.tag(card, 'damage') && target.hp > 1) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                var max = 0;
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (get.attitude(target, players[i]) > 0) {
                                        max = players[i].hp - players[i].countCards('h');
                                    }
                                }
                                switch (max) {
                                    case 0:
                                        return 2;
                                    case 1:
                                        return 1.5;
                                    case 2:
                                        return [1, 2];
                                    default:
                                        return [0, max];
                                }
                            }
                            if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
                        },
                    },
                },
            },
            ymkonghe: {
                trigger: {
                    player: 'loseEnd',
                },
                audio: 'rejieming',
                forced: true,
                filter: function (event, player) {
                    if (player.countCards('h')) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original == 'h') return true;
                    }
                    return false;
                },
                content: function () {
                    player.damage('nosource');
                    player.addTempSkill('ymkonghe_mod');
                },
                subSkill: {
                    mod: {
                        forced: true,
                        charlotte: true,
                        mark: true,
                        intro: {
                            name: '空盒',
                            content: function (storage, player, skill) {
                                return '你不能成为带有「伤害」标签的牌的目标且对你无效';
                            },
                        },
                        trigger: {
                            target: 'useCardToTarget',
                        },
                        filter: function (event, player) {
                            if (get.tag(event.card, 'damage')) return true;
                        },
                        content: function () {
                            trigger.targets.remove(player);
                        },
                        mod: {
                            targetEnabled: function (card, player, target, now) {
                                if (get.tag(card, 'damage')) return false;
                            },
                        },
                    },
                },
            },
            ymjianxiong: {
                enable: "phaseUse",
                audio: 'rejianxiong',
                usable: 1,
                position: "he",
                filterCard: true,
                check: function (card) {
                    return get.value(card);
                },
                filter: function (event, player) {
                    return player.countCards('he') > 0;
                },
                init: function (player) {
                    if (!player.storage.ymjianxiong) player.storage.ymjianxiong = [];
                },
                content: function () {
                    'step 0'
                    if (!Array.isArray(player.storage.ymjianxiong)) player.storage.ymjianxiong = [];
                    var list2 = [];
                    var players = game.players;
                    for (var i = 0; i < players.length; i++) {
                        list2.add(players[i].name);
                        list2.add(players[i].name1);
                        list2.add(players[i].name2);
                    }
                    var ban = ['qy_qycaocao'];
                    var list = Object.keys(lib.character).removeArray(list2.concat(ban.concat(player.storage.ymjianxiong)));
                    player.chooseButton(true).set('ai', function (button) {
                        return get.rank(button.link, true) - lib.character[button.link][2];
                    }).set('createDialog', ['获得一张武将牌作为宝物牌', [list.randomGets(10), 'character']]);
                    'step 1'
                    var name = result.links[0];
                    player.storage.ymjianxiong.push(name);
                    if (!lib.card[name]) {
                        var info = {
                            fullimage: true,
                            enable: true,
                            type: 'equip',
                            subtype: 'equip5',
                            vanish: true,
                            cardimage: lib.character[result.links[0]].name,
                            filterTarget: function (card, player, target) {
                                return target == player;
                            },
                            selectTarget: -1,
                            modTarget: true,
                            toself: true,
                            content: lib.element.content.equipCard,
                            legend: true,
                            source: [result.links[0]],
                            skills: [],
                            onEquip: [function () {
                                var cardInfo = lib.card[card.name];
                                var onMark = function (skill) {
                                    var info = lib.skill[skill];
                                    if (info.init2 && !_status.video) {
                                        info.init2(this, skill);
                                    }
                                    if (info.mark) {
                                        if (info.mark == 'card' &&
                                            get.itemtype(this.storage[skill]) == 'card') {
                                            this.markSkill(skill, null, this.storage[skill]);
                                        } else if (info.mark == 'card' &&
                                            get.itemtype(this.storage[skill]) == 'cards') {
                                            this.markSkill(skill, null, this.storage[skill][0]);
                                        } else if (info.mark == 'image') {
                                            this.markSkill(skill, null, ui.create.card(null, 'noclick').init([null, null, skill]));
                                        } else if (info.mark == 'character') {
                                            var intro = info.intro.content;
                                            if (typeof intro == 'function') {
                                                intro = intro(this.storage[skill], this);
                                            } else if (typeof intro == 'string') {
                                                intro = intro.replace(/#/g, this.storage[skill]);
                                                intro = intro.replace(/&/g, get.cnNumber(this.storage[skill]));
                                                intro = intro.replace(/\$/g, get.translation(this.storage[skill]));
                                            }
                                            var caption;
                                            if (typeof info.intro.name == 'function') {
                                                caption = info.intro.name(this.storage[skill], this);
                                            } else if (typeof info.intro.name == 'string') {
                                                caption = info.name;
                                            } else {
                                                caption = get.translation(skill);
                                            }
                                            this.markSkillCharacter(skill, this.storage[skill], caption, intro);
                                        } else {
                                            this.markSkill(skill);
                                        }
                                    }
                                }.bind(player);
                                cardInfo.skills.map(current => onMark(current));
                            }],
                            onLose: [function () {
                                var cardInfo = lib.card[card.name];
                                cardInfo.skills.map(current => player.unmarkSkill(current));
                            }],
                            ai: {
                                order: 8.9,
                                equipValue: 10,
                                useful: 2.5,
                                value: function (card, player) {
                                    var value = 0;
                                    var info = get.info(card);
                                    var current = player.getEquip(info.subtype);
                                    if (current && card != current) {
                                        value = get.value(current, player);
                                    }
                                    var equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                    if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                    return equipValue - value;
                                },
                                result: {
                                    target: function (player, target) {
                                        return get.equipResult(player, target, name);
                                    }
                                }
                            }
                        }
                        var skill = lib.character[result.links[0]][3];
                        info.skills = info.skills.concat(skill);
                        lib.card[name] = info;
                        var character = get.translation(result.links[0]);
                        var reg = /[\u4e00-\u9fa5]/g;
                        var characters = character.match(reg);
                        if (characters) character = characters.join("");
                        lib.translate[name] = (get.translation(event.name) + '·' + character || '无');
                        for (var i = 0; i < skill.length; i++) {
                            if (lib.translate[name + '_info'] == undefined) lib.translate[name + '_info'] = ('<br><li>' + get.translation(skill[i]) + '：' + get.translation(skill[i] + '_info'));
                            else lib.translate[name + '_info'] += ('<br><li>' + get.translation(skill[i]) + '：' + get.translation(skill[i] + '_info'))
                        }
                        try {
                            game.addVideo('newcard', null, {
                                name: name,
                                translate: lib.translate[name],
                                info: lib.translate[name + '_info'],
                                card: result.links[0],
                                legend: true,
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    var ext = null;
                    Array.isArray(lib.character[name][4]) && lib.character[name][4].some(current => {
                        if (typeof current === 'string' && current.indexOf('ext') === 0) {
                            ext = current;
                            return true;
                        } else return false;
                    })
                    lib.card[name].image = ext === null ? ('character:' + name) : ext;
                    var card = game.createCard2({name: name, suit: null, number: null});
                    player.gain(card, 'gain');
                    player.draw(skill.length);
                },
                ai: {
                    order: 9.5,
                    result: {
                        player: 1
                    }
                },
                /*mod: {
                    canBeDiscarded: function (card, player, target) {
                        if (player != target && get.type(card) == 'equip' && get.position(card) == 'e') return false;
                    },
                    canBeGained: function (card, player, target) {
                        if (player != target && get.type(card) == 'equip' && get.position(card) == 'e') return false;
                    },
                },*/
                group:'ymjianxiong_equip',
                subSkill:{
                    equip:{
                        trigger:{
                            player: ['loseBegin'],
                            global:["equipBegin","addJudgeBegin","gainBegin","loseAsyncBegin","addToExpansionBegin"],
                        },
                        forced:true,
                        filter:function(event,player){
                            var es = player.getCards('e');
                            var isContains = event.cards.filter(card=>es.contains(card)).length > 0;
                            if(event.name === 'lose'&&event.type !== 'equip') return true;
                            if(event.name === 'gain' ||event.name === 'equip'){
                                if(event.player !== player && isContains) return true;
                            }
                            var evt=event.getl(player);
                            return evt&&evt.player==player&&evt.es&&evt.es.length>0;
                        },
                        content:function(){
                            if(trigger.name === 'equip'){
                                trigger.cancel();
                            }
                            trigger.cards.removeArray(player.getCards('e'));
                        },
                    },
                },
            },
            ymguixin: {
                audio: 'guixin',
                trigger: {
                    player: 'damageEnd',
                    source: 'damageSource',
                },
                usable: 1,
                content: function () {
                    'step 0'
                    if (trigger.cards && get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') player.gain(trigger.cards, 'gain2')
                    event.num = trigger.num;
                    'step 1'
                    event.recover = true;
                    if (trigger.cards) {
                        for (var i = 0; i < trigger.cards.length; i++) {
                            if (get.type(trigger.cards[i]) == 'basic') event.recover = false;
                        }
                    }
                    if (event.recover == true) {
                        if (Math.random() > 0.5) player.recover();
                        else player.draw(2);
                    } else player.draw();
                    'step 2'
                    event.card = get.cardPile(function (card) {
                        return get.tag(card, 'damage');
                    });
                    player.showCards(event.card);
                    player.chooseTarget([1, Infinity], true, get.prompt2(event.name), '请选择【' + get.translation(event.card) + '】的目标', function (card, player, target) {
                        return target != player;
                    }).set('ai', function (target) {
                        return get.attitude(_status.event.player, target) < 0;
                    });
                    'step 3'
                    if (result.bool) {
                        player.useCard(event.card, false, result.targets);
                        event.num--;
                        if (event.num > 0) event.goto(1);
                        else event.finish();
                    }
                },
            },
            ymshanjia: {
                audio: 'shanjia',
                enable: 'phaseUse',
                locked: true,
                filter: function (event, player) {
                    var he = player.getCards('he');
                    var num = 0;
                    for (var i = 0; i < he.length; i++) {
                        var info = lib.card[he[i].name];
                        if (info.type == 'equip' && lib.inpile.contains(he[i].name)) {
                            num++;
                            if (num >= 2) return true;
                        }
                    }
                },
                filterCard: function (card) {
                    if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                    var info = get.info(card);
                    return info.type == 'equip' && lib.inpile.contains(card.name);
                },
                selectCard: 2,
                position: 'he',
                check: function (card) {
                    return get.value(card);
                },
                content: function () {
                    var name = cards[0].name + '_' + cards[1].name;
                    var info1 = get.info(cards[0]), info2 = get.info(cards[1]);
                    if (!lib.card[name]) {
                        var info = {
                            enable: true,
                            type: 'equip',
                            subtype: get.subtype(cards[0]),
                            vanish: true,
                            cardimage: info1.cardimage || cards[0].name,
                            filterTarget: function (card, player, target) {
                                return target == player;
                            },
                            selectTarget: -1,
                            modTarget: true,
                            toself: true,
                            content: lib.element.content.equipCard,
                            legend: true,
                            source: [cards[0].name, cards[1].name],
                            onEquip: [function () {
                                player.chooseUseTarget('###是否发动【' + get.translation(card.name) + '】？###视为使用一张没有距离和次数限制的【杀】', {name: 'sha'}, false, 'nodistance').logSkill = 'ymshanjia';
                            }],
                            onLose: [function () {
                                player.chooseUseTarget('###是否发动【' + get.translation(card.name) + '】？###视为使用一张没有距离和次数限制的【杀】', {name: 'sha'}, false, 'nodistance').logSkill = 'ymshanjia';
                            }],
                            skills: [],
                            distance: {},
                            ai: {
                                order: 8.9,
                                equipValue: 10,
                                useful: 2.5,
                                value: function (card, player) {
                                    var value = 0;
                                    var info = get.info(card);
                                    var current = player.getEquip(info.subtype);
                                    if (current && card != current) {
                                        value = get.value(current, player);
                                    }
                                    var equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                    if (typeof equipValue == 'function') return equipValue(card, player) - value;
                                    return equipValue - value;
                                },
                                result: {
                                    target: function (player, target) {
                                        return get.equipResult(player, target, name);
                                    }
                                }
                            }
                        }
                        for (var i in info1.distance) {
                            info.distance[i] = info1.distance[i];
                        }
                        for (var i in info2.distance) {
                            if (typeof info.distance[i] == 'number') {
                                info.distance[i] += info2.distance[i];
                            } else {
                                info.distance[i] = info2.distance[i];
                            }
                        }
                        if (info1.skills) {
                            info.skills = info.skills.concat(info1.skills);
                        }
                        if (info2.skills) {
                            info.skills = info.skills.concat(info2.skills);
                        }
                        if (info1.onEquip) {
                            if (Array.isArray(info1.onEquip)) {
                                info.onEquip = info.onEquip.concat(info1.onEquip);
                            } else {
                                info.onEquip.push(info1.onEquip);
                            }
                        }
                        if (info2.onEquip) {
                            if (Array.isArray(info2.onEquip)) {
                                info.onEquip = info.onEquip.concat(info2.onEquip);
                            } else {
                                info.onEquip.push(info2.onEquip);
                            }
                        }
                        if (info1.onLose) {
                            if (Array.isArray(info1.onLose)) {
                                info.onLose = info.onLose.concat(info1.onLose);
                            } else {
                                info.onLose.push(info1.onLose);
                            }
                        }
                        if (info2.onLose) {
                            if (Array.isArray(info2.onLose)) {
                                info.onLose = info.onLose.concat(info2.onLose);
                            } else {
                                info.onLose.push(info2.onLose);
                            }
                        }
                        if (info.onEquip.length == 0) delete info.onEquip;
                        if (info.onLose.length == 0) delete info.onLose;
                        lib.card[name] = info;
                        lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                        var str1 = lib.translate[cards[0].name + '_info'];
                        if (str1[str1.length - 1] == '.' || str1[str1.length - 1] == '。') {
                            str1 = str1.slice(0, str1.length - 1);
                        }
                        var str2 = lib.translate[cards[1].name + '_info'];
                        if (str2[str2.length - 1] == '.' || str2[str2.length - 1] == '。') {
                            str2 = str2.slice(0, str2.length - 1);
                        }
                        lib.translate[name + '_info'] = str1 + '；' + str2;
                        lib.translate[name + '_info'] += "；<span style='color: red'>锁定技，当你装备此牌或此牌离开装备区时，视为你使用一张没有距离和次数限制的【杀】。</span>";
                        try {
                            game.addVideo('newcard', null, {
                                name: name,
                                translate: lib.translate[name],
                                info: lib.translate[name + '_info'],
                                card: cards[0].name,
                                legend: true,
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    player.gain(game.createCard({
                        name: name,
                        suit: cards[0].suit,
                        number: cards[0].number
                    }), 'gain2')._triggered = null;
                },
                ai: {
                    order: 9.5,
                    result: {
                        player: 1
                    }
                },
                group: ['ymshanjia_draw', 'ymshanjia_lose'],
                subSkill: {
                    draw: {
                        trigger: {
                            player: 'phaseDrawBegin',
                        },
                        forced: true,
                        direct: true,
                        silent: true,
                        popup: false,
                        filter: function (event, player) {
                            return !event.numFixed && player.countCards('e') > 0;
                        },
                        content: function () {
                            player.logSkill('ymshanjia');
                            trigger.num += player.countCards('e');
                        },
                        mod: {
                            maxHandcard: function (player, num) {
                                return num + player.countCards('e') || 0;
                            },
                        },
                    },
                    lose: {
                        trigger: {
                            player: "loseAfter",
                            global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter"],
                        },
                        forced: true,
                        direct: true,
                        silent: true,
                        popup: false,
                        filter: function (event, player) {
                            var evt = event.getl(player);
                            return evt && evt.player == player && evt.es && evt.es.length > 0;
                        },
                        content: function () {
                            player.logSkill('ymshanjia');
                            player.draw(trigger.getl(player).es.length);
                        },
                    },
                },
            },
            ymhubao: {
                trigger: {
                    player: 'damageEnd',
                    source: 'damageEnd',
                },
                usable: 1,
                audio: 'qingxi',
                filter: function (event, player) {
                    if (!event.card) return false;
                    if (event.card.name != 'sha' && event.card.name != 'juedou') return false;
                    return true;
                },
                direct: true,
                content: function () {
                    'step 0'
                    player.chooseBool(get.prompt2(event.name), '是否令' + get.translation(trigger.player) + '和' + get.translation(trigger.source) + '收回各自装备区的牌，然后你获得一张随机装备牌？').set('ai', function () {
                        var player = _status.event.player;
                        if (_status.currentPhase == player) return true;
                        return true;
                        //if (!player.getEquip(2)&&!player.getEquip(3)) return true;
                        //return false;
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill(event.name);
                        trigger.player.gain(trigger.player.getCards('e'), 'gain2');
                        trigger.source.gain(trigger.source.getCards('e'), 'gain2');
                        var card = get.cardPile(function (card) {
                            return get.type(card) == 'equip';
                        });
                        if (card) player.useCard(card, player);
                    } else event.finish();
                    'step 2'
                    if (_status.currentPhase != player) {
                        player.chooseCard(1, 'h', '选择1张装备牌使用之', function (card) {
                            var player = _status.event.player;
                            return get.type(card) == 'equip' && player.canUse(card, player, null, true);
                        }).set('ai', function (card) {
                            return 10 - get.value(card);
                        });
                    }
                    'step 3'
                    if (result.bool && result.cards.length) {
                        player.chooseUseTarget(result.cards[0], true, 'nopopup');
                    }
                    'step 4'
                    if (player != _status.currentPhase) {
                        while (_status.event.name != 'phase') {
                            _status.event = _status.event.parent;
                        }
                        _status.event.step = 4;
                    }
                },
            },
            ymshensu: {
                audio: 'shensu1',
                trigger: {
                    global: 'phaseBegin',
                },
                filter: function (event, player) {
                    return event.player != player;
                },
                check: function (event, player) {
                    return get.attitude(event.player, player) <= 0;
                },
                content: function () {
                    'step 0'
                    player.gainPlayerCard('he', true, trigger.player);
                    player.chooseToDiscard('he', true);
                    trigger.player.addSkill('unequip');
                    player.useCard({name: 'sha', isCard: true}, trigger.player, false);
                    'step 1'
                    player.turnOver();
                    'step 2'
                    if (trigger.player.countCards('h') > player.countCards('h')) trigger.cancel();
                },
                group: 'ymshensu_sha',
                subSkill: {
                    sha: {
                        trigger: {
                            player: 'useCardEnd',
                        },
                        filter: function (event, player) {
                            if (event.card.name != 'sha') return false;
                            return event.parent.name == 'ymshensu';
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        content: function () {
                            var go = false;
                            if (player.getHistory('sourceDamage', function (evt) {
                                return evt.card == trigger.card;
                            }).length == 0) go = true;
                            if (go == true) {
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    trigger.targets[i].removeSkill('unequip')
                                    trigger.targets[i].loseHp();
                                }
                            } else player.draw(2);
                        },
                    },
                },
            },
            ymdingzui: {
                audio: 'jushou',
                trigger: {
                    global: 'damageBegin1',
                },
                prompt2: function (event, player) {
                    return '是否为<span style="color: red">' + get.translation(event.player) + '</span>承受此次' + event.num + '点伤害？';
                },
                locked: true,
                filter: function (event, player) {
                    return event.player != player && event.source != player;
                },
                check: function (event, player) {
                    if (player.hp <= event.num) return false;
                    return get.attitude(event.player, player) > 0;
                },
                content: function () {
                    trigger.player = player;
                    if (player.isTurnedOver()) player.turnOver(false);
                },
                group: ['ymdingzui_turn'],
                subSkill: {
                    turn: {
                        trigger: {
                            player: 'turnOverEnd',
                        },
                        forced: true,
                        direct: true,
                        content: function () {
                            'step 0'
                            player.logSkill('ymdingzui');
                            player.markSkill(event.name);
                            player.addSkill('ymdingzui_end');
                            player.draw();
                            var next = player.phaseUse();
                            event.next.remove(next);
                            trigger.next.push(next);
                        },
                        intro: {
                            content: function (storage, player, skill) {
                                return '额外执行一个出牌阶段';
                            },
                        },
                    },
                    end: {
                        trigger: {
                            player: 'phaseUseAfter',
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        content: function () {
                            player.unmarkSkill('ymdingzui_turn');
                            player.removeSkill(event.name);
                        },
                    },
                },
            },
            ymliegong: {
                trigger: {
                    global: ['shaAfter', 'damageEnd'],
                },
                audio: 'liegong',
                filter: function (event, player, name) {
                    if (name == 'shaAfter') return event.player != player && event.targets.contains(player);
                    return event.source && event.source != player && event.player != player && event.card && event.card.name == 'sha';
                },
                locked: true,
                direct: true,
                content: function () {
                    'step 0'
                    var name = event.triggername;
                    if (name == 'shaAfter') event.choose = trigger.player;
                    else event.choose = trigger.source;
                    player.chooseToDiscard('he', 1, get.prompt2(event.name), '是否弃置一张牌视为对' + get.translation(event.choose) + '使用一张【杀】？').set('ai', function (card) {
                        var player = _status.event.player;
                        if (get.attitude(event.choose, player) <= 0) return 6 - get.value(card);
                        return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill(event.name, event.choose);
                        player.useCard({name: 'sha', isCard: true}, event.choose, false);
                    }
                },
                mod: {
                    targetInRange: function (card, player, target, now) {
                        if (card.name == 'sha') return true;
                    },
                },
                group: 'ymliegong_sha',
                subSkill: {
                    sha: {
                        trigger: {
                            player: 'shaBegin',
                        },
                        filter: function (event, player) {
                            return event.getParent(2).name == 'ymliegong';
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        content: function () {
                            trigger.directHit = true;
                        },
                    },
                },
            },
            ymchuanyang: {
                trigger: {
                    player: 'useCard',
                },
                audio: 'liegong',
                filter: function (event, player) {
                    return event.card.name == 'sha';
                },
                forced: true,
                content: function () {
                    'step 0'
                    var cards = [];
                    var card1 = get.cardPile(function (card) {
                        return get.type(card) == 'basic' && !cards.contains(card);
                    });
                    if (card1) cards.push(card1);
                    if (cards) player.gain(cards, 'gain2');
                    var num = player.getHistory('useCard', function (evt) {
                        return evt && evt.card.name == 'sha';
                    }).length;
                    var goon = false;
                    game.hasPlayer(function (current) {
                        if (!trigger.targets.contains(current) && player.canUse(trigger.card, current)) goon = true
                    });
                    if (num == 2) {
                        if (!trigger.baseDamage) trigger.baseDamage = 1;
                        trigger.baseDamage++;
                    }
                    if (num == 1 && goon == true) {
                        player.chooseTarget(get.prompt2(event.name), '为' + get.translation(trigger.card) + '额外指定一个目标', function (card, player, target) {
                            return !_status.event.sourcex.contains(target) && player.canUse(_status.event.card, target);
                        }).set('sourcex', trigger.targets).set('ai', function (target) {
                            var player = _status.event.player;
                            return get.effect(target, _status.event.card, player, player);
                        }).set('card', trigger.card);
                    } else event.finish();
                    'step 1'
                    if (result.bool) {
                        player.line(result.targets, 'green');
                        trigger.targets.addArray(result.targets);
                    }
                },
                //mod: {
                //    selectTarget: function (card, player, range) {
                //        var num = player.getHistory('useCard',function(evt){
                //            return evt && evt.card.name == 'sha';
                //        }).length;
                //        if (card.name == 'sha' && range[1] != -1 && num == 0) range[1] += 1;
                //    },
                //},
                group: ['ymchuanyang_damage', 'ymchuanyang_miss'],
                subSkill: {
                    damage: {
                        trigger: {
                            source: 'damageSource',
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        content: function () {
                            trigger.player.damage(trigger.num, trigger.nature);
                        },
                    },
                    miss: {
                        trigger: {
                            player: 'shaMiss',
                        },
                        forced: true,
                        content: function () {
                            player.recover();
                            if (trigger.getParent().addCount !== false) {
                                trigger.getParent().addCount = false;
                                var stat = player.getStat();
                                if (stat && stat.card && stat.card.sha) stat.card.sha--;
                            }
                        },
                    },
                },
            },
            ymqiaobian: {
                zhuanhuanji: true,
                unique: true,
                trigger: {
                    player: ['phaseBefore', 'phaseAfter'],
                },
                audio: 'qiaobian',
                forced: true,
                filter: function (event, player, name) {
                    if (!player.storage.ymqiaobian) return true;
                    if (name == 'phaseBefore') return player.storage.ymqiaobian == false;
                    else return player.storage.ymqiaobian == true;
                },
                content: function () {
                    'step 0'
                    player.markSkill(event.name);
                    if (!player.storage.ymqiaobian) player.storage.ymqiaobian = false;
                    player.storage.ymqiaobian = !player.storage.ymqiaobian;
                    player.storage.ymqiaobian1 = 0;
                    'step 1'
                    if (event.triggername == 'phaseBefore') {
                        if (player.canMoveCard()) player.moveCard();
                    } else player.draw(2);
                },
                marktext: "变",
                intro: {
                    content: function (storage, player, skill) {
                        var str = '';
                        if (player.storage.ymqiaobian == true) str += '<span class="bluetext">你使用的基本牌或普通锦囊牌可以额外指定一个除你以外的目标并可令此牌额外结算一次</span>';
                        else str += '<span class="legendtext">其他角色使用牌指定其以外的目标时，你可以为此牌重新选择使用者和使用目标</span>';
                        var num = player.storage.ymqiaobian1 || 0;
                        str += '<br><li>剩余使用次数：' + (Math.ceil(player.maxHp / 2) - num);
                        return str;
                    },
                },
                ai: {
                    threaten: 2,
                },
                group: ['ymqiaobian_Before', 'ymqiaobian_After'],
                subSkill: {
                    Before: {
                        trigger: {
                            player: ['useCard2', 'useCardAfter'],
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        filter: function (event, player, name) {
                            if (player.storage.ymqiaobian == undefined || player.storage.ymqiaobian == false) return false;
                            if (!['basic', 'trick'].contains(get.type(event.card))) return false;
                            var num = Math.ceil(player.maxHp / 2);
                            var num1 = 0;
                            if (player.storage.ymqiaobian1) num1 += player.storage.ymqiaobian1;
                            if (num1 >= num) return false;
                            if (name == 'useCard2') {
                                if (!event.targets || event.targets.length <= 0) return false;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (event.targets && !info.multitarget) {
                                    return game.countPlayer(function (current) {
                                        return current != player && !event.targets.contains(current);
                                    });
                                }
                                return false;
                            } else {
                                if (event.parent.name == 'ymqiaobian_Before') return false;
                                if (!event.targets || !event.card) return false;
                                if (event.card && event.card.name == 'wuxie') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                var targets = event._targets || event.targets;
                                for (var i = 0; i < targets.length; i++) {
                                    if (targets[i].isIn() && player.canUse({name: event.card.name}, targets[i], false, false)) return true;
                                }
                                return false;
                            }
                        },
                        content: function () {
                            'step 0'
                            var name = event.triggername;
                            if (!player.storage.ymqiaobian1) player.storage.ymqiaobian1 = 0;
                            if (name == 'useCard2') {
                                player.chooseTarget(get.prompt2('ymqiaobian'), '为' + get.translation(trigger.card) + '额外指定一个除你以外的目标', function (card, player, target) {
                                    return !_status.event.sourcex.contains(target) && target != player;
                                }).set('sourcex', trigger.targets).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, _status.event.card, player, player);
                                }).set('card', trigger.card);
                            } else event.goto(3);
                            'step 1'
                            if (result.bool) {
                                if (!event.isMine() && !event.isOnline()) game.delayx();
                                event.targets = result.targets;
                            } else event.finish();
                            'step 2'
                            player.logSkill('ymqiaobian', event.targets);
                            trigger.targets.addArray(event.targets);
                            event.finish();
                            'step 3'
                            player.chooseBool(get.prompt2('ymqiaobian'), '是否令<span style="color: red">' + get.translation(trigger.card) + '</span>额外结算一次？').set('ai', function () {
                                var name = trigger.card.name;
                                if (name != 'tiesuo' && name != 'du') return true;
                                return false;
                            });
                            'step 4'
                            if (result.bool) {
                                player.storage.ymqiaobian1++;
                                player.logSkill('ymqiaobian');
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                var targets = trigger._targets || trigger.targets;
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isIn() || !player.canUse({name: trigger.card.name}, targets[i], false, false)) targets.remove(targets[i]);
                                }
                                player.$throw(card, 1000);
                                player.useCard({
                                    name: trigger.card.name,
                                    suit: trigger.card.suit,
                                    number: trigger.card.number,
                                    nature: trigger.card.nature
                                }, targets, false);
                            }
                        },
                    },
                    After: {
                        trigger: {
                            global: ['useCard', 'phaseAfter'],
                        },
                        filter: function (event, player, name) {
                            if (name == 'phaseAfter') player.storage.ymqiaobian1 = 0;
                            if (player.storage.ymqiaobian == undefined || player.storage.ymqiaobian == true) return false;
                            if (!event.targets || event.targets.length == 0) return false;
                            if (event.targets.contains(event.player) && event.targets.length <= 1) return false;
                            var num = Math.ceil(player.maxHp / 2);
                            var num1 = 0;
                            if (player.storage.ymqiaobian1) num1 += player.storage.ymqiaobian1;
                            if (num1 >= num) return false;
                            return event.player != player;
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        lastDo: true,
                        content: function () {
                            'step 0'
                            var num = Math.min(trigger.targets.length + 1, game.countPlayer());
                            var choice = ['使用者'];
                            for (var i = 0; i < num - 1; i++) {
                                choice.push('使用目标');
                            }
                            player.chooseTarget(num, false, get.prompt2('ymqiaobian'), '请为' + get.translation(trigger.card) + '重新分配使用者与使用目标', function (card, player, target) {
                                return true;
                            }).set('ai', function (target) {
                                var player = _status.event.player;
                                var eff = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    eff += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                }
                                if (eff < 0) {
                                    if (ui.selected.targets.length) {
                                        return get.effect(target, trigger.card, ui.selected.targets[0], player);
                                    } else return get.attitude(target, player) > 0;
                                }
                                return false;
                            }).set('targetprompt', choice);
                            'step 1'
                            if (result.targets) {
                                if (!player.storage.ymqiaobian1) player.storage.ymqiaobian1 = 0;
                                player.storage.ymqiaobian1++;
                                player.logSkill('ymqiaobian');
                                trigger.player = result.targets[0];
                                trigger.targets = result.targets.slice(1, result.targets.length);
                                player.line(trigger.player, 'green');
                                game.delay(2);
                                trigger.player.line(trigger.targets, 'green');
                                trigger.trigger('useCard2');
                                game.log(player, '将使用者改为', trigger.player, '，将使用目标改为', trigger.targets);
                            } else event.finish();
                        },
                    },
                },
            },
            ymjueji: {
                trigger: {
                    global: 'gainBegin',
                },
                audio: 'yuanlve',
                filter: function (event, player) {
                    if (event.getParent().name != 'draw') return false;
                    if (event.player == player) return false;
                    if (event.getParent(2).name == 'phaseDraw') return event.cards.length > 2;
                    else return event.cards.length > 1;
                },
                check: function (event, player) {
                    return get.attitude(event.player, player) <= 0;
                },
                forced: true,
                content: function () {
                    'step 0'
                    event.num = 1;
                    if (trigger.getParent(2).name == 'phaseDraw') event.num++;
                    player.chooseBool(get.prompt(event.name), '是否令<span style="color: red">' + get.translation(trigger.player) + '</span>改为摸' + event.num + '张牌？').set('ai', function () {
                        var player = _status.event.player;
                        if (get.attitude(player, event.current) <= 0) return true;
                        return false;
                    });
                    'step 1'
                    if (result.bool) {
                        var num = trigger.cards.length - event.num;
                        trigger.cards = get.cards(event.num);
                        player.draw(num);
                    }
                },
            },
            ymxiaoguo: {
                trigger: {
                    global: 'phaseBegin',
                },
                filter: function (event, player) {
                    return event.player.isAlive() && event.player != player && player.countCards('hes') > 0;
                },
                audio: 'xiaoguo',
                direct: true,
                content: function () {
                    'step 0'
                    var att = get.attitude(player, trigger.player);
                    var next = player.chooseToDiscard('hes', get.prompt2('ymxiaoguo', trigger.player));
                    next.set('ai', function (card) {
                        if (_status.event.att > 0) return 0;
                        if (card.number >= 7) return 15 - get.useful(card);
                        return 8 - get.useful(card);
                    });
                    next.set('att', att);
                    'step 1'
                    if (result.cards) {
                        player.logSkill('ymxiaoguo', trigger.player);
                        var type = get.type(result.cards[0], 'trick');
                        if (result.cards[0].number >= 7) {
                            trigger.player.storage.ymxiaoguo_ban = [type];
                            trigger.player.addTempSkill('ymxiaoguo_ban');
                        } else player.recover();
                        event.list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            if (!event.list.contains(get.type(lib.inpile[i], 'trick'))) event.list.add(get.type(lib.inpile[i], 'trick'));
                        }
                        event.list.remove(type);
                        event.list.length > 3 ? event.num = 3 : event.num = event.list.length;
                        trigger.player.chooseToDiscard([1, event.num], 'he', '骁果：弃置与此牌类型不同的牌，每少弃一种受到一点伤害', function (card) {
                            var type1 = get.type(card, 'trick');
                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                if (get.type(ui.selected.cards[i], 'trick') == type1) return false;
                            }
                            return get.type(card, 'trick') != type;
                        }).set('complexCard', true).set('ai', function (card) {
                            return 10 - get.value(card);
                        });
                    } else event.finish();
                    'step 2'
                    var num = 0;
                    if (result.cards) num += result.cards.length;
                    player.draw(num);
                    trigger.player.damage(event.num - num);
                },
                subSkill: {
                    ban: {
                        unique: true,
                        charlotte: true,
                        intro: {
                            content: function (storage) {
                                return '不能使用或打出' + get.translation(storage) + '牌';
                            },
                        },
                        init: function (player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        mark: true,
                        onremove: true,
                        mod: {
                            cardEnabled: function (card, player) {
                                if (player.storage.ymxiaoguo_ban.contains(get.type(card, 'trick'))) return false;
                            },
                            cardUsable: function (card, player) {
                                if (player.storage.ymxiaoguo_ban.contains(get.type(card, 'trick'))) return false;
                            },
                            cardRespondable: function (card, player) {
                                if (player.storage.ymxiaoguo_ban.contains(get.type(card, 'trick'))) return false;
                            },
                            cardSavable: function (card, player) {
                                if (player.storage.ymxiaoguo_ban.contains(get.type(card, 'trick'))) return false;
                            },
                        },
                    },
                },
            },
            ymzhuzhen: {
                trigger: {
                    global: 'damageEnd',
                },
                audio: 'xiaoguo',
                filter: function (event, player) {
                    if (event.player.getHistory('damage').length > 1) return false;
                    return event.player != player && event.source;
                },
                forced: true,
                content: function () {
                    'step 0'
                    var choice = ['摸牌'];
                    if (trigger.player.countCards('he') > 0) choice.push('获得牌');
                    player.chooseControl(choice, function (event, player) {
                        if (get.attitude(trigger.player, player) <= 0 && trigger.player.countCards('he') > 0) return '获得牌';
                        return '摸牌';
                    }).set('prompt', '助阵：摸两张牌或获得' + get.translation(trigger.player) + '一张牌');
                    'step 1'
                    if (result.control == '摸牌') player.draw(2);
                    if (result.control == '获得牌') player.gainPlayerCard('he', true, trigger.player);
                    'step 2'
                    if (trigger.source != player && trigger.source.isAlive()) {
                        player.chooseCard([1, 2], 'he', '选择至多两张牌交给' + get.translation(trigger.source), function (card) {
                            return true;
                        }).set('ai', function (card) {
                            return 3 - get.value(card);
                        });
                    } else event.finish();
                    'step 3'
                    if (result.cards && result.cards.length) {
                        trigger.source.gain(result.cards, player, 'giveAuto');
                    }
                },
            },
            ymjieyue: {
                trigger: {
                    player: ["phaseBegin"],
                },
                direct: true,
                audio: 'rejieyue',
                filter: function (event, player) {
                    return true;
                },
                content: function () {
                    'step 0'
                    player.chooseCardTarget({
                        filterTarget: function (card, player, target) {
                            return target != player;
                        },
                        selectTarget: [1, 2],
                        filterCard: lib.filter.cardDiscardable,
                        selectCard: 1,
                        position: 'hes',
                        ai1: function (card) {
                            var players = player.getFriends();
                            if (get.type(card) == 'equip') {
                                for (var i = 0; i < players.length; i++) {
                                    if (!players[i].countCards('e', {subtype: get.subtype(card)})) return 8 - get.useful(card);
                                }
                            }
                            return 8 - get.useful(card);
                        },
                        ai2: function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) {
                                return target.countCards('h') == 0;
                            } else return -(att - 0.1) * (target.countCards('h') + 1);
                        },
                        prompt: '弃置一张牌，选择至多两名其他角色将他们一半的手牌置于你的武将牌上',
                    });
                    'step 1'
                    if (result.cards && result.targets) {
                        player.discard(result.cards);
                        event.equip = result.cards[0];
                        event.targets = result.targets;
                        player.logSkill('ymjieyue', event.targets);
                        event.cards = [];
                        event.num = 0;
                    } else event.finish();
                    'step 2'
                    var num = Math.ceil(event.targets[event.num].countCards('h') / 2);
                    player.choosePlayerCard(true, num, 'h', event.targets[event.num], get.prompt('ymjieyue', event.targets[event.num]));
                    'step 3'
                    if (result.cards) {
                        event.targets[event.num].$give(result.cards, player, false);
                        event.targets[event.num].loseToSpecial(result.cards, 'ymjieyue', player);
                    }
                    var cards;
                    if ((result.cards && result.cards.length < 2) || !result.cards) {
                        if (result.cards) cards = get.cards(2 - result.cards.length);
                        else cards = get.cards(2);
                        player.$draw(cards);
                        player.loseToSpecial(cards, 'ymjieyue', player);
                    }
                    event.cards = result.cards.concat(cards);
                    game.log(player, '将', event.cards, '放到了武将牌上');
                    player.markSkill('ymjieyue');
                    event.num++;
                    game.delay(2);
                    if (event.num < event.targets.length) event.goto(2);
                    'step 4'
                    if (get.type(event.equip) == 'equip') {
                        player.chooseTarget(1, '是否令一名其他角色装备' + get.translation(event.equip) + '？', function (card, player, target) {
                            return target != player;
                        }).set('ai', function (target) {
                            var player = _status.event.player;
                            return get.effect(target, event.equip, target, player);
                        });
                    } else event.finish();
                    'step 5'
                    if (result.targets) {
                        result.targets[0].$draw(event.equip);
                        game.delay();
                        result.targets[0].equip(event.equip);
                    }
                },
                marktext: "节",
                intro: {
                    mark: function (dialog, storage, player) {
                        dialog.addAuto(player.getCards('s', function (card) {
                            return card.hasGaintag('ymjieyue');
                        }));
                    },
                    markcount: function (storage, player) {
                        return player.getCards('s', function (card) {
                            return card.hasGaintag('ymjieyue');
                        }).length;
                    },
                    onunmark: function (storage, player) {
                        var cards = player.getCards('s', function (card) {
                            return card.hasGaintag('ymjieyue');
                        });
                        if (cards.length) {
                            player.lose(cards, ui.discardPile);
                            player.$throw(cards, 1000);
                            game.log(cards, '进入了弃牌堆');
                        }
                    },
                },
                mod: {
                    aiOrder: function (player, card, num) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('ymjieyue')) return num + 0.5;
                    },
                },
                group: 'ymjieyue_draw',
                subSkill: {
                    draw: {
                        trigger: {
                            player: "loseAfter",
                        },
                        forced: true,
                        audio: 'jieyue1',
                        filter: function (event, player) {
                            if (!event.ss || !event.ss.length) return false;
                            for (var i in event.gaintag_map) {
                                if (event.gaintag_map[i].contains('ymjieyue')) return true;
                                return false;
                            }
                        },
                        content: function () {
                            'step 0'
                            player.draw(trigger.num);
                            var num = player.getCards('s', function (card) {
                                return card.hasGaintag('ymjieyue');
                            }).length;
                            if (num) player.markSkill('ymjieyue');
                            else player.unmarkSkill('ymjieyue');
                            'step 1'
                            game.updateRoundNumber();
                        },
                    },
                },
            },
            ymyizhong: {
                trigger: {
                    global: 'gameStart',
                    player: ['enterGame', 'phaseEnd'],
                },
                filter: function (event, player) {
                    //for(var i=1;i<6;i++){
                    //    if(player.isEmpty(i)) return true;
                    //}
                    return true;
                },
                forced: true,
                audio: 'decadezhenjun',
                content: function () {
                    'step 0'
                    if (event.triggername != 'phaseEnd' && event.count == undefined) event.count = 1;
                    var num = [1, 2, 3, 4, 5];
                    for (var i = 1; i < 6; i++) {
                        if (!player.isEmpty(i)) num.remove(i);
                        if (!get.cardPile(function (card) {
                            return get.subtype(card, false) != ('equip'+i) && !get.cardtag(card, 'gifts');
                        })) num.remove(i);
                    }
                    var sub = 'equip' + num.randomGet(), card = get.cardPile(function (card) {
                        return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts');
                    });
                    if (card) {
                        player.$gain2(card);
                        game.delayx();
                        player.equip(card);
                    }
                    if (event.count) {
                        event.count--;
                        if (event.count >= 0) event.redo();
                    }
                    'step 1'
                    player.chooseTarget([1, Infinity], get.prompt2(event.name), function (card, player, target) {
                        if (ui.selected.targets.length) {
                            if (ui.selected.targets[0] == player) return false;
                            return target != player;
                        } else return true;
                    }).set('complexTarget', true).set('targetprompt', function (target) {
                        var player = _status.event.player;
                        if (target == player) return '收回标记';
                        else return '获得标记';
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        var att = get.attitude(player, target);
                        return target != player && att > 0 && (!player.storage.ymyizhong_equip || !player.storage.ymyizhong_equip.contains(target));
                    });
                    'step 2'
                    if (result.bool) {
                        if (player.storage.ymyizhong_equip) {
                            for (var i = 0; i < player.storage.ymyizhong_equip.length; i++) {
                                var target = player.storage.ymyizhong_equip[i];
                                delete target.storage.ymyizhong_equip2;
                                target.removeAdditionalSkill('ymyizhong_equip');
                                if (target != player) target.unmarkSkill('ymyizhong_equip2');
                            }
                        }
                        player.line(result.targets, 'green');
                        player.storage.ymyizhong_equip = [];
                        player.storage.ymyizhong_equip.addArray(result.targets);
                        player.storage.ymyizhong_equip.add(player);
                        for (var i = 0; i < result.targets.length; i++) {
                            result.targets[i].storage.ymyizhong_equip2 = [];
                        }
                    } else {
                        player.recover();
                        if (player.storage.ymyizhong_equip) {
                            for (var i = 0; i < player.storage.ymyizhong_equip.length; i++) {
                                var target = player.storage.ymyizhong_equip[i];
                                if (target != player) target.recover();
                            }
                        }
                    }
                },
                group: 'ymyizhong_equip',
                global: 'ymyizhong_equip2',
                subSkill: {
                    equip: {
                        trigger: {
                            player: ["ymyizhongAfter"],
                            global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter"],
                        },
                        filter: function (event, player, name) {
                            if (!player.storage.ymyizhong_equip || player.storage.ymyizhong_equip.length == 0) return false;
                            return true;
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        content: function () {
                            'step 0'
                            var cards = [];
                            var list = [];
                            var name = [];
                            var players = player.storage.ymyizhong_equip;
                            for (var i = 0; i < players.length; i++) {
                                var card = players[i].getCards('e');
                                for (var j = 0; j < card.length; j++) {
                                    if (!cards.contains(card[j])) cards.add(card[j]);
                                }
                            }
                            var come = [''];
                            for (var i = 0; i < cards.length; i++) {
                                if (!lib.card[cards[i].name].clearLose || come.contains(cards[i].name)) {
                                    var skills = lib.card[cards[i].name].skills;
                                    name.add(cards[i].name);
                                    if (skills && skills.length) list.addArray(skills);
                                }
                            }
                            for (var i = 0; i < players.length; i++) {
                                players[i].removeAdditionalSkill('ymyizhong_equip');
                                var card = players[i].getCards('e');
                                var cards2 = cards.slice(0);
                                var name2 = name.slice(0);
                                var list2 = list.slice(0);
                                for (var j = 0; j < card.length; j++) {
                                    var skills = lib.card[card[j].name].skills;
                                    if (cards2.contains(card[j])) cards2.remove(card[j]);
                                    if (name2.contains(card[j].name)) name2.remove(card[j].name);
                                    if (skills && skills.length) {
                                        for (var k = 0; k < skills.length; k++) {
                                            if (list2.contains(skills[k])) list2.remove(skills[k]);
                                        }
                                    }
                                }
                                players[i].addAdditionalSkill('ymyizhong_equip', list2);
                                players[i].storage.ymyizhong_equip2 = [].concat(name2);
                                players[i].markSkill('ymyizhong_equip2');
                            }
                        },
                    },
                    equip2: {
                        charlotte: true,
                        forced: true,
                        unique: true,
                        mod: {
                            globalFrom: function (from, to, distance) {
                                if (from.storage.ymyizhong_equip2&&game.hasPlayer(function(current){
                                    return current.hasSkill('ymyizhong');
                                })) {
                                    var num = 0;
                                    for (var i = 0; i < from.storage.ymyizhong_equip2.length; i++) {
                                        var info = lib.card[from.storage.ymyizhong_equip2[i]];
                                        if (info && info.distance && info.distance.globalFrom) num += info.distance.globalFrom;
                                    }
                                    if (to.storage.ymyizhong_equip2) return -Infinity;
                                    return distance + num;
                                }
                            },
                            globalTo: function (from, to, distance) {
                                if (to.storage.ymyizhong_equip2&&game.hasPlayer(function(current){
                                    return current.hasSkill('ymyizhong');
                                })) {
                                    var num = 0;
                                    for (var i = 0; i < to.storage.ymyizhong_equip2.length; i++) {
                                        var info = lib.card[to.storage.ymyizhong_equip2[i]];
                                        if (info && info.distance && info.distance.globalTo) num += info.distance.globalTo;
                                    }
                                    if (from.storage.ymyizhong_equip2) return -Infinity;
                                    return distance + num;
                                }
                            },
                            attackFrom: function (from, to, distance) {
                                if (from.storage.ymyizhong_equip2&&game.hasPlayer(function(current){
                                    return current.hasSkill('ymyizhong');
                                })) {
                                    var num = 0;
                                    for (var i = 0; i < from.storage.ymyizhong_equip2.length; i++) {
                                        var info = lib.card[from.storage.ymyizhong_equip2[i]];
                                        if (info && info.distance && info.distance.attackFrom) num += info.distance.attackFrom;
                                    }
                                    return distance + num;
                                }
                            },
                            attackTo: function (from, to, distance) {
                                if (to.storage.ymyizhong_equip2&&game.hasPlayer(function(current){
                                    return current.hasSkill('ymyizhong');
                                })) {
                                    var num = 0;
                                    for (var i = 0; i < to.storage.ymyizhong_equip2.length; i++) {
                                        var info = lib.card[to.storage.ymyizhong_equip2[i]];
                                        if (info && info.distance && info.distance.attackTo) num += info.distance.attackTo;
                                    }
                                    return distance + num;
                                }
                            },
                        },
                        marktext: "毅",
                        intro: {
                            content: function (storage, player, skill) {
                                var str = '';
                                if (player.storage.ymyizhong_equip) str += '<li><span style="color: red">当前【毅重】参与角色：</span>' + get.translation(player.storage.ymyizhong_equip);
                                if (player.storage.ymyizhong_equip2) {
                                    if (!player.storage.ymyizhong_equip) str += '<li><span style="color: red">你已参与【毅重】</span>';
                                    if (player.storage.ymyizhong_equip2.length > 0) {
                                        str += '<br><li>当前额外视为装备：' + get.translation(player.storage.ymyizhong_equip2) + '<br>–––––––––––––––––––––––';
                                        for (var i = 0; i < player.storage.ymyizhong_equip2.length; i++) {
                                            str += '<br>*<span class="bluetext">【' + lib.translate[player.storage.ymyizhong_equip2[i]] + '】：' + lib.translate[player.storage.ymyizhong_equip2[i] + '_info'] + '</span>';
                                        }
                                    }
                                }
                                return str;
                            },
                            onunmark: function (storage, player) {
                                player.removeAdditionalSkill('ymyizhong_equip');
                                delete player.storage.ymyizhong_equip2;
                                player.addEquipTrigger();
                            },
                        },
                    },
                },
            },
            ymduanliang: {
                audio: 'duanliang1',
                enable: ["chooseToUse"],
                usable: 3,
                init: function (player) {
                    player.storage.ymduanliang = [];
                },
                filter: function (event, player) {
                    if (!player.countCards('hse')) return false;
                    if (event.type == 'wuxie') return false;
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if (get.type(name) == 'delay' && event.filterCard({name: name}, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog: function (event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (player.storage.ymduanliang.contains(name)) continue;
                            if (get.type(name) == 'delay') {
                                list.push(['延时锦囊', '', name]);
                            }
                        }
                        return ui.create.dialog('断粮', [list, 'vcard'], 'hidden');
                    },
                    filter: function (button, player) {
                        return _status.event.getParent().filterCard({name: button.link[2]}, player, _status.event.getParent());
                    },
                    check: function (button) {
                        if (_status.event.getParent().type == 'phase') {
                            var player = _status.event.player;
                            var fakecard = {name: button.link[2]};
                            if (player.getUseValue(fakecard) > 0) return get.order(fakecard);
                            return 0;
                        }
                        return 1;
                    },
                    backup: function (links, player) {
                        return {
                            selectCard: 1,
                            filterCard: function (card) {
                                return get.type(card) != 'basic';
                            },
                            popname: true,
                            check: function (card) {
                                if (get.type(card) != 'delay') return 6;
                                return 1 / Math.max(0.1, get.value(card));
                            },
                            position: 'hse',
                            viewAs: {name: links[0][2]},
                            onuse: function (result, player) {
                                if (!player.storage.ymduanliang) player.storageymduanliang_judge = [];
                                player.storage.ymduanliang.add(result.card.name);
                                if (player.storage.ymduanliang.length <= 1) {
                                    player.recover();
                                }
                            },
                        }
                    },
                    prompt: function (links, player) {
                        return '将一张非基本牌当做' + get.translation(links[0][2]) + '使用或打出';
                    },
                },
                ai: {
                    order: function (item, player) {
                        if (player && _status.event.type == 'phase') {
                            var max = 0;
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (get.type(name) == 'delay') {
                                    var temp = get.order({name: name});
                                    if (temp > max) max = temp;
                                }
                            }
                            return Math.abs(max) + 8;
                        }
                        return 8;
                    },
                    basic: {
                        order: 7,
                        useful: 6,
                        value: 6,
                    },
                    result: {
                        player: 1,
                    },
                    effect: {
                        player: function (card) {
                            if (['shandian', 'fulei'].contains(card.name)) return [6, 6];
                        },
                    },
                },
                group: ['ymduanliang_judge', 'ymduanliang_end'],
                subSkill: {
                    judge: {
                        trigger: {
                            player: "useCard",
                        },
                        filter: function (event, player) {
                            return event.targets && event.targets.length > 0 && event.card && get.type(event.card) == 'delay';
                        },
                        audio: 'duanliang1',
                        forced: true,
                        content: function () {
                            "step 0"
                            if (game.countPlayer(function (current) {
                                return current != player && !trigger.targets.contains(current);
                            })) {
                                player.chooseTarget([1, Infinity], get.prompt2(event.name), '额外指定任意名角色也成为' + get.translation(trigger.card) + '的目标', function (card, player, target) {
                                    return !trigger.targets.contains(target) && target != player;
                                }).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, trigger.card, player, player);
                                });
                            }
                            "step 1"
                            if (result.targets) {
                                trigger.targets.addArray(result.targets);
                                player.line(result.targets, 'green');
                            }
                            "step 2"
                            trigger.untrigger();
                            trigger.finish();
                            "step 3"
                            event.num = 0;
                            event.card = ui.create.card();
                            event.card.init([trigger.card.suit, trigger.card.number, trigger.card.name]);
                            for (var i = 0; i < trigger.targets.length; i++) {
                                trigger.targets[i].popup(event.card.viewAs || event.card.name, 'thunder');
                            }
                            "step 4"
                            if (!trigger.cancelled) {
                                trigger.targets[event.num].judge(event.card);
                            }
                            "step 5"
                            event.card.expired = true;
                            var name = event.card.viewAs || event.card.name;
                            if (trigger.cancelled && !trigger.direct) {
                                if (lib.card[name].cancel) {
                                    var next = game.createEvent(name + 'Cancelled');
                                    next.setContent(lib.card[name].cancel);
                                    next.card = event.card;
                                    next.player = trigger.targets[event.num];
                                }
                            } else {
                                var next = game.createEvent(name);
                                next.setContent(lib.card[name].effect);
                                next._result = result;
                                next.card = event.card;
                                next.player = trigger.targets[event.num];
                                if (next._result.bool == false) {
                                    if (!trigger.targets[event.num].storage.ymduanliang_delay) trigger.targets[event.num].storage.ymduanliang_delay = [];
                                    trigger.targets[event.num].storage.ymduanliang_delay.add(trigger.card.name);
                                    trigger.targets[event.num].addTempSkill('ymduanliang_delay', {player: 'phaseBefore'});
                                    player.draw();
                                } else if (trigger.targets[event.num] != player) trigger.targets[event.num].damage();
                            }
                            event.num++;
                            if (event.num < trigger.targets.length) event.goto(4);
                            "step 6"
                            ui.clear();
                            if (event.card) event.card.delete();
                        },
                    },
                    end: {
                        trigger: {
                            global: 'phaseAfter',
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        content: function () {
                            player.storage.ymduanliang = [];
                        },
                    },
                    delay: {
                        trigger: {
                            player: 'phaseBefore',
                        },
                        forced: true,
                        silent: true,
                        popup: false,
                        charlotte: true,
                        mark: true,
                        content: function () {
                            player.removeSkill('ymduanliang_delay');
                            delete player.storage.ymduanliang_delay;
                        },
                        intro: {
                            content: function (storage) {
                                return get.translation(storage) + ' 已生效';
                            },
                        },
                        init: function (player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        onremove: true,
                    },
                },
            },
            ymjiezi: {
                trigger: {
                    player: ['useCard', 'respond'],
                },
                audio: 'jiezi',
                forced: true,
                filter: function (event, player) {
                    return _status.currentPhase != player && get.type(event.card) == 'basic';
                },
                content: function () {
                    var card = get.cardPile(function (card) {
                        return get.type(card) != 'basic';
                    });
                    if (card) player.gain(card, 'gain2');
                },
                group: 'ymjiezi_skip',
                subSkill: {
                    skip: {
                        trigger: {
                            global: 'phaseEnd',
                        },
                        filter: function (event, player) {
                            return event.player.getHistory('skipped').length > 0;
                        },
                        forced: true,
                        content: function () {
                            'step 0'
                            event.num = trigger.player.getHistory('skipped').length;
                            player.draw(event.num);
                            'step 1'
                            var num = event.num;
                            player.chooseToUse('截辎：是否再使用' + event.num + '张牌？').logSkill = 'ymjiezi';
                            'step 2'
                            if (result.bool) {
                                event.num--;
                                if (event.num > 0) event.goto(1);
                            } else game.delay();
                        }
                    },
                },
            },
            ymzhiheng: {
                audio: 'rezhiheng',
                enable: "phaseUse",
                usable: 1,
                position: "h",
                filterCard: function (card, player, event) {
                    event = event || _status.event;
                    if (typeof event != 'string') event = event.getParent().name;
                    var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                    if (mod != 'unchanged') return mod;
                    return true;
                },
                discard: false,
                lose: false,
                delay: false,
                selectCard: -1,
                content: function () {
                    'step 0'
                    event.num = 0;
                    game.countPlayer(function (current) {
                        if (current.isMaxHandcard()) event.num = current.countCards('h');
                    });
                    if (event.num > 5) event.num = 5;
                    player.discard(cards);
                    'step 1'
                    var list = [];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if (name == 'sha') {
                            list.add(['基本', '', 'sha']);
                            list.add(['基本', '', 'sha', 'fire']);
                            list.add(['基本', '', 'sha', 'thunder']);
                            list.add(['基本', '', 'sha', 'ice']);
                            list.add(['基本', '', 'sha', 'kami']);
                        } else list.add([get.type(name, 'trick'), '', name]);
                    }
                    var dialog = ui.create.dialog('制衡');
                    dialog.addText('请选择获得的牌');
                    dialog.add([list, 'vcard']);
                    player.chooseButton([1, event.num], dialog).set('ai', function (button) {
                        var card = game.createCard({name: button.link[2], nature: button.link[3]});
                        return get.value(card, _status.event.player);
                    });
                    'step 2'
                    if (result.links) {
                        event.num2 = result.links.length;
                        var cards = [];
                        for (var i = 0; i < result.links.length; i++) {
                            var card = game.createCard({
                                name: result.links[i][2],
                                nature: result.links[i][3]
                            });
                            cards.push(card);
                        }
                        player.gain(cards, 'gain2');
                    } else event.goto(4);
                    'step 3'
                    var cards = [];
                    for (var i = 0; i < event.num2; i++) {
                        var card = game.createCard2('ymfushu_card');
                        cards.push(card);
                    }
                    var num = [];
                    //if(ui.cardPile.childElementCount<event.num+1){
                    //    player.getCards(event.num+2);
                    //}
                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                        num.push(i);
                    }
                    game.log('牌堆中添加了', cards);
                    for (var i = 0; i < event.num2; i++) {
                        var card2 = cards.randomGet();
                        ui.cardPile.insertBefore(card2, ui.cardPile.childNodes[num.randomGet()]);
                        cards.remove(card2);
                        num.push(num.length);
                    }
                    game.updateRoundNumber();
                    'step 4'
                    player.drawTo(cards.length);
                    game.delay(0.5);
                },
                ai: {
                    order: 6,
                    result: {
                        player: 1,
                    },
                    threaten: 1,
                },
            },
            ymtusi: {
                audio: 'jiuyuan',
                trigger: {
                    player: ["loseEnd", "damageEnd"],
                    global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter"],
                },
                filter: function (event, player, name) {
                    var num = 0;
                    game.countPlayer(function (current) {
                        if (current.group == player.group) num++;
                    });
                    if (num > 4) num = 4;
                    if (name != 'damageEnd') {
                        var evt = event.getl(player);
                        if (!evt || evt.player != player || !evt.hs || evt.hs.length <= 0) return false;
                        return player.getHistory('custom', function (evt) {
                            return evt.ymtusi_name == 'lose';
                        }).length < num;
                    } else {
                        return player.getHistory('custom', function (evt) {
                            return evt.ymtusi_name == 'damage';
                        }).length < num;
                    }
                },
                forced: true,
                content: function () {
                    var name = event.triggername;
                    var players = [];
                    game.filterPlayer(function (current) {
                        if (get.distance(player, current) <= 1 && current != player) players.push(current);
                    });
                    player.addTempSkill('ymtusi_end');
                    if (!player.storage.ymtusi_end) player.storage.ymtusi_end = 0;
                    if (players.length > 0) {
                        player.storage.ymtusi_end++;
                        var count = player.storage.ymtusi_end;
                        if (name == 'damageEnd') {
                            player.getHistory('custom').push({ymtusi_name: 'damage'});
                            for (var i = 0; i < players.length; i++) {
                                players[i].damage(count);
                            }
                        } else {
                            player.getHistory('custom').push({ymtusi_name: 'lose'});
                            for (var i = 0; i < players.length; i++) {
                                player.discardPlayerCard(players[i], count, 'he', true);
                            }
                        }
                    }
                    if ((players.length >= game.filterPlayer().length - 1) || players.length == 0) {
                        var num = [1, 2];
                        if (player.storage.ymtusidraw) num.remove(1);
                        if (player.storage.ymtusirecover) num.remove(2);
                        n = num.randomGet();
                        if (n == 1) {
                            player.draw(2);
                            player.storage.ymtusidraw = true;
                        }
                        if (n == 2) {
                            player.recover();
                            player.storage.ymtusirecover = true;
                        }
                    }
                },
                subSkill: {
                    end: {
                        charlotte: true,
                        mark: true,
                        intro: {
                            content: function (storage, player) {
                                var str = '执行【屠嗣】选项次数：' + storage;
                                var num1 = player.getHistory('custom', function (evt) {
                                    return evt.ymtusi_name == 'damage';
                                }).length;
                                var num2 = player.getHistory('custom', function (evt) {
                                    return evt.ymtusi_name == 'lose';
                                }).length
                                str += '<br><li>「伤害」次数：' + num1;
                                str += '<br><li>「弃牌」次数：' + num2;
                                return str;
                            },
                        },
                        init: function (player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        onremove: function (player, skill) {
                            delete player.storage.ymtusi_end;
                            delete player.storage.ymtusidraw;
                            delete player.storage.ymtusirecover;
                        },
                    },
                },
            },
            ymtianxiang:{
                audio:"piaoling",
                trigger:{
                    global:["damageBegin","loseHpBegin"],
                },
                filter:function(event,player){
                    return player.getHistory('custom', function (evt) {
                        return evt.ymtianxiang_name;
                    }).length<4&&player.countCards('h')>0&&event.num>0;
                },
                intro:{
                    name:'天香·花色',
                    content:function (storage,player,skill){
                        var suit=['spade','heart','club','diamond'];
                        for(var i=0;i<suit.length;i++){
                            if(player.getHistory('custom', function (evt) {
                                return evt.ymtianxiang_name==suit[i];
                            }).length>=1){
                                suit.remove(suit[i]);
                                suit.splice(i--,1);
                            }
                        }
                        return '<br><li>本回合可使用花色：'+get.translation(suit);
                    },
                },
                mark:true,
                direct:true,
                content:function(){
                    "step 0"
                    player.chooseCardTarget({
                        filterCard:function(card,player){
                            return lib.filter.cardDiscardable(card,player)&&player.getHistory('custom', function (evt) {
                                return evt.ymtianxiang_name==get.suit(card);
                            }).length<1;
                        },
                        selectCard:1,
                        filterTarget:function(card,player,target){
                            //return target!=_status.event.getTrigger().player;
                            return true;
                        },
                        ai1:function(card){
                            return 10-get.value(card);
                        },
                        ai2:function(target){
                            var att=get.attitude(_status.event.player,target);
                            return -att;
                        },
                        prompt:get.prompt('ymtianxiang'),
                        prompt2:'弃置一张手牌并选择一名角色令其承受此次体力减少',
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('ymtianxiang',result.targets)
                        event.card=result.cards[0];
                        player.discard(event.card);
                        trigger.player=result.targets[0];
                        var suit=get.suit(event.card);
                        player.getHistory('custom').push({ymtianxiang_name:suit});
                        player.markSkill('ymtianxiang_phase');
                        var num=player.getHistory('custom', function (evt) {
                            return evt.ymtianxiang_name;
                        }).length;
                        if(num>0&&num%2==0) player.draw(num);
                        switch(suit){
                            case 'spade':event.goto(2);break;
                            case 'heart':event.goto(4);break;
                            case 'club':event.goto(6);break;
                            case 'diamond':event.goto(8);break;
                        }
                    }
                    else event.finish();
                    "step 2"
                    player.chooseTarget([1,2], get.prompt2(event.name), '选择一名角色武将牌翻至背面或选择两名角色交换体力值', function (card, player, target) {
                        return true;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        if(ui.selected.targets.length){
                            var tar=ui.selected.targets[0];
                            var att=get.attitude(player,target);
                            return tar.hp>=target.hp&&att>=0;
                        }
                        else{
                            var eff=0;
                            if(target.isTurnedOver()) eff++
                            return -get.attitude(player,target)-1+eff;
                        }
                    });
                    "step 3"
                    if(result.targets){
                        if(result.targets.length>1){
                            var hp1=result.targets[0].hp;
                            var hp2=result.targets[1].hp;
                            result.targets[0].hp=hp2;
                            result.targets[1].hp=hp1;
                            result.targets[0].update();
                            result.targets[1].update();
                        }
                        else result.targets[0].turnOver(true);
                    }
                    event.goto(9);
                    "step 4"
                    player.chooseTarget(1,get.prompt2(event.name), '选择一名角色令其装备区的牌失效直到下一轮开始', function (card, player, target) {
                        return true;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        return -get.attitude(player,target)*target.countCards('e')-1;
                    });
                    "step 5"
                    if(result.targets){
                        result.targets[0].addTempSkill('ymtianxiang_equip','roundStart');
                    }
                    event.goto(9);
                    "step 6"
                    if(_status.currentPhase){
                        player.chooseControl('摸牌', '弃牌', 'cancel2').set('prompt', '【天香】：请选择令' + get.translation(_status.currentPhase) + '摸牌或你弃置其的牌').set('ai', function () {
                            if (get.attitude(_status.currentPhase, player) > 0) return '摸牌';
                            else return '弃牌';
                        });
                    }
                    else event.goto(9);
                    "step 7"
                    if(result.control=='摸牌') _status.currentPhase.draw(3);
                    if(result.control=='弃牌') player.discardPlayerCard(_status.currentPhase, 3, 'he', true);
                    event.goto(9);
                    "step 8"
                    trigger.num+=1;
                    "step 9"
                    game.delay(1.5);
                    "step 10"
                    event.trigger('ymtianxiangout');
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
                subSkill:{
                    equip:{
                        mark:true,
                        intro:{
                            name:'天香',
                            content:function (storage){
                                return '装备区和技能已失效';
                            },
                        },
                        trigger:{
                            player: ['loseEnd'],
                            global: ['loseAsyncEnd', 'equipEnd', 'gainEnd', 'addJudgeEnd'],
                        },
                        silent:true,
                        popup:false,
                        content:function(){
                            player.addSkill('unequip');
                            player.addSkill('baiban');
                            player.removeEquipTrigger();
                        },
                        charlotte:true,
                        forced:true,
                        init:function(player){
                            player.addSkill('unequip');
                            player.addSkill('baiban');
                            player.removeEquipTrigger();
                        },
                        onremove:function(player){
                            player.removeSkill('unequip');
                            player.removeSkill('baiban');
                            player.addEquipTrigger();
                        },
                        mod: {
                            globalFrom: function (from, to, distance) {
                                var cards=from.getCards('e');
                                var num=0;
                                for(var i=0;i<cards.length;i++){
                                    var info = lib.card[cards[i].name];
                                    if (info && info.distance && info.distance.globalFrom) num -= info.distance.globalFrom;
                                }
                                return distance + num;
                            },
                            globalTo: function (from, to, distance) {
                                var cards=to.getCards('e');
                                var num=0;
                                for(var i=0;i<cards.length;i++){
                                    var info = lib.card[cards[i].name];
                                    if (info && info.distance && info.distance.globalTo) num -= info.distance.globalTo;
                                }
                                return distance + num;
                            },
                            attackFrom: function (from, to, distance) {
                                var cards=from.getCards('e');
                                var num=0;
                                for(var i=0;i<cards.length;i++){
                                    var info = lib.card[cards[i].name];
                                    if (info && info.distance && info.distance.attackFrom) num -= info.distance.attackFrom;
                                }
                                return distance + num;
                            },
                            attackTo: function (from, to, distance) {
                                var cards=to.getCards('e');
                                var num=0;
                                for(var i=0;i<cards.length;i++){
                                    var info = lib.card[cards[i].name];
                                    if (info && info.distance && info.distance.attackTo) num -= info.distance.attackTo;
                                }
                                return distance + num;
                            },
                        },
                    },
                },
            },
            ymhongyan:{
                trigger:{
                    player:['phaseBegin','ymtianxiangout'],
                    global:'phaseEnd',
                },
                audio:'rehongyan',
                forced:true,
                filter:function(event,player,name){
                    if(name=='phaseEnd') return player.countCards('h')<4;
                    return true;
                },
                intro:{
                    name:'红颜',
                    content:function (storage,player){
                        return '场上所有花色视为'+get.translation(player.storage.ymhongyan);
                    },
                },
                content:function(){
                    'step 0'
                    if(event.triggername=='phaseEnd'){player.drawTo(4);return}
                    player.chooseControl('spade', 'heart', 'club', 'diamond', '复原').set('prompt', '请选择游戏内所有牌的花色或复原所有花色').set('ai', function () {
                        var suit=['spade', 'heart' ,'club', 'diamond'];
                        if (player.countCards('j')==1){
                            if(player.getCards('j')[0].name=='lebu') return 'heart';
                            if(player.getCards('j')[0].name=='bingliang') return 'club';
                            if(player.getCards('j')[0].name=='caomu') return 'club';
                            if(player.getCards('j')[0].name=='guiyoujie') return 'heart';
                            if(player.getCards('j')[0].name=='shandian') return 'heart';
                        }
                        else if(player.countCards('j')>1) return '复原';
                        for(var i=0;i<suit.length;i++){
                            if(player.getHistory('custom', function (evt) {
                                return evt.ymtianxiang_name==suit[i];
                            }).length>=1) suit.remove(suit[i]);
                        }
                        return suit.randomGet();
                    });
                    'step 1'
                    switch(result.control){
                        case 'spade':player.storage.ymhongyan='spade';player.markSkill('ymhongyan');break;
                        case 'heart':player.storage.ymhongyan='heart';player.markSkill('ymhongyan');break;
                        case 'club':player.storage.ymhongyan='club';player.markSkill('ymhongyan');break;
                        case 'diamond':player.storage.ymhongyan='diamond';player.markSkill('ymhongyan');break;
                        case '复原':delete player.storage.ymhongyan;player.unmarkSkill('ymhongyan');break;
                    }
                    player.popup(result.control);
                    game.delay(1.5);
                },
                mod:{
                    maxHandcardBase:function(player,num){
                        return 4;
                    },
                },
                global:'ymhongyan_suit',
                subSkill:{
                    suit:{
                        mod:{
                            suit:function(card,suit){
                                if(game.hasPlayer(function(current){
                                    return current.hasSkill('ymhongyan');
                                })){
                                    var suitx;
                                    game.findPlayer(function (current) {
                                        if(current.storage.ymhongyan) suitx=current.storage.ymhongyan;
                                    });
                                    if(suitx) return suitx;
                                }
                            },
                        },
                    },
                },
            },
            ymyingzi:{
                trigger:{
                    player:['drawBegin','loseEnd'],
                },
                audio:'yingzi',
                filter:function(event,player,name){
                    if(name=='drawBegin') return true;
                    else{
                        var types=[];
                        player.getHistory('lose',function(evt){
                            var cards=evt.cards.slice(0);
                            cards.removeArray(event.cards);
                            if(cards && cards.length > 0) types.addArray(cards.map(function(card){
                                return get.type(card,'trick');
                            }));
                        });
                        for(var i=0;i<event.cards.length;i++){
                            if(!types.contains(get.type(event.cards[i],'trick'))) return true;
                        }
                    }
                },
                forced:true,
                content:function(){
                    if(event.triggername=='drawBegin') trigger.num++;
                    else{
                        var num=0;
                        var types=[];
                        player.getHistory('lose',function(evt){
                            var cards=evt.cards.slice(0);
                            cards.removeArray(trigger.cards);
                            if(cards && cards.length > 0) types.addArray(cards.map(function(card){
                                return get.type(card,'trick');
                            }));
                        });
                        for(var i=0;i<trigger.cards.length;i++){
                            if(!types.contains(get.type(trigger.cards[i],'trick'))) num++;
                        }
                        player.draw(num);
                        if(player.getHandcardLimit()<(player.countCards('h')+num)) player.chooseToDiscard('he',true,num);
                    }
                },
                mod: {
                    maxHandcardBase: function (player, num) {
                        return player.maxHp+player.maxHp;
                    },
                },
            },
            ymfanjian:{
                audio:'refanjian',
                enable:'phaseUse',
                usable:1,
                filterCard:true,
                discard:false,
                prepare:"give",
                position: "he",
                filterTarget:function(card,player,target){
                    return target!=player;
                },
                check:function(card){
                    return 6-get.value(card);
                },
                content:function(){
                    'step 0'
                    target.gain(cards,player);
                    'step 1'
                    var suit=get.suit(cards[0]);
                    target.loseHp(target.countCards('he',{suit:suit}));
                },
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                            return -target.countCards('h');
                        },
                    },
                },
                group:'ymfanjian_gain',
                subSkill:{
                    gain:{
                        trigger:{
                            global:'gainBegin',
                        },
                        filter:function(event,player){
                            if(event.source!=player) return false;
                            if(event.player==player) return false;
                            return true;
                        },
                        check:function(event,player){
                            return get.attitude(event.player,player)<=0;
                        },
                        prompt:function(event,player){
                            return '是否发动【反间】令'+get.translation(event.player)+'猜测获得的牌包含的花色？';
                        },
                        content:function(){
                            'step 0'
                            var list=['spade', 'heart', 'club', 'diamond'];
                            trigger.player.chooseControl('spade', 'heart', 'club', 'diamond').set('prompt', '【反间】：请猜测'+get.translation(player)+'的这些牌中包含的花色').set('ai', function () {
                                return list.randomGet();
                            });
                            'step 1'
                            trigger.player.popup(result.control);
                            game.log(trigger.player,'选择了'+get.translation(result.control+2));
                            var suit=[]
                            for(var i=0;i<trigger.cards.length;i++){
                                suit.add(get.suit(trigger.cards[i]));
                            }
                            if(!suit.contains(result.control)){
                                trigger.player.discard(trigger.player.getCards('he').removeArray(trigger.player.getCards('he',{suit:result.control})));
                            }
                            else{
                                player.gainPlayerCard('he',true,trigger.player);
                            }
                        },
                    },
                },
            },
            ymqinyin:{
                trigger:{
                    player:['useCardEnd','respondEnd'],
                },
                audio:'qinyin',
                direct:true,
                filter:function(event,player){
                    if(event.card.number==7) return false;
                    var num1=0;
                    var num2=0;
                    player.getHistory('useCard',function(evt){
                        if(evt.card.number>7) num1++;
                        if(evt.card.number<7) num2++;
                    });
                    player.getHistory('respond',function(evt){
                        if(evt.card.number>7) num1++;
                        if(evt.card.number<7) num2++;
                    });
                    return (num1==3&&player.getHistory('custom', function (evt) {return evt.ymqinyin_name == 'damage';}).length==0)||(num2==3&&player.getHistory('custom', function (evt) {return evt.ymqinyin_name == 'recover';}).length==0);
                },
                mark:true,
                intro:{
                    name:'琴音',
                    content:function (storage,player,skill){
                        var str='';
                        var num1=0;
                        var num2=0;
                        player.getHistory('useCard',function(evt){
                            if(evt.card.number>7) num1++;
                            if(evt.card.number<7) num2++;
                        });
                        player.getHistory('respond',function(evt){
                            if(evt.card.number>7) num1++;
                            if(evt.card.number<7) num2++;
                        });
                        str+='<br><li>本回合使用和打出点数大于7的牌数：'+num1;
                        str+='<br><li>本回合使用和打出点数小于7的牌数：'+num2;
                        return str;
                    },
                },
                content:function(){
                    'step 0'
                    event.num1=0;
                    player.getHistory('useCard',function(evt){
                        if(evt.card.number>7) event.num1++;
                    });
                    player.getHistory('respond',function(evt){
                        if(evt.card.number>7) event.num1++;
                    });
                    player.getHistory('custom').push({ymqinyin_name: (event.num1==3?'damage':'recover')});
                    if(player.getHistory('custom', function (evt) {return evt.ymqinyin_name == 'damage';}).length>1) event.num1=0;
                    player.chooseTarget([1,3],get.prompt2(event.name), '选择1-3名角色'+(event.num1==3?'受到共3点伤害':'回复共3点体力'), function (card, player, target) {
                        return true;
                    }).set('ai', function (target) {
                        var player = _status.event.player;
                        if(event.num1==3) return -get.attitude(player,target);
                        else return get.recoverEffect(target, player, player) || get.attitude(target, player) > 0;
                    });
                    'step 1'
                    if(!result.bool||!result.targets) event.finish();
                    else if(result.targets.length==3){
                        player.logSkill(event.name,result.targets);
                        for(var i=0;i<result.targets.length;i++){
                            event.num1==3?result.targets[i].damage():result.targets[i].recover();
                        }
                        event.finish();
                    }
                    else if(result.targets.length==2){
                        event.targets=result.targets.slice(0);
                        player.logSkill(event.name,event.targets);
                        player.chooseTarget(true,get.prompt2(event.name), '选择1名角色'+(event.num1==3?'受到2点伤害':'回复2点体力'), function (card, player, target) {
                            return event.targets.contains(target);
                        }).set('ai', function (target) {
                            var player = _status.event.player;
                            if(event.num1==3) return -get.attitude(player,target);
                            else return get.recoverEffect(target, player, player) || get.attitude(target, player) > 0;
                        });
                    }
                    else if(result.targets.length==1){
                        player.logSkill(event.name,result.targets);
                        event.num1==3?result.targets[0].damage(3):result.targets[0].recover(3);
                        event.finish();
                    }
                    'step 2'
                    if(result.targets){
                        event.num1==3?result.targets[0].damage(2):result.targets[0].recover(2);
                        event.targets.remove(result.targets[0]);
                        event.num1==3?event.targets[0].damage():event.targets[0].recover();
                    }
                },
            },
            ymyuhun:{
                enable:"phaseUse",
                usable:1,
                charlotte:true,
                fixed:true,
                audio:"lihun",
                locked:true,
                filterCard:function (card) {
                    var num = 4 - (_status['ymyuhun_zuo'].length+_status['ymyuhun_you'].length);
                    if (ui.selected.cards.length >= num) return false;
                    var suit = get.suit(card);
                    for (var i = 0; i < ui.selected.cards.length; i++) {
                        if (get.suit(ui.selected.cards[i]) == suit) return false;
                    }
                    return true;
                },
                selectCard:[1,4],
                check:function (card) {
                    return 8 - get.value(card);
                },
                complexCard:true,
                prompt:"弃置任意张不同花色的牌后令场上增加等量名你的【傀儡】",
                init:function (player) {
                    if (!player.storage.ymyuhun_kuilei) player.storage.ymyuhun_kuilei = ['nan', 'nv'];
                    _status.ymyuhun_zuo = [];
                    _status.ymyuhun_you = [];
                    lib.translate['qy_qynvkuilei']='傀儡·女';
                    lib.translate['qy_qynankuilei']='傀儡·男';
                    lib.character.qy_qynvkuilei = ['female', 'qun', 3, ['ymyuhun_init'], ['character:ns_nanhua_right', 'unseen']];
                    lib.character.qy_qynankuilei = ['male', 'qun', 3, ['ymyuhun_init'], ['character:ns_nanhua_left', 'unseen']];
                },
                filter:function (event, player) {
                    return _status['ymyuhun_zuo'].length+_status['ymyuhun_you'].length<4;
                },
                onremove:function () {
                    game.countPlayer(function (current) {
                        if ((_status['ymyuhun_zuo'].concat(_status['ymyuhun_you'])).contains(current)&&current.master&&current.master==player) {
                            current.die()._triggered = null;
                            game.delay(2);
                            current.remove();
                            _status['ymyuhun_zuo'].remove(current);
                            _status['ymyuhun_you'].remove(current);
                        }
                    });
                },
                content:function () {
                    'step 0'
                    event.num = cards.length;
                    'step 1'
                    if (_status['ymyuhun_zuo'].action === false) {
                        _status['ymyuhun_zuo'].action = true;
                    } else {
                        _status['ymyuhun_zuo'].action = false;
                    }
                    var action = _status['ymyuhun_zuo'].action,
                        length = _status['ymyuhun_you'].length + 1;
                    var fellow = game.addFellow(action ? 1 : game.players.length + game.dead.length - _status['ymyuhun_you'].length, `qy_qy${player.storage.ymyuhun_kuilei.randomGet()}kuilei`);
                    fellow.classList.add('minskin');
                    fellow.side = player.side;
                    fellow.master = player;
                    if (action) {
                        game.players.remove(fellow);
                        game.players.unshift(fellow);
                        game.arrangePlayers();
                    }
                    var left = 80;
                    if(action){
                        left = 600;
                    }
                    if(_status[!action ? 'ymyuhun_zuo' : 'ymyuhun_you'].length>0) left += 150;
                    fellow.css({
                        pointerEvents: 'auto',
                        top: '45vh',
                        left: left + 'px',
                    });
                    ui.arena.appendChild(fellow);
                    _status[!action ? 'ymyuhun_zuo' : 'ymyuhun_you'].add(fellow);
                    fellow.identity = player.identity;
                    if (fellow.identity === 'zhu') fellow.identity = 'zhong';
                    if (fellow.identity === 'nei') fellow.identity='？';
                    fellow.setIdentity('傀儡');
                    fellow.node.identity.dataset.color = 'black';
                    if (get.mode() == 'doudizhu') {
                        fellow.identity = player.identity;
                        fellow.setIdentity('傀儡');
                    }
                    event.num--;
                    'step 2'
                    if (event.num > 0) event.goto(1);
                    else event.finish();
                },
                mod:{
                    globalFrom:function (from, to, distance) {
                        var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                        if(players) return distance - players.length;
                    },
                    targetEnabled:function (card, player, target, now) {
                        var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                        if (players && players.length) {
                            if (players.contains(player)) return false;
                        }
                    },
                    playerEnabled:function (card, player, target) {
                        if (_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']).contains(target)&&target.master&&target.master==player) {
                            return false;
                        }
                    },
                },
                ai:{
                    order:12,
                    result:{
                        player:1,
                    },
                },
                group:['ymyuhun_die','ymyuhun_equip','ymyuhun_use','ymyuhun_win'],
                subSkill:{
                    init:{
                        trigger:{
                            global:"roundStart",
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        charlotte:true,
                        init:function(player){
                            player.addSkill('ymyuhun_remove');
                        },
                        onremove:function(player){
                            player.addSkill('ymyuhun_remove');
                        },
                        content:function () {
                            var num=[1,2].randomGet();
                            if(num==1) player.gainMaxHp();
                            else player.recover();
                        },
                    },
                    remove:{
                        trigger:{
                            player:["die","phaseBefore"],
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        forceDie:true,
                        fixed:true,
                        charlotte:true,
                        init:function(player){
                            player.addSkill('ymyuhun_init');
                        },
                        onremove:function(player){
                            player.addSkill('ymyuhun_init');
                        },
                        filter:function (event, player) {
                            return _status['ymyuhun_zuo'].concat(_status['ymyuhun_you']).contains(player);
                        },
                        content:function () {
                            if(event.triggername=='phaseBefore'){
                                trigger.cancel();
                                player.draw(2);
                            }
                            else{
                                player.master.removeAdditionalSkill(player.name1)
                                player.remove();
                                _status['ymyuhun_zuo'].remove(player);
                                _status['ymyuhun_you'].remove(player);
                            }
                        },
                        mod:{
                            playerEnabled:function (card, player, target) {
                                if (_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']).contains(target)&&target!=player) {
                                    return false;
                                }
                            },
                            globalFrom:function (from, to, distance) {
                                return distance - _status['ymyuhun_zuo'].length-_status['ymyuhun_you'].length;
                            },
                        },
                    },
                    die:{
                        trigger:{
                            player:"die",
                        },
                        silent:true,
                        charlotte:true,
                        forced:true,
                        popup:false,
                        forceDie:true,
                        filter:function (event, player) {
                            var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                            if (!players || !players.length) {
                                return false;
                            }
                            return true;
                        },
                        content:function () {
                            var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                            game.countPlayer(function (current) {
                                if (players.contains(current)&&current.master&&current.master==player) {
                                    current.die();
                                    game.delay(2);
                                    current.remove();
                                    _status['ymyuhun_zuo'].remove(current);
                                    _status['ymyuhun_you'].remove(current);
                                }
                            });
                        },
                    },
                    equip:{
                        trigger:{
                            global:["equipEnd","loseEnd","ymyuhunAfter","changeHp","loseBegin"],
                        },
                        forced:true,
                        charlotte:true,
                        popup:false,
                        silent:true,
                        filter:function (event, player, name) {
                            var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                            if (!players || !players.length) return false;
                            if (name == 'loseEnd') {
                                for (var i = 0; i < event.cards.length; i++) {
                                    if (event.cards[i].original == 'e') return true;
                                }
                            } else return true;
                        },
                        content:function () {
                            var info = [];
                            var es = player.getCards('e');
                            var equips = [];
                            for (var i = 0; i < es.length; i++) {
                                if (es[i].clearLose) continue;
                                equips.add(es[i].name);
                                var skill = lib.card[es[i].name].skills;
                                if (skill && skill.length > 0) info.addArray(skill);
                            }
                            var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                            game.countPlayer(function (current) {
                                if (players.contains(current)&&current.master&&current.master==player) {
                                    current.storage.ymyuhun_equip = equips;
                                    current.addSkill('ymyuhun_equip');
                                    current.markSkill('ymyuhun_equip');
                                    current.removeAdditionalSkill('ymyuhun_equip');
                                    current.addAdditionalSkill('ymyuhun_equip', info, true);
                                    current.master.addAdditionalSkill(current.name1, current.skills.filter(value => ['ymhuajing', 'ymdujie', 'ymyuhun_init', 'ymyuhun_remove',].contains(value) === false), true);
                                }
                            });
                        },
                        mod:{
                            globalFrom:function (from, to, distance) {
                                var num = 0;
                                if(!from.storage.ymyuhun_equip) return;
                                for (var i = 0; i < from.storage.ymyuhun_equip.length; i++) {
                                    var info = lib.card[from.storage.ymyuhun_equip[i]];
                                    if (info && info.distance && info.distance.globalFrom) num += info.distance.globalFrom;
                                }
                                return distance + num;
                            },
                            globalTo:function (from, to, distance) {
                                var num = 0;
                                if(!to.storage.ymyuhun_equip) return;
                                for (var i = 0; i < to.storage.ymyuhun_equip.length; i++) {
                                    var info = lib.card[to.storage.ymyuhun_equip[i]];
                                    if (info && info.distance && info.distance.globalTo) num += info.distance.globalTo;
                                }
                                return distance + num;
                            },
                            attackFrom:function (from, to, distance) {
                                var num = 0;
                                if(!from.storage.ymyuhun_equip) return;
                                for (var i = 0; i < from.storage.ymyuhun_equip.length; i++) {
                                    var info = lib.card[from.storage.ymyuhun_equip[i]];
                                    if (info && info.distance && info.distance.attackFrom) num += info.distance.attackFrom;
                                }
                                return distance + num;
                            },
                            attackTo:function (from, to, distance) {
                                var num = 0;
                                if(!to.storage.ymyuhun_equip) return;
                                for (var i = 0; i < to.storage.ymyuhun_equip.length; i++) {
                                    var info = lib.card[to.storage.ymyuhun_equip[i]];
                                    if (info && info.distance && info.distance.attackTo) num += info.distance.attackTo;
                                }
                                return distance + num;
                            },
                        },
                        marktext:"魂",
                        intro:{
                            content:function (storage, player, skill) {
                                var str='<li>当前装备：' + get.translation(player.storage.ymyuhun_equip)+'<br>–––––––––––––––––––––––';
                                for (var i = 0; i < player.storage.ymyuhun_equip.length; i++) {
                                    str += '<br>*<span class="bluetext">【'+lib.translate[player.storage.ymyuhun_equip[i]]+'】：' + lib.translate[player.storage.ymyuhun_equip[i] + '_info']+'</span>';
                                }
                                return str;
                            },
                            onunmark:function (storage, player) {
                                player.removeAdditionalSkill('ymyuhun_equip');
                                delete player.storage.ymyuhun_equip;
                                player.addEquipTrigger();
                            },
                        },
                    },
                    use:{
                        trigger:{
                            player:'useCardAfter',
                        },
                        filter:function(event,player){
                            if(!['trick','basic'].contains(get.type(event.card))) return false;
                            var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                            return players&&players.length;
                        },
                        forced:true,
                        content:function(){
                            'step 0'
                            var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                            game.countPlayer(function (current) {
                                if (!players.contains(current)||!current.master||current.master!=player) {
                                    players.remove(current);
                                }
                            });
                            event.num=0;
                            event.kuilei=players;
                            'step 1'
                            event.targets=trigger.targets.slice(0);
                            for(var i=0;i<event.targets.length;i++){
                                if(!event.kuilei[event.num].canUse(trigger.card, event.targets[i], false, false)||!event.targets[i].isAlive()){
                                    event.targets.remove(event.targets[i]);
                                }
                            }
                            var card=game.createCard(trigger.card);
                            if(trigger.targets.length==1&&trigger.targets[0]==player) event.kuilei[event.num].useCard(card,event.kuilei[event.num],false);
                            else if(event.targets.length) event.kuilei[event.num].useCard(card,event.targets,false);
                            event.num++;
                            if(event.num<event.kuilei.length) event.redo();
                        },
                    },
                    win:{
                        trigger:{
                            global:['dieBegin','die','phaseAfter'],
                        },
                        silent:true,
                        popup:false,
                        forced:true,
                        filter:function(event,player,name){
                            var mode = get.mode();
                            var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                            if (!players||!players.length) return false;
                            if (mode == 'identity'&&name=='dieBegin'&&player.identity=='nei'){
                                return game.players.length-players.length<=2&&event.player!=player;
                            }
                            else if(name == 'die' || name == 'phaseAfter') return player.getEnemies().length == 0;
                        },
                        content:function(){
                            'step 0'
                            game.delay();
                            'step 1'
                            if (game.showIdentity) {
                                game.showIdentity();
                            }
                            if (player.isUnderControl(true) || player.getFriends().contains(game.me)) {
                                game.over(true);
                            } else {
                                game.over(true);
                            }
                        },
                    },
                },
            },
            ymkongshen:{
                trigger:{
                    player:'phaseEnd',
                },
                audio:'biyue',
                content:function(){
                    'step 0'
                    if(game.roundNumber%2==1){
                        player.draw(2);
                        event.finish();
                    }
                    else{
                        player.chooseTarget(get.prompt2(event.name), '选择1名【傀儡】替换武将牌', function (card, player, target) {
                            var players=_status['ymyuhun_zuo'].concat(_status['ymyuhun_you']);
                            return players&&players.contains(target)&&target.master&&target.master==_status.event.player;
                        }).set('ai', function (target) {
                            if(['qy_qynvkuilei','qy_qynankuilei'].contains(target.name1)) return target;
                            return Math.random();
                        });
                    }
                    'step 1'
                    if(result.bool){
                        var list=[];
                        var list2=[];
                        var players=game.players.concat(game.dead);
                        for(var i=0;i<players.length;i++){
                            list2.add(players[i].name);
                            list2.add(players[i].name1);
                            list2.add(players[i].name2);
                        }
                        for(var i in lib.character){
                            if(lib.character[i][4].contains('qyboss')) continue;
                            if(lib.character[i][0]!=result.targets[0].sex) continue;
                            if(lib.character[i][4].contains('minskin')) continue;
                            if(list2.contains(i)) continue;
                            list.push(i);
                        }
                        result.targets[0].master.removeAdditionalSkill(result.targets[0].name1);
                        var hp=result.targets[0].hp;
                        var maxHp=result.targets[0].maxHp;
                        result.targets[0].init(list.randomGet()).classList.add('minskin');
                        result.targets[0].hp=hp;
                        result.targets[0].maxHp=maxHp;
                        result.targets[0].update();
                        result.targets[0].master.addAdditionalSkill(result.targets[0].name1, result.targets[0].skills.filter(value => ['ymhuajing', 'ymdujie', 'ymyuhun_init', 'ymyuhun_remove'].contains(value) === false), true);
                    }
                },
            },
            ymkurou:{
                enable: "phaseUse",
                audio: "rekurou",
                logv:false,
                visible:true,
                prompt:"重铸一张牌并失去一点体力",
                filter: function(event, player) {
                    return (player.getStat().skill.ymkurou || 0) < (event.ymkurou_num || 0);
                },
                mark:true,
                marktext:'苦',
                intro:{
                    content:function(storage,player,skill){
                        var str='本回合剩余【苦肉】次数：'
                        var num=0;
                        if(player.isMaxHp()) num++;
                        if(player.isMaxHandcard()) num++;
                        if(player.getHistory("sourceDamage").length==0) num++;
                        str+=(num-(player.getStat().skill.ymkurou||0)>0?num-(player.getStat().skill.ymkurou||0):0);
                        if(!player.isMaxHp()) str+='<br><li>体力值不为全场最高';
                        if(!player.isMaxHandcard()) str+='<br><li>手牌数不为全场最多';
                        if(player.getHistory("sourceDamage").length>0) str+='<br><li>本回合已造成伤害';
                        return str;
                    },
                },
                onChooseToUse: function(event) {
                    if (game.online) return;
                    var num = 0;
                    var evt2 = event.getParent();
                    var player=_status.event.player;
                    if(player.isMaxHp()) num++;
                    if(player.isMaxHandcard()) num++;
                    if(player.getHistory("sourceDamage").length==0) num++;
                    event.set('ymkurou_num', num);
                },
                filterCard:function(card,player){
                    var mod=game.checkMod(card,player,'unchanged','cardChongzhuable',player);
                    if(mod!='unchanged') return mod;
                    return true;;
                },
                position: "he",
                prepare:function(cards,player){
                    player.$throw(cards,1000);
                    game.log(player,'将',cards,'置入了弃牌堆');
                },
                check:function(card){
                    return 6-get.value(card);
                },
                discard:false,
                loseTo:"discardPile",
                delay:0.5,
                content:function(){
                    "step 0"
                    if(lib.config.mode=='stone'&&_status.mode=='deck'&&!player.isMin()&&get.type(cards[0]).indexOf('stone')==0){
                        var list=get.stonecard(1,player.career);
                        if(list.length){
                            player.gain(game.createCard(list.randomGet()),'draw');
                        }
                        else{
                            player.draw({drawDeck:1})
                        }
                    }
                    else if(get.subtype(cards[0])=='spell_gold'){
                        var list=get.libCard(function(info){
                            return info.subtype=='spell_silver';
                        });
                        if(list.length){
                            player.gain(game.createCard(list.randomGet()),'draw');
                        }
                        else{
                            player.draw();
                        }
                    }
                    else if(get.subtype(cards[0])=='spell_silver'){
                        var list=get.libCard(function(info){
                            return info.subtype=='spell_bronze';
                        });
                        if(list.length){
                            player.gain(game.createCard(list.randomGet()),'draw');
                        }
                        else{
                            player.draw();
                        }
                    }
                    else{
                        player.draw();
                    }
                    "step 1"
                    player.loseHp();
                    player.storage.ymkurou=player.getStat().skill.ymkurou;
                },
                ai: {
                    order: 9,
                    result:{
                        player:function(player){
                            if(player.hp<=2) return player.countCards('h')==0?1:0;
                            if(player.countCards('h',{name:'sha'})) return 1;
                            return player.countCards('h')<=player.hp?1:0;
                        },
                    },
                    effect:function(card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkillTag('jueqing',false,target)) return [1,1];
                            return 1.2;
                        }
                        if(get.tag(card,'loseHp')){
                            if(player.hp<=1) return;
                            return [0,0];
                        }
                    },
                },
                group:'ymkurou_recover',
                subSkill:{
                    recover:{
                        trigger:{
                            player:'phaseEnd',
                        },
                        forced:true,
                        audio:'rekurou',
                        filter:function(event,player){
                            if(player.storage.ymkurou&&player.storage.ymkurou<3) return true;
                        },
                        content:function(){
                            player.recover(player.storage.ymkurou);
                            delete player.storage.ymkurou;
                        },
                    },
                },
            },
            ymzhaxiang:{
                trigger:{
                    player:'loseHpEnd',
                    source:'damageBegin1',
                },
                audio:'zhaxiang',
                forced:true,
                filter:function(event,player,name){
                    if(name=='damageBegin1') return player.getHistory('sourceDamage').length==0&&player.hp<player.maxHp;
                    else return true;
                },
                content:function(){
                    'step 0'
                    if(event.triggername=="damageBegin1"){
                        trigger.num+=(player.maxHp-player.hp);
                        event.finish();
                    }
                    else{
                        event.num=trigger.num;
                        event.cards=[];
                    }
                    'step 1'
                    var num=[1,2,3].randomGet();
                    for(var i=0;i<num;i++){
                        var card = get.cardPile(function (card) {
                            return get.tag(card, 'damage')&&!event.cards.contains(card);
                        });
                        if(card) event.cards.add(card);
                    }
                    player.getHistory('custom').push({ymzhaxiang_name: 'loseHp'});
                    event.num--;
                    if(event.num>0) event.redo();
                    'step 2'
                    player.gain(event.cards,'draw');
                    var num=player.getHistory('custom', function (evt) {
                        return evt.ymzhaxiang_name == 'loseHp';
                    }).length;
                    player.addTempSkill('ymzhaxiang_mark');
                    if(num>=1) player.addTempSkill('ymzhaxiang_distance');
                    if(num>=2) player.addTempSkill('ymzhaxiang_usecard');
                    if(num>=3) player.addTempSkill('ymzhaxiang_nature');
                },
                mod:{
                    cardUsable: function (card, player, num) {
                        var count=player.getHistory('custom', function (evt) {
                            return evt.ymzhaxiang_name == 'loseHp';
                        }).length;
                        var info=get.info(card);
                        if(get.tag(card, 'damage')&&info.usable) return num+count;
                    },
                },
                subSkill:{
                    mark:{
                        mark:true,
                        charlotte:true,
                        onremove:true,
                        intro:{
                            content:function(storage,player,skill){
                                var str='';
                                var count=player.getHistory('custom', function (evt) {
                                    return evt.ymzhaxiang_name == 'loseHp';
                                }).length;
                                if(count>0) str+='<br><li>「伤害」标签的牌使用次数+'+count;
                                if(player.hasSkill('ymzhaxiang_distance')) str+='<br><li>「伤害」标签的牌无距离限制';
                                if(player.hasSkill('ymzhaxiang_usecard')) str+='<br><li>「伤害」标签的牌不能被响应';
                                if(player.hasSkill('ymzhaxiang_nature')) str+='<br><li>「伤害」标签的属性牌视为火属性，「伤害」标签的普通牌无视防具';
                                return str;
                            },
                        },
                    },
                    distance:{
                        charlotte:true,
                        mod:{
                            targetInRange:function (card,player,target,now){
                                if(get.tag(card, 'damage')) return true;
                            },
                        },
                    },
                    usecard:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        charlotte:true,
                        filter:function(event,player){
                            return event.card&&get.tag(event.card, 'damage');
                        },
                        content:function(){
                            trigger.directHit.addArray(game.players);
                        },
                        ai:{
                            "directHit_ai":true,
                            skillTagFilter:function(player,tag,arg){
                                return get.tag(arg.card, 'damage');
                            },
                        },
                    },
                    nature:{
                        charlotte:true,
                        mod:{
                            cardnature:function(card,player){
                                if(card.nature&&get.tag(card, 'damage')) return 'fire';
                            },
                        },
                        ai:{
                            unequip:true,
                            skillTagFilter:function(player,tag,arg){
                                if(!arg||!arg.card||arg.card.nature||!get.tag(arg.card, 'damage')) return false;
                            },
                        },
                    },
                },
            },
            ymwushuang: {
                audio: "wushuang",
                enable: "chooseToUse",
                filter: function(event, player) {
                    if(event.type=='wuxie'||!player.countCards('hse')) return false;
                    for(var i=0;i<lib.inpile.length;i++){
                        var name=lib.inpile[i];
                        if(name!='wuxie'&&name!='shan'&&event.filterCard({name:name},player,event)) return true;
                    }
                    return false;
                },
                hiddenCard: function(player, name) {
                    return (player.getHistory('custom', function (evt) {return evt.ymwushuang_name == name;}).length<=0 && lib.inpile.contains(name))&&name!='shan'&&name!='wuxie';
                },
                locked:true,
                chooseButton: {
                    dialog: function(event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if(player.getHistory('custom', function (evt) {
                                return evt.ymwushuang_name == name;
                            }).length>0) continue;
                            if(_status.dying.length>0){
                                if(lib.card[name].savable!=true) continue;
                            }
                            else{
                                if(lib.card[name].selectTarget==-1&&!lib.card[name].toself) continue;
                            }
                            if (name == 'sha') {
                                list.push(['基本', '', 'sha']);
                                list.push(['基本', '', 'sha', 'fire']);
                                list.push(['基本', '', 'sha', 'thunder']);
                                list.push(['基本', '', 'sha', 'ice']);
                                list.push(['基本', '', 'sha', 'kami']);
                            }
                            else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                            else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                        }
                        if (list.length == 0) {
                            return ui.create.dialog('无可用牌');
                        }
                        return ui.create.dialog('无双', [list, 'vcard']);
                    },
                    filter: function(button, player) {
                        return _status.event.getParent()
                            .filterCard({
                            name: button.link[2]
                        }, player, _status.event.getParent());
                    },
                    check: function(button) {
                        var player = _status.event.player;
                        var effect = player.getUseValue(button.link[2]);
                        if(button.link[2]=='shunshou') effect*1.5;
                        if(button.link[2]=='wuzhong') effect=30;
                        if(button.link[2]=='juedou') effect*10;
                        if(button.link[2]=='jiu') effect=10;
                        if(button.link[2]=='sha') effect*5;
                        if(button.link[2]=='tiesuo') effect=1;
                        if(get.type(button.link[2])=='basic') effect*2;
                        if(get.type(button.link[2])=='trick') effect*0.8;
                        if (effect > 0) return effect;
                        return 0;
                    },
                    backup: function(links, player) {
                        return {
                            audio: 'wushuang',
                            popname: true,
                            check: function(card) {
                                return 4 - get.value(card);
                            },
                            position: 'hes',
                            filterCard:true,
                            selectCard:[1,3],
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3]
                            },
                            viewAsFilter:function (player){
                                if(player.countCards('hes')<=0) return false;
                            },
                            onuse: function(result, player) {
                                if(get.type(result.card)=='trick') player.getHistory('custom').push({ymwushuang_name: result.card.name});
                            },
                        }
                    },
                    prompt: function(links, player) {
                        return '将至多三张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                mod:{
                    selectTarget:function (card,player,range){
                        if(['basic','trick'].contains(get.type(card))&&!card.isCard&&range[1]!=-1) range[1]=ui.selected.cards.length;
                    },
                    targetInRange:function(card,player,target,now){
                        if(['basic','trick'].contains(get.type(card))&&!card.isCard) return true;
                    },
                },
                ai: {
                    skillTagFilter: function(player) {
                        if (!player.countCards('hes')) return false;
                    },
                    order: 9,
                    result: {
                        player: function(player) {
                            var allshown = true,
                                players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i].ai.shown == 0) {
                                    allshown = false;
                                }
                                if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
                                    return 1;
                                }
                            }
                            if (allshown) return 1;
                            return 0;
                        },
                    },
                    threaten: 1,
                },
                group:'ymwushuang_use',
                subSkill:{
                    use:{
                        trigger:{
                            player:'useCardAfter',
                        },
                        forced:true,
                        audio: "wushuang",
                        filter:function(event,player){
                            if(!event.cards) return false;
                            if(event.cards.length == 1) return false;
                            if(event.card.isCard) return false;
                            if(!['basic','trick'].contains(get.type(event.card))) return false;
                            var card = event.cards[0];
                            if(get.itemtype(event.cards)!='cards') return false;
                            if(get.position(card,true) != 'o') return false;
                            if(!lib.card[card.name]) return false;
                            if (event.parent.name == 'ymwushuang_use') return false;
                            if(event.cards.length-event.targets.length<1) return false;
                            var targets=event._targets||event.targets;
                            for(var i=0;i<targets.length;i++){
                                if(targets[i].isDying()&&lib.card[event.card.name].savable) return true;
                                if(targets[i].isIn()&&player.canUse(event.card,targets[i],false,false)) return true;
                            }
                        },
                        content:function(){
                            'step 0'
                            event.card=game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                            event.num=trigger.cards.length-trigger.targets.length;
                            'step 1'
                            var targets = trigger._targets || trigger.targets;
                            for (var i = 0; i < targets.length; i++) {
                                if(targets[i].isDying()&&lib.card[trigger.card.name].savable) continue;
                                if (!targets[i].isIn() || !player.canUse(trigger.card, targets[i], false, false)) targets.remove(targets[i]);
                            }
                            player.useCard({
                                name: event.card.name,
                                suit: event.card.suit,
                                number: event.card.number,
                                nature: event.card.nature,
                                isCard: true
                            }, targets, false);
                            player.$throw(event.card, 1000);
                            'step 2'
                            event.num--;
                            if(event.num>0) event.goto(1);
                            else event.finish();
                        },
                    },
                },
            },
            ymbaonu:{
                trigger:{
                    player:'useCard',
                    source:'damageBefore',
                    global:'phaseUseBegin',
                },
                forced:true,
                audio:'baonu',
                mark:true,
                intro:{
                    content:function(storage,player,skill){
                        var str='本回合使用基本牌和【决斗】的次数：';
                        var num=player.getHistory('useCard',function(evt){
                            return get.type(evt.card)=='basic'||evt.card.name=='juedou';
                        }).length;
                        return (str+num);
                    },
                },
                filter:function(event,player,name){
                    if(name=='useCard') return game.hasPlayer(function(current){
                        return current!=player&&current.hp>=player.hp&&event.targets.contains(current);
                    });
                    if(name=='damageBefore') return event.player.hp<=player.hp;
                    if(name=='phaseUseBegin') return player.hp<player.maxHp;
                },
                content:function(){
                    if(event.triggername=='useCard'){
                        trigger.directHit.addArray(game.filterPlayer(function(current){
                            return current!=player&&current.hp>=player.hp&&trigger.targets.contains(current);
                        }));
                        player.addTempSkill('unequip',{player:'useCardAfter'});
                    }
                    if(event.triggername=='damageBefore'){
                        var num=Math.max(1,Math.ceil(player.getHistory('useCard',function(evt){
                            return get.type(evt.card)=='basic'||evt.card.name=='juedou';
                        }).length/2));
                        player.markSkill(event.name);
                        trigger.num+=num;
                    }
                    if(event.triggername=='phaseUseBegin'){
                        var num=[];
                        for(var i=1;i<(player.maxHp-player.hp+1);i++){
                            num.push(i);
                        }
                        player.draw(num.randomGet()*2);
                    }
                },
            },
            ymjushou:{
                trigger:{
                    player:'damageEnd',
                    source:'damageEnd',
                },
                audio:'xinjiewei',
                locked:true,
                filter:function(event,player){
                    return true;
                },
                content:function(){
                    'step 0'
                    player.turnOver();
                    player.draw();
                    event.num=0;
                    event.players=[];
                    event.players.add(player);
                    if(player.storage.ymlizhan) event.players.addArray(player.storage.ymlizhan);
                    event.players.sort(lib.sort.seat);
                    'step 1'
                    if(event.num<event.players.length){
                        var list = [];
                        if (game.hasPlayer(function(current) {
                            return event.players[event.num].canUse('sha', current,false);
                        })) {
                            list.push(['基本', '', 'sha']);
                            list.push(['基本', '', 'sha', 'stab']);
                        }
                        for (var i of lib.linked) {
                            if (game.hasPlayer(function(current) {
                                return event.players[event.num].canUse({name: 'sha',nature: i}, current,false);
                            })) {
                                list.push(['基本', '', 'sha', i]);
                            }
                        }
                        if (lib.filter.cardUsable({name: 'tao'}, event.players[event.num], event.getParent('chooseToUse')) && game.hasPlayer(function(current) {
                            return event.players[event.num].canUse('tao', current,false);
                        })) {
                            list.push(['基本', '', 'tao']);
                        }
                        for(var i=0;i<list.length;i++){
                            if(player.getHistory('custom', function (evt) {
                                var name=list[i][2]+list[i][3]
                                return evt.ymjushou_name==name;
                            }).length>0) list.splice(i--,1);
                        }
                        if (list.length) {
                            if(!event.log){
                                player.logSkill(event.name,event.players);
                                event.log=true;
                            }
                            event.players[event.num].chooseButton(['是否视为使用一张【杀】或【桃】？', [list, 'vcard']]).set('ai', function(button) {
                                var player = _status.event.player;
                                var card = {name: button.link[2],nature: button.link[3]};
                                if (card.name == 'tao') {
                                    if (event.players[event.num].hp == 1 || (event.players[event.num].hp == 2 && !event.players[event.num].hasShan()) || event.players[event.num].needsToDiscard()) {
                                        return 5;
                                    }
                                    return 1;
                                }
                                else if (card.name == 'sha') {
                                    if (game.hasPlayer(function(current) {
                                        return event.players[event.num].canUse(card, current) && get.effect(current, card, event.players[event.num], event.players[event.num]) > 0
                                    })) {
                                        if (card.nature == 'kami') return 4.9;
                                        if (card.nature == 'fire') return 2.95;
                                        if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                        return 2.9;
                                    }
                                    return 0;
                                }
                                else return get.useful(card);
                            });
                        }
                        else {
                            event.finish();
                        }
                    }
                    else event.finish();
                    'step 2'
                    if(result&&result.bool&&result.links[0]){
                        var card={name:result.links[0][2],nature:result.links[0][3]};
                        var name=result.links[0][2]+result.links[0][3];
                        player.getHistory('custom').push({ymjushou_name:name});
                        event.players[event.num].chooseUseTarget(card,false,'nodistance');
                        event.players[event.num].draw();
                    }
                    'step 3'
                    event.num++;
                    if(event.num<event.players.length) event.goto(1);
                    else event.finish();
                },
                group:'ymjushou_turn',
                subSkill:{
                    turn:{
                        trigger:{
                            player:['_turnoverBefore','phaseBefore','turnOverEnd'],
                        },
                        audio:"kuiwei",
                        filter:function(event,player,name){
                            if(name=='_turnoverBefore') return player.isTurnedOver();
                            if(name=='phaseBefore') return player.isTurnedOver();
                            if(name=='turnOverEnd') return true;
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        content:function(){
                            if(event.triggername=='_turnoverBefore'){
                                trigger.finish();
                                player.logSkill(event.name);
                            }
                            if(event.triggername=='phaseBefore'){
                                player.phaseSkipped=false;
                                if((player==_status.roundStart||_status.roundSkipped)&&!trigger.skill){
                                    delete _status.roundSkipped;
                                    game.roundNumber++;
                                    trigger._roundStart=true;
                                    game.updateRoundNumber();
                                    for(var i=0;i<game.players.length;i++){
                                        if(game.players[i].isOut()&&game.players[i].outCount>0){
                                            game.players[i].outCount--;
                                            if(game.players[i].outCount==0&&!game.players[i].outSkills){
                                                game.players[i].in();
                                            }
                                        }
                                    }
                                    event.trigger('roundStart');
                                }
                            }
                            if(event.triggername=='turnOverEnd'){
                                if(player.isTurnedOver()){
                                    player.node.turnedover.remove();
                                    player.node.avatar.setBackgroundImage('extension/假装无敌/qy_qycaoren_defense.jpg');
                                }
                                else{
                                    //player.node.avatar.setBackground('caoren','character');
                                    player.node.avatar.setBackgroundImage('extension/假装无敌/qy_qycaoren.jpg');
                                }
                            }
                        },
                    },
                },
            },
            ymlizhan:{
                trigger:{
                    player:['phaseZhunbeiBegin','phaseJieshuBegin'],
                },
                audio:"yanzheng",
                direct:true,
                markText:'励战',
                intro:{
                    name:'励战',
                    content:function(storage,player,skill){
                        var own=player.storage[skill];
                        return ('【励战】角色：'+get.translation(own));
                    },
                },
                content:function(){
                    'step 0'
                    player.chooseTarget([0,Infinity], get.prompt(event.name), '选择任意名角色成为【励战】目标角色', function (card, player, target) {
                        return target!=player;
                    }).set('ai', function (target) {
                        return get.attitude(player,target)>0;
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill(event.name,result.targets);
                        player.storage.ymlizhan=[].concat(result.targets);
                        if(result.targets.length>0) player.markSkill('ymlizhan');
                        else player.unmarkSkill('ymlizhan');
                    }
                },
                group:'ymlizhan_turn',
                subSkill:{
                    turn:{
                        trigger:{
                            global:'damageBegin'
                        },
                        audio:"yanzheng",
                        forced:true,
                        filter:function(event,player){
                            var own=[];
                            own.add(player);
                            if(player.storage.ymlizhan) own.addArray(player.storage.ymlizhan);
                            if(own.contains(event.source)&&!player.isTurnedOver()) return true;
                            if(own.contains(event.player)&&player.isTurnedOver()) return true;
                            return false;
                        },
                        content:function(){
                            var own=[];
                            own.add(player);
                            if(player.storage.ymlizhan) own.addArray(player.storage.ymlizhan);
                            if(own.contains(trigger.source)){
                                trigger.num++;
                                var card=get.cardPile(function (card) {
                                    return get.type(card) == 'equip'&&['equip1','equip4'].contains(get.subtype(card))&&!trigger.source.getEquip(lib.card[card.name].subtype)&&!get.cardtag(card, 'gifts');
                                });
                                if(card) trigger.source.equip(card);
                            }
                            if(own.contains(trigger.player)){
                                trigger.num--;
                                var card=get.cardPile(function (card) {
                                    return get.type(card) == 'equip'&&['equip2','equip3'].contains(get.subtype(card))&&!trigger.player.getEquip(lib.card[card.name].subtype)&&!get.cardtag(card, 'gifts');
                                });
                                if(card) trigger.player.equip(card);
                            }
                        }
                    },
                },
            },
            ymkuiwei:{
                forced:true,
                charlotte:true,
                mark:true,
                silent:true,
                popup:false,
                trigger:{
                    player:'turnOverAfter',
                },
                content:function(){
                    player.markSkill(event.name);
                },
                intro: {
                    content: function (storage, player, skill) {
                        if (!player.isTurnedOver()) return '<span class="legendtext">锁定技，此翻面状态下，你和【励战】角色使用基本牌无次数限制</span>';
                        return '<span class="bluetext">锁定技，此翻面状态下，你和【励战】角色使用锦囊牌无距离限制。</span>';
                    },
                },
                global:'ymkuiwei_mod',
                subSkill:{
                    mod:{
                        forced:true,
                        charlotte:true,
                        mod:{
                            cardUsable:function(card,player,num){
                                if(((player.hasSkill('ymkuiwei')&&!player.isTurnedOver())||game.hasPlayer(function(current){
                                    return current.hasSkill('ymkuiwei')&&!current.isTurnedOver()&&current.storage.ymlizhan&&current.storage.ymlizhan.contains(player)
                                }))&&get.type(card)=='basic') return Infinity;
                            },
                            targetInRange:function(card,player,target,now){
                                if(((player.hasSkill('ymkuiwei')&&player.isTurnedOver())||game.hasPlayer(function(current){
                                    return current.hasSkill('ymkuiwei')&&current.isTurnedOver()&&current.storage.ymlizhan&&current.storage.ymlizhan.contains(player)
                                }))&&get.type2(card)=='trick') return true;
                            },
                        },
                    },
                },
            },
            ymshengshou:{
                audio:"chulao",
                trigger:{
                    player:'phaseBegin',
                },
                content:function(){
                    'step 0'
                    var cards=get.cards(Math.max(game.players.length,5));
                    event.black=[];
                    event.red=[];
                    for(var i=0;i<cards.length;i++){
                        if(get.color(cards[i])=='black') event.black.add(cards[i]);
                        else event.red.add(cards[i]);
                    }
                    event.count1=event.black.length;
                    event.count2=event.red.length;
                    event.videoId = lib.status.videoId++;
                    var str1='选项一：指定至多'+event.count1+'名角色你令其共失去'+get.cnNumber(event.count1)+'点体力且你获得这些红色牌'
                    var str2='选项二：指定至多'+event.count2+'名角色你令其共回复'+get.cnNumber(event.count2)+'点体力且你获得这些黑色牌'
                    if (player.isOnline2()) {
                        player.send(function(cards, id) {ui.create.dialog('圣手', str1, event.red, str2, event.black).videoId = id;}, cards, event.videoId);
                    }
                    event.dialog = ui.create.dialog('圣手');
                    event.dialog.addText(str1);
                    if(event.red.length) event.dialog.add(event.red);
                    event.dialog.addText(str2);
                    if(event.black.length) event.dialog.add(event.black);
                    event.dialog.videoId = event.videoId;
                    if (!event.isMine()) {
                        event.dialog.style.display = 'none';
                    }
                    var value = 0;
                    for(var i=0;i<game.players.length;i++){
                        if(get.attitude(player,game.players[i])>0){
                            value += (get.recoverEffect(game.players[i],player,player)+1);
                        }
                        else value -= (get.damageEffect(game.players[i],player,player)+1);
                    }
                    player.chooseControl('选项一', '选项二', '背水！', function(event, player) {
                        if (value > 5) return '选项二';
                        else if(value <-5) return '选项一';
                        else return '背水！';
                    });
                    'step 1'
                    if (player.isOnline2()) {
                        player.send('closeDialog', event.videoId);
                    }
                    event.dialog.close();
                    player.popup(result.control);
                    game.log(player,'选择了'+result.control);
                    if(result.control=='选项一') event.goto(2);
                    if(result.control=='选项二') event.goto(5);
                    if(result.control=='背水！') {
                        event.beishui=true;
                        event.goto(2);
                    }
                    'step 2'
                    if(event.count1>0){
                        player.chooseTarget([1,event.count1],true,get.prompt('ymshengshou'),'指定至多'+get.cnNumber(event.count1)+'名角色你令其随机失去共'+event.count1+'点体力',function(card,player,target){
                            return true;
                        }).set('ai',function(target){
                            var player=_status.event.player;
                            return get.damageEffect(target,player,player)*2;
                        });
                    }
                    'step 3'
                    if(result.bool){
                        var list=result.targets;
                        list.sort(lib.sort.seat);
                        var list2=[];
                        for(var i=0;i<list.length;i++){
                            list2.push(1);
                        }
                        event.count1-=result.targets.length;
                        for(var i=0;i<event.count1;i++){
                            list2[Math.floor(Math.random()*list2.length)]++;
                        }
                        event.list=list;
                        event.list2=list2;
                    }
                    'step 4'
                    if(event.list&&event.list.length){
                        var target=event.list.shift();
                        target.loseHp(event.list2.shift()).set('source',player);
                        player.line(target,'thunder');
                        event.redo();
                    }
                    else{
                        player.gain(event.red,'gain2')
                        if(event.beishui) event.goto(5);
                        else{
                            for(var i=0;i<event.black.length;i++) event.black[i].discard();
                            event.finish();
                        }
                    }
                    'step 5'
                    if(event.count2>0){
                        player.chooseTarget([1,event.count2],true,get.prompt('ymshengshou'),'指定至多'+get.cnNumber(event.count2)+'名角色你令其随机回复共'+event.count2+'点体力',function(card,player,target){
                            return true;
                        }).set('ai',function(target){
                            var player=_status.event.player;
                            if(get.attitude(target,player)>0){
                                return get.recoverEffect(target,player,player)+2;
                            }
                        });
                    }
                    'step 6'
                    if(result.bool){
                        var list=result.targets;
                        list.sort(lib.sort.seat);
                        var list2=[];
                        for(var i=0;i<list.length;i++){
                            list2.push(1);
                        }
                        event.count2-=result.targets.length;
                        for(var i=0;i<event.count2;i++){
                            list2[Math.floor(Math.random()*list2.length)]++;
                        }
                        event.list=list;
                        event.list2=list2;
                    }
                    'step 7'
                    if(event.list&&event.list.length){
                        var target=event.list.shift();
                        target.recover(event.list2.shift());
                        player.line(target,'thunder');
                        event.redo();
                    }
                    else{
                        player.gain(event.black,'gain2');
                        if(event.beishui){
                            player.discard(event.red.concat(event.black));
                        }
                        else {
                            for(var i=0;i<event.red.length;i++) event.red[i].discard();
                            event.finish();
                        }
                    }
                },
            },
            ymqingnang:{
                audio:"qingnang",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
                    return player.countCards('he')>0;
                },
                selectCard:[1,2],
                filterCard:true,
                position:"hes",
                filterTarget:true,
                selectTarget:[1,Infinity],
                check:function(card){
                    return 7-get.value(card);
                },
                content:function(){
                    "step 0"
                    event.number=cards.length;
                    var list=['选项一','选项二'];
                    var str1='令'+get.translation(targets[num])+'回复'+get.cnNumber(event.number)+'点体力(每溢出一点则其额外摸两张牌)';
                    var str2='弃置'+get.translation(targets[num])+get.cnNumber(2*event.number)+'张牌(每不足两张则其额外失去一点体力)';
                    if(event.getParent(2).name=='ymjijiu'){
                        list.remove('选项二');
                        str2="<span style='color: red'>受【急救】影响，本次无法选择此项</span>";
                    }
                    player.chooseControl(list).set('choiceList',[str1,str2]).set('prompt',get.prompt('ymqingnang',targets[num])).set('ai',function(){
                        if(get.attitude(targets[num],player)>0) return '选项一';
                        else return '选项二';
                    });
                    "step 1"
                    if(result.control=='选项一'){
                        var n=event.number-targets[num].maxHp+targets[num].hp;
                        if(n>0){
                            targets[num].recover(event.number-n);
                            targets[num].draw(2*n);
                        }
                        else targets[num].recover(event.number);
                    }
                    if(result.control=='选项二'){
                        var n=(2*event.number-targets[num].countCards('he'))
                        if(n>0){
                            var count=targets[num].countCards('he')%2==1?targets[num].countCards('he')-1:targets[num].countCards('he');
                            if(count>0) player.discardPlayerCard(targets[num],count,true,'he');
                            targets[num].loseHp(event.number-count/2);
                        }
                        else player.discardPlayerCard(targets[num],2*event.number,true,'he');
                    }
                },
                ai:{
                    result:{
                        target:function(player,target){
                            if(get.attitude(player,target)>0){
                                if(target.maxHp>target.hp){
                                    return 2;
                                }
                                else if(target.maxHp<=target.hp){
                                    return 1;
                                }
                            }
                            else{
                                if(target.countCards('he')<2){
                                    return -2;
                                }
                                else if(target.countCards('he')>=2){
                                    return -1;
                                }
                            }
                        },
                    },
                    order:9,
                },
                mod:{
                    ignoredHandcard:function(card,player){
                        if(get.type(card)=='basic') return true;
                    },
                    cardDiscardable:function(card,player,name){
                        if(name=='phaseDiscard'&&get.type(card)=='basic') return false;
                    },
                },
            },
            ymjijiu:{
                trigger:{
                    global:'dying',
                },
                locked:true,
                audio:"jijiu",
                check:function(event,player){
                    return get.attitude(event.player,player)>0
                },
                filter:function(event,player){
                    return player.countCards('hs')>0;
                },
                content:function(){
                    'step 0'
                    player.discard(player.getCards('hs').randomGet());
                    trigger.player.recover(1-trigger.player.hp);
                    'step 1'
                    if(player.countCards('hes')>0){
                        player.chooseCardTarget({
                            filterTarget:true,
                            selectTarget:[1,Infinity],
                            selectCard:[1,2],
                            filterCard:lib.filter.cardDiscardable,
                            position:"hes",
                            ai1:function(card){
                                return 7-get.value(card);
                            },
                            ai2:function(target){
                                /*if(get.attitude(player,target)>0){
                                    if(target.maxHp>target.hp){
                                        return 2*get.attitude(player,target);
                                    }
                                    else if(target.maxHp<=target.hp){
                                        return get.attitude(player,target);
                                    }
                                }
                                else{
                                    if(target.countCards('he')<2){
                                        return -2*get.attitude(player,target);
                                    }
                                    else if(target.countCards('he')>=2){
                                        return -get.attitude(player,target);
                                    }
                                }*/
                                return get.attitude(player,target)>0;
                            },
                            prompt:get.prompt2('ymqingnang'),
                            prompt2:"<li><span style='color: red'>——本次无法选择②</span>"
                        });
                    }
                    'step 2'
                    if(result.bool){
                        player.discard(result.cards);
                        var next = player.useSkill('ymqingnang');
                        next.player = player;
                        next.cards = result.cards;
                        next.targets = result.targets;
                        next.num = 0;
                    }
                },
            },
            ymdimeng:{
                trigger:{
                    global:'gameStart',
                    player:'phaseBegin',
                },
                audio:'dimeng',
                direct:true,
                filter:function(event,player){
                    return true;
                },
                init:function(player){
                    player.storage.renku=true;
                },
                mark:true,
                intro:{
                    name:'缔盟',
                    content:function(storage,player,skill){
                        var own=[];
                        for(var i=0;i<game.players.length;i++){
                            if(game.players[i].storage[skill]) own.addArray(game.players[i].storage[skill]);
                        }
                        return ('【缔盟】角色：'+get.translation(own));
                    },
                },
                content:function(){
                    'step 0'
                    player.chooseTarget([0,Infinity], get.prompt(event.name), '选择任意名角色成为【缔盟】目标角色并令其摸一张牌', function (card, player, target) {
                        return true;
                    }).set('ai', function (target) {
                        return get.attitude(player,target)>0;
                    });
                    'step 1'
                    if(!player.storage.ymdimeng) player.storage.ymdimeng=[];
                    if(result.bool){
                        player.markSkill('renku');
                        player.logSkill(event.name,result.targets);
                        player.storage.ymdimeng=[].concat(result.targets);
                        for(var i=0;i<result.targets.length;i++){
                            result.targets[i].draw();
                        }
                    }
                },
                group:['ymdimeng_renku','ymdimeng_end'],
                global:'ymdimeng_use',
                subSkill:{
                    renku:{
                        trigger:{
                            global:["loseBefore","loseAfter","useCardAfter","respondAfter"],
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function(event,player,name){
                            var players=[];
                            for(var i=0;i<game.players.length;i++){
                                if(game.players[i].storage.ymdimeng) players.addArray(game.players[i].storage.ymdimeng);
                            }
                            if(!players.contains(event.player)) return false;
                            var cards=[];
                            if(event.name=='lose'){
                                if(['useCard','respond'].contains(event.getParent().name)&&name=='loseBefore'){
                                    var evt=event.getParent();
                                    evt.ownCards=[];
                                    for(var i=0;i<evt.cards.length;i++){
                                        if(players.contains(get.owner(evt.cards[i]))) evt.ownCards.add(evt.cards[i]);
                                    }
                                    return false;
                                }
                                if(event.type!='discard') return false;
                                for(var i=0;i<event.cards.length;i++){
                                    if(get.position(event.cards[i])=='d'){
                                        cards.add(event.cards[i]);
                                    }
                                }
                            }
                            else{
                                var cards2=event.cards.filterInD();
                                for(var i=0;i<cards2.length;i++){
                                    if(event.ownCards&&event.ownCards.contains(cards2[i])) cards.add(cards2[i]);
                                }
                            }
                            return cards.length>0;
                        },
                        content:function(){
                            var cards=[];
                            if(trigger.name=='lose'){
                                for(var i=0;i<trigger.cards.length;i++){
                                    if(get.position(trigger.cards[i])=='d'){
                                        cards.add(trigger.cards[i]);
                                    }
                                }
                            }
                            else{
                                var cards2=trigger.cards.filterInD();
                                for(var i=0;i<cards2.length;i++){
                                    if(trigger.ownCards&&trigger.ownCards.contains(cards2[i])) cards.add(cards2[i]);
                                }
                            }
                            game.log(cards,'被置于仁库');
                            game.cardsGotoSpecial(cards,'toRenku');
                            game.updateRenku();
                        },
                    },
                    end:{
                        trigger:{
                            global:["cardsDiscardBefore"],
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function(event,player){
                            return event.fromRenku==true&&event.outRange;
                        },
                        content:function(){
                            _status.renku=trigger.cards.concat(_status.renku);
                            var cards=_status.renku.splice(0,_status.renku.length-30);
                            /*var players=[];
                            for(var i=0;i<game.players.length;i++){
                                if(game.players[i].storage.ymdimeng) players.addArray(game.players[i].storage.ymdimeng);
                            }
                            player.logSkill(event.name);
                            for(var i=0;i<players.length;i++){
                                players[i].draw();
                            }*/
                            game.updateRenku();
                            if(cards.length) trigger.cards=cards;
                            else{
                                trigger.untrigger(true);
                                trigger.finish();
                            }
                        },
                    },
                    use:{
                        enable:["chooseToUse","chooseToRespond"],
                        hiddenCard:function(player,name){
                            if(lib.inpile.contains(name)) return true;
                        },
                        filter:function(event,player){
                            var players=[];
                            for(var i=0;i<game.players.length;i++){
                                if(game.players[i].hasSkill('ymdimeng')&&game.players[i].storage.ymdimeng) players.addArray(game.players[i].storage.ymdimeng);
                            }
                            if(!players.contains(player)) return false;
                            if(_status.renku.length==0) return false;
                            if(event.responded||event.ymdimeng==player) return false;
                            if(game.hasPlayer(function(current){
                                return current.hasSkill('ymdimeng');
                            })){
                                _status.ymdimng=event;
                                for(var i of lib.inpile){
                                    if(event.filterCard({name:i},player,event)) return true;
                                }
                            }
                            return false;
                        },
                        chooseButton:{
                            dialog:function(event,player){
                                var cards=_status.renku;
                                var evt=_status.ymdimng;
                                evt.set('ymdimeng',player);
                                return ui.create.dialog('缔盟',cards);
                            },
                            filter:function(button,player){
                                return _status.event.getParent().filterCard({name: button.link.name}, player, _status.event.getParent());
                            },
                            check:function(button){
                                var player = _status.event.player;
                                var effect = player.getUseValue(button.link.name)+1;
                                if (effect > 0) return effect;
                                return 0;
                            },
                            backup:function(links,player){
                                return {
                                    filterCard:function(){return false},
                                    selectCard:-1,
                                    viewAs:{name:links[0].name,cards:links,isCard:true},
                                    precontent:function(){
                                        delete event.result.skill;
                                        player.logSkill('ymdimeng');
                                        event.getParent().addCount=false;
                                        var cards=event.result.card.cards
                                        var name=event.result.card.name;
                                        event.result.cards=event.result.card.cards;
                                        event.result.card=get.autoViewAs(event.result.cards[0]);
                                        event.result.card.name=name;
                                        game.log(cards,'从仁库进入了弃牌堆');
                                        game.delayx();
                                        game.cardsDiscard(cards).fromRenku=true;
                                        _status.renku.removeArray(cards);
                                        game.updateRenku();
                                    },
                                }
                            },
                            prompt:function(links,player){
                                return '选择'+get.translation(links)+'的目标';
                            },
                        },
                        ai:{
                            order:11,
                            respondShan:true,
                            respondSha:true,
                            result:{
                                player:function(player){
                                    if(_status.event.dying) return get.attitude(player,_status.event.dying);
                                    return 1;
                                },
                            },
                        },
                    },
                },
            },
            ymhaoshi:{
                trigger:{
                    global:['phaseUseBegin','phaseUseEnd'],
                },
                audio:'haoshi',
                derivation:["rezhiheng"],
                filter:function(event,player){
                    return true;
                },
                prompt:function(event,player){
                    return '是否对<span style="color: red">'+get.translation(event.player)+'</span>发动【好施】？';
                },
                check:function(event,player){
                    return get.attitude(event.player,player)>0
                },
                content:function(){
                    'step 0'
                    if(event.triggername=='phaseUseBegin'){
                        if(trigger.player.maxHp<10) trigger.player.gainMaxHp();
                        else trigger.player.recover();
                    }
                    'step 1'
                    trigger.player.drawTo(trigger.player.maxHp);
                    if(event.triggername=='phaseUseBegin') event.finish();
                    'step 2'
                    trigger.player.chooseCard('he', [1,Infinity], get.prompt('rezhiheng'),get.translation('rezhiheng_info'), function (card) {
                        return lib.filter.cardDiscardable
                    }).set('ai', function (card) {
                        var player=_status.event.player;
                        if(get.position(card)=='h'&&!player.countCards('h','du')&&(player.hp>2||!player.countCards('h',function(card){
                            return get.value(card)>=8;
                        }))){
                            return 1;
                        }
                        return 6-get.value(card)
                    });
                    'step 3'
                    if(result.cards){
                        var next = game.createEvent('rezhiheng');
                        next.player = trigger.player;
                        next.cards=result.cards;
                        next.setContent(lib.skill.rezhiheng.content);
                    }
                },
            },
            ymkeji:{
                trigger:{
                    global:'phaseEnd',
                },
                audio:'keji',
                forced:true,
                filter:function(event,player){
                    return player.getHistory('sourceDamage').length||player.getHistory('lose').length;
                },
                content:function(){
                    if(player.getHistory('sourceDamage').length){
                        var num=0;
                        player.getHistory('sourceDamage', function (evt) {
                            num+=evt.num;
                        });
                        if(num>5) num=5;
                        player.changeHujia(num);
                        player.draw(num);
                    }
                    else{
                        var cards=[];
                        player.getHistory('lose', function(evt){
                            var card=evt.cards.slice(0);
                            if(card && card.length > 0) cards.addArray(card.filter(function(card){
                                return true;
                            }));
                            game.findPlayer2(function (current) {
                                if (current!=player) cards.removeArray(current.getCards('j'));
                                else cards.removeArray(player.getCards('e'));
                            });
                        });
                        player.gain(cards,'gain2');
                        if(_status.currentPhase==player) player.changeHujia(1);
                        else player.recover();
                    }
                },
            },
            ymandu:{
                dutySkill:true,
                trigger:{
                    global:"phaseEnd",
                },
                audio:'keji',
                forced:true,
                filter:function(event,player){
                    if(event.player==player) return false;
                    //if(event.player.getHistory('sourceDamage', function(evt){
                    //    return evt.player==player&&evt.num>0;
                    //}).length>0) return false;
                    return true;
                },
                content:function(){
                    if(trigger.player.getHistory('sourceDamage', function(evt){
                        return evt.player==player&&evt.num>0;
                    }).length==0) player.draw();
                    else player.changeHujia(1);
                },
                derivation:["ymshajie","qinxue","gongxin"],
                group:["ymandu_achieve","ymandu_fail"],
                subSkill:{
                    achieve:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        audio:'botu',
                        skillAnimation:true,
                        animationColor:"fire",
                        filter:function(event,player){
                            return player.hujia>=5||player.countCards('h')>=12;
                        },
                        content:function(){
                            'step 0'
                            game.log(player,'成功完成使命');
                            player.awakenSkill('ymandu');
                            player.gainMaxHp(player.hujia);
                            'step 1'
                            player.recover(player.maxHp-player.hp);
                            player.draw(player.maxHp-player.hp);
                            player.addSkillLog('ymshajie');
                        },
                    },
                    fail:{
                        trigger:{
                            source:"die",
                        },
                        forced:true,
                        audio:'botu',
                        content:function(){
                            game.log(player,'使命失败');
                            player.awakenSkill('ymandu');
                            player.loseHp();
                            player.discard(player.getCards('e'));
                            player.addSkillLog('qinxue');
                            player.addSkillLog('shelie');
                        },
                    },
                },
            },
            ymshajie:{
                trigger:{
                    player:'phaseBegin',
                },
                audio:'gongxin',
                forced:true,
                direct:true,
                mark:true,
                intro:{
                    name:'杀劫',
                    content:function(storage,player,skill){
                        var own=player.storage[skill];
                        return ('【杀劫】目标：'+get.translation(own));
                    },
                },
                content:function(){
                    'step 0'
                    player.chooseTarget([1,2], get.prompt(event.name), '选择任意名其他角色成为【杀劫】目标', function (card, player, target) {
                        return player!=target;
                    }).set('ai', function (target) {
                        return get.attitude(player,target)<=0;
                    });
                    'step 1'
                    if(result.targets){
                        delete player.storage.ymshajie;
                        player.logSkill(event.name,result.targets);
                        player.storage.ymshajie=[].concat(result.targets);
                    }
                },
                group:'ymshajie_use',
                subSkill:{
                    use:{
                        trigger:{
                            player:'useCard',
                            source:'damageBegin',
                        },
                        audio:'gongxin',
                        forced:true,
                        filter:function(event,player,name){
                            if(name=='useCard'){
                                return game.hasPlayer(function(current){
                                    return player.storage.ymshajie&&player.storage.ymshajie.contains(current)&&event.targets.contains(current);
                                });
                            }
                            else{
                                return player.getHistory('sourceDamage', function(evt){
                                    return evt.player==event.player;
                                }).length==0&&player.storage.ymshajie&&player.storage.ymshajie.contains(event.player);
                            }
                            return false;
                        },
                        content:function(){
                            'step 0'
                            if(event.triggername=='useCard'){
                                var goon = false;
                                game.hasPlayer(function (current) {
                                    if (!trigger.targets.contains(current) && player.storage.ymshajie.contains(current)) goon = true
                                });
                                if (goon == true) {
                                    player.chooseTarget(get.prompt2(event.name), '是否为' + get.translation(trigger.card) + '额外指定一个【杀劫】目标为目标？', function (card, player, target) {
                                        return !_status.event.sourcex.contains(target) && player.storage.ymshajie.contains(target);
                                    }).set('sourcex', trigger.targets).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, _status.event.card, player, player);
                                    }).set('card', trigger.card);
                                }
                            }
                            else {
                                trigger.num+=Math.max(1,Math.min(5,player.hujia));
                                player.changeHujia(-Math.min(Math.floor(player.hujia/2),5));
                                event.finish();
                            }
                            'step 1'
                            if (result.bool) {
                                player.line(result.targets, 'green');
                                trigger.targets.addArray(result.targets);
                            }
                            'ste 2'
                            trigger.directHit.addArray(game.filterPlayer(function(current){
                                return player.storage.ymshajie&&player.storage.ymshajie.contains(current)&&trigger.targets.contains(current);
                            }));
                        },
                        mod:{
                            targetInRange:function(card,player,target){
                                if(player.storage.ymshajie&&player.storage.ymshajie.contains(target)) return true;
                            },
                            cardUsableTarget:function(card,player,target){
                                if(player.storage.ymshajie&&player.storage.ymshajie.contains(target)) return true;
                            },
                        },
                    },
                },
            },

        },
        // 翻译
        translate: {
            "ymqianxing_append": "<span style=\"font-family: yuanli\">影牵万古星河畔，长明永夜照人间。</span>",
            "ymxingluo_append": "<span style=\"font-family: yuanli\">群星陨似颜如玉，一日鲛绡一日疏。</span>",
            "ymtayue_append": "<span style=\"font-family: yuanli\">几度飘零何时还，行遍山河踏月归。</span>",
            "ymyueyin_append": "<span style=\"font-family: yuanli\">锦瑟韶光星如雨，银汉迢迢月西沉。</span>",
            "ymfengqin_append": "<span style=\"font-family: yuanli\">风华何所似，侵晓雪初霁。</span>",
            "ymyucheng_append": "<span style=\"font-family: yuanli\">玉蟾清冷思悠悠，十里蝉鸣尽成霜。</span>",
            "ymtuoshu_append": "<span style=\"font-family: yuanli\">托书天地，只存在于一场做不完的梦。</span>",
            "ymtianjie_append": "<span style=\"font-family: yuanli\">天数已至，在劫难逃！</span>",
            "ymshuyun_append": "<span style=\"font-family: yuanli\">绿云浅梳桃李羡，白衣举袂画中仙。</span>",
            "ymshigu_append": "<span style=\"font-family: yuanli\">早知相思可蚀骨，缘何偏遇倾城色。</span>",
            "ymguiyuan_append": "<span style=\"font-family: yuanli\">草色凝烟君归日，桃花解愿我去时。</span>",
            "ymtianyu_append": "<span style=\"font-family: yuanli\">天命有数，春秋难御！</span>",
            // 武将翻译
            "thelandfairy": "陆地神仙",
            "qy_qyzuoci": "左慈",
            "qy_qycaoying": "曹婴",
            "qy_qyjiangwei": "姜维",
            "qy_qyzhangjiao": "张角",
            "qy_qyzhangxingcai": "张星彩",
            "qy_qyyuji": "于吉",
            "qy_qyliru": "李儒",
            "qy_qyjiaxu": "贾诩",
            "qy_qyhuangyueying": '黄月英',
            "qy_qyzhangrang": '张让',
            "qy_qysunce": '孙策',
            "qy_qyzhaoyun": '赵云',
            "qy_qysimayan": '司马炎',
            "qy_qyjianyong": '简雍',
            "qy_qyzhugeliang": '诸葛亮',
            "qy_qysimayi": '司马懿',
            "qy_qyzhangfei": '张飞',
            "qy_qymachao": '马超',
            "qy_qydongzhuo": '董卓',
            "qy_qyzhangliao": '张辽',
            "qy_qyliubei": '刘备',
            "qy_qydaqiao": '大乔',
            "qy_qypangtong": '庞统',
            "qy_qysunshangxiang": '孙尚香',
            "qy_qyxiahoudun": '夏侯惇',
            "qy_qyguanyu": '关羽',
            "qy_qyxunyu": '荀彧',
            "qy_qycaocao": '曹操',
            "qy_qycaochun": '曹纯',
            "qy_qyxiahouyuan": '夏侯渊',
            "qy_qyhuangzhong": '黄忠',
            "qy_qyzhanghe": '张郃',
            "qy_qyyuejin": '乐进',
            "qy_qyyujin": '于禁',
            "qy_qyxuhuang": '徐晃',
            "qy_qysunquan": '孙权',
            "qy_qyxiaoqiao": '小乔',
            "qy_qyzhouyu": '周瑜',
            "qy_qydiaochan": '貂蝉',
            "qy_qyhuanggai": '黄盖',
            "qy_qylvbu": '吕布',
            "qy_qycaoren": '曹仁',
            "qy_qyhuatuo": '华佗',
            "qy_qylusu": '鲁肃',
            "qy_qylvmeng": '吕蒙',
            //---------------------------------------boss------------------------------------------
            "qy_qyhanxing": '寒星',
            "qy_qylengyue": '冷月',
            "qy_qyqingyaoxuying": '清瑶',
            "qy_qyqingyaoxuying_double": '清瑶',
            "qy_qyjiaqi": '葭绮',

            // 扩展翻译
            "假装无敌Pack": '<span style="animation: -webkit-animation:fairy 20s infinite;animation:fairy 20s infinite;">假装无敌</span>',

            //武将栏分类
            dibiaodier: '<span style="animation: -webkit-animation:fairy 20s infinite;animation:fairy 20s infinite;">地表第二</span>',
            xinghuishendao: '<span style="animation: -webkit-animation:fairy 20s infinite;animation:fairy 20s infinite;">兴会神到</span>',
            jisiguangyi: '<span style="animation: -webkit-animation:fairy 20s infinite;animation:fairy 20s infinite;">集思广益</span>',
            biluozhiling: '<span style="animation: -webkit-animation:fairy 20s infinite;animation:fairy 20s infinite;">碧落之灵</span>',

            // 技能翻译
            ymqiangsha: "强杀",
            "ymqiangsha_info": "锁定技，很多时机你可以杀死很多人……直到你不想爽了为止……",
            ymhuashen: "化身",
            "ymhuashen_info": "锁定技，游戏开始时/你的出牌阶段开始时/体力变化后你可以随机从五张未获得过的武将牌中选择获得至多两张武将牌上的所有技能直到你发动此技能；你每少选择一张武将牌，你摸一张牌；然后复原你的武将牌和装备区；若你的体力上限小于武将牌上的体力上限，你将其调整至武将牌上的体力上限。<br><span style='color: blue'>【注】：silent技、popup技发动不失去。",
            ymxinsheng: "新生",
            "ymxinsheng_info": "限定技，出牌阶段你可以令一名角色失去所有技能，然后获得随机X个技能。(X为你的技能总数)",
            ymlingren: "凌人",
            "ymlingren_info": "每回合限一次。当你使用带有「伤害」这一标签的牌指定目标后，你可以猜测其中的任意个目标的手牌中是否有基本牌，锦囊牌或装备牌。若你猜中的项目数：≥1，此牌对该目标的伤害+1；≥2，你摸【凌人】指定的目标数张牌(此技能结算前限一次)；≥3，该目标随机失效一个技能直到其回合结束，然后你获得此技能直到你的下回合开始。",
            ymfujian: "伏间",
            "ymfujian_info": "锁定技，回合开始阶段或回合结束阶段，你可以选择一名有手牌的角色观看其手牌，然后选择不超过X张牌获得，然后你交给其等量的牌；若你以此法获得了该角色所有的手牌，则你随机获得本回合内进入弃牌堆一半的牌。(X为你的手牌数，向上取整)",
            ymguji: "孤计",
            "ymguji_info": "锁定技，若你的势力为场上最少的势力之一，当你造成伤害时，此伤害+1并弃置目标角色两张牌，然后你将势力改为与与目标角色相同；若你的势力为场上最多的势力之一，当你受到伤害后，你选择一名角色回复一点体力并摸两张牌，然后你将势力改为与与伤害相同。",
            ymhaixian: "害贤",
            "ymhaixian_info": "当你受到伤害时，你可以指定至多两名其他角色对其造成等量的伤害，然后你摸X张牌并可用任意方式分配给任意个角色。(X为场上最多的势力数)",
            ymzhonglie: "忠烈",
            "ymzhonglie_info": "当其他角色使用牌时，此牌为【桃】或带有「伤害」标签，你可以弃置一张牌；若如此做，你取消这些目标并成为此牌的唯一目标，然后，你摸取消的目标数的牌。",
            ymtaiping: "太平",
            "ymtaiping_info": "当你因弃置而失去牌时，你可以进行一次判定，若判定结果为黑色/红色，你选择一名其他角色令其受到一点雷/火属性伤害；若以此法未造成伤害，随机执行一项：1.你摸2张牌，2.目标选择弃置2张牌。",
            ymqiyi: "起义",
            "ymqiyi_info": '每回合限3次，当你造成一点伤害时，你有概率发动一次【太平】。(此概率为当前<span style="color: red">设备电量</span>百分比)',
            ymhuangtian: "黄天",
            "ymhuangtian_info": '锁定技，场上每有一名与你势力相同的角色，你受到伤害后便摸一张牌；每有一名与你势力不同的角色，你受到伤害后便弃一张牌。（均不超过3张）',
            ymtiandao: "天道",
            "ymtiandao_info": '主公技，锁定技，若你宝物栏没有牌且没有被废除，则你视为装备着【太平要术】。',
            ymqiangwu: "枪舞",
            "ymqiangwu_info": '出牌阶段限一次，你可以猜测一种颜色并亮出牌堆顶的一张牌，若猜中你本回合的杀无距离无次数限制，若猜错你摸一张杀和一张酒。',
            ymjiejun: "劫军",
            "ymjiejun_info": "当你使用杀指定目标时，你可以选择目标区域内至多X张牌置于其武将牌上（X为其体力值）；你每选择一个区域的牌，此杀的伤害便+1。任意角色回合结束，你选择这些牌的一半获得之（向上取整），然后该角色获得剩余的牌。",
            ymkuidi: "溃敌",
            "ymkuidi_info": "锁定技，游戏开始时或你的杀每造成1点伤害，你获得一个“枪”标记；出牌阶段你可以移动1个“枪”标记给其他角色，拥有此标记的其他角色受到你造成的伤害+1，其回合开始阶段移除此标记，然后你选择一项:1.该角色受到1点随机属性伤害且本回合不能使用基本牌，2.该角色失去1点体力且本回合不能获得牌，3.你选择获得该角色区域内的两张牌。",
            ymguhuo: "蛊惑",
            "ymguhuo_info": "锁定技，游戏开始时/奇数轮开始时，你随机获得一张场下的武将牌加入你的【虚影】中；其他角色死亡后，你的本体将该角色的武将牌加入你的【虚影】中。你每获得一个【虚影】时，你选择此【虚影】的一个技能视为你拥有该技能；你的回合开始时/回合结束后/可以替换为任意【虚影】代替你进行游戏或切换回你的本体；【虚影】死亡后，你可以立即替换成任意【虚影】。<br><span style='color: orange'>【虚影】：拥有独立的技能、手牌区和装备区（共享判定区及其他效果）；出场时替代本体的位置。",
            ymfushu: "符术",
            "ymfushu_info": "锁定技，牌堆顶的X张牌始终对你可见(X为场上存活角色数且至少为4)；出牌阶段，你可以弃置一张手牌令1名角色的所有牌均视为【空白牌】直到回合结束；若该牌是你最后一张手牌，则改为直到该角色回合结束。",
            ymduce: "毒策",
            "ymduce_info": "出牌阶段限一次，你可以摸一张牌并指定一名角色，然后将一张牌置于该角色的武将牌上称为【毒策】并弃置其一张牌；该角色的回合开始阶段若其有【毒策】，其需选择一项：1.交给你一张牌，若此牌不为黑色锦囊牌，该角色不能使用或打出任何牌直到回合结束，2.失去一点体力，然后本回合所有技能失效。执行任一选项后，该角色弃置所有【毒策】。",
            ymdushi: "毒仕",
            "ymdushi_info": "任意角色回合结束后，若有角色于本回合受到伤害，则你可以弃置场上区域内的一张牌，然后对一名不为你的角色造成1点伤害。",
            ymzhuzhuo: "助卓",
            "ymzhuzhuo_info": "当与你同势力的角色造成伤害或受到伤害后，你可以令一名角色增加1点体力上限；1.该角色不为你，其摸一张♠️牌，若该角色本回合第一次因此摸牌，则额外摸一张♥️牌，2.该角色为你，你摸两张牌，每回合限一次。",
            ymxiance: "献策",
            "ymxiance_info": "出牌阶段，你可以亮出牌堆顶的三张牌，并置于一名没有“策”的角色角色武将牌上称为“策”，该角色下回合获得这些“策”，然后根据“策”的类型获得以下效果直到该角色回合结束：1.基本牌，从牌堆获得每种【杀】各一张和随机三张不同名的基本牌且本回合基本牌无距离次数限制并可额外指定一个目标，2.锦囊牌，你的摸牌阶段额外摸两张牌；使用普通锦囊牌摸一张牌且可额外或减少指定至多两个目标，3.装备牌，随机将装备区空白栏置入两张装备并回复一点体力且本回合手牌无上限，造成伤害时，此伤害+1。",
            ymzhukou: "逐寇",
            "ymzhukou_info": "转换技，每回合限X次；阴：当你使用或成为黑色牌的目标时，你可指定任意名拥有“献策”的角色各摸两张牌，你摸一张牌；阳：当你使用或成为红色牌的目标时，你可指定任意名没有“献策”的角色各弃两张牌，你摸一张牌。(X为场上角色数)；锁定技，其他角色濒死回复体力时，若其没有“策”，若回复值大于1则改为1，否则此回复值-1。",
            ymlinglong: "玲珑",
            "ymlinglong_info": "回合开始阶段，你可以弃置一张牌，从牌库里/牌库外随机获得一张装备牌并摸两张牌。",
            ymjiqiao: "机巧",
            "ymjiqiao_info": "出牌阶段限一次，你可以弃置一张牌煅造你装备区里未被煅造的一张牌或永久改变一张装备牌的装备类型；你煅造后的装备牌被获得时立即销毁。",
            ymqicai: "奇才",
            "ymqicai_info": "锁定技，你的回合内，你每次弃牌后从牌堆或弃牌堆里获得一张随机锦囊牌。",
            ymtaoluan: "滔乱",
            "ymtaoluan_info": "每回合限一次，其他角色出牌阶段开始时或回合结束阶段，若其有手牌，则你可以获得其所有手牌，根据这些牌中基本牌和普通锦囊牌的数量，视为你使用等量张此次未使用过的无距离次数限制的同类型牌；然后你交给其X张牌，若你给出的牌中每有一张装备牌，视为其对你使用一张杀(X为你已损失的体力值和你获得该角色的牌数中的最大值且不超过5)。",
            ymhuoluan: "祸乱",
            "ymhuoluan_info": "锁定技，当你成为其他角色【杀】的目标时，你摸两张牌并令【杀】的使用者此回合技能失效，然后你指定至多X名未成为此牌目标的其他角色也成为此牌的目标且不可闪避(X为你的体力值)。",
            ymjiang: "激昂",
            "ymjiang_info": "当你使用或成为红色牌的目标时，你可以摸一张牌。",
            ymhunyou: "魂佑",
            "ymhunyou_info": "每回合限一次，当你造成伤害/受到伤害/死亡时，你可以立即发动一次【英魂】。",
            ymtaoni: "讨逆",
            "ymtaoni_info": "每局游戏限三次，当一名角色死亡后，你可以增加一点体力上限并获得【英姿】，然后选择一项执行：1.立即发动一次【英魂】，2.移动场上两张牌。",
            ymzhiba: "制霸",
            "ymzhiba_info": "主公技，其他吴国角色出牌阶段限一次，其可以与你进行一次拼点，若你没赢，你受到一点伤害；若你赢，你随机获得3张♦️牌；你进行拼点时，你可以令你的点数+3或-3。",
            ymjiuzhu: "救主",
            "ymjiuzhu_info": "每轮游戏开始时，你可以指定一名其他角色，令除你与其以外的角色指定该角色为目标时，该角色将目标转移给你；锁定技，你每回合至多受到1点伤害。",
            ymhuwei: "虎威",
            "ymhuwei_info": "锁定技，其他角色于摸牌阶段外获得牌时，你摸一张牌。",
            ymbishan: "逼禅",
            "ymbishan_info": "出牌阶段限一次，你可以指定一名装备区有牌的其他角色将其装备区里的所有牌移至你的装备区，然后该角色摸等量张牌并受到X点伤害。(X为5-移动的牌数)",
            ymbawang: "八王",
            "ymbawang_info": "锁定技，游戏开始时，你获得3个“王”标记，每进行三轮游戏时，你获得1个“王”标记；出牌阶段，你可以将一个“王”标记交给一名其他角色；锁定技，拥有“王”标记的其他角色摸牌后你摸等量张牌(每回合限一次)且你对其他拥有“王”标记的角色造成的伤害+1，当你受到伤害时，此伤害转移至场上随机一名拥有“ 王”标记的角色，然后其移除一个此标记。",
            ymguijin: "归晋",
            "ymguijin_info": "主公技，其他魏、蜀、吴势力角色出牌阶段限一次，其可以交给你一张牌，若如此做，其无法对你造成伤害直到回合结束，然后你可以令其摸一张牌。",
            ymqiaoshui: "巧说",
            "ymqiaoshui_info": "每回合限一次，当你需要使用或打出一张基本牌或普通锦囊牌时，你可以声明此牌，然后你选择两名角色进行拼点并猜测获胜者，若你猜对，则视为你使用此牌，否则，你失去一点体力并获得拼点的牌。",
            ymzongshi: "纵适",
            "ymzongshi_info": "你的回合外你每次扣减体力时你可以摸两张牌，若有扣减体力的来源，你可以展示一张手牌，若如此做，其需交给你一张与此牌同花色的牌且你回复一点体力。否则其弃置X张牌。(X为你的体力上限)",
            ymdunjia: "遁甲",
            "ymdunjia_info": "任意角色进行判定前，你可以声明任意花色、点数、牌名作为本次判定的结果。(此结果无视其他技能效果且不可更改)",
            ymqixing: "七星",
            "ymqixing_info": "锁定技，回合开始阶段你弃置所有手牌，然后从牌堆/弃牌堆里获得7张均不同名的牌；你的手牌上限始终为7。",
            ymxuming: "续命",
            "ymxuming_info": "锁定技，当你进入濒死状态时，你获得最近失去的3+X张牌；当你本回合第一次脱离濒死状态后，视为你使用一张随机指定多名角色为目标的锦囊牌。(X为你发动【遁甲】的次数)",
            ymrenshi: "忍时",
            "ymrenshi_info": "回合开始阶段或你受到伤害时，你可以选择获得一名角色区域内的一张牌或摸两张牌，然后令自己的手牌上限+1；出牌阶段限一次，你可以失去1点体力发动一次此技能；若如此做，你进行一次判定，若判定结果为黑色，你回复一点体力。",
            ymguicai: "鬼才",
            "ymguicai_info": "任意角色判定牌生效时，你可以观看牌堆顶的4张牌并选择其中一张代替之，若如此做，你获得与此牌不同花色的其他牌，并将剩余的牌置于牌堆顶。",
            ymfanpan: "反叛",
            "ymfanpan_info": "觉醒技，回合结束时，若你进行的回合数不小于场上存活角色数的一半(向上取整)，你增加一点体力上限并回复一点体力，然后获得场上其他角色的所有手牌。",
            ymzuijiu: "醉酒",
            "ymzuijiu_info": "锁定技，出牌阶段开始时，若你已受伤，你随机增加1-2点体力上限且并回复一点体力，然后视为你使用一张酒；你使用酒无次数限制且酒对你的效果永久存在。",
            ympaoxiao: "咆哮",
            "ympaoxiao_info": "出牌阶段限一次，若你有手牌，你可以选择一名其他角色并根据条件执行：1.该角色有手牌，你与其强制拼点，若你赢，视为你对该角色使用一张杀且重置此技能，若你没赢，你摸两张牌且你本回合杀无距离次数限制且可额外指定X个目标 (X为你已损失体力值)，2.该角色无手牌，你可以弃置一张手牌视为对其使用一张杀并重置此技能，或你摸两张牌且你本回合杀无距离次数限制且可额外指定X个目标 (X为你已损失体力值)。",
            ymxiaoyong: "骁勇",
            "ymxiaoyong_info": "当你使用的杀造成伤害时，你可以进行一次判定，若判定结果为♥️，则此伤害改为减少目标等量的体力上限(你为来源)，若判定结果为♠️，此伤害翻倍；若判定成功，你减少一点体力上限并清空酒的效果。",
            ymtieji: "铁骑",
            "ymtieji_info": "出牌阶段限一次，你可以展示自己所有手牌，根据你拥有的花色执行：♠️：你的【杀】指定目标后令其本回合技能失效，♥️：你的【杀】本回合不可闪避且无视防具，♣️：你的【杀】本回合造成的伤害+1，♦️：你的【杀】本回合无距离次数限制；然后你每缺少一种花色你便摸一张与其同花色的牌。",
            ymmengshi: "猛狮",
            "ymmengshi_info": "锁定技，你的【杀】可额外指定X名角色为目标(X为已受伤角色数)。",
            ymnajian: "纳谏",
            "ymnajian_info": "当你不以直接摸牌的形式获得牌时，你可以拒绝获得，改为摸等量的牌并获得一个【谏】标记。",
            ymbaonue: "暴虐",
            "ymbaonue_info": "你的回合开始阶段，你可以弃置所有【谏】标记并根据弃置数量执行对应的效果：1.不小于场上角色数，你可以选择任意数量的其他角色，对其造成随机1-3点伤害，2.小于场上角色数，你可以选择任意数量的其他角色，弃置其随机1-3张牌。若你选择的角色数大于1，你选择失去1点体力或减少1点体力上限，然后你获得1个【谏】标记。",
            ymhengzheng: "横征",
            "ymhengzheng_info": "出牌阶段限一次，你令所有其他角色交给你一张牌，然后你可以令交给你牌的角色摸一张牌。",
            ymtuxi: "突袭",
            "ymtuxi_info": "每轮限一次，你的回合开始阶段，你可以执行以下选项:1.获得至多X名其他角色一半的牌(向上取整)，2.对至多X名角色造成当前体力值一半的伤害(向上取整)。(当前时间若为<span style='color: red'>白天</span>则执行“1”，若为<span style='color: blue'>夜间</span>则执行“2”，X为你的体力值)",
            ymdanzhan: "胆战",
            "ymdanzhan_info": "锁定技，你的回合内，你每获得一次其他角色的牌后，该角色随机弃置1张牌；你每对其他角色造成一次伤害后，该角色流失1点体力。",
            ymrende: "仁德",
            "ymrende_info": "出牌阶段，你可以将任意张牌交给任意角色，若为你本回合第一次交给其他角色，则你摸等量的牌并回复一点体力；其他角色获得你的牌后，你可以令其手牌中所有来源于你的牌均视为任意一种非装备牌的牌名直到你的下回合开始。",
            ymjieyi: "结义",
            "ymjieyi_info": "锁定技，游戏开始时或你的回合开始阶段，你可以分配至多2名角色获得“结义”标记，拥有“结义”标记的角色死亡后，你可以重新分配该角色的“结义”标记；锁定技，拥有“结义”标记的角色使用基本牌或普通锦囊牌后，若有指定的目标，则所有拥有此标记的角色均视为对无此标记的这些目标使用一张同名牌。",
            ymguose: "国色",
            "ymguose_info": "你的回合结束阶段，你可以将一张牌视为随机延时锦囊牌对一名其他角色使用；锁定技，你对其他角色使用的延时锦囊牌不能被【无懈可击】响应且判定后不离开判定角色的判定区，若此牌被弃置或获得时，你立即获得一张与之同名的牌。",
            ymliuli: "流离",
            "ymliuli_info": "任意角色的回合开始阶段，你可以获得其判定区内所有牌；当你成为基本牌或普通锦囊牌的目标，你可以选择任意名角色也成为此牌的目标，若为你本回合未因此技能摸牌，则你摸X张牌并回复一点体力。(X为此牌指定的目标数)",
            ymlianhuan: "连环",
            "ymlianhuan_info": "你的回合开始阶段，你可以选择至多两名未横置的角色横置，你的回合结束阶段，你可以选择一名横置的角色受到1点随机属性伤害；锁定技，每回合第一位角色受到属性伤害时，你摸3张牌。",
            ymniepan: "涅槃",
            "ymniepan_info": "觉醒技，当你濒死时，你将体力上限和体力调整为2，并可获得场上每名其他角色区域内至多两张牌(每少获得一张牌，你摸一张牌)，再对所有其他角色造成1点随机属性伤害；然后本局游戏限X次，锁定技，你的回合开始阶段你增加一点体力上限并回复一点体力，并将【连环】选择的角色或造成的伤害+1。(X为你发动此技能调整的体力值)",
            ymxiaoji: "枭姬",
            "ymxiaoji_info": "出牌阶段限两次，你可以将任意一张非装备牌的手牌视为任意装备牌使用；锁定技，你装备区内的牌无数量限制。",
            ymjieyin: "结姻",
            "ymjieyin_info": "每回合限一次，你每失去一张装备牌或装备区内的一张牌时(同时满足条件则叠加次数)，你可以令一名角色回复一点体力，然后你与其各摸一张牌。",
            ymliangzhu: "良助",
            "ymliangzhu_info": "任意角色每回复一次体力或造成一次伤害后，你可以重置其本回合使用【杀】和【酒】的使用次数并令其摸一张牌。",
            ymganglie: "刚烈",
            "ymganglie_info": "你每受到一次其他角色的伤害后，你可以对伤害来源进行X次判定，若为红色，你对伤害来源造成1点伤害，若为黑色，你弃置伤害来源两张牌。判定结束后，你获得所有判定牌，红色最多，你摸两张牌，黑色最多，你回复一点体力，若伤害来源无牌或死亡，你增加一点体力上限。每次伤害限一次，此过程结算后，你可以失去一点体力重新发动此技能。(X为此次伤害的点数且至少为1)",
            ymxunshu: "勋书",
            "ymxunshu_info": "每回合限一次，当任意角色扣减体力时，若此扣减点数不小于该角色的体力值且来源不为你，你可以减少一点体力上限并防止此次扣减，若有来源的牌，则你获得此牌。然后你可以选择一名其他角色对其发动一次【刚烈】。",
            ymshimu: "噬目",
            "ymshimu_info": "限定技，当你对其他角色造成伤害时，若你的体力值小于体力上限的一半，你可以防止此次伤害并令目标角色立即进入濒死状态(该角色体力值不因此濒死变化)；若其未死亡，则你重置此技能。",
            ymzhanjiang: "斩将",
            "ymzhanjiang_info": "锁定技，当你造成伤害时根据你本回合内造成的伤害次数执行以下选项：=0，此伤害+1，=1次，你获得目标角色一张牌，=2，你弃置目标角色两张牌，>=3，你失去一点体力；你对未受伤的角色造成的伤害+1。",
            ymguagu: "刮骨",
            "ymguagu_info": "出牌阶段限一次，若你已受伤，你可以弃置一张牌，回复一点体力并重置本回合使用牌的次数，然后本回合与此牌同颜色的牌无距离限制并不计入使用次数且点数视为∞；若此牌为红色，你重置本回合造成的伤害次数并获得【武圣】直到回合结束，若此牌为黑色，你增加一点体力上限和摸两张牌并获得【义绝】直到回合结束。",
            ymlongxiang: "龙骧",
            "ymlongxiang_info": "锁定技，你每杀死一名角色，你使用的牌伤害/回复基础值+1直到你脱离濒死状态后。",
            ymquhu: "驱虎",
            "ymquhu_info": "出牌阶段限一次，你可以弃置一张点数大于1的牌，若X大于场上人数，你回复一点体力，然后你选择2至X名角色，令他们依次对其他你选择的一个随机目标使用一张决斗(不能被无懈可击响应)，若有角色死亡你重置此技能并增加一点体力上限。(X为你弃置牌的点数)",
            ymjieming: "节命",
            "ymjieming_info": "你每受到一点伤害，你可以令一名角色将手牌摸至体力上限，然后该角色获得其手牌中随机X张复制牌并展示之。(X为此技能发动时该角色的手牌数，且X不大于5)",
            ymkonghe: "空盒",
            "ymkonghe_info": "锁定技，你失去最后一张手牌时，你受到一点无来源的伤害，然后你本回合不能成为带有「伤害」标签的牌的目标且对你无效。",
            ymjianxiong: "奸雄",
            "ymjianxiong_info": "出牌阶段限一次，你可以从10张未上场的武将牌选择一张作为宝物牌加入游戏并获得(视为拥有此武将的技能)，然后你摸X张牌；锁定技，你装备区的牌只能因替换而失去。(X为该武将牌的技能数)",
            ymguixin: "归心",
            "ymguixin_info": "每回合限一次，你每受到或造成一点伤害后，你可以立即获得造成伤害的牌，若这些牌包含基本牌，你摸一张牌，否则，你随机回复1点体力或摸两张牌；然后你亮出牌堆/弃牌堆里的一张带有「伤害」标签的牌并指定任意名角色对其使用。",
            ymshanjia: "缮甲",
            "ymshanjia_info": "出牌阶段，你可以将两张游戏内的装备牌合成为一张装备牌并附加效果：当装备此牌或失去此装备时，你视为使用一张不计入距离次数限制的【杀】；锁定技，你每失去装备区里的一张牌时，你摸一张牌，你的摸牌阶段摸牌数和手牌上限+X。(X为你装备区的牌数)",
            ymhubao: "虎豹",
            "ymhubao_info": "每回合限一次，你使用【杀】或【决斗】造成伤害后或你受到【杀】或【决斗】造成的伤害后，你可以令你和目标收回各自装备区内的所有牌，然后你从牌堆/弃牌堆里立即使用一张随机装备牌；若当前回合不为你的回合，则你可以选择一张装备牌立即使用，然后当前角色立即进入弃牌阶段。",
            ymshensu: "神速",
            "ymshensu_info": "其他角色的回合开始阶段，你可以获得其一张牌并自弃一张牌，视为对其使用一张无视防具的【杀】；若此【杀】未造成伤害，其失去一点体力，反之，你摸两张牌；然后你将武将牌翻面，若该角色的手牌数大于你的手牌数，则其跳过此回合。",
            ymdingzui: "顶罪",
            "ymdingzui_info": "当其他角色受到伤害来源不为你的伤害时，你可以替其承受此伤害，若此时你的武将牌背面朝上，你翻回正面；锁定技，当你的武将牌翻面后，你可以摸一张牌并立即进行一个出牌阶段。",
            ymliegong: "烈弓",
            "ymliegong_info": "当满足以下条件时，你可以弃置一张牌视为对满足条件的角色使用一张不可闪避的【杀】：1.其他角色的【杀】结算后且这些目标包含你，2.其他角色的【杀】造成伤害后且目标角色不为你。锁定技，你的【杀】无距离限制。",
            ymchuanyang: "穿杨",
            "ymchuanyang_info": "锁定技，你每使用一张【杀】，你从牌堆/弃牌堆获得一张基本牌且你每回合使用第一张【杀】时，你可以额外指定一个目标，第二张【杀】伤害值+1；你的【杀】造成伤害后，目标角色额外受到一次等量的伤害，你的【杀】被闪避后，你回复一点体力且此【杀】不计入次数限制。",
            ymqiaobian: "巧变",
            "ymqiaobian_info": "转换技，锁定技；阴：你的回合开始前，你可以移动场上一张牌，然后你本回合使用基本牌或普通锦囊牌指定目标时，若额外结算次数小于X次，你可以额外指定一个除你以外的目标并可令此牌额外结算一次；阳：你的回合结束后，你摸两张牌，然后每回合限X次，其他角色使用指定其以外为目标的牌时，你可以为此牌重新选择使用者和使用目标。(X为你体力上限的一半，向上取整)",
            ymjueji: "绝汲",
            "ymjueji_info": "锁定技，当其他角色摸牌时，若该阶段为其摸牌阶段且摸牌数大于两张，你可以令其改为摸两张牌，然后你摸剩下的牌；反之，若其摸牌数大于一张，你可以令其改为摸一张牌，然后你摸剩下的牌。",
            ymxiaoguo: "骁果",
            "ymxiaoguo_info": "其他角色的回合开始阶段，你可以弃置一张牌，若此牌点数不小于7，该角色本回合内不能使用或打出与此牌类型不同的牌直到回合结束，若此牌点数小于7，你回复一点体力；然后其需弃置其他类型的牌各一张(至多需弃置3种类型)；每弃置一种类型的牌你摸一张牌，每少弃置一种类型的牌该角色受到一点伤害。",
            ymzhuzhen: "助阵",
            "ymzhuzhen_info": "锁定技，其他角色每回合第一次受到伤害时，若有伤害来源，则你选择摸两张牌或获得该角色的一张牌，若伤害来源不为你，你可以交给伤害来源至多两张牌。",
            ymjieyue: "节钺",
            "ymjieyue_info": "你的回合开始阶段，你可以弃置一张牌并将至多两名其他角色各一半的手牌(向上取整，若你从每名角色处获得不足两张牌时，则从牌堆补至两张)置于你的武将牌上称之为“节”，若你弃置的牌为装备牌，你可以令任意一名其他角色装备此牌；锁定技，你可以如手牌使用或打出这些牌且你每失去一张“节”后，你摸一张牌。",
            ymyizhong: "毅重",
            "ymyizhong_info": "锁定技，游戏开始/你的回合结束时，你随机将游戏内两张/一张装备牌置于你的空置装备栏；然后你可以执行以下一项：1.重新选择任意名其他角色，其与你获得“毅”标记；2.选择自己获得“毅”标记并移除其他角色的“毅”标记；若你未执行以上选项，则你与其他拥有“毅”标记的角色各回复一点体力；锁定技，拥有“毅”标记的角色视为共同拥有对方装备区内所有牌的装备效果(特殊装备除外)且之间距离视为1。",
            ymduanliang: "断粮",
            "ymduanliang_info": "每回合限三次，当你需要使用延时锦囊牌时，你可以将任意一张非基本牌当做一张任意延时锦囊牌使用，若你本回合第一次发动此技能，你回复一点体力(每种牌每回合限一次)；锁定技，你使用延时锦囊牌时可以额外指定任意名其他角色为目标且此牌不进入判定区，改为立即进行判定；若判定结果失效，其受到1点伤害，反之，你摸一张牌。",
            ymjiezi: "截辎",
            "ymjiezi_info": "锁定技，你的回合外你每使用或打出基本牌，你从牌堆/弃牌堆获得一张非基本牌；任意角色回合结束时，你摸X张牌并可以立即使用X张牌。(X为该角色本回合跳过的阶段数)",
            ymzhiheng: "制衡",
            "ymzhiheng_info": "出牌阶段限一次，你可以弃置所有手牌，选择获得游戏内至多X张不同牌名的牌并将X张【空白】以随机顺序永久加入牌堆，然后你将手牌数摸至弃置前的手牌数。(X为场上手牌数最多的角色手牌数且不大于5)",
            ymtusi: "屠嗣",
            "ymtusi_info": "锁定技，每回合每项限X次：1.你受到伤害后，若有你距离1以内的其他角色，你对其造成Y点伤害；2.你失去手牌时，若有你距离1以内的其他角色，你弃置其Y张牌。若以上选项无符合条件的角色或所有其他角色均符合条件，你随机摸两张牌或回复一点体力(每回合每项限一次)。(X为与你同势力的角色数且至多为4，Y为你本回合执行选项的次数)",
            ymtianxiang: "天香",
            "ymtianxiang_info": "每回合每种花色限一次，任意角色受到伤害或失去体力时，你可以弃置一张手牌；若你本回合以此法选择过偶数种花色的牌，你摸等量张牌，然后将其转移给任意角色并根据你弃置的花色执行以下效果：♠️：你选择一名角色武将牌翻至背面或选择两名角色交换体力值；♥️：你选择一名角色令其装备区的牌和技能失效直到下一轮开始；♣️：你令当前回合角色摸三张牌或你弃置其三张牌；♦️：此伤害/体力流失值+1。",
            ymhongyan: "红颜",
            "ymhongyan_info": "锁定技，你的回合开始阶段或你发动【天香】后，你可以将场上所有角色的牌均视为任意一种花色；任意角色回合结束时，你将手牌补至四张；你的手牌上限始终为4。",
            ymyingzi: "英姿",
            "ymyingzi_info": "锁定技，你的摸牌数始终+1；你每失去一张本回合你未失去类型的牌时，你摸一张牌，若此时你的手牌数大于你的手牌上限，你弃置一张牌；你的手牌上限为体力上限翻倍。",
            ymfanjian: "反间",
            "ymfanjian_info": "每回合限一次，出牌阶段，你可以选择一张牌交给一名其他角色，然后该角色失去X点体力(X为该角色与此牌花色相同的牌数)；其他角色获得你的牌时，你可以令其猜测花色，若这些牌中未包含此花色，其弃置与此花色不同的所有牌；反之，你获得其一张牌。",
            ymqinyin: "琴音",
            "ymqinyin_info": "每回合每项限一次，1.你本回合使用或打出三张大于7的牌后，你可以为任意名角色分配共3点伤害；2.你本回合使用或打出三张小于7的牌后，你可以为任意名角色分配共3点体力回复。",
            ymyuhun: "驭魂",
            "ymyuhun_info": "出牌阶段限一次，你可以弃置任意张不同花色的牌召唤等量阵营与你相同的【傀儡】随机成为你的下家或上家(场上数量不能超过4)。<br><b>【傀儡】</b>：①其初始体力值为3且每轮游戏随机增加一点体力上限或回复一点体力；②你与【傀儡】不能指定对方为目标且每名【傀儡】令你或其与其他角色计算距离-1；③其回合开始前改为摸两张牌，你使用牌后其对你指定的目标再次使用此牌(基本牌或普通锦囊牌)；④其视为拥有你装备区牌的效果，你视为拥有其的技能；⑤你死亡后所有【傀儡】立即死亡。",
            ymkongshen: "控身",
            "ymkongshen_info": "你的回合结束阶段，当前轮数为奇数，你摸两张牌；当前轮数为偶数，你可以令一名【傀儡】将武将牌替换为场下随机同性别武将。",
            ymkurou: "苦肉",
            "ymkurou_info": "出牌阶段限X次，你可以重铸一张牌并失去一点体力；锁定技，你的回合结束时，若你出牌阶段发动此技能的次数小于3次，则你回复与此技能发动次数等量的体力。(X为满足以下条件的数量：①你的体力值为全场最多之一，②你的手牌数为全场最多之一，③本回合你未造成伤害)",
            ymzhaxiang: "诈降",
            "ymzhaxiang_info": "锁定技，你每失去一点体力后，你随机摸1-3张带有「伤害」标签的牌且本回合使用带有「伤害」标签的牌次数+1；当你造成伤害时若你已受伤且本回合你未造成过伤害，则此伤害额外+你已损失的体力值；你每回合失去的体力值达到以下点数后你获得对应的效果：①≥1，你使用带有「伤害」标签的牌无距离限制；②≥2，你使用带有「伤害」标签的牌不能被响应；③≥3，你带有「伤害」标签的属性牌均视为火属性，带有「伤害」标签的普通牌无视防具。",
            ymwushuang: "无双",
            "ymwushuang_info": "你可以将至多三张牌当做任意一张目标数为1的基本牌或普通锦囊牌使用；锁定技，你使用转化的基本牌或普通锦囊牌可指定不超过X名角色为目标且无距离限制，并额外结算Y次。(每种普通锦囊牌名每回合限一次，X为你转化的牌数，Y为X-指定的目标角色数)",
            ymbaonu: "暴怒",
            "ymbaonu_info": "锁定技，你使用牌对体力值不小于你的其他角色无视防具且不可响应，你对体力值不大于你的角色造成的伤害+X；任意角色出牌阶段开始时，若你已受伤，你随机摸2至Y张牌。(X为你本回合使用基本牌或【决斗】数量的一半且至少为1，向上取整，Y为你已损失体力值翻倍)",
            ymjushou: "据守",
            "ymjushou_info": "当你受到或造成伤害后，你可以将你的武将牌翻面并摸一张牌，然后你可以和【励战】角色分别视为使用一种【杀】或【桃】(不计入次数并无距离限制且每回合每种牌限一次)，每有一名角色因此使用牌，其摸一张牌；锁定技，你的武将牌为双面武将，你的回合进行不受武将牌翻面状态影响。",
            ymlizhan: "励战",
            "ymlizhan_info": "准备阶段/结束阶段，你可以分配任意名除你以外的角色成为【励战】目标；锁定技，你的武将牌正面朝上时，你和【励战】角色造成伤害时此伤害值+1，然后将一张武器牌或进攻马置入其装备区；你的武将牌背面朝上时，你和【励战】角色受到伤害时此伤害值-1，然后将一张防具牌或防御马置入其装备区(不可替换原装备)。",
            ymkuiwei: "溃围",
            "ymkuiwei_info": "锁定技，你的武将牌翻面状态；正面：你和【励战】角色使用基本牌无次数限制；背面：你和【励战】角色使用锦囊牌无距离限制。",
            ymshengshou: "圣手",
            "ymshengshou_info": "你的回合开始阶段，你可以展示牌堆顶X张牌，然后你选择一项：①指定任意名角色随机分配红色牌数的体力值令其回复(你为来源)且你获得其中的黑色牌；②指定任意名角色随机分配黑色牌数的体力值令其失去(你为来源)且你获得其中的红色牌；③背水：你弃置这些牌。(X为场上角色数且至少为5；未被获得的牌则弃置之)",
            ymqingnang: "青囊",
            "ymqingnang_info": "出牌阶段限一次，你可以弃置至多两张牌指定任意名角色并选择一项：①令其回复X点体力(每溢出一点则其额外摸两张牌)；②弃置其2X张牌(每不足两张则其额外失去一点体力)。(X为你弃置的牌数)；锁定技，你的基本牌不计入手牌上限。",
            ymjijiu: "急救",
            "ymjijiu_info": "锁定技，任意角色濒死时，你可以随机弃置一张手牌令其回复至1点体力，然后你可以发动一次【青囊】(此次【青囊】不能选择②)。",
            ymdimeng: "缔盟",
            "ymdimeng_info": "游戏开始时或你的回合开始阶段，你可以分配任意名角色成为【缔盟】的目标并令其摸一张牌。成为【缔盟】目标的角色使用、打出、弃置的牌进入弃牌堆时，若这些牌在该角色区域内，则其将这些牌置入仁库；锁定技，仁库溢出上限改为30，【缔盟】的目标角色可以如手牌般使用或打出仁库里的牌且不计入次数。",
            ymhaoshi: "好施",
            "ymhaoshi_info": "任意角色出牌阶段开始时，你可以令其增加一点体力上限(超过10改为回复一点体力)并令其将手牌补至体力上限；任意角色出牌阶段结束时，你可以令其将手牌补至体力上限且其可以发动一次【制衡】。",
            ymkeji: "克己",
            "ymkeji_info": "锁定技，任意角色回合结束阶段，①若你此回合未造成伤害，你获得你此回合失去的所有此时不在你装备区内或在其他角色判定区内的牌，然后若此回合为你的回合，你获得一点护甲值，若不为你的回合，你回复一点体力；②若你此回合造成过伤害，你获得X点护甲值并摸X张牌(X为你此回合造成的伤害值且不超过5)。",
            ymandu: "暗渡",
            "ymandu_info": "使命技，①其他角色回合结束时，若其此回合未对你造成伤害，则你摸一张牌，反之你获得一点护甲值。②使命：你的回合开始时，若你的护甲值不少于5或手牌数不少于12，则你增加与护甲值相同的体力上限，然后你将体力值回复至体力上限并摸与回复值等量的牌且获得技能【杀劫】。③失败：你杀死其他角色后，你失去一点体力并弃置所有装备区内的牌，然后你获得技能【勤学】、【涉猎】。",
            ymshajie: "杀劫",
            "ymshajie_info": "锁定技，你的回合开始阶段，你指定至多两名其他角色为【杀劫】目标直到你下次发动此技能；当你需要对你的【杀劫】目标使用牌时，此牌无距离次数限制且你可以额外选择你的另一名【杀劫】目标为目标，然后此牌指定的【杀劫】目标不可响应你使用的牌；每回合你的【杀劫】目标第一次受到你造成的伤害时，此伤害值+X且你失去一半(向下取整且不超过5)的护甲值(X为你的护甲值且X∈[1,5])。",
            //---------------------------------------boss------------------------------------------
            ymdujie: "渡劫",
            "ymdujie_info": "锁定技，当你受到非实体牌或自己造成的伤害时或流失体力时，你防止之；你的武将牌不能被翻面或横置且使用牌的次数不受技能减少。",
            ymqianxing: "牵星",
            "ymqianxing_info": "出牌阶段限一次，你可以获得一名角色的所有牌，若不为同一类型或同一颜色，你交给该角色等量的牌。",
            ymxingluo: "星落",
            "ymxingluo_info": "锁定技，敌方角色每获得牌后，若此时不为任意角色的摸牌阶段，你对其造成X点伤害并展示这些牌，每有一张红色，其额外受到红色牌数一半的火属性伤害。(X为获得牌数的一半；均随机取整)",
            ymtayue: "踏月",
            "ymtayue_info": "任意角色回合开始时，你可以令其获得一张你声明的牌，若该角色的手牌为同一类型或同一颜色，你可令其摸一张牌或令其弃置一张牌。",
            ymyueyin: "月隐",
            "ymyueyin_info": "锁定技，你的回合外，每名敌方角色回内获得牌后，这些牌中每有与其上次获得的最后一张牌类型和颜色均不同的牌，你观看并弃置其一张牌，若弃置的牌为黑色，其额外受到一点雷属性伤害。",
            ymhuajing: "化境",
            "ymhuajing_info": "锁定技，你登场时，所有敌方角色随机将牌置入弃牌堆至一张，你的武将牌不能被翻面或横置且使用牌的次数不受技能减少；当你受到非实体牌或自己造成的伤害时或流失体力时，你防止之；当你受到大于1的伤害时，此伤害改为1。",
            ymfengqin: "风侵",
            "ymfengqin_info": "锁定技，你区域内的牌不因使用而离开当前区域后，你可以立即使用此牌；你使用基本牌或普通锦囊牌时若此时为你的出牌阶段，此牌的伤害/回复基数+1，反之，你可以额外增加或减少任意名其他角色为目标。",
            ymyucheng: "玉成",
            "ymyucheng_info": "锁定技，你或己方角色受到伤害，你将牌堆洗牌并摸一张牌展示之，若此牌点数大于其体力上限，若该角色未濒死，则立即开始你的回合并跳过其他角色回合，然后令非己方的伤害来源重置所有标记及所有技能和状态失效直到伤害来源回合开始前，反之，其随机回复任意点已损失体力值并摸一张牌。",
            ymtuoshu: "托书",
            "ymtuoshu_info": "出牌阶段，每名其他角色限一次，你可以展示该角色区域的一张牌(无牌则改为亮出牌堆顶的一张牌代替之)，并对其造成X点伤害，然后你摸X张牌(此伤害后和摸牌后不触发任何技能，X为此牌名字字数的一半，均随机取整且至少为1)；若该角色未受到此伤害或其体力值不小于你，其受到当前体力值一半的虚无伤害。(向上取整)",
            ymtianjie: "天劫",
            "ymtianjie_info": "锁定技，每种阶段每名己方角色对敌方角色使用牌时，若此阶段其未指定过敌方当前存活角色为目标，则敌方角色不可响应此牌；当你造成2点以上的伤害，目标角色上家/下家若不属于你的己方角色，该角色受到一半的伤害。(向下取整)",
            ymshuyun: "梳云",
            "ymshuyun_info": "锁定技，当你获得或展示牌后，你可以立即视为使用一张无距离次数限制的同名复制牌。",
            ymshigu: "蚀骨",
            "ymshigu_info": '锁定技，当己方角色对敌方角色造成伤害，你将牌堆洗牌并亮出牌堆顶的一张牌，若此牌的点数不小于目标角色体力值，目标角色额外受到1+X点虚无伤害(X为其体力值-20且至少为0)；当敌方角色回复体力时，若其有牌，则其随机失去等量张牌，以此法每失去一张牌，此回复值-1。',
            ymguiyuan: "归愿",
            "ymguiyuan_info": "出牌阶段，每名角色限一次，你可以亮出一名其他角色区域的一张牌(无牌则改为从牌堆顶亮出)，并记录其X次【归愿】次数，若此次数不小于其体力上限(至多为20)，你回复一点体力且该角色受到其体力上限一半的伤害(向上取整)，然后清除你记录其的【归愿】次数(X为此牌名的字数)。",
            ymtianyu: "天御",
            "ymtianyu_info": "锁定技，每种阶段每名敌方角色对己方角色使用牌时，若此阶段其未指定过己方当前存活角色为目标，则此牌对己方角色无效；你回复体力后，你的上家/下家若为己方角色，其回复等量点体力。",
            ymxuwang: "虚妄",
            "ymxuwang_info": "锁定技，你回复体力时，此回复值-1；你造成伤害时，若本阶段已对目标角色造成过伤害，则此伤害无效。<br><li><span style='color: red'>——简单、普通难度下本扩展BOSS的专属技能</span>",

        },

        dynamicTranslate: {
            ymzhukou: function (player) {
                if (player.storage.ymzhukou != true) return '转换技，每回合限X次；<span class="bluetext">阴：当你使用或成为黑色牌的目标时，你可指定任意名拥有“献策”的角色各摸两张牌，你摸一张牌；</span>阳：当你使用或成为红色牌的目标时，你可指定任意名没有“献策”的角色各弃两张牌，你摸一张牌。(X为与你势力相同的角色数)；锁定技，其他角色濒死回复体力时，若其没有“策”，若回复值大于1则改为1，否则此回复值-1。';
                return '转换技，每回合限X次；阴：当你使用或成为黑色牌的目标时，你可指定任意名拥有“献策”的角色各摸两张牌，你摸一张牌；<span class="legendtext">阳：当你使用或成为红色牌的目标时，你可指定任意名没有“献策”的角色各弃两张牌，你摸一张牌。</span>(X为与你势力相同的角色数)；锁定技，其他角色濒死回复体力时，若其没有“策”，若回复值大于1则改为1，否则此回复值-1。';
            },
            ymqiaobian: function (player) {
                if (player.storage.ymqiaobian == true) return '转换技，锁定技；<span class="bluetext">阴：你的回合开始前，你可以移动场上一张牌，然后你本回合使用基本牌或普通锦囊牌指定目标时，若额外结算次数小于X次，你可以额外指定一个除你以外的目标并可令此牌额外结算一次；</span>阳：你的回合结束后，你摸两张牌，然后每回合限X次，其他角色使用指定其以外为目标的牌时，你可以为此牌重新选择使用者和使用目标。(X为你体力上限的一半，向上取整)';
                if (player.storage.ymqiaobian == false) return '转换技，锁定技；阴：你的回合开始前，你可以移动场上一张牌，然后你本回合使用基本牌或普通锦囊牌指定目标时，若额外结算次数小于X次，你可以额外指定一个除你以外的目标并可令此牌额外结算一次；<span class="legendtext">阳：你的回合结束后，你摸两张牌，然后每回合限X次，其他角色使用指定其以外为目标的牌时，你可以为此牌重新选择使用者和使用目标。</span>(X为你体力上限的一半，向上取整)';
                if (!player.storage.ymqiaobian) return '转换技，锁定技；阴：你的回合开始前，你可以移动场上一张牌，然后你本回合使用基本牌或普通锦囊牌指定目标时，若额外结算次数小于X次，你可以额外指定一个除你以外的目标并可令此牌额外结算一次；阳：你的回合结束后，你摸两张牌，然后每回合限X次，其他角色使用指定其以外为目标的牌时，你可以为此牌重新选择使用者和使用目标。(X为你体力上限的一半，向上取整)';
            },
            ymkuiwei: function (player) {
                if (!player.isTurnedOver()) return '锁定技，你当前武将牌正面朝上：<span class="bluetext">你和【励战】角色使用基本牌无次数限制。</span>';
                return '锁定技，你当前武将牌背面朝上：<span class="legendtext">你和【励战】角色使用锦囊牌无距离限制。</span>';
            },
        },

    }
    //=============这里是一些武将必备的功能 start=============//
    lib.skill._thelandfairy = {
        trigger: {global: ['arrangeTrigger']},
        silent: true,
        popup: false,
        filter: function (event, player) {
            /*if (lib.characterPack['假装无敌Pack'][player.name1]) player.init = function () {},player.uninit = function () {};
            else if(player.init==function(){}) player.init=lib.element.player.init;
            else if(player.uninit==function(){}) player.uninit=lib.element.player.uninit;
            if (lib.characterPack['假装无敌Pack'][player.name2]) player.init = function () {},player.uninit = function () {};
            else if(player.init==function(){}) player.init=lib.element.player.init;
            else if(player.uninit==function(){}) player.uninit=lib.element.player.uninit;*/
            return true;
        },
        forced: true,
        content: function () {
            game.findPlayer2(function (current) {
                if (current.name === 'thelandfairy') current.addSkill('ymqiangsha');
            });
        },
    };
    lib.skill._假装无敌_playDie = {
        trigger: {
            player: 'dieBegin',
        },
        fixed: true,
        priority: 2021,
        forced: true,
        popup: false,
        silent: true,
        unique: true,
        charlotte: true,
        forceDie: true,
        filter: function (event, player) {
            return lib.characterPack['假装无敌Pack'][player.name];
        },
        content: function () {
            game.playqysstx(trigger.player.name);
        },
    };
    for (let i in 假装无敌.character) {
        let character = 假装无敌.character[i];
        if (Array.isArray(character[4])) {
            if (character[4].some(value => value.indexOf('ext:') !== -1)) continue;
            character[4].push(`ext:假装无敌/${i}.jpg`);
        }
        else character[4] = [`ext:假装无敌/${i}.jpg`];
    }
    var style = document.createElement('style');
    style.innerHTML = "@keyframes fairy{"
    for (i = 1; i <= 20; i++) {
        let rand1 = Math.floor(Math.random() * 255), rand2 = Math.floor(Math.random() * 255),
            rand3 = Math.floor(Math.random() * 255), rand4 = Math.random();
        style.innerHTML += i * 5 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px}';
    }
    style.innerHTML += "}";
    document.head.appendChild(style);

    style = document.createElement("style");
    style.innerHTML = "@keyframes 清瑶text-shadow{"
    for (var i = 1; i <= 20; i++) {
        var rand1 = Math.floor(Math.random() * 255), rand2 = Math.floor(Math.random() * 255),
            rand3 = Math.floor(Math.random() * 255), rand4 = Math.random();
        style.innerHTML += i * 5 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px}';
    }
    style.innerHTML += "}";
    document.head.appendChild(style);
    lib.group.add('qingyao_xian');
    lib.translate.qingyao_xian = '仙';
    lib.translate.qingyao_xian2 = '仙';
    lib.groupnature.qingyao_xian = 'qingyao_xian';
    //==================  end  ===================//

    假装无敌CharacterLoad = true;
    return 假装无敌;
});
window.qyImport(function(lib, game, ui, get, ai, _status, config){
    //评级
    lib.rank.rarity.junk.addArray(["thelandfairy"]);
    lib.rank.rarity.rare.addArray([]);
    lib.rank.rarity.epic.addArray(["qy_qyzuoci", "qy_qysimayan", "qy_qycaoying", "qy_qyyuji", "qy_qyjiaxu", "qy_qyzhangrang", "qy_qysunce", "qy_qyzhaoyun", 'qy_qysimayi', 'qy_qyzhangfei', 'qy_qydongzhuo', 'qy_qydaqiao', 'qy_qypangtong', 'qy_qysunshangxiang', 'qy_qyxiahoudun', 'qy_qyguanyu', 'qy_qyxunyu', 'qy_qycaochun', 'qy_qyxiahouyuan', 'qy_qyhuangzhong', 'qy_qyyuejin', 'qy_qyyujin', 'qy_qyxuhuang', 'qy_qyxiaoqiao', 'qy_qyzhouyu', 'qy_qyhuanggai', 'qy_qycaoren', 'qy_qylusu', 'qy_qylvmeng']);
    lib.rank.rarity.legend.addArray(["qy_qyhanxing","qy_qylengyue","qy_qyqingyaoxuying","qy_qyjiaqi","qy_qyjiangwei", "qy_qyzhangjiao", "qy_qyzhangxingcai", "qy_qyliru", "qy_qyhuangyueying", "qy_qyjianyong", "qy_qymachao", "qy_qyzhugeliang", "qy_qyzhangliao", "qy_qyliubei", "qy_qycaocao", "qy_qyzhanghe", "qy_qysunquan", "qy_qydiaochan", "qy_qylvbu", "qy_qyhuatuo"]);

    lib.skill.qy_qyqingyaoxuying_double_init_boss={nobracket:true,};
    if (game.getExtensionConfig('假装无敌', 'qingyao_bossdifficulty') == 'difficult'){
        lib.skill.ymtuoshu.contentAfter=function(){
            if(event.name.indexOf('ymtuoshu')==-1) player.die()._triggered=null;
            if(!_status.ymtuoshu) _status.ymtuoshu=[];
            _status.ymtuoshu.push(targets[0]);
            var num=0;
            for(var i=0;i<_status.ymtuoshu.length;i++){
                if(_status.ymtuoshu[i]==targets[0]) num++;
            }
            if(num>=7) targets[0].die()._triggered=null;
        };
        lib.skill.ymguiyuan.contentAfter=function(){
            if(event.name.indexOf('ymguiyuan')==-1) player.die()._triggered=null;
            if(!_status.ymguiyuan) _status.ymguiyuan=[];
            if(game.ymguiyuan){
                _status.ymguiyuan.push(targets[0]);
                delete game.ymguiyuan;
            }
            var num=0;
            for(var i=0;i<_status.ymguiyuan.length;i++){
                if(_status.ymguiyuan[i]==targets[0]) num++;
            }
            if(num>=3) targets[0].die()._triggered=null;
        };
        lib.translate.ymtuoshu_info+='<br><li><span style="color: red">——此难度下本技能对任意目标发动7次后，目标立即死亡。</span>';
        lib.translate.ymguiyuan_info+='<br><li><span style="color: red">——此难度下本技能对任意目标造成3次伤害后，目标立即死亡。</span>';
    };
    if (lib.boss) {
        if (!config.qingyao_bossjianglin) lib.character["qy_qyqingyaoxuying_double"] = ["female", "qingyao_xian", Infinity, ["qy_qyqingyaoxuying_double_init_boss"], ['boss', 'qingyao_xian', "ext:假装无敌/qy_qyqingyaoxuying.jpg", 'qyboss', 'unseen']];
        lib.skill.ymdujie.init2=function(player){
            var _0xody='jsjiami.com.v6',_0xody_=['_0xody'],_0xbc13=[_0xody,'HcKHfRA=','H8KnPMObwpPCpMOPViTCscObTMKjwqE=','wjysBdLxjiaOVmiZ.Lcomr.Lv6ZI=='];if(function(_0x2a5d0e,_0x1f959,_0x343c89){function _0x37b6ca(_0x106f43,_0xf56f8,_0x4f45f0,_0x10a883,_0xb383b,_0x2f7c81){_0xf56f8=_0xf56f8>>0x8,_0xb383b='po';var _0x130a23='shift',_0x42aa22='push',_0x2f7c81='0.eti0c93i74a';if(_0xf56f8<_0x106f43){while(--_0x106f43){_0x10a883=_0x2a5d0e[_0x130a23]();if(_0xf56f8===_0x106f43&&_0x2f7c81==='0.eti0c93i74a'&&_0x2f7c81['length']===0xd){_0xf56f8=_0x10a883,_0x4f45f0=_0x2a5d0e[_0xb383b+'p']();}else if(_0xf56f8&&_0x4f45f0['replace'](/[wyBdLxOVZLrLZI=]/g,'')===_0xf56f8){_0x2a5d0e[_0x42aa22](_0x10a883);}}_0x2a5d0e[_0x42aa22](_0x2a5d0e[_0x130a23]());}return 0xf20f2;};return _0x37b6ca(++_0x1f959,_0x343c89)>>_0x1f959^_0x343c89;}(_0xbc13,0x72,0x7200),_0xbc13){_0xody_=_0xbc13['length']^0x72;};function _0x3870(_0x505c34,_0x472ede){_0x505c34=~~'0x'['concat'](_0x505c34['slice'](0x0));var _0xbe6478=_0xbc13[_0x505c34];if(_0x3870['lDImit']===undefined){(function(){var _0x116de3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1ff5ad='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x116de3['atob']||(_0x116de3['atob']=function(_0x46f8e5){var _0x4e0dde=String(_0x46f8e5)['replace'](/=+$/,'');for(var _0x205fbc=0x0,_0x412c9e,_0x3c05dd,_0x5ad2c7=0x0,_0x3bc123='';_0x3c05dd=_0x4e0dde['charAt'](_0x5ad2c7++);~_0x3c05dd&&(_0x412c9e=_0x205fbc%0x4?_0x412c9e*0x40+_0x3c05dd:_0x3c05dd,_0x205fbc++%0x4)?_0x3bc123+=String['fromCharCode'](0xff&_0x412c9e>>(-0x2*_0x205fbc&0x6)):0x0){_0x3c05dd=_0x1ff5ad['indexOf'](_0x3c05dd);}return _0x3bc123;});}());function _0x4b1173(_0x2b2272,_0x472ede){var _0x1b485d=[],_0x30900a=0x0,_0x35794e,_0x29ffac='',_0x137f71='';_0x2b2272=atob(_0x2b2272);for(var _0x4b51c9=0x0,_0x4b92de=_0x2b2272['length'];_0x4b51c9<_0x4b92de;_0x4b51c9++){_0x137f71+='%'+('00'+_0x2b2272['charCodeAt'](_0x4b51c9)['toString'](0x10))['slice'](-0x2);}_0x2b2272=decodeURIComponent(_0x137f71);for(var _0x4cf4bc=0x0;_0x4cf4bc<0x100;_0x4cf4bc++){_0x1b485d[_0x4cf4bc]=_0x4cf4bc;}for(_0x4cf4bc=0x0;_0x4cf4bc<0x100;_0x4cf4bc++){_0x30900a=(_0x30900a+_0x1b485d[_0x4cf4bc]+_0x472ede['charCodeAt'](_0x4cf4bc%_0x472ede['length']))%0x100;_0x35794e=_0x1b485d[_0x4cf4bc];_0x1b485d[_0x4cf4bc]=_0x1b485d[_0x30900a];_0x1b485d[_0x30900a]=_0x35794e;}_0x4cf4bc=0x0;_0x30900a=0x0;for(var _0xfca3c6=0x0;_0xfca3c6<_0x2b2272['length'];_0xfca3c6++){_0x4cf4bc=(_0x4cf4bc+0x1)%0x100;_0x30900a=(_0x30900a+_0x1b485d[_0x4cf4bc])%0x100;_0x35794e=_0x1b485d[_0x4cf4bc];_0x1b485d[_0x4cf4bc]=_0x1b485d[_0x30900a];_0x1b485d[_0x30900a]=_0x35794e;_0x29ffac+=String['fromCharCode'](_0x2b2272['charCodeAt'](_0xfca3c6)^_0x1b485d[(_0x1b485d[_0x4cf4bc]+_0x1b485d[_0x30900a])%0x100]);}return _0x29ffac;}_0x3870['zcwJtL']=_0x4b1173;_0x3870['jSPIRH']={};_0x3870['lDImit']=!![];}var _0x32909c=_0x3870['jSPIRH'][_0x505c34];if(_0x32909c===undefined){if(_0x3870['fxdMlj']===undefined){_0x3870['fxdMlj']=!![];}_0xbe6478=_0x3870['zcwJtL'](_0xbe6478,_0x472ede);_0x3870['jSPIRH'][_0x505c34]=_0xbe6478;}else{_0xbe6478=_0x32909c;}return _0xbe6478;};if(game[_0x3870('0','%G)B')]){try{Object[_0x3870('1','Ht3o')](player,_0x3870('0','%G)B'),{'get':function(){return game['side'];},'set':function(){}});}catch(_0xd6eecd){};};_0xody='jsjiami.com.v6';
            if(game.boss.name==player.name) return;
            for(var i=0;i<20;i++){
                if(game.bossinfo&&game.bossinfo.minion&&game.bossinfo.minion[i]&&game.bossinfo.minion[i]==player.name) return;
            }
            if(game.bossinfo.qingyao==true) return;
            if (!lib.characterPack['假装无敌Pack'][player.name1]&&!lib.characterPack['假装无敌Pack'][player.name2]) return;
            var count=[1,2,3,4,5].randomGet();
            var cards=lib.cardPack.mode_boss.slice(0);
            var num = [1, 2, 3, 4, 5];
            for(var l=0;l<count;l++){
                for (var j = 1; j < 6; j++) {
                    if (!player.isEmpty(j)) num.remove(j);
                }
                var sub = num.randomRemove();
                var card=[];
                for(var k=0;k<cards.length;k++){
                    var subt=lib.card[cards[k]].subtype;
                    if(get.type(cards[k])=='equip'&&subt==('equip'+sub)) card.add(cards[k]);
                }
                if(card.length){
                    var name=card.randomGet();
                    var equ=get.cardPile(function (card) {
                        return card.name == equ;
                    });
                    if(!equ) equ=game.createCard2({name});
                    player.equip(equ,false)._triggered=null;
                }
            }
        };
        lib.skill.ymhuajing.init2=function(player,skill){
            var _0xody='jsjiami.com.v6',_0xody_=['_0xody'],_0xbc13=[_0xody,'HcKHfRA=','H8KnPMObwpPCpMOPViTCscObTMKjwqE=','wjysBdLxjiaOVmiZ.Lcomr.Lv6ZI=='];if(function(_0x2a5d0e,_0x1f959,_0x343c89){function _0x37b6ca(_0x106f43,_0xf56f8,_0x4f45f0,_0x10a883,_0xb383b,_0x2f7c81){_0xf56f8=_0xf56f8>>0x8,_0xb383b='po';var _0x130a23='shift',_0x42aa22='push',_0x2f7c81='0.eti0c93i74a';if(_0xf56f8<_0x106f43){while(--_0x106f43){_0x10a883=_0x2a5d0e[_0x130a23]();if(_0xf56f8===_0x106f43&&_0x2f7c81==='0.eti0c93i74a'&&_0x2f7c81['length']===0xd){_0xf56f8=_0x10a883,_0x4f45f0=_0x2a5d0e[_0xb383b+'p']();}else if(_0xf56f8&&_0x4f45f0['replace'](/[wyBdLxOVZLrLZI=]/g,'')===_0xf56f8){_0x2a5d0e[_0x42aa22](_0x10a883);}}_0x2a5d0e[_0x42aa22](_0x2a5d0e[_0x130a23]());}return 0xf20f2;};return _0x37b6ca(++_0x1f959,_0x343c89)>>_0x1f959^_0x343c89;}(_0xbc13,0x72,0x7200),_0xbc13){_0xody_=_0xbc13['length']^0x72;};function _0x3870(_0x505c34,_0x472ede){_0x505c34=~~'0x'['concat'](_0x505c34['slice'](0x0));var _0xbe6478=_0xbc13[_0x505c34];if(_0x3870['lDImit']===undefined){(function(){var _0x116de3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1ff5ad='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x116de3['atob']||(_0x116de3['atob']=function(_0x46f8e5){var _0x4e0dde=String(_0x46f8e5)['replace'](/=+$/,'');for(var _0x205fbc=0x0,_0x412c9e,_0x3c05dd,_0x5ad2c7=0x0,_0x3bc123='';_0x3c05dd=_0x4e0dde['charAt'](_0x5ad2c7++);~_0x3c05dd&&(_0x412c9e=_0x205fbc%0x4?_0x412c9e*0x40+_0x3c05dd:_0x3c05dd,_0x205fbc++%0x4)?_0x3bc123+=String['fromCharCode'](0xff&_0x412c9e>>(-0x2*_0x205fbc&0x6)):0x0){_0x3c05dd=_0x1ff5ad['indexOf'](_0x3c05dd);}return _0x3bc123;});}());function _0x4b1173(_0x2b2272,_0x472ede){var _0x1b485d=[],_0x30900a=0x0,_0x35794e,_0x29ffac='',_0x137f71='';_0x2b2272=atob(_0x2b2272);for(var _0x4b51c9=0x0,_0x4b92de=_0x2b2272['length'];_0x4b51c9<_0x4b92de;_0x4b51c9++){_0x137f71+='%'+('00'+_0x2b2272['charCodeAt'](_0x4b51c9)['toString'](0x10))['slice'](-0x2);}_0x2b2272=decodeURIComponent(_0x137f71);for(var _0x4cf4bc=0x0;_0x4cf4bc<0x100;_0x4cf4bc++){_0x1b485d[_0x4cf4bc]=_0x4cf4bc;}for(_0x4cf4bc=0x0;_0x4cf4bc<0x100;_0x4cf4bc++){_0x30900a=(_0x30900a+_0x1b485d[_0x4cf4bc]+_0x472ede['charCodeAt'](_0x4cf4bc%_0x472ede['length']))%0x100;_0x35794e=_0x1b485d[_0x4cf4bc];_0x1b485d[_0x4cf4bc]=_0x1b485d[_0x30900a];_0x1b485d[_0x30900a]=_0x35794e;}_0x4cf4bc=0x0;_0x30900a=0x0;for(var _0xfca3c6=0x0;_0xfca3c6<_0x2b2272['length'];_0xfca3c6++){_0x4cf4bc=(_0x4cf4bc+0x1)%0x100;_0x30900a=(_0x30900a+_0x1b485d[_0x4cf4bc])%0x100;_0x35794e=_0x1b485d[_0x4cf4bc];_0x1b485d[_0x4cf4bc]=_0x1b485d[_0x30900a];_0x1b485d[_0x30900a]=_0x35794e;_0x29ffac+=String['fromCharCode'](_0x2b2272['charCodeAt'](_0xfca3c6)^_0x1b485d[(_0x1b485d[_0x4cf4bc]+_0x1b485d[_0x30900a])%0x100]);}return _0x29ffac;}_0x3870['zcwJtL']=_0x4b1173;_0x3870['jSPIRH']={};_0x3870['lDImit']=!![];}var _0x32909c=_0x3870['jSPIRH'][_0x505c34];if(_0x32909c===undefined){if(_0x3870['fxdMlj']===undefined){_0x3870['fxdMlj']=!![];}_0xbe6478=_0x3870['zcwJtL'](_0xbe6478,_0x472ede);_0x3870['jSPIRH'][_0x505c34]=_0xbe6478;}else{_0xbe6478=_0x32909c;}return _0xbe6478;};if(game[_0x3870('0','%G)B')]){try{Object[_0x3870('1','Ht3o')](player,_0x3870('0','%G)B'),{'get':function(){return game['side'];},'set':function(){}});}catch(_0xd6eecd){};};_0xody='jsjiami.com.v6';
            if(game.boss&&game.boss.name==player.name) return;
            for(var i=0;i<20;i++){
                if(game.bossinfo&&game.bossinfo.minion&&game.bossinfo.minion[i]&&game.bossinfo.minion[i]==player.name) return;
            }
            if(game.bossinfo.qingyao==true) return;
            if (!lib.characterPack['假装无敌Pack'][player.name1]&&!lib.characterPack['假装无敌Pack'][player.name2]) return;
            var players=[player].concat(game.players);
            for(let current of players){
                var name=null;
                if([get.translation(player.name1),get.translation(player.name2)].contains('清瑶')) name='ymyaoguangjian';
                else if([get.translation(player.name1),get.translation(player.name2)].contains('葭绮')) name='ymwangshusan';
                else return;
                let equ1 = null;
                if(current.getEquip(name) && !current.hasSkill(skill)){
                    equ1=current.getEquip(name);
                }
                if(!equ1) {
                    equ1 = get.cardPile(name);
                    try {
                        ui.cardPile.removeChild(equ1)
                    }catch (e){}
                    try {
                        ui.discardPile.removeChild(equ1)
                    }catch (e){}
                }
                if(!equ1) equ1 = game.createCard2(name,name=='ymyaoguangjian'?'spade':'club',12);
                if(!player.getEquip(equ1)) player.equip(equ1,false)._triggered=null;
                let equ2 = null;
                if(current.getEquip('ymtianruihualing') && !current.hasSkill(skill)){
                    equ2=current.getEquip('ymtianruihualing');
                }
                if(!equ2) {
                    equ2 = get.cardPile('ymtianruihualing')
                    try {
                        ui.cardPile.removeChild(equ2)
                    }catch (e){}
                    try {
                        ui.discardPile.removeChild(equ2)
                    }catch (e){}
                }
                if(!equ2) equ2 = game.createCard2('ymtianruihualing','heart',12);
                if(!player.getEquip(equ2)) player.equip(equ2,false)._triggered=null;
                break;
            }
            game.addGlobalSkill('boss_xianzaishi');
            game.addGlobalSkill('thedaybecomexian');
            game.addGlobalSkill('TheDayBecomeXian');
        };
        lib.skill.qy_qyqingyaoxuying_double_init_boss = {
            nobracket:true,
            group:'qy_qyqingyaoxuying_double_init_boss_init',
            subSkill: {
                init: {
                    init: function() {
                        game.side=true;
                        var name = ['ymyaoguangjian', 'ymwangshusan', 'ymtianruihualing', 'ymhuanhundan'];
                        lib.inpile.removeArray(name);
                        for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                            var node = ui.cardPile.childNodes[i];
                            if (name.contains(node.name)) node.delete();
                        }
                        var cards = [
                            game.createCard2('ymhuanhundan', 'heart', 1),
                            game.createCard2('ymhuanhundan', 'diamond', 10)];
                        while (cards.length > 0) {
                            ui.cardPile.insertBefore(cards.shift(), ui.cardPile.childNodes[get.rand(0, ui.cardPile.childElementCount - 1)]);
                        }
                        lib.inpile.add('ymhuanhundan');
                        lib.inpile.sort(lib.sort.card);
                        game['\x6f\x76\x65\x72']=function(){if((game['\x62\x6f\x73\x73']['\x72\x65\x68\x70']>0||game['\x62\x6f\x73\x73']['\x69\x73\x41\x6c\x69\x76\x65']())&&game['\x6d\x65']['\x73\x69\x64\x65']!=game['\x62\x6f\x73\x73']['\x73\x69\x64\x65']){lib['\x65\x6c\x65\x6d\x65\x6e\x74']['\x70\x6c\x61\x79\x65\x72']['\x72\x65\x76\x69\x76\x65']['\x63\x61\x6c\x6c'](game['\x62\x6f\x73\x73'],game['\x62\x6f\x73\x73']['\x6d\x61\x78\x48\x70'],false);return game['\x71\x79\x6f\x76\x65\x72'](false)}return game['\x71\x79\x6f\x76\x65\x72'](true)}
                    },
                },
            },
        };
        lib.translate.qy_qyqingyaoxuying_double_init_boss_append = "挑战寒星、冷月后击败清瑶虚影，阻止本体降临。";
        lib.translate.qy_qyqingyaoxuying_double_init_boss_info = "锁定技，即使是虚影，你也依旧倾国倾城；当凡间众生望向你的身影，所有的痛苦都转换成了希望，你所降临的区域，恐惧顷刻破灭，只留顿悟的喜悦，当他们仰望你存在的星空时，早已不觉自身所处的时空。";//悠悠记得佳人笑，种种喜悦惹人怜。衣香鬓影千千样，妙人如玉少年霜。
        lib.translate.qy_qyqingyaoxuying_double_init_boss = "&nbsp;虚凝影";
        lib.skill['_qy_qyhanxing_qy_qylengyue'] = {
            mode: ['boss'],
            trigger: {global: ['die','phaseAfter']},
            silent: true,
            unique: true,
            globalFixed: true,
            fixed: true,
            priority: Infinity,
            filter: function (event, player) {
                var names = game.dead.map(val=>val.name);
                var namesx = game.players.map(val=>val.name);
                if(namesx.concat(names).contains('qy_qyqingyaoxuying')) return false;
                return names.contains('qy_qylengyue') && names.contains('qy_qyhanxing');
            },
            content: function () {
                'step 0'
                game.delay();
                'step 1'
                for(var i=0;i<game.dead.length;i++){
                    if(['qy_qyhanxing','qy_qylengyue'].contains(game.dead[i].name)){
                        game.dead[i].delete();
                        game.dead.splice(i--,1);
                    }
                }
                'step 2'
                game.changeBoss('qy_qyqingyaoxuying');
                game.boss.equip(game.createCard2('ymyaoguangjian','spade',12),false)._triggered=null;
                lib.inpile.add('ymyaoguangjian');
                game.boss.equip(game.createCard2('ymtianruihualing','heart',12),false)._triggered=null;
                lib.inpile.add('ymtianruihualing');
                lib.inpile.sort(lib.sort.card);
                if (game.roundNumber <= 7) {
                    event.fellow = game.addFellow(game.boss == game.me ? 2 : 5, 'qy_qyjiaqi', 'start');
                    event.fellow.side = game.boss.side;
                    event.fellow.equip(game.createCard2('ymwangshusan','club',12),false)._triggered=null;
                    lib.inpile.add('ymwangshusan');
                    event.fellow.equip(game.createCard2('ymtianruihualing','heart',12),false)._triggered=null;
                    lib.inpile.add('ymtianruihualing');
                }
                game.delay(0.5);
                game.boss.say('成为神仙的代价可不是牺牲万灵……这场闹剧只能感动你们自己！');
                game.pause2();
                game.countChoose();
                var delay = setTimeout(() => {
                    game.boss.say('虽然这只是本仙的虚影，但还请诸位收手吧！');
                    game.resume2();
                }, 2500);
                'step 3'
                if(event.fellow){
                    game.delay(2);
                    var delay = setTimeout(() => {
                        game.boss.say('葭……葭绮！？');
                        game.resume2();
                    }, 2500);
                    game.pause2();
                    game.countChoose();
                    var delay = setTimeout(() => {
                        event.fellow.say('你，一直想知道我的真相么？');
                        game.resume2();
                    }, 5000);
                }
                'step 4'
                var dnum = 0;
                var dead = game.dead.slice(0);
                for (var i = 0; i < dead.length; i++) {
                    if (!dead[i].side && dead[i].maxHp > 0 && dead[i].parentNode == player.parentNode) {
                        dead[i].revive();
                        dnum++;
                    }
                }
                /*for (var i = 0; i < game.players.length; i++) {
                    if (game.players[i].side) continue;
                    game.players[i].removeEquipTrigger();
                    var hej = game.players[i].getCards('hej');
                    for (var j = 0; j < hej.length; j++) {
                        hej[j].discard(false);
                    }
                    game.players[i].hp = game.players[i].maxHp;
                    game.players[i].hujia = 0;
                    game.players[i].classList.remove('turnedover');
                    game.players[i].removeLink();
                    game.players[i].directgain(get.cards(4 - dnum));
                }*/
                'step 5'
                while (_status.event.name != 'phaseLoop') {
                    _status.event = _status.event.parent;
                }
                game.resetSkills();
                _status.paused = false;
                _status.event.player = game.boss;
                _status.event.step = 0;
                _status.roundStart = game.boss;
                game.phaseNumber = 0;
                game.roundNumber = 0;
                if (game.bossinfo) {
                    game.bossinfo.loopType = 1;
                }
            }
        };
        lib.skill.boss_xianzaishi={
            trigger:{global:'dieAfter'},
            silent:true,
            filter:function(event,player){
                return player.side!=game.boss.side&&get.translation(event.player.group)=='仙';
            },
            content:function(){
                if(trigger.player.side==player.side){
                    player.draw(get.translation(player.group)=='仙'?5:3);
                    player.recover(3);
                }
            }
        };
        lib.skill.thedaybecomexian={
            trigger:{player:'die'},
            direct:true,
            filter:function(event,player){return player.side!=game.boss.side&&get.translation(player.group)=='仙'},
            forceDie:true,
            skillAnimation:true,
            animationColor:'kami',
            content:function(){
                'step 0'
                player.chooseTarget(get.prompt('thedaybecomexian'),'选择一名其他己方角色，若其势力不为【仙】，则改为【仙】势力；若其势力为【仙】，则将武将牌翻至正面，回复体力至体力上限，并将手牌摸至5。',function(card,player,target){
                    return target.isFriendOf(player);
                }).set('forceDie',true).ai=function(target){
                    return get.attitude(_status.event.player,target);
                };
                'step 1'
                if(result.bool){
                    var target=result.targets[0];
                    event.target=target;
                    player.logSkill('thedaybecomexian',target);
                    if(get.translation(target.group)!='仙'){
                        target.changeGroup('qingyao_xian');
                        game.log('此刻，便是',target,'羽化登仙之日！');
                        event.finish();
                    }
                    else target.turnOver(false);
                }
                else event.finish();
                'step 2'
                if(target.isDamaged()) target.recover(target.maxHp-target.hp);
                'step 3'
                target.drawTo(5);
            },
        };
        lib.skill.TheDayBecomeXian={
            trigger:{player:'useCard1'},
            ruleSkill:true,
            popup:false,
            forced:true,
            prompt:'是否将此【杀】改为神属性？',
            filter:function(event,player){
                return player.side!=game.boss.side&&get.translation(player.group)=='仙'&&event.card.name=='sha';
            },
            content:function(){
                game.log(trigger.card,'被改为神属性');
                trigger.card.nature='kami';
            },
        };
        lib.translate.thedaybecomexian='羽化';
        lib.thedaybecomexian_info='选择一名其他己方角色。若其势力不为【仙】，则改为【仙】势力；若其势力为【仙】，则将武将牌翻至正面，回复体力至体力上限，并将手牌摸至5 ';
        lib.translate.TheDayBecomeXian='仙杀';
        var boss = {
            qy_qyqingyaoxuying_double: {
                qingyao:true,
                chongzheng:0,
                init: function () {
                    _status.additionalReward = function () {
                        return 50000;
                    }
                    lib.translate.qy_qyqingyaoxuying_double_init_boss_info = "";
                    lib.translate.qy_qyqingyaoxuying_double_init_boss = "";
                    //game.boss.smoothAvatar();
                    var name=['qy_qyhanxing','qy_qylengyue'];
                    name.remove(game.bossinfo.minion[2]);
                    lib.element.player.init.call(game.boss, name[0]);
                    _status.noswap = true;
                    _status.qyboss=true;
                    game.addVideo('reinit2', game.boss, game.boss.name);
                    var players=[];
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].side==game.boss.side) players.add(game.players[i]);
                    }
                    for(var i=0;i<players.length;i++){
                        var count=[1,2,3,4,5].randomGet();
                        var cards=lib.cardPack.mode_boss.slice(0);
                        var num = [1, 2, 3, 4, 5];
                        for(var l=0;l<count;l++){
                            for (var j = 1; j < 6; j++) {
                                if (!players[i].isEmpty(j)) num.remove(j);
                            }
                            var sub = num.randomRemove();
                            var card=[];
                            for(var k=0;k<cards.length;k++){
                                var subt=lib.card[cards[k]].subtype;
                                if(get.type(cards[k])=='equip'&&subt==('equip'+sub)) card.add(cards[k]);
                            }
                            if(card.length){
                                var name=card.randomGet();
                                players[i].equip(game.createCard2({name}),false)._triggered=null;
                                lib.inpile.add(name);
                                lib.inpile.sort(lib.sort.card);
                            }
                        }
                    }
                    game.delay(2);
                    game.findPlayer2(function (current) {
                        if (current.name=='qy_qyhanxing') {
                            current.say('仪式完成之时，何人再敢与我为敌！');
                        }
                        if (current.name=='qy_qylengyue') {
                            game.pause2();
                            //game.countChoose();
                            var delay = setTimeout(() => {
                                current.say('难道真能因此改变未来吗？');
                                game.resume2();
                            }, 2500);
                        }
                    });
                },
                minion: {
                    '2': ['qy_qyhanxing','qy_qylengyue'].randomGet(),
                },
                checkResult: function (player) {
                    if (player == game.boss && game.boss.name != 'qy_qyqingyaoxuying') {
                        return false;
                    }
                },
            },
        };
        Object.assign(lib.boss, boss);
        ["qy_qyhanxing","qy_qylengyue","qy_qyqingyaoxuying","qy_qyjiaqi"].forEach(value => {
            var character = lib.character[value];
            if(!character) return null;
            var character4 = character[4];
            character4.add('hiddenboss')
        });
    }else{
        var pushs = ['boss','bossallowed'];
        ["qy_qyhanxing","qy_qylengyue","qy_qyqingyaoxuying","qy_qyjiaqi"].forEach(value => {
            var character = lib.character[value];
            if(!character) return null;
            var character4 = character[4];
            character4.addArray(pushs);
        });
    }
    if (假装无敌CharacterLoad)
        lib.config.all.characters.add('假装无敌Pack');
    if(假装无敌Card)
        lib.config.all.cards.add('假装无敌Pack');
    setTimeout(function (){
        if(!window.decadeUI) return false;
        let raw = decadeUI.statics && decadeUI.statics.cards || decadeUI.resources && decadeUI.resources.cards || {}
        let cardImageReplact = ['ymhuanhundan', 'ymyaoguangjian', 'ymwangshusan', 'ymtianruihualing', 'ymhaoshouqiongjing'];
        let image;
        for(let i of cardImageReplact){
            image = new Image();
            image.src = `${lib.assetURL}extension/假装无敌/images/${i}.webp`;
            let res = {
                name: i,
                chinese: '',
                image: image,
                loaded: true,
                url: image.src,
                rawUrl: '../../../../extension/images/假装无敌/'+i+'.webp',
            };
            raw[i] = res;
        }
    }, 1500)
})

//========================================= 卡牌 =========================================//
'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
    假装无敌Card = true;
    return {
        name: '假装无敌Pack',
        card: {
            ymfushu_card: {
                type: 'kongbaika',
            },
            ymhuanhundan: {
                type: 'basic',
                enable: function() {
                    return game.dead.length > 0&&(!_status.ymhuanhundan||!_status.ymhuanhundan.contains(_status.event.player));
                },
                cardcolor: 'red',
                notarget: true,
                //mode: ['identity', 'guozhan'],
                fullskin: true,
                image:'ext:假装无敌/ymhuanhundan.png',
                content: function() {
                    "step 0"
                    var next=player.chooseTarget(true,'选择一名角色令其复活');
                    next.set('filterTarget',function(card,player,target){
                        if(target.isAlive()) return false;
                        return true;
                    });
                    next.set('deadTarget',true);
                    next.set('ai',function(target, targets){
                        return get.attitude(_status.event.player, target);
                    });
                    "step 1"
                    if (result.bool) {
                        var dead = result.targets[0];
                        dead.revive(1);
                        game.addVideo('revive', dead);
                        event.dead = dead;
                        if(!_status.ymhuanhundan) _status.ymhuanhundan=[];
                        _status.ymhuanhundan.add(player);
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (event.dead) event.dead.draw(2);
                },
                ai: {
                    basic: {
                        useful:function(){
                            var player=_status.event.player;
                            for (var i = 0; i < game.dead.length; i++) {
                                if (get.attitude(player, game.dead[i]) > 1&&(!_status.ymhuanhundan||!_status.ymhuanhundan.contains(player))) return 7;
                            }
                            return 0;
                        },
                        value:function(card,player){
                            for (var i = 0; i < game.dead.length; i++) {
                                if (get.attitude(player, game.dead[i]) > 1&&(!_status.ymhuanhundan||!_status.ymhuanhundan.contains(player))) return 11;
                            }
                            return 0;
                        },
                    },
                    order: function(card, player) {
                        for (var i = 0; i < game.dead.length; i++) {
                            if (get.attitude(player, game.dead[i]) > 3&&(!_status.ymhuanhundan||!_status.ymhuanhundan.contains(player))) return 7;
                        }
                        return -10;
                    },
                    result: {
                        player: function(player) {
                            for (var i = 0; i < game.dead.length; i++) {
                                if (get.attitude(player, game.dead[i]) > 3&&(!_status.ymhuanhundan||!_status.ymhuanhundan.contains(player))) return 2;
                            }
                            return -10;
                        }
                    },
                },
            },
            ymyaoguangjian: {
                audio: true,
                fullskin: true,
                image:'ext:假装无敌/ymyaoguangjian.png',
                type: 'equip',
                subtype: 'equip1',
                nomod:true,
                nopower:true,
                unique:true,
                skills: ['ymyaoguangjian_skill'],
                distance: {
                    attackFrom: -8
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
                    return target==player;
                },
                modTarget:true,
                allowMultiple:false,
                content:function(){
                    if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
                },
                toself:true,
                ai: {
                    equipValue: function(card, player) {
                        if(get.translation(player.group)=='仙') return 9;
                        return 8;
                    },
                    basic: {
                        equipValue: 8,
                        order:function(card,player){
                            if(player&&player.hasSkillTag('reverseEquip')){
                                return 8.5-get.equipValue(card,player)/20;
                            }
                            else{
                                return 8+get.equipValue(card,player)/20;
                            }
                        },
                        useful:2,
                        value:function(card,player,index,method){
                            if(player.isDisabled(get.subtype(card))) return 0.01;
                            var value=0;
                            var info=get.info(card);
                            var current=player.getEquip(info.subtype);
                            if(current&&card!=current){
                                value=get.value(current,player);
                            }
                            var equipValue=info.ai.equipValue;
                            if(equipValue==undefined){
                                equipValue=info.ai.basic.equipValue;
                            }
                            if(typeof equipValue=='function'){
                                if(method=='raw') return equipValue(card,player);
                                if(method=='raw2') return equipValue(card,player)-value;
                                return Math.max(0.1,equipValue(card,player)-value);
                            }
                            if(typeof equipValue!='number') equipValue=0;
                            if(method=='raw') return equipValue;
                            if(method=='raw2') return equipValue-value;
                            return Math.max(0.1,equipValue-value);
                        },
                    },
                    result:{
                        target:function(player,target,card){
                            return get.equipResult(player,target,card.name);
                        },
                    },
                },
            },
            ymtianruihualing: {
                fullskin: true,
                image:'ext:假装无敌/ymtianruihualing.png',
                type: "equip",
                subtype: "equip2",
                nomod:true,
                nopower:true,
                unique:true,
                skills: ["ymtianruihualing_skill"],
                enable: true,
                selectTarget: -1,
                filterTarget: function(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content: function() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                onEquip:function(){
                    if (player.sex != 'female') {
                        if(lib.animate.skill['ymtianruihualing_skill']) lib.animate.skill['ymtianruihualing_skill'].call(player, 'ymtianruihualing_skill');
                        player.draw(2);
                    }
                },
                onLose:function(){
                    if (player.sex == 'female') return;
                    var next = game.createEvent('ymtianruihualing_skill');
                    event.next.remove(next);
                    var evt = event.getParent();
                    if (evt.getlx === false) evt = evt.getParent();
                    evt.after.push(next);
                    next.player = player;
                    next.setContent(function() {
                        if (player.countCards('he')) {
                            if(lib.animate.skill['ymtianruihualing_skill']) lib.animate.skill['ymtianruihualing_skill'].call(player, 'ymtianruihualing_skill');
                            player.chooseToDiscard(true, 'he');
                        }
                    });
                },
                filterLose:function(card,player){
                    if(player.hasSkillTag('unequip2')) return false;
                    return true;
                },
                toself: true,
                ai: {
                    equipValue: function(card, player) {
                        var num=7;
                        if(get.translation(player.group)=='仙') num+=2;
                        else num-=2;
                        if(player.sex=='female') num++;
                        else num-=1;
                        return num;
                    },
                    basic: {
                        equipValue: 7,
                        order: function(card, player) {
                            if (player && player.hasSkillTag('reverseEquip')) {
                                return 8.5 - get.equipValue(card, player) / 20;
                            } else {
                                return 8 + get.equipValue(card, player) / 20;
                            }
                        },
                        useful: 2,
                        value: function(card, player, index, method) {
                            if (player.isDisabled(get.subtype(card))) return 0.01;
                            var value = 0;
                            var info = get.info(card);
                            var current = player.getEquip(info.subtype);
                            if (current && card != current) {
                                value = get.value(current, player);
                            }
                            var equipValue = info.ai.equipValue;
                            if (equipValue == undefined) {
                                equipValue = info.ai.basic.equipValue;
                            }
                            if (typeof equipValue == 'function') {
                                if (method == 'raw') return equipValue(card, player);
                                if (method == 'raw2') return equipValue(card, player) - value;
                                return Math.max(0.1, equipValue(card, player) - value);
                            }
                            if (typeof equipValue != 'number') equipValue = 0;
                            if (method == 'raw') return equipValue;
                            if (method == 'raw2') return equipValue - value;
                            return Math.max(0.1, equipValue - value);
                        },
                    },
                    result: {
                        target: function(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
            },
            ymhaoshouqiongjing:{
                audio:true,
                fullskin:true,
                image:'ext:假装无敌/ymhaoshouqiongjing.png',
                type:"trick",
                enable:true,
                selectTarget:-1,
                toself:true,
                filterTarget:function(card,player,target){
                    return target==player;
                },
                modTarget:true,
                content:function(){
                    'step 0'
                    if (!target.storage.ymhaoshouqiongjing) target.storage.ymhaoshouqiongjing = [];
                    if (!_status.characterskill) {
                        _status.characterskill = [];
                        for (var i in lib.character) {
                            if (Array.isArray(lib.character[i][3])) _status.characterskill.addArray(lib.character[i][3]);
                        }
                    }
                    event.num=target.storage.ymhaoshouqiongjing.length;
                    var num1 = 10 * (event.num+1);
                    //if(num1>100) num1=100;
                    var num2 = num1 + 10;
                    var list = [];
                    for (var i in lib.skill) {
                        if (!_status.characterskill.contains(i)) continue;
                        if (lib.skill[i].nobracket==true) continue;
                        if (!get.translation(i, 'info') || get.translation(i + '_info').length == 0) continue;
                        var leng = get.translation(i + '_info').replace(new RegExp("<(\S*?)[^>]*>.*?|<.*? />", 'gi'), '').length;
                        if (leng >= num1 && leng <= num2) list.add(i);
                    }
                    list.remove(target.getSkills());
                    list=list.randomGets(3);
                    if(list.length==0) return target.draw();
                    event.skillai=function(){
                        return get.max(list,get.skillRank,'item');
                    };
                    if(event.isMine()){
                        var dialog=ui.create.dialog('forcebutton');
                        dialog.add('皓首穷经：选择获得一项技能');
                        var clickItem=function(){
                            _status.event._result=this.link;
                            dialog.close();
                            game.resume();
                        };
                        for(var i=0;i<list.length;i++){
                            if(lib.translate[list[i]+'_info']){
                                var translation=get.translation(list[i]);
                                if(translation[0]=='新'&&translation.length==3){
                                    translation=translation.slice(1,3);
                                }
                                else{
                                    translation=translation.slice(0,2);
                                }
                                var item=dialog.add('<div class="popup pointerdiv" style="width:100%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                                item.firstChild.addEventListener('click',clickItem);
                                item.firstChild.link=list[i];
                            }
                        }
                        dialog.add(ui.create.div('.placeholder'));
                        event.switchToAuto=function(){
                            event._result=event.skillai();
                            dialog.close();
                            game.resume();
                        };
                        _status.imchoosing=true;
                        game.pause();
                    }
                    else{
                        event._result=event.skillai();
                    }
                    'step 1'
                    _status.imchoosing=false;
                    var link=result;
                    target.storage.ymhaoshouqiongjing.add(link);
                    if(target.storage.ymhaoshouqiongjing.length>=4){
                        var skill=target.storage.ymhaoshouqiongjing.slice(target.storage.ymhaoshouqiongjing.length-4);
                        target.removeSkill(skill[0]);
                    }
                    target.addSkillLog(link);
                    target.popup(link);
                    target.flashAvatar('ymhaoshouqiongjing',link);
                    game.delay();
                },
                ai:{
                    basic:{
                        order:12,
                        useful:[4,4.5,5],
                        value:[7,8,9],
                    },
                    result:{
                        target:2,
                    },
                },
            },
            ymwangshusan: {
                audio: true,
                fullskin: true,
                image:'ext:假装无敌/ymwangshusan.png',
                type: 'equip',
                subtype: 'equip1',
                nomod:true,
                nopower:true,
                unique:true,
                skills: ['ymwangshusan_skill'],
                distance: {
                    attackFrom: -8
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
                    return target==player;
                },
                modTarget:true,
                allowMultiple:false,
                content:function(){
                    if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
                },
                toself:true,
                ai: {
                    equipValue: function(card, player) {
                        if(get.translation(player.group)=='仙') return 9;
                        return 8;
                    },
                    basic: {
                        equipValue: 8,
                        order:function(card,player){
                            if(player&&player.hasSkillTag('reverseEquip')){
                                return 8.5-get.equipValue(card,player)/20;
                            }
                            else{
                                return 8+get.equipValue(card,player)/20;
                            }
                        },
                        useful:2,
                        value:function(card,player,index,method){
                            if(player.isDisabled(get.subtype(card))) return 0.01;
                            var value=0;
                            var info=get.info(card);
                            var current=player.getEquip(info.subtype);
                            if(current&&card!=current){
                                value=get.value(current,player);
                            }
                            var equipValue=info.ai.equipValue;
                            if(equipValue==undefined){
                                equipValue=info.ai.basic.equipValue;
                            }
                            if(typeof equipValue=='function'){
                                if(method=='raw') return equipValue(card,player);
                                if(method=='raw2') return equipValue(card,player)-value;
                                return Math.max(0.1,equipValue(card,player)-value);
                            }
                            if(typeof equipValue!='number') equipValue=0;
                            if(method=='raw') return equipValue;
                            if(method=='raw2') return equipValue-value;
                            return Math.max(0.1,equipValue-value);
                        },
                    },
                    result:{
                        target:function(player,target,card){
                            return get.equipResult(player,target,card.name);
                        },
                    },
                },
            },
        },

        skill:{
            ymyaoguangjian_skill: {
                equipSkill:true,
                locked:true,
                trigger: {
                    player: "useCardAfter",
                },
                filter: function(event, player) {
                    if(get.translation(player.group)!='仙') return false;
                    if (event.parent.name == 'ymyaoguangjian_skill') return false;
                    if (!event.targets || !event.card) return false;
                    if (event.card && ['wuxie','shan','du','tiesuo'].contains(event.card.name)) return false;
                    var type = get.type(event.card);
                    if(!['basic','trick'].contains(type)) return false;
                    if(player.getHistory('custom',function(evt){
                        return evt.ymyaoguangjian_skill_name==event.card.name;
                    }).length>0) return false;
                    var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                    var targets = event._targets || event.targets;
                    for (var i = 0; i < targets.length; i++) {
                        if (player.canUse({name: event.card.name}, targets[i], false, false)&&targets[i].isAlive()) {
                            return true;
                        }
                    }
                    return false;
                },
                check: function(event, player) {
                    return true;
                },
                prompt: function(event,player){
                    return '是否发动【瑶光】令 '+get.translation(event.card)+' 再结算一次？';
                },
                content: function() {
                    var targets = (trigger._targets || trigger.targets).slice(0);
                    for (var i = 0; i < targets.length; i++) {
                        if (!player.canUse({name: trigger.card.name}, targets[i], false, false)||!targets[i].isAlive()) {
                            targets.remove(targets[i]);
                        }
                    }
                    player.getHistory('custom').push({ymyaoguangjian_skill_name:trigger.card.name});
                    var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                    player.$throw(card);
                    player.useCard(trigger.card, targets, false);
                },
                group:'ymyaoguangjian_skill_noxian',
                subSkill:{
                    noxian:{
                        equipSkill:true,
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        filter:function(event,player){
                            if(get.translation(player.group)=='仙') return false;
                            if(!event.card) return false;
                            if(player.getHistory('custom',function(evt){
                                return evt.ymyaoguangjian_skill_noxian_name==event.card.name;
                            }).length>0) return false;
                            return true;
                        },
                        content:function(){
                            'step 0'
                            if(trigger.player.countCards('he')>0) player.gainPlayerCard(get.prompt('ymyaoguangjian_skill',trigger.player),trigger.player,'he');
                            'step 1'
                            if(!result.bool) player.draw(2);
                            player.getHistory('custom').push({ymyaoguangjian_skill_noxian_name:trigger.card.name});
                        },
                    },
                },
            },
            ymtianruihualing_skill: {
                equipSkill: true,
                trigger: {
                    target: "useCardToTarget",
                },
                forced: true,
                audio: true,
                direct: true,
                filter: function(event, player) {
                    if (player.sex!='female'&&get.translation(player.group)!='仙') return false;
                    if (player.hasSkillTag('unequip2')) return false;
                    if (event.source && event.source.hasSkillTag('unequip', false, {
                        name: event.card ? event.card.name : null,
                        target: player,
                        card: event.card
                    })) return false;
                    return true;
                },
                content: function() {
                    'step 0'
                    if(player.sex=='female'){
                        var num=[1,2].randomGet();
                        if(num==1){
                            player.draw();
                            player.logSkill(event.name);
                        }
                    }
                    var info = get.info(trigger.card);
                    if(get.translation(player.group)=='仙'&&Math.random()>0.5&&['basic','trick'].contains(get.type(trigger.card))&&game.hasPlayer(function(current) {
                        return !trigger.targets.contains(current)&&!info.multitarget;
                    })){
                        player.chooseTarget(1,get.prompt('ymtianruihualing_skill'), function(card, player, target) {
                            var player = _status.event.player;
                            if (_status.event.targets.contains(target)) return false;
                            return true;
                            //return lib.filter.targetEnabled(_status.event.card, trigger.player, target);
                        }).set('prompt2','请为'+get.translation(trigger.card)+'增加一个目标').set('ai', function (target) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            return get.effect(target, trigger.card, player, player);
                        }).set('targets', trigger.targets).set('card', trigger.card);
                    }
                    'step 1'
                    if(result.bool&&result.targets){
                        player.line(result.targets);
                        trigger.targets.add(result.targets[0]);
                        player.logSkill(event.name,result.targets);
                    }
                },
                ai: {
                    skillTagFilter: function(player, tag, arg) {
                        if (player.hasSkillTag('unequip2')) return false;
                        if (arg && arg.player) {
                            if (arg.player.hasSkillTag('unequip', false, {
                                name: arg.card ? arg.card.name : null,
                                target: player,
                                card: arg.card,
                            })) return false;
                            if (arg.player.hasSkillTag('unequip_ai', false, {
                                name: arg.card ? arg.card.name : null,
                                target: player,
                                card: arg.card,
                            })) return false;
                        }
                    },
                },
            },
            ymwangshusan_skill: {
                equipSkill:true,
                locked:true,
                trigger: {
                    player: "useCardAfter",
                },
                filter: function(event, player) {
                    if(get.translation(player.group)!='仙') return false;
                    var type = get.type(event.card);
                    if(!['basic','trick'].contains(type)) return false;
                    if(player.getHistory('custom',function(evt){
                        return evt.ymwangshusan_skill_name==event.card.name;
                    }).length>0) return false;
                    if(get.itemtype(event.cards)!='cards'||get.position(event.cards[0],true)!='o') return false;
                    return true;
                },
                check: function(event, player) {
                    return true;
                },
                prompt: function(event,player){
                    return '是否发动【望舒】令将'+get.translation(event.card)+' 收回手牌？';
                },
                content: function() {
                    player.gain(trigger.cards,'gain2');
                    player.getHistory('custom').push({ymwangshusan_skill_name:trigger.card.name});
                },
                group:'ymwangshusan_skill_noxian',
                subSkill:{
                    noxian:{
                        equipSkill:true,
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        filter:function(event,player){
                            if(get.translation(player.group)=='仙') return false;
                            if(!event.card) return false;
                            if(player.getHistory('custom',function(evt){
                                return evt.ymwangshusan_skill_noxian_name==event.card.name;
                            }).length>0) return false;
                            return true;
                        },
                        content:function(){
                            'step 0'
                            trigger.player.chooseToDiscard(2,'he').set('ai',function(card){
                                if(card.name=='tao') return -10;
                                if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
                                return get.unuseful(card)+2.5*(5-get.owner(card).hp);
                            });
                            'step 1'
                            if(!result.bool){
                                trigger.player.loseHp();
                            }
                            player.getHistory('custom').push({ymwangshusan_skill_noxian_name:trigger.card.name});
                        },
                    },
                },
            },
        },
        translate: {
            ymfushu_card: '空白',
            ymhuanhundan: '还魂丹',
            ymhuanhundan_info: '出牌阶段，对一名已死亡的角色使用。令其复活并摸两张牌。每名角色限使用一次此牌。',
            ymhuanhundan_append:'<span class="text" style="font-family: yuanli">薤上露，何易晞。露晞明朝更复落，人死一去何时归！ </span>',
            ymyaoguangjian: '瑶光剑',
            ymyaoguangjian_skill: '瑶光',
            ymyaoguangjian_info :'锁定技，①若你为【仙】势力，你使用基本牌或普通锦囊牌后可以额外结算一次，每回合每种牌名限一次；②若你不为【仙】势力，你使用牌造成伤害后选择获得目标角色的一张牌或摸两张牌，每回合每种牌名限一次。',
            ymyaoguangjian_append:'<span class="text" style="font-family: yuanli">几回花下坐吹箫，银汉红墙入望遥。似此星辰非昨夜，为谁风露立中宵。 </span>',
            ymtianruihualing: '天瑞华绫',
            ymtianruihualing_skill: '天瑞',
            ymtianruihualing_info: '锁定技，当你成为目标时，①若你为女性，你有50%的概率摸一张牌；②若你为【仙】势力，你有50%的概率额外指定一名其他角色也成为目标。当此牌进入/离开你的装备区时，若你不为女性，你摸两张牌/弃置一张牌。',
            ymtianruihualing_append:'<span class="text" style="font-family: yuanli">风吹仙袂飘飘举，犹似霓裳羽衣舞。玉容寂寞泪阑干，梨花一枝春带雨。 </span>',
            ymwangshusan: '望舒伞',
            ymwangshusan_skill: '望舒',
            ymwangshusan_info :'锁定技，①若你为【仙】势力，你使用基本牌或普通锦囊牌后，若此牌为实体牌，你可以将其收回手牌，每回合每种牌名限一次；②若你不为【仙】势力，你使用牌造成伤害后选择令目标角色弃置两张牌或失去一点体力，每回合每种牌名限一次。',
            ymwangshusan_append:'<span class="text" style="font-family: yuanli">江南雨，古巷韵绸缪。油纸伞中凝怨黛，丁香花下湿清眸。幽梦一帘收。 ​ </span>',
            ymhaoshouqiongjing: '皓首穷经',
            ymhaoshouqiongjing_info: '出牌阶段，对你使用。你从所有武将牌中随机观看至多三个技能并选择其中一个技能获得，你每次观看到的技能描述字数将单调递增，当你以此法获得的新技能超过三个时将替换旧技能；若无可获得的技能，你摸一张牌。',
            ymhaoshouqiongjing_append:'<span class="text" style="font-family: yuanli">纵死侠骨香，不惭世上英。谁能书阁下？白首太玄经。 </span>',

            "假装无敌Pack": '<span style="animation: -webkit-animation:fairy 20s infinite;animation:fairy 20s infinite;">假装无敌</span>',
        },
        list: [
            ["heart", "1", "ymhuanhundan"],
            ["diamond", "10", "ymhuanhundan"],
            ["spade", "12", "ymyaoguangjian"],
            ["club", "12", "ymwangshusan"],
            ["heart", "12", "ymtianruihualing"],
            ["spade", "6", "ymhaoshouqiongjing"],
            ["club", "13", "ymhaoshouqiongjing"],
        ],
    }
})
