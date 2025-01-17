const CryptoJS = require('crypto-js');
const {sm2, sm3} = require('sm-crypto');
const {encrypt} = require("./utils/aes.js");

window = global;
var content = "040e32fcb910407f9272e07abd4a14f584e5deb65df6a81e05867dd4998c630605424908ca3d4bb984d1ee4dc5fef69430a708dda04abdfb7a3de283e9663deeeed234b0bc49ddab5173256b62551ea5e632727697fcf28083430d34c4b3c389e497aae74959b417c8ba005007024d1e6c36ec482f6b052e2576bc9e3483e01ce8d06e4c0f24466f29d17f59b1511ea734d75d7959e7c42838171706bcf18e51ce6607413a152ec0df0a220a7d9ffe265b3ea31399ee650a3a4fb00c6cef4f0891873aec293d1a1542f94f7edadca54335e3c2442b86e61f7c501e1a9265b98093dcad0cb12c2747185cedd6fe0454a46357390a99a4f88749d47ca6e5d84ad207ae577834c08e65e0b9e8e9cf938f8308b09ecce9e4d7a6a60cb65e3f78077e3427176306fb0c19e0869993655a8672b91c340ed0290f0a86420df98e9c37638203616140dadfe1bb6bdac92a7e5dab0448f8624abee6e5620a7d383e983fdba6836697a5c4531d27332af9df3fcf77fb87be2687f4f586d48d3354b9846402d227452db222f6aceb6cc1648f0fb718995d9eff89af7270dd75d2abb82a837153cbe85ff90d109fc36f682f20196389d38f97d1f91adb4361f4ed478022750735b6f48d0d7b46b6c428956283b436267c837a9a7643ab30a8ba6d4c57ed7e2acf9c7029f14c7fce13467ecdf06a81850e6aa916478a576c53d367889f6308b81d7866c39edd847964e87a8f1691c51df5d38df171f6c86b025ee63c3b0901be9fad840762f01b95ca5a8d36a81859e62ac35557207724d5cf3c65916b475a7ddb38b8b686940608a9f225232272de51b87d7a036951b7f6f61f679429eae701e9f7fc3c6393c3526cde73c002a7cc77d6d66c16d70b41a0e145cbec3b644c9d7c960c492791e4c578e362aff9f5940b99b67d4522a756b27762b7bc9094fda5a80b91a8584e31604723948190906ea5fb64b0ef7560c8b6c8c3535cde13c667b486382e1d368e3c36b69e15e5139334c16b69fdd6acbe7e2ec489dc7a1de57e05951014c29be09fd167af960c8207c92a8ea12b91c561441118030258edc05198f06c41a66ff449104eab9ffbfcf4aa4e88b86c3f7d688acea25bf371fe615846893ef8d9e0aa79df2cae25203756bf2f40fcd337ac02f6d517144efcb83d0f57eacdc7a8aa1f9919b9d3f1766aa2b8503f4bdceb4b1948c9e89cdccb64131635696ef7fb20316199a29d5e5cb58b77cafb5041ee339cbcd398b303d7ba81369a6a5e945102d4801058a840332d2c148354a11a50c6e7752be65ea9e0403a3f61ca09aec7f5a278e76166877ee2a5e6afb0a72ff4ae1f2a2530f3bd9f9b76308d7dacc09983e2bcbad4c8e47ebb15b8d6107f83b9ddf7b7bcd535a01db767c2faa997d25eb5dc8caf5cbd6bb5dfa16dc17547756ec6d3de6dd2778816b03e8342ffc1d70d8e7bd95290ac7ea89b75e3d79eface6244bf659885ecc0a4f49b47e53cef2a3e92f2490258149274915a8587143900e3357091d26b13bcfc8b1c039b82d849a5534d2e457cec56de1128c04d4ad44412639449745217da0f6a07b78aae55cb5125b42cce36dac28e035c4adf6750832011adc6f183abecd30689bd58d87d1d17fad09f3cb779fe6b12eca935cadfb23e96d430b8b6feeaf9cb84ebc9d45fb3f1069e4ff52fd38b53745333d5f3791d8c7ecd63f70f26e24ca1ba175c65ad8b5135b8a3b46db340191791e353752901f917d1f56c8d75e3b1239a1bd401f23b6a6357f5db790fe9dfb67f764bd7670d8f8e025f63a7733db842d1e95232e51b130d3e374401f9e50e6135dc702b50b25137e9df5c4b39684b7b52eda28faa8f30ddd6d17a573e65651203091d0479ae91a0b62bf3f88c2b6b8770bc5b48a500c890dde6d956f5f30c88fa2beda91e33a4bdc043e8ef8ca767c7d7cddf79bc1e973b0cb673cab3fca2799d7e4979be4730e42a7a6454b7b3164319250fbd296e9c8392b2b087f486b60604108487b4912db24fd1bcce4b7636b2d5a8e137cd162de035c395d15d77ae295ff33b2071094a7cfd85612e4dbcbc227873fbbec28254989679474be909c3fd757c3f6b952ebcb91204e4d9b9178cade781088208096fcef67b23ba2602739a9a6b2d03a1982e3e89af3bd77b8a6d922126dbb03bc20e7de89ff7c2d2caf2a19686b50ee44ad6a5441180b81ac0e05840b40d3a6f9fe1c3491e0954e0fceb55c70408c0595215d112d753ad1e1a029b98fdb7439ccf4b5d4b849c02bb241339bab9e60b63c32cf21d1e70d110b62800006685cad6defbbd0010fb8d41ceacca92d156e6c3d452ea9c8c85dde12621ce5e26493a5ebbe744bc770ce7c64a012f639c964458e1fae31cbe7c6308e3588d82029194c2dcbf571768afcb9d449f2ae1468bfbfecdbadc91dc274e3de8de7b032d6c1643f5f88af790bad8d1ea18e82c17fdc0d3828301834f555482146de1700cf59cb0162e1ad2505d8841b0c85199f01f8344e88c63d06e8450bcdf7dfce17ee1115dea4ac21e851091dcc4766d6d34febc4b5d084922c43de25104efe4f46fdeedaf70c548cd5e681f9faceae30ca762bf5ef46e2c47f5cae325fd5e9a1d47be66e1651bb262f435066cfee78eeb1668f0ff5230970bb48c67747aa5898c3ba645a51aa51662ae92338d4566730b17dc355976201a563e4e733bb2744e52989dc07f848a676587592668eaa29d324915eff6f27666ac91c2c1f9a8da9de79040c00118fd861f3ebb6c203bfbd34fe50dc563859c733076f4e3bd8f033447c7f7f683f19613bcfa581fce7286d3cd3ddd60bb3364d43226138f14c498daaebf6dcd308c6333b939d28148bc982c0d8657ebe28117088a67dd11cc7a01cd320aeb520872ffaec8637b815cb28b662428488ad833b292f1b0cf07e5468c7982a76f802f6d4b6217555516df60cdeb78eea847601386f9a1070339c43d65eb8bdde856c5234ecdccc0d7435528731f65b2e59cdc916ef1d0148ba1bea67a6fb2781c85af83879f875c57575ecf28f3a66b17613b487da79e8aa2b4554d0045d08d0c2d93c037b126906e1a2817de86adffd63257e7372d2cd773a96ff75cb47f53bc7803c19b2c28c8e0fc13bf3e9c94d2f2215fa297b1f1b12b7d12c9c75d14cd837a713eb72e3b99864f60a4caf808d403c8563ceb1004887fa3260648e7f9fefad9a8a94d2dbdc51f2ae290b9d6d4aaafd36f52a3b2b60159d8fc817760d0e7d722739bca2ae0d1eada5b0826558d3acea390fbfa22e1e8d4ab88480a532955840dde63601c46eaf8f9f960a124de0b9f05c481bbd033150e91e798e1b084d7e4056249fe9ce0ceec520caf29ac2faf8445f942081373573d62805c9d361fb52fafd78b612a06676243fab5ba1e771a2ae386a90ae5ca6b28c7d2802268612fb81b24c69488adf7e1fdad7d01e0e53664bad06ca7c7e4e9c82cf6f9672dace00914fb1b714f25b0c01ea9ba167bf561804158f810e9098e1de1e3b37f0ee8ae3e091f2a9d39ad2afbe8bd779792b71172478ebac248426d36ea83cea4715691fe968eadc7e5e136b178e8ff98a3ffc54bce76801b0843ea2b3a4b3942584afee4eb18e9ed6443ab4126e3a2fed6f773a9ddf0aa8baf24fa1411e08176c08b3bf84a67aef2321b9252968e5424976709d1d0e79efddd56f320f5119ae0b3ab8d48b94409ba5927a467efde67c8211d19d60d50d5b94148a47b6455b02da534dba148d6eb86fbb619386e4ab31632afc0a84c8522cdaae87785c9e5df83da6b0aecec4f2dc071e55719ac800bda15ec49b255643b3597e19e49617040e7cd62d109220f90bf423c0a87027c1f1be1f7d244bbf07029512e52b0c7d6897e60b485c3d8a21afa927bac5e89aa455827fa1a97fb777c3a9ebf905f386b6f9a994a7f80b63b4aa1143aaae8cddfd6537d3a7b0cf4675fcec0370307d7e244b1c28e60ce94e278fdb8abf58cd750b2b2a886f9828705d9b0c2a21e15691e6328ded4e4393a92bb18d62ab0704c3306617193ad77fc11a6aa42761783c50aa6011ac7827e081f58db4f76861b1f191997650d89aed7a908c503d7dda8beee58f3dc111a8b1120e6fc58bef99019614ed6a0de5778aa448ef933a862b15bcefa8d4c16ffbe478109936a221573361d86dab605d118cba8ce353d473e633bfa2ec009df89d016c0a19be79d46c121649f78b48eb4c3eead2dc12ccf70e6f893883657e5981f4452dfb9beb9ccd314c1b5509ad614822d6f59836f9d2b6c8e5322b70cfad14c88358837392a96804b4ae5e381cb17b9ef5279558150495b75508e09332d4f01ade52a1e14da86ea08dc3f7052d9514932a51e9bd2a757f20c40e8bf269ad38145c82f19f95dc5926667ef135910bdf063e93106540e8886555d3d28c5716b153a16489dd6567907e7a972dda1ae3642a7a39104c47bb4e007094c7c9863226c683eed511adc536a4095f04bfcb801da88ca10be7be5b3d49c2b94ca51c5bbb3de497fb00427af15ddc1af05031d5e305c0ab58ce976b1e3e90cdc12ba6cf2846708d4cfeb22f3f57debcd18a0dc1d831f6f16af191b20a13ce3d27eb9780e47c267ddb5610ef6af127b6835020921095ee3df634bc9608a1d7e8eb9d0a34621eea6ccb2097a2dba7d884f94cb67d41014f09d6bcaab2b8cf0ddc218e7de01e5be19aa3adc8963a8d7e0d944528f164b119074c2647d20ff18725e88cb758f447e243c6b5a8243a6c2561244b4592077bf68da65ba603b849da6ac8068727359f6dc5f5c09aedd306f7f1a7816868bace03b71c46644d7fe39667bba98702f1f79321cb474461395d65e2a640a33ecc9ca2cd5394be31115702a4eeeeea9138deedd6c702a197fa856ba88e6ba75d36d4375ee432f5ac2fa5122779616707559e150bbafdcb048f636db0ad022dd845eb46cc799eaa729ab2d74f37e44c972a6907ce67aefd5e802befec25660821515a3bf78898cee5e0b1a0f6b89d9b23033974acc212bf8fdd92f759ce1d1d1c002e3732ad63e0517d10858d2ea351ecfa17560ce4fd36b05eeae6dee5ad4e1959f7732f09cb98403c8850921e112d6ed027a23cbe1d997cf0e393921ebfe8fb49342f0f8f82e23d19a7df29e886d27e3fe285d2a9771ca24f6c25341f556ba0c8df958b491003437362e3c61e974a76fb2430faecccbfbc84e1bb459872f5ffafaa4bdb1c6b11fae4de995accffa9bfdb212189b1e50bf63df02ef98611c040ec187629f2dd571891a284df92226656a70810d52f1c4f08aa30614d24c5600dd950717de567bf0afe8f5e4c08abe9daaa496aa1e50ae6f5c405a7a819e48c1b07c4be6dc31ccc9a19e643c35c791f8b4e8f94ba23775f2d24c9557d8ab094cd6251f598ba26b52ecc459f18a56eef3f49b370e1a558c5471de51cd132b500b6b7bd9b05ac9df6f57fbef55d28ac6dc0b5b1f7abbbdf0f31f85f48c3c5286149b3fe6c65bb54771010a43c013e8fa8636bfcbedc0b6542eea4fbce94929e11f8dd2da23e6cf7e41d2106e1a7f2a7c3ab4607324559fa2abec4e8bfb8bcfead697d3d901d75fed5ae6db92b1c9482567d34d41bb573a1fe73e5618f6b1fe743c464e51734b021b197e064efb93a93753207af09db6a45023253931ddd1d08b43ea7e023c405d853058374db0fadde4fef677fa216e0f750e3c5ec151ca7ac26da8d997e6c8e7b6d6e7e4c37d8a892fa500064de5177b9353e71af809edddb78887528bc92d95bcc2d9c69c3780e7958ae825131d31490621ee389b980d67c2805039855a5c93275d0b86ba2362cc7679d1a9d58b3919eafacd3d7e888f6342aadcaceb18dd3ea7fd8a0ad4b7d68ec4d05658cb99e776102c8eca096dea96c15131f372ab87d585bf97214d7192fc059defa82f029cd6f6f288ef4f536e7829aa6c955af0ca7bc4dec1937dd7c59fb715d99877ff39ebb4743f753a8d0235bbb8dec6468e5d819c9134af0e285ee005bba4b8910a56c595560daba878ba1a8e425f5f7849260e88f7a138a7a9038c1465ebbcfedeb5e0f1a40d95323056d26a3b52122f51552184ab428d1a31e8101476debf2306d20ae517961a001d66edac72e74c2d66d9685d4622caadbab18dd6630eb166b4dd9fb1a98204c72c27ede546dd24bd9d9903c33da0544122c045da7e42dd2c4306c52613a8151e4ce5914b66e6058898b97e8ecbacdb9ac143503d9a277bf1fb840115c7a978ccd713616a6d1e7b9d251f147ccf81e84f821d65cd96a101ea1ef96f69d0a87e6dce7aa10ff0065303db8513da613f43a858ba3bef654cd15baabb6a31d198aca39e09920c721a6a9f303c26f31135293cf3059d7b2735389dddd39ee1ec9792327097ba12eb1110d526ab3563199278b1bc2d284337e030ba94fd043a0eb88cc996de4749cbc8d1bb1c73b779c90e4ef73b3f7b4d6201a3a103d3291b4433ef809223a1646bf2e2d4bdd5ed274b1475e0a442b6b17277378079d5a675879e51f5401718944b247df33af8e274bd2dc4d2730abf3501de9a653573477ab3255eaeb12ee0d91a167f037f0b846a286881819e8ff36954f4dee17f29db63e25354f5fc312e389ad8a80443218fb4e2031b534174fb870385b5cea84e4eea6c837960c16e97b6e53b85a9069a4e127f81a514ad13a26fa7f087672e08f2d23e8964f7ae718646513c5a064b4f500b72de7a1e361fec9f7f71538c03e8c4d6e75f34a2e4b86036e0e9b7621a32706d3d5047d606a6fbc2d382ec54e49c0785f83b0d2fd3ae1c922b9619495a481f670b85b27d3a072484cb2b6a33ab70fc0ca05e508dda5f0732147ee870b44625be1b3a3e79abaa5860775eec1621e444d8e9f8911bfd4ae422f5d99e42b9da354506302f37784b4ae34c4136c8e8ba47b6b85319658570d623ac769ed8d4a16284f1324b965cd3e0c95e634e67aba0ec115c066e20669b87d45800ec8ef8bf2ecb4e898d59516864a95c029eaa1dd7f53f9f379ac828946ba2fb228cdbe147bab4a1dae55a8d4ae1521aaff7a77d21e7e23f9b9385e015592d4f7c5bb33373b42df6f60f81ada7ddb52e19c96f3e058a33d8a7a4d28ba9a3c1c58d8550934a4496979e49c3ca668e8e4ae692c25400467f7dfdc22a1bb7519b7ee03497164f5215f985c39c084dad1b4e61160659f4466d7cc500d069184382e1129ebcc45526158a119c3bc4b5a5ac72ab543a84a09f6cfdcee463530df7461d3b6ac04de899825eb26a927ffe8e980f6e68f70aae5ee1894fb6bbe44fbc2ac5dd21d4cc34f20d685fd5214b526f4761cc35116bec2073f0d2b0dfe02f2203aca1b008f9fbec9c6c74a46a817a360e0c454c8470c3e9d879afa37ff72515f843285b77237f47be5e76243d6ca705aee4b8e70566b60a105839df0a91dea7928c201129cb1bfd9ca78e98e9635d6bdfa536a5380660ff5188d2e37c9a77761fc31d49d0c1826321ad89814834b87bd1df83161b748839243c807d652651602acc58705c557ba0a77df6a36c76ba0ea36258e8efd140f9e4261bec56450d26932e2b733d94384c50850a1fd8df07d3c3825f02675e4636c874c9453b0bffceccb1c979c413772b4616bc8dcd72e012a53e1d58bdd20c6ba259fb857b9bb0ff77a2d6ff6efeeb8e9ee94d8032253d5c599df64f6a79a2ab94065ebca4eb1da0b7455e89198025154a3f272dca7ba2bcd0e332402a5e5f5dcc9b6141f7698580a73bece9c8c25949106e3ee9dda541e28154ca492c49685fe6ed8bad798e386fb586e797b3bc32ee8c31312f2a7a34058804d1b127b780e7ae0e97747e7a344ba856993ef9efbc62a3eaba9fbd2ba312b12e062fd3bd02c945f13816f6faaaaa87428c9f0b71bfeaf38e2adfdc9a75a5be35ed6750f9eac8add7ed7e97a6f01bed7c82af2e0486f3d2b644492d1fa2fb530230099cd34535d62b94b4de7b9e3745179be15fd1cbcb4834ce342d2c68a8d166bf775f50f270dadc1ed2b80fed04d2152cf241e089e0d285506ec56067922d3fae6dd962044975052772f64d6e32f677c013753f7c46c81df95cc1005f1dfe618834c481df00ef86d07969ab6b2dc070b3e8b46a4788eba448c9a0bd4251085fb6c723f66a6eaf471155cfe567ffaff7a6eb2017c524915ae66e8187743c6fbf2a095c75f9698bd309feac45a97cd0c048d68b89f1d10d67a613aa67f880e2b2e6b80877aee444a6b0e72c0a341a7ffc54d3b075e926ba2a393b16bc205a38f07150cbfe3d01612e32578819f18263dea9aca543969b8eac2af2906e3fb615406fdad6c880bc469777560848ed439ca531fa5ff1a92234c41791b14234c7716385233009561bc62348a13addbb3789816beffc5d5abee6ae159fa7bcc1555656e69c793650f25cd3ccd683c0430c655b2c5ac0012e2b005e93bb2f96bcd335bc85925514178f7f2f528f4e546cda869d342287078850bc070edaff8d018228ad408de1fcff3c192f68d26cb918508cad2e3780daa38cd71dad63b0bcaaeb1752a0ae43ee0c6cc00fa6decbfeada919f23dca19cf1ec67f7172d73332485b97772bdc1a9775b33d0457a400b8c0daa3c7c0a5cbaee71f59bc586ef8e5b3b7e03096b41a30f8b0961a939d65f8879c665ee3bac04f70530017e2a90e4fdb5e776c074fab792e2f1fc9596d46d44a51b599b0603b5c859576348fb64b852e53bc098037050427a5b96b6f8e94835f4bb6d1070d7de64885ddcec8d269c7fe00ad51c76647238f37a7b9f6e200be01b800e6b8f42ea8cf4cd16260ed3725944b0f448ebdd96f58843be1f72e860ca14ad40ee631284ad74c3dec6a0e878e39584da91b3d5e5d06fdd913fa55a7b43e8820bc24f98a455c39fc362a107d760b9c07fa579c0b1208452ac2fd7f80424f9f44b4d090f66699463cccf283f60dba754ce9f33eba62f5d624538841f25a98f6135e086c0bfd552ac9b8dd3f8caba335f0c2c5bd7df50b0cf9438923330c5aa20d120e0cc45b142687c5a1fcd1f4f2c9a469b37e7d9c8718e693bf35e8d939968c538b0b831710c0619a7063ea62d0cb2d22e233f773e8915028282f8f0c850a357285c3337f8cefad277236c1e58f11585aa87afec9d948307387843b1ac4ca3a8ff82437273afff20e45c61f0bd48b2f34f0e8057b7269b6f82272f288030edeb43677fd07f97d6c8e1ea429c14aa2a97e85218d8e0c65bbd3efbdfc5655c731f7406fb20adaaea3d98c1b9eeb55fdd67880b3d849e0e2933dfc6c1ed1d6d8692bb901c610e74fa399fbdd3dfdea464971efb6b4758ec09af28aaf5833c6afbb5302d36665814d0a1340fb0e6db154bbb57d189cfc21ec47ddc3c6100a8043b62f81f775d72688c3be2e360adb492292211646ce336add05dc9a94d7ea99694430ccbbd7e9a1a45309380ae43c4000b4d4003442414a94e710f91a376ce65815f6e5c1d45f06a538d64b28b4d8fd62fb039d6e7abca9fde087781d117c9f8ec142a67b1da91d94ea9f7fb6486cb6a0d122639ed9b22c50fa5ab214cc09729f5f8081c3c48be7443a36745a70e9a6cbb809871105fb3323b9126c65fa4701d45026c34fd6303e77b517445531fd4e01b4a9c8c5b52770140def11c6bdd7731908f9e2e38e6420448e90daa062a8a75ba0cfb1d54087298e4788f269fc401a5a9e9048176c25f37936dc87198385a72f6d89d7cb09ed5ac361786f4eab96f2d39995776215b0ece95d18a33895d5d566a65d807b8777766b67709d93d53560d3a46a5471da4879e875076a35143a3abd40f027c716e2145c7381c31595d44282c27a58b0dbf45f786ac49bdb5eb7bb5c4e1f4c1ce26b4623a352b8a1426446c31c156d6c5254963064bd34c7443566cb88bb753b96af5551f0bd65d7257a134f17d34b601968f0d26a810edc4cc34beaeceee0def933c57a990daedce0629654f49278da20808bdd2ed03a4629a62647adf24b128e44e10004e4b3877f9c50a1a2f6f89beed3050180473d72486ea079200392ee0ecdd4d9cfa34989d5e347a872c84595a40dd4f261f68de2e2a1ec97c5c979a96d582d0b6cd97f578babdf7fc905c609a9786b9c568526830c2cab4b60e4801f3529b3d27865c1072c5e3e25cf057c3a4f4ea1fd9e96b0cf972e0c426c3d66b466f503c8a4d8b08254e04b239d08da6b5afe71dcc01d0fb7b3bc3922d475039411a63a9ffb997a8718d9e6f4485fe2603f1a871c5a0a2f4b7b4399e7cc489923a1628c5f577343c8b3924e2414f8523879a2c8e716102315472bea008afdb57ef6341003ee219d6928b9eb63b5ae2bbbf52fed1dd06bec6e7d5e93ef7e434a2177d0bad8da20d4eb82aca8f587f3f43435f6d138599cd768922608785be985e1e17ce9049d749482365d8ea3467cc396979861bce019b77f775ab35b3301643914a46681a434fc2719ada558b35dde0ad156568a1bfb7dfbd0a405e80d1ca1c85c2b9d12fefbc869444a9117db0b42a8eb2ac6e30a8a1d27238cbbac52d0bac35b154308d72c9c5465f3a4daa8c7cdc3858337486c46e0155255dbdf815ca1818868b81d90577f63f80d5c960291ce495ea9afd525c0b3d3a005cf6b1366c14d443d96e2e32fd850776137cc36a00862b267e49e59ea18d2a84cd52b47a567905e185dc1b409cd8f8ebc1b0e5f0ad4a497a6cddcee7df1d2e538ab280ed6218910e56ec755cd3bd4899f59ab38aaf06e7dc2992dae6bb14fad3d2acc6580494aa95b14e4ab7da368b7fd6fe435d5cc801e7b3271475f14d16a47e3772798a4db4177e334bda8b574a3261be626cf8b62a3cc103cba9ca897e89b577ff7ea543123e754b826d7afc84f8db9b4d363e7b485b298657bc2afa5cca5d5bf6d933361bb0bab495e80b916449f4668f54a04d034230733cc733836bdbe20b1e3234c8de8f92d57eec9d9d15ff5c1e68368ed57c3b05a12a54ebd51d47a512dd21a974cf77fcc7a70855a4ba2a507c38542ebb8e2069084c49b3d7f0013ae7d3887111678bd39e40a4a85ec441cd82fb5c4fa48ebd849eeefaec876cd00a9d23b7f67c60d001e0cfbd922db5254f1aa31551fc746f26ef838546867edeffbae9da7c23ba98ef69b5c666272d294f359ff8923529fc208dc502fdf7f97c4b5dcb5c7025f42f81cbe9b1deaf1672624c580b1991508ee46b148640a3645ad731f17d2b371851413125fa0e0d13d20ccedf7cdd48ede67d6a2149983a821b9a8fd1895f17508d02978fbba460d379e0035303d49a9ef419330b043229528c5092d6c986328f570cbdf4837e6b381c1d6166210c62524c95c4a8439e871db7e25c2ff003dcdc2ebdbd1c3f34020c76b1aecf53df5408d8cf886705f38f3e602a0ed831dc6ea17dc4a4f79041bdb155338518f3987b92f56bad9e468ebf881f649e7c1728cd6807ce074312d433bbe0a10f3eff3ac34c49d918009b0c10b3ed64c9aba806c016113aabaea751ae8ceb88f8b8f5bbdb93c9124b673fa56b6ffc389aecaa8893729187bba5fd287089e9c182c81b5c68e0afec6907e96d5ebf6b73ea6514ac80a09db99c4c26dfbd727a051c27745f64d3c4c1dce7ad527cec56081945cb9eb647506a050a337f3696134faa3fb86ba22d92df8fdf1760913c88c53ba79fa319044d19d62e88d4139ee35af8424a71a556e6ee0edc5977edd1c12ef04724afdea10d2a65c043df155a15c61a8ec93d2dd0e3bec627299f8dc1883f9745240e59836a143094d6672398dea347e39e9ccf77f31f956b651b16c611767deeca6eeec158b66002578d11720ea814df25affb36f763c85d3d63243f65e8c90de814fc17bb3dca284554b3e95cbfb18ffb263a6ad3d50b0056978d405dcc1b678cc3058c5f2d107a94f364045c3fce4b351e34b03f543b726580575499d142a08b27841409ff5a2428a73c6e4f1c0a8873c6f1b2e073dc86a4d36d85f8e4854f8dc3d185e359bb20d4b64b2c3e85bfc608749ae540f24aa3fd3dcaf6faddefc85da26c08446f785f292d3590b33537a2064715b08fc6680966db26c90531aad91d42624cd108f1e171cf07a588af0a0a218ff176226523cb53ed57d70e905c09d819858c509ffe1edba30fb40f818faf3db59d1fbedacc0a4f1c03c8c94c78c0d8901a12790ff6a1554fb63db281861a565a2f4c4d29480e21b45c26d4575fdcc0c9246ce76ccb64cd6897dddcd93bfca84a7615e81246523b85ff050b37a399fe2abde33fed75a35a01c86a82f66b29c62837998310cd1fea663bd1e1265b78eef4184add83f6a528c5aee2ca992799f0f985af7c8cd084791fb2d5800fc84149b5923d4c8339b3a276ceb775843234503a55ba26b96cb514d381bbeeb96ad83680dd974590ba10b3f38fb6ddc5f50cadcf0ae2859a5d1c1f70b77cb5e394671c5f3bd1ecc0400c5c4e0db1b1f08f98def63eb9a3c4a9509f46314897f42ccc3378a153533eb7bcb356483fe27eb2546722bc8862115caa0ef874996e428c8407924bc6599e45eb2e3469acf20846d1dcb34df20802f4d20e028b6ff7ca921960b204c458e80a7fd8e5365f608db7c714ed5a905dec1400e60724c4465ad970d564996aee7fe5679ba165967bfbc8e2de95b7cec011d157a12c01fb9fca0d85abd710deaa5b3f14328115a591b71fd8b556ae13f84a3e8a5ec2589af55d11af5e7bed8d5b43a9c62da82acb2c8b25ff6d4c19c2b5dde95093071b26133ccc95a2922acb07a37c2e8346a7c7821b8fa309622c6276e1ee44a6a8750963ae491dc05141118b9993a9274f4b978f7b3783a96aa153ea0bb5b869bce113d6eac2458a63f4478b94727557778e16d71a65e2cf2a141b1bb128c6357fd8b6e8184801cef0bbb0afe42b8007bc47cbbdf124e525e575d2e3e7ad5f9727c9c7714deddfb1aaa7c661d49d863952c3fc80da3cbc8ec87b914ff7602977929100b103f0d583130c3ec3f54eb32c9fcfc2d10a9a6a375d80ef400c1d9988702b844f8ff99880d58298b885623f7c29810109cda74a82bd5b59bfcb4d182b571d009f15f95d8a15824dee3664df4395399059d68e1842daa68bd82f5e34040619b7c51a0137e49baf7f71a2a6d5716782a7b27aa7bae92002e3cb746e8ea108ce6988607dfd5ab5dc85277b5720c754f7a4d9cdef95debb6dc3be4a85758287dda5dd3d2b62d453d8a7a77352b67ad2bbf467d28257beb9fbd4f1f966dab812346bed1b2de0a008bf291a355de1bba035e566014b423c378d5ffd22625ebcb89d4b05c2bad0d2b05d0695465f8435decdf991dd722fe511bbdf94df3e7d13131c5b64cc79221ae4783"
var cookieStr = "oauth2_referer=dppt.shandong.chinatax.gov.cn; SSO_SECURITY_CHECK_TOKEN=83bdb417598e45a98543262ba1c63491; dzfp-ssotoken=9164615fbe2b491593edc91850e598b6; lzkqow39189=5f852f6319df410d87e15ca70e3cba83; c_time=12; lzkqow38189=1727590561909; DTSwUOYx7MiWN=7d315e94fdfbe99552186ff21412f8f35c7ede2555e36cd3690abd64eeaa1522"

// console.log = console.debug = function () { }

document = {
    cookie: cookieStr,
    hidden: false,
    visibilityState: 'hidden',
    webkitVisibilityState: 'hidden'
}

navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    plugins: { length: 0 },
    webdriver: false,
    languages: ["zh-CN", "en-US", "en", "en-GB"]
}
window.setInterval = function () {
}
window.setTimeout = function () {
}
window.fingerprint_getfp = fingerprint_getfp

function murmurhash3_32_gc(_0x4e2cf8, _0xeca1ad) {
    var _0x1c3725, _0xfec517, _0x3feaaf, _0xd6a3e9, _0x138db4, _0x50e77b, _0x43b097;
    _0x1c3725 = _0x4e2cf8["length"] & 3,
        _0xfec517 = _0x4e2cf8["length"] - _0x1c3725,
        _0x3feaaf = _0xeca1ad,
        _0x138db4 = 0x65f4c89c * 0x3 + 0x96b95 * -0x526 + -0x34c04b65,
        _0x50e77b = -0x27f0906d * 0x1 + 0xd22a8ef * 0x1 + 0x36551d11,
        _0x43b097 = -0x1b4a + -0x1b50 + 0x369a;
    while (_0x43b097 < _0xfec517) {
        _0x814345 = _0x4e2cf8["charCodeAt"](_0x43b097) & 0x486 + -0x6b1 + 0x32a | (_0x4e2cf8["charCodeAt"](++_0x43b097) & 0x145 + -0x1 * -0xa2b + -0x63 * 0x1b) << 0x125 * -0x1c + 0xc95 * 0x1 + 0x137f * 0x1 | (_0x4e2cf8["charCodeAt"](++_0x43b097) & 0x539 * 0x1 + 0x19bb + -0x1df5 * 0x1) << 0x21ce + -0x10a7 + -0x23 * 0x7d | (_0x4e2cf8["charCodeAt"](++_0x43b097) & 0x1023 + 0x1 * -0x1979 + 0x211 * 0x5) << 0x815 * -0x3 + -0xd8d * 0x2 + 0x3371,
            ++_0x43b097,
            _0x814345 = (_0x814345 & 0x1c * -0xab + 0x1bd8d + -0x2 * 0x556d) * _0x138db4 + (((_0x814345 >>> -0x1329 + -0x240a + 0x3743) * _0x138db4 & 0x18111 + -0x209 * 0x71 + 0x7c3 * 0xd) << -0x26 * 0x4a + -0x20db + -0x1 * -0x2be7) & 0x37fccf78 + -0x1 * 0x1088f0113 + 0x1d092319a,
            _0x814345 = _0x814345 << 0x15b8 + 0x3 * 0x78c + 0x407 * -0xb | _0x814345 >>> -0x81a + 0x20d0 + -0x18a5,
            _0x814345 = (_0x814345 & 0x7c3a * -0x1 + -0x1 * -0x15d49 + 0x1ef0) * _0x50e77b + (((_0x814345 >>> -0xe * -0x85 + -0x1fcd + 0x1897) * _0x50e77b & 0x1d989 + -0x490 * 0x23 + -0x39da) << -0x4 * 0x1db + 0x1a00 + 0x13c * -0xf) & -0x1ddde6e07 + -0x1ca149eef + -0x4a7f30cf5 * -0x1,
            _0x3feaaf ^= _0x814345,
            _0x3feaaf = _0x3feaaf << -0x16e6 + -0x9f8 + 0x20eb | _0x3feaaf >>> 0x1ac9 + 0x1 * 0x1c42 + -0x36f8 * 0x1,
            _0xd6a3e9 = (_0x3feaaf & 0x1 * -0x1d6b3 + 0xd6c4 * -0x2 + 0x4843a * 0x1) * (-0x1 * 0x55d + -0x456 + -0x2 * -0x4dc) + (((_0x3feaaf >>> 0x256a + -0x4 * 0x757 + -0x7fe) * (-0x7 * -0x13d + -0x6 * 0x58e + 0xa2 * 0x27) & 0x174f + -0xc88 * -0x2 + 0xcfa0) << -0x9c7 * 0x3 + -0x836 + 0x259b) & -0x1 * -0x53339bb4 + -0x8756d8 * 0x12 + 0xb * 0x1092f451,
            _0x3feaaf = (_0xd6a3e9 & 0x14945 + -0x10157 + 0xb811) + (0x1409 * -0x8 + 0x7f4c + 0x8c60) + (((_0xd6a3e9 >>> 0x2 * 0x184 + -0x1435 + 0x113d) + (0x4a6c + 0x11b * -0xe5 + 0x17 * 0x11c9) & 0x5bb + 0xec7 + -0xfb3 * -0xf) << -0x112 * -0x2 + -0x1d3b + 0x14b * 0x15);
    }
    _0x814345 = 0x1c34 + 0x40 * 0x57 + -0x31f4;
    switch (_0x1c3725) {
        case 3:
            _0x814345 ^= (_0x4e2cf8["charCodeAt"](_0x43b097 + (-0xd8 * 0x2b + 0x227c + -0x42 * -0x7)) & 0xa7a + 0x8ed + -0x1f * 0x98) << -0x1997 + 0x2ce * -0x2 + 0x35 * 0x97;
        case 2:
            _0x814345 ^= (_0x4e2cf8["charCodeAt"](_0x43b097 + (0x1284 + 0xbb6 + -0x1e39)) & -0x9 * -0x1b3 + 0x1a5d + -0x28a9) << 0x569 + -0x1b0e + 0x15ad;
        case 1:
            _0x814345 ^= _0x4e2cf8["charCodeAt"](_0x43b097) & -0xdc6 + 0x2514 + -0x164f,
                _0x814345 = (_0x814345 & 0x9143 + 0x9e57 + 0x1 * -0x2f9b) * _0x138db4 + (((_0x814345 >>> 0x6bb * -0x3 + 0xf47 * -0x1 + 0x2388) * _0x138db4 & -0x19 * 0x950 + -0x23 * -0x20d + 0x154 * 0x13a) << 0x11 * -0x22f + 0xaa2 * -0x1 + 0x1 * 0x2fd1) & 0x7f26f394 + -0x11a4f9ea3 + 0x114e67 * 0x17c2,
                _0x814345 = _0x814345 << 0xb1e + -0x327 + 0x2e * -0x2c | _0x814345 >>> 0xf3e + -0x1d57 + 0xe2a,
                _0x814345 = (_0x814345 & -0x77a2 + -0x1f74c + 0x36eed) * _0x50e77b + (((_0x814345 >>> 0x1a * 0xc5 + 0x8fa + 0x6 * -0x4d2) * _0x50e77b & -0x183d7 + 0x70f2 + -0x3d * -0x8b4) << 0xfee + -0x1c6 * -0x6 + -0x1a82) & -0x102bc11f * 0xd + 0x2ab1eec * 0x1b + 0x18a2c8bae,
                _0x3feaaf ^= _0x814345;
    }
    return _0x3feaaf ^= _0x4e2cf8["length"],
        _0x3feaaf ^= _0x3feaaf >>> -0x581 * 0x3 + 0x48 * 0x41 + 0x1 * -0x1b5,
        _0x3feaaf = (_0x3feaaf & -0x16a43 + -0xf9e6 + 0x36428) * (-0x135a * 0x1d2a9 + 0xc3b49e6a + -0x1a823995) + (((_0x3feaaf >>> 0xb68 + 0x13a * -0x1e + -0x1974 * -0x1) * (0x36e11b67 + 0x17 * -0xab0cbd0 + -0x7627a27 * -0x2c) & 0x1d2ec + 0x186a8 + -0x25995) << 0x15a6 + 0x1a8d + 0x3023 * -0x1) & 0x3e8d33e3 * -0x5 + -0x1b328f047 + 0x3ebeaf3b5,
        _0x3feaaf ^= _0x3feaaf >>> 0x3 * 0xa3 + 0x1e9 + -0x3c5,
        _0x3feaaf = (_0x3feaaf & 0x3 * -0x47ce + 0x1b2a8 + -0x1 * -0x24c1) * (0x3 * 0x20fd00cd + -0x3 * 0x11c0da2a + -0x19e96e5 * -0x5c) + (((_0x3feaaf >>> 0x13 * -0x14b + 0x1b * -0x11 + 0x164 * 0x13) * (-0xef880e3c + -0x7799167 * 0x1 + 0x1b9b44dd8) & 0x3dc * 0x25 + 0x15c32 * 0x1 + -0xeaff) << 0xd85 + -0x13 + -0x1 * 0xd62) & 0x1 * -0x1dca607ef + -0x23 * 0x9a59a81 + 0x42e4a2791,
        _0x3feaaf ^= _0x3feaaf >>> -0x3 * -0xfe + 0x625 + -0x90f * 0x1,
        _0x3feaaf >>> 0x10b + -0x1836 + -0x9 * -0x293;
}
function fingerprint_getfp() {
    keys = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36", //userAgent
        "1440x2560x24", // screen height x width x colorDepth
        -480, // getTimezoneOffset
        true, //sessionStorage
        true, //localStorage
        "", // 浏览器插件plugins
        window.$dunm.getCookie("dzfp-ssotoken")
    ]
    var _0x483e92 = murmurhash3_32_gc(keys["join"]("###"), 31);
    console.debug("~~调用fingerprint_getfp：", _0x483e92)
    return _0x483e92;
}

const _0x5562cd = _0x824c44 => {
    return String["fromCharCode"]["apply"](null, Array["from"](new Uint16Array(_0x824c44)));
}
    , _0x3bb6e2 = _0x10e994 => {
        const _0x2723f9 = [];
        let _0x5ceb48 = 0;
        while (_0x5ceb48 < _0x10e994["byteLength"]) {
            const _0x11231c = _0x5ceb48 + 4
                , _0x213fb8 = _0x3f1d0f(_0x10e994, _0x5ceb48, _0x11231c)
                , _0x480d05 = _0x11231c
                , _0x39cb9f = _0x11231c + _0x213fb8 * 2
                , _0x250889 = _0x2c69b8(_0x10e994, _0x480d05, _0x39cb9f);
            _0x2723f9["push"](_0x250889),
                _0x5ceb48 = _0x39cb9f;
        }
        return _0x2723f9;
    }
    , _0x2c07e0 = (_0x328066, _0x5b4bf6, _0x59550f) => {
        // console.debug("this.ip被修改: ", _0x5b4bf6, "---->", _0x5b4bf6+1);
        return _0x328066[_0x5b4bf6];
    }
    , _0x3f1d0f = (_0xf6d2b8, _0x471881, _0x35b0fc) => {
        return new Uint32Array(_0xf6d2b8["slice"](_0x471881, _0x35b0fc))[0];
    }
    , _0x2c69b8 = (_0xff0639, _0x305a6d, _0x82cbec) => {
        return _0x5562cd(_0xff0639["slice"](_0x305a6d, _0x82cbec));
    }
    , _0x5080c4 = 240
    , _0x331777 = ~_0x5080c4
    , _0x45b6c7 = (_0x1ae52c, _0x2e6d69 = 0) => {
        const _0x3bb0e4 = _0x1ae52c // this.codes
            , _0x5c0b8c = _0x3bb0e4[_0x2e6d69++] // 从this.code中取值
            , [_0x147553, _0x259c58] = _0x23e2e5(_0x5c0b8c)
            , _0xc49140 = _0x147553 === 48 ? _0x261804(_0x3bb0e4, _0x2e6d69, _0x259c58) : _0xcd79c9(_0x3bb0e4, _0x2e6d69, _0x259c58);
        return [_0x147553, _0xc49140, _0x259c58];
    }
    , _0x49d49c = new Float64Array(1)
    , _0x4dd639 = new Uint8Array(_0x49d49c["buffer"])
    , _0x261804 = (_0x1ebfeb, _0xd6462f = 0, _0x44405e) => {
        _0x49d49c[0] = 0;
        const _0x174810 = _0x4dd639["length"] - _0x44405e;
        for (let _0x37f8e8 = 0; _0x37f8e8 < _0x44405e; _0x37f8e8++) {
            _0x4dd639[_0x174810 + _0x37f8e8] = _0x1ebfeb[_0xd6462f + _0x37f8e8];
        }
        // console.debug("调用：_0x261804", _0x49d49c[0])

        return _0x49d49c[0];
    }
    , _0x1d4b8d = new Int32Array(1)
    , _0x3fdf3f = new Uint8Array(_0x1d4b8d["buffer"])
    , _0xcd79c9 = (_0x4500bd, _0x5b0663 = 0, _0x1c0785) => {
        _0x1d4b8d[0] = 0;
        for (let _0x17254b = 0; _0x17254b < _0x1c0785; _0x17254b++) {
            _0x3fdf3f[_0x17254b] = _0x4500bd[_0x17254b + _0x5b0663];
        }
        return _0x1d4b8d[0];
    }
    , _0x23e2e5 = _0x19a618 => {
        const _0x578cd2 = _0x19a618 & _0x5080c4
            , _0x40a5d6 = _0x19a618 & _0x331777;
        return [_0x578cd2, _0x40a5d6];
    }
    ;
class _0x46f3de {
    constructor(_0xa3d001, _0x5f40ff) {
        this["key"] = _0xa3d001,
            this["value"] = _0x5f40ff;
    }
}
class _0x5c99bb {
    constructor(_0xd499f1 = function () { }) {
        this["toStrFn"] = _0xd499f1,
            this["table"] = {};
    }
    ["set"](_0x3636cc, _0x50eaaf) {
        if (_0x3636cc != null && _0x50eaaf != null) {
            const _0x4b1edd = this["djb2HashCode"](_0x3636cc);
            return this["table"][_0x4b1edd] = new _0x46f3de(_0x3636cc, _0x50eaaf),
                !![];
        }
        return ![];
    }
    ["djb2HashCode"](_0x5052d1) {
        if (typeof _0x5052d1 === "number")
            return _0x5052d1;
        const _0x48a755 = this["toStrFn"](_0x5052d1);
        let _0x3ccde6 = 5381;
        for (let _0x21a2f6 = 0; _0x21a2f6 < _0x48a755["length"]; _0x21a2f6++) {
            _0x3ccde6 = _0x3ccde6 * 33 + _0x48a755["charCodeAt"](_0x21a2f6);
        }

        return _0x3ccde6 % 1013;
    }
    ["get"](_0x19b432) {
        const _0x5a6b9f = this["table"][this["djb2HashCode"](_0x19b432)];
        return _0x5a6b9f == null ? undefined : _0x5a6b9f["value"];
    }
}
class _0x52099c {
    constructor(_0x24a525 = {}, _0x13b10e = [], _0x82a0d6 = !![]) {
        this["scope"] = _0x24a525,
            this["heap"] = _0x13b10e,
            this["isRestoreWhenChange"] = _0x82a0d6,
            this["scope"]["blockNameMap"] = new _0x5c99bb();
    }
    ["front"](_0x1293a6) {
        this["scope"] = Object["setPrototypeOf"]({
            "len": this["heap"]["length"]
        }, this["scope"]),
            this["scope"]["blockName"] = _0x1293a6,
            this["scope"]["blockNameMap"]["set"](_0x1293a6, this["scope"]);
    }
    ["back"](_0x47e15d) {
        const _0xf188d9 = this["scope"]["blockNameMap"]["get"](_0x47e15d);
        if (this["isRestoreWhenChange"]) {
            const _0x45c37e = _0xf188d9["len"];
            this["heap"]["splice"](_0x45c37e);

        }
        this["scope"] = Object["getPrototypeOf"](_0xf188d9);
    }
    ["fork"]() {
        const _0x292d20 = Object["setPrototypeOf"]({
            "len": this["heap"]["length"]
        }, this["scope"]);
        return new _0x52099c(_0x292d20, this["heap"], this["isRestoreWhenChange"]);
    }
    ["new"](_0x3d31e3) {
        const _0x146c71 = this["heap"]["length"];
        this["scope"][_0x3d31e3] = _0x146c71,
            this["heap"]["push"](void 0);
    }
    ["set"](_0x2bd9c2, _0x3fee1f) {
        if (!(_0x2bd9c2 in this["scope"]))
            throw new Error("variable is used before decleration");
        const _0x5d62b7 = this["scope"][_0x2bd9c2];
        this["heap"][_0x5d62b7] = _0x3fee1f;
    }
    ["get"](_0x490f69) {
        const _0x442d6f = this["scope"][_0x490f69],
            get_v = this["heap"][_0x442d6f]
        return get_v;
    }
}
; const _0x507169 = Uint8Array["from"]["bind"](Uint8Array)
    , _0x12773e = _0x35f1bf => _0x35f1bf["replace"](/[^A-Za-z0-9\+\/]/g, '')
    , _0x6bc24e = _0x47b948 => _0x507169(Buffer["from"](_0x47b948, "base64"))
    , _0x232933 = _0x340673 => _0x6bc24e(_0x3c5a42(_0x340673))
    , _0x3c5a42 = _0x34a8b1 => _0x12773e(_0x34a8b1["replace"](/[-_]/g, _0xefc9e4 => _0xefc9e4 == "-" ? '+' : '/'));
const _0x43707b = Symbol();
class _0xcef111 extends Error {
    constructor(_0x1af692) {
        var _0x1afc52 = _0x11834e;
        super(_0x1af692),
            this[_0x1afc52(0x2f4)] = _0x1af692;
    }
}
class _0x3abb02 {
    constructor(_0x14a476, _0x518555, _0x19ae6a, _0x5d8817, _0x254dc2, _0x8ab369) {
        console.debug(_0x14a476)
        console.debug(_0x518555)
        console.debug(_0x19ae6a)
        console.debug(_0x5d8817)
        console.debug(_0x254dc2)
        this["codes"] = _0x14a476,
            this["functionsTable"] = _0x518555,
            this["entryIndx"] = _0x19ae6a,
            this["stringsTable"] = _0x5d8817,
            this["globalSize"] = _0x254dc2,
            this["ctx"] = _0x8ab369, // window
            this['ip'] = 0,
            this['fp'] = 0,
            this['sp'] = -1,
            this["stack"] = [],
            this["isRunning"] = ![];
        const _0x6edc66 = new _0x52099c();
        _0x6edc66["isRestoreWhenChange"] = ![],
            this["mainFunction"] = this["parseToJsFunc"](_0x518555[this["entryIndx"]], _0x6edc66),
            this["init"]();
    }
    ["init"]() {
        const { globalSize: _0xbf3c0f, mainFunction: _0x2cbd90 } = this
            , { meta: _0x475bc7 } = _0x2cbd90["__vm_func_info__"]
            , [_0x4ae76f, _0x9167f8, _0x43ace2] = _0x475bc7;
        this["stack"]["splice"](0);
        const _0x1a3d6e = _0xbf3c0f + 1;
        this['fp'] = _0x1a3d6e,
            this["stack"][this['fp']] = -1,
            this['sp'] = this['fp'],
            this["stack"]["length"] = this['sp'] + 1,
            this["callingFunctionInfos"] = [],
            this["allThis"] = [];
    }
    ["run"]() {
        this["callFunction"](this["mainFunction"], void 0, '', 0, ![]),
            this["isRunning"] = !![];
        while (this["isRunning"]) {
            this["fetchAndExecute"]();
        }
    }
    ["setReg"](_0x2eebfa, _0x51cc40) {
        const _0xb24698 = this["callingFunctionInfo"];
        if (_0x2eebfa["type"] === 208)
            this["checkVariableScopeAndNew"](),
                _0xb24698["variables"]["set"](_0x2eebfa["index"], _0x51cc40["value"]);
        else {
            if (_0x2eebfa["type"] === 16)
                this["checkClosureAndFork"](),
                    this["callingFunctionInfo"]["closureScope"]["set"](_0x2eebfa["index"], _0x51cc40["value"]);
            else {
                if (_0x2eebfa["type"] === 0 || _0x2eebfa["type"] === 112) {
                    _0x2eebfa["type"] === 112 && (this["callingFunctionInfo"]["returnValue"] = _0x51cc40["value"]),
                        _0x2eebfa["raw"] <= -4 ? this["callingFunctionInfo"]["args"][-4 - _0x2eebfa["raw"]] = _0x51cc40["value"] : this["stack"][_0x2eebfa["index"]] = _0x51cc40["value"];
                    if (_0x2eebfa["raw"] > -4) {
                    }
                }
    
            }
        }
    }
    ["newReg"](_0xfb18c2) {
        if (_0xfb18c2["type"] === 208)
            this["checkVariableScopeAndNew"](),
                this["callingFunctionInfo"]["variables"]["new"](_0xfb18c2["index"]);
        else {
            if (_0xfb18c2["type"] === 16)
                this["checkClosureAndFork"](),
                    this["callingFunctionInfo"]["closureScope"]["new"](_0xfb18c2["index"]);
        }
    }
    ["fetchAndExecute"]() {
        let _0x4d20dd = _0x2c07e0(this["codes"], this['ip'], ++this['ip'])
            , _0x582fef = ![];

        switch (_0x4d20dd) {
            case 0:
            case 1:
                {
                    const _0x581211 = this["nextOperant"]();
                    this["newReg"](_0x581211);
                    break;
                }
            case 36:
                {
                    const _0xd06481 = this["nextOperant"]()["value"];
                    this["push"](_0xd06481);
                    break;
                }
            case 42:
                console.debug("case 42: 设置isRunning为false")
                {
                    this["isRunning"] = ![];
                    break;
                }
            case 40:
                {
                    this["returnCurrentFunction"]();
                    break;
                }
            case 39:

                {
                    const _0x5186cc = this["nextOperant"]();
                    break;
                }
            case 2:
                {
                    const _0xfa571f = this["nextOperant"]()
                        , _0xfbb90c = this["nextOperant"]();
                    this["setReg"](_0xfa571f, _0xfbb90c);
                    break;
                }
            case 27:
                {
                    const _0xb1c9bf = this["nextOperant"]();
                    this['ip'] = _0xb1c9bf["value"];
                    break;
                }
            case 32:
                {
                    const _0x8070b = this["nextOperant"]()
                        , _0xa3e2dd = this["nextOperant"]();
                    _0x8070b["value"] && (this['ip'] = _0xa3e2dd["value"]);
                    break;
                }
            case 33:
                {
                    const _0x47bf95 = this["nextOperant"]()
                        , _0x17a72e = this["nextOperant"]();

                    !_0x47bf95["value"] && (this['ip'] = _0x17a72e["value"]);
                    break;
                }
            case 43:
            case 44:
                {
                    let _0x2cb33e;
                    _0x4d20dd === 43 ? _0x2cb33e = this["ctx"] : _0x2cb33e = this["nextOperant"]()["value"];
                    const _0x46faea = this["nextOperant"]()["value"]
                        , _0x1cada5 = this["nextOperant"]()["value"]
                        , _0x16e1a6 = this["nextOperant"]()["value"];
                    _0x582fef = this["callFunction"](void 0, _0x2cb33e, _0x46faea, _0x1cada5, _0x16e1a6);
                    break;
                }
            case 45:

                {
                    const _0x22ab89 = this["nextOperant"]()
                        , _0x39d447 = _0x22ab89["value"]
                        , _0x485483 = this["nextOperant"]()["value"]
                        , _0xa2809a = this["nextOperant"]()["value"];
                    _0x582fef = this["callFunction"](_0x39d447, void 0, '', _0x485483, _0xa2809a);
                    break;
                }
            case 46:

                {
                    const _0x35e614 = this["nextOperant"]()
                        , _0xd55208 = this["nextOperant"]()
                        , _0x507105 = this["ctx"][_0xd55208["value"]];
                    this["setReg"](_0x35e614, {
                        "value": _0x507105
                    });
                    break;
                }
            case 48:

                {
                    const _0x54ab2a = this["nextOperant"]()
                        , _0x3ad60e = this["nextOperant"]();
                    this["ctx"][_0x54ab2a["value"]] = _0x3ad60e["value"];
                    break;
                }
            case 49:

                {
                    const _0x320efd = this["nextOperant"]()
                        , _0x29e607 = {};
                    this["setReg"](_0x320efd, {
                        "value": _0x29e607
                    });
                    break;
                }
            case 51:// 检测headers

                {
                    const _0x47b6ca = this["nextOperant"]()
                        , _0x2cbbc5 = this["nextOperant"]()
                        , _0x554fb9 = this["nextOperant"]();
                    try {
                        this["setReg"](_0x47b6ca, {
                            "value": new RegExp(_0x2cbbc5["value"], _0x554fb9["value"])
                        });
                    } catch (_0x1c1d40) {
                        throw new _0xcef111(_0x1c1d40);
                    }
                    break;
                }
            case 50:

                {
                    const _0x362390 = this["nextOperant"]()
                        , _0x35b0fd = [];
                    this["setReg"](_0x362390, {
                        "value": _0x35b0fd
                    });
                    break;
                }
            case 52:

                {
                    const _0x251786 = this["nextOperant"]()["value"]
                        , _0x586eda = this["nextOperant"]()["value"]
                        , _0x5ef920 = this["nextOperant"]()["value"];
                    _0x251786[_0x586eda] = _0x5ef920;
                    break;
                }
            case 53:

                {
                    const _0x1b7d88 = this["nextOperant"]()
                        , _0x23905d = this["nextOperant"]()
                        , _0x4d9434 = _0x23905d["value"]
                        , _0x246554 = this["parseToJsFunc"](_0x4d9434, this["callingFunctionInfo"]["closureScope"]["fork"]());
                    this["setReg"](_0x1b7d88, {
                        "value": _0x246554
                    });
                    break;
                }
            case 47:

                {
                    const _0x2b1163 = this["nextOperant"]()
                    const _0x205d26 = this["nextOperant"]()
                    const _0x3f1cbf = this["nextOperant"]()
                    const _0xc142db = _0x205d26["value"][_0x3f1cbf["value"]];
                    this["setReg"](_0x2b1163, {
                        "value": _0xc142db
                    });
                    break;
                }
            case 11:

                {
                    this["binaryExpression"]((_0x262fd7, _0x47a933) => _0x262fd7 < _0x47a933);
                    break;
                }
            case 12:

                {
                    this["binaryExpression"]((_0x3a4132, _0x56f931) => _0x3a4132 > _0x56f931);
                    break;
                }
            case 13:

                {
                    this["binaryExpression"]((_0x3474e9, _0x3c90d8) => _0x3474e9 === _0x3c90d8);
                    break;
                }
            case 16:

                {
                    this["binaryExpression"]((_0xa615ef, _0x482ea8) => _0xa615ef !== _0x482ea8);
                    break;
                }
            case 17:

                {
                    this["binaryExpression"]((_0x349f05, _0xfc8875) => _0x349f05 == _0xfc8875);
                    break;
                }
            case 18:

                {
                    this["binaryExpression"]((_0x9451fe, _0x2b69d1) => _0x9451fe != _0x2b69d1);
                    break;
                }
            case 14:

                {
                    this["binaryExpression"]((_0x4d9644, _0x97d683) => _0x4d9644 <= _0x97d683);
                    break;
                }
            case 15:
                {
                    this["binaryExpression"]((_0x489afc, _0x41ff6c) => _0x489afc >= _0x41ff6c);
                    break;
                }
            case 3:

                {
                    this["binaryExpression"]((_0x11c729, _0x22669c) => _0x11c729 + _0x22669c);
                    break;
                }
            case 4:

                {
                    this["binaryExpression"]((_0x35ed2e, _0x48bb83) => _0x35ed2e - _0x48bb83);
                    break;
                }
            case 5:

                {
                    this["binaryExpression"]((_0x618975, _0x3737d7) => _0x618975 * _0x3737d7);
                    break;
                }
            case 6:

                {
                    this["binaryExpression"]((_0x712a86, _0x4cfd50) => _0x712a86 / _0x4cfd50);
                    break;
                }
            case 7:

                {
                    this["binaryExpression"]((_0x10572f, _0x91d0a3) => _0x10572f % _0x91d0a3);
                    break;
                }
            case 21:

                {
                    this["binaryExpression"]((_0x58f234, _0x2a5d5c) => _0x58f234 & _0x2a5d5c);
                    break;
                }
            case 22:

                {
                    this["binaryExpression"]((_0x134913, _0x1af25d) => _0x134913 | _0x1af25d);
                    break;
                }
            case 23:

                {
                    this["binaryExpression"]((_0x36954d, _0x18c28a) => _0x36954d ^ _0x18c28a);
                    break;
                }
            case 24:

                {
                    this["binaryExpression"]((_0x1054f5, _0x12d76d) => _0x1054f5 << _0x12d76d);
                    break;
                }
            case 25:

                {
                    this["binaryExpression"]((_0xc714f4, _0x500058) => _0xc714f4 >> _0x500058);
                    break;
                }
            case 26:

                {
                    this["binaryExpression"]((_0x5932a9, _0x1839c5) => _0x5932a9 >>> _0x1839c5);
                    break;
                }
            case 19:

                {
                    this["binaryExpression"]((_0xa845c9, _0x4fc3e3) => _0xa845c9 && _0x4fc3e3);
                    break;
                }
            case 20:

                {
                    this["binaryExpression"]((_0x49aa5e, _0x3199cf) => _0x49aa5e || _0x3199cf);
                    break;
                }
            case 63:

                {
                    this["binaryExpression"]((_0x10ba67, _0x293684) => {
                        return _0x10ba67 instanceof _0x293684;
                    }
                    );
                    break;
                }
            case 62:

                {
                    this["binaryExpression"]((_0x30d20d, _0x1262b7) => {
                        return _0x30d20d in _0x1262b7;
                    }
                    );
                    break;
                }
            case 54:

                {
                    const _0x3836cb = this["nextOperant"]();
                    this["getReg"](_0x3836cb);
                    break;
                }
            case 55:

                {
                    this["uniaryExpression"](_0xb791f2 => +_0xb791f2);
                    break;
                }
            case 56:

                {
                    this["uniaryExpression"](_0x25197e => -_0x25197e);
                    break;
                }
            case 58:

                {
                    this["uniaryExpression"](_0x270ef8 => void _0x270ef8);
                    break;
                }
            case 57:

                {
                    this["uniaryExpression"](_0x46c75e => ~_0x46c75e);
                    break;
                }
            case 60:

                {
                    this["uniaryExpression"](_0x2213d9 => !_0x2213d9);
                    break;
                }
            case 61:

                {
                    this["uniaryExpression"](_0x5ad5c3 => typeof _0x5ad5c3);
                    break;
                }
            case 59:

                {
                    const _0x18dda4 = this["nextOperant"]()["value"]
                        , _0x180980 = this["nextOperant"]()["value"];
                    delete _0x18dda4[_0x180980];
                    break;
                }
            case 64:

                {
                    this["setReg"](this["nextOperant"](), {
                        "value": this["currentThis"]
                    });
                    break;
                }
            case 65:

                {
                    const _0xc69382 = this["nextOperant"]()
                        , _0x3f6a51 = this["nextOperant"]();
                    let _0x2a7c44 = 1;
                    const _0x25da43 = this["callingFunctionInfo"];
                    while (_0x2a7c44 > 0 && this["isRunning"]) {

                        try {
                            const [_0x4b1cdd, _0xf74014] = this["fetchAndExecute"]();
                            _0x4d20dd = _0x4b1cdd;
                            _0xf74014 && _0x2a7c44++;
                            if (_0x4b1cdd === 40) {
                                _0x2a7c44--;
                                if (_0x2a7c44 === 0)
                                    break;
                            }
                            if (_0x4b1cdd === 66 && _0x2a7c44 === 1) {
                                this['ip'] = _0x3f6a51["value"];
                                break;
                            }
                        } catch (_0x67aea4) {
                            if (_0x67aea4 instanceof _0xcef111)
                                throw _0x67aea4;
                            this["popToFunction"](_0x25da43),
                                this["error"] = _0x67aea4,
                                this['ip'] = _0xc69382["value"];

                            break;
                        }
                    }
                    break;
                }
            case 67:

                {
                    const _0x1667b3 = this["nextOperant"]();
                    throw _0x1667b3["value"];
                    break;
                }
            case 66:

                {
                    break;
                }
            case 68:

                {
                    const _0x212d18 = this["nextOperant"]();
                    this["setReg"](_0x212d18, {
                        "value": this["error"]
                    });
                    break;
                }
            case 69:

                {
                    const _0x11824f = this["nextOperant"]();
                    this["setReg"](_0x11824f, {
                        "value": this["stack"][this['fp'] - 3]
                    });
                    break;
                }
            case 70:

                {
                    const _0x4e109a = this["nextOperant"]()
                        , _0xb96fa0 = this["nextOperant"]()
                        , _0xcc5716 = this["nextOperant"]()
                        , _0x2de774 = this["nextOperant"]();
                    _0x6cee42: for (const _0x33eb4a in _0xb96fa0["value"]) {
                        this["setReg"](_0x4e109a, {
                            "value": _0x33eb4a
                        });
                        while (!![]) {
                            const _0x254a17 = this["fetchAndExecute"]()[0];
                            if (_0x254a17 === 72)
                                break _0x6cee42;
                            if (_0x254a17 === 71 || _0x254a17 === 73) {
                                this['ip'] = _0xcc5716["value"];
                                continue _0x6cee42;
                            }
                        }
                    }
                    this['ip'] = _0x2de774["value"];

                    break;
                }
            case 71:
            case 72:
            case 73:
                {
                    break;
                }
            case 75:
                {
                    const _0x30cb9e = this["nextOperant"]();
                    this["checkClosureAndFork"](),
                        this["checkVariableScopeAndNew"](),
                        this["callingFunctionInfo"]["closureScope"]["front"](_0x30cb9e["value"]),
                        this["callingFunctionInfo"]["variables"]["front"](_0x30cb9e["value"]);
                    break;
                }
            case 77:
            case 76:
                {
                    const _0xd262f = this["nextOperant"]();
                    this["callingFunctionInfo"]["closureScope"]["back"](_0xd262f["value"]),
                        this["callingFunctionInfo"]["variables"]["back"](_0xd262f["value"]);
                    break;
                }
            default:
                throw new _0xcef111("Unknow command 1 CLS");
        }
        return [_0x4d20dd, _0x582fef];
    }
    ["checkClosureAndFork"]() {
        const _0x2365d1 = this["callingFunctionInfo"];
        !_0x2365d1["isInitClosure"] && (_0x2365d1["closureScope"] = this["callingFunctionInfo"]["closureScope"]["fork"](),
            _0x2365d1["isInitClosure"] = !![]);
    }
    ["checkVariableScopeAndNew"]() {

        !this["callingFunctionInfo"]["variables"] && (this["callingFunctionInfo"]["variables"] = new _0x52099c());
    }
    ["returnCurrentFunction"]() {

        const _0x42bd34 = this["stack"]
            , _0x545515 = this['fp'];
        this['fp'] = _0x42bd34[_0x545515],
            this['ip'] = _0x42bd34[_0x545515 - 1],
            this['sp'] = _0x545515 - _0x42bd34[_0x545515 - 2] - 4,
            this["stack"]["splice"](this['sp'] + 1),
            this["callingFunctionInfo"]["returnValue"] === _0x43707b && (this["stack"][0] = undefined),
            this["allThis"]["pop"](),
            this["currentThis"] = this["allThis"][this["allThis"]["length"] - 1],
            this["callingFunctionInfos"]["pop"](),
            this["callingFunctionInfo"] = this["callingFunctionInfos"][this["callingFunctionInfos"]["length"] - 1];

    }
    ["push"](_0x5b0f1d) {
        this["stack"][++this['sp']] = _0x5b0f1d;
    }
    ["nextOperator"]() {
        return _0x2c07e0(this["codes"], this['ip'], ++this['ip']);
    }
    ["nextOperant"]() {
        const [_0x26d47a, _0x43c08f, _0xf4cc2f] = _0x45b6c7(this["codes"], this['ip']++);
        this['ip'] = this['ip'] + _0xf4cc2f;
        // console.log("nextOperant获取到值==》", _0x26d47a, _0x43c08f, {
        //     "type": _0x26d47a,
        //     "value": this["parseValue"](_0x26d47a, _0x43c08f),
        //     "raw": _0x43c08f,
        //     "index": _0x26d47a === 0 ? this['fp'] + _0x43c08f : _0x43c08f
        // })
        return {
            "type": _0x26d47a,
            "value": this["parseValue"](_0x26d47a, _0x43c08f),
            "raw": _0x43c08f,
            "index": _0x26d47a === 0 ? this['fp'] + _0x43c08f : _0x43c08f
        };
    }
    ["parseValue"](_0x5eaffb, _0x1d87b9) {
        switch (_0x5eaffb) {
            case 16:
                const case16value = this["callingFunctionInfo"]["closureScope"]["get"](_0x1d87b9);
                return case16value
            case 0:

                if (_0x1d87b9 <= -4) {
                    const case0value = -4 - _0x1d87b9 < this["callingFunctionInfo"]["args"]["length"] ? this["callingFunctionInfo"]["args"][-4 - _0x1d87b9] : void 0;
                    return case0value
                }
                const case0value = this["stack"][this['fp'] + _0x1d87b9];
                return case0value
            case 96:
            case 48:
            case 128:
                return _0x1d87b9;
            case 32:
                const case3value = this["stack"][_0x1d87b9];
                return case3value
            case 80:
                const case80value = this["stringsTable"][_0x1d87b9];
                return case80value
            case 64:
                const case64value = this["functionsTable"][_0x1d87b9];
                return case64value
            case 112:
                const case112value = this["stack"][0];
                return case112value
            case 144:
                const case114value = !!_0x1d87b9;
                return case114value
            case 160:
                return null;
            case 176:
                return void 0;
            case 208:
                if (!this["callingFunctionInfo"]["variables"])
                    return undefined;
                return this["callingFunctionInfo"]["variables"]["get"](_0x1d87b9);
            default:
                throw new _0xcef111("Unknown operant " + _0x5eaffb);
        }
    }
    ["uniaryExpression"](_0x31cfef) {
        const _0x5dc9ee = this["nextOperant"]()
            , _0x11568d = _0x31cfef(_0x5dc9ee["value"]);
        this["setReg"](_0x5dc9ee, {
            "value": _0x11568d
        });
    }
    ["binaryExpression"](_0x289a7c) {
        const _0x1f70d5 = this["nextOperant"]()
            , _0x25a358 = this["nextOperant"]()
            , _0x231032 = _0x289a7c(_0x1f70d5["value"], _0x25a358["value"]);
        console.debug("binaryExpression", _0x1f70d5, _0x25a358, "value:", _0x231032, "调用函数：", _0x289a7c.toString())

        this["setReg"](_0x1f70d5, {
            "value": _0x231032
        });
    }
    ["callFunction"](_0x53c070, _0x335804, _0x3bed74, _0x28b105, _0x18661b) {
        const _0x2f055c = this["stack"]
            , _0x38bafa = _0x53c070 || _0x335804[_0x3bed74]; // 获取到加密的主函数 mainFunction
        let _0x51aa8e = ![];
        const _0x4b5a8d = _0x335804 === void 0 || _0x335804 === null || _0x335804 === this["ctx"];
        if (_0x38bafa instanceof _0x25c729 && !_0x18661b) {
            const _0x5e3645 = new _0x95e4cf(_0x28b105); // {numArgs: 0}
            if (!_0x4b5a8d) {
                if (typeof _0x335804[_0x3bed74] === "function")
                    _0x335804[_0x3bed74](_0x5e3645);
                else
                    throw new _0xcef111("The function  is not a function");
            } else
                _0x38bafa(_0x5e3645);
            _0x51aa8e = !![];
        } else {
            const _0x262507 = [];
            for (let _0x14b250 = 0; _0x14b250 < _0x28b105; _0x14b250++) {
                _0x262507["unshift"](_0x2f055c[this['sp']--]);
            }
            !_0x4b5a8d ? _0x2f055c[0] = _0x18661b ? new _0x335804[_0x3bed74](..._0x262507) : _0x335804[_0x3bed74](..._0x262507) : _0x2f055c[0] = _0x18661b ? new _0x38bafa(..._0x262507) : _0x38bafa(..._0x262507),
                this["stack"]["splice"](this['sp'] + 1);

        }
        return _0x51aa8e;
    }
    ["parseToJsFunc"](_0x924d2d, _0x463d83) {
        const _0x2772fa = this
            , _0xba9a91 = function (..._0x5a3526) {
                const [_0x5f11c9, _0x3c3ea5, _0x5975d9] = _0x924d2d; // 初始化的时候 传入[0,0,1], 加密 传入 [2763, 2, 11]
                _0x2772fa["isRunning"] = true;
                const _0x1dab16 = _0x5a3526[0]
                    , _0x57f1bd = !(_0x1dab16 instanceof _0x95e4cf); // false
                let _0x21f35a = 0
                    , _0x2c0172 = [];
                if (_0x57f1bd)
                    _0x5a3526["forEach"](_0xb061a => _0x2772fa["push"](_0xb061a)),
                        _0x21f35a = _0x5a3526["length"],
                        _0x2c0172 = [..._0x5a3526];
                else {
                    _0x21f35a = _0x1dab16["numArgs"];
                    const _0x1de85e = _0x2772fa["sp"] + 1;
                    _0x2c0172 = _0x2772fa["stack"]["slice"](_0x1de85e - _0x21f35a, _0x1de85e);
                }
                const _0x5d6b88 = _0x2772fa["callingFunctionInfo"] = {
                    'isInitClosure': ![],
                    'closureScope': _0x463d83, // 99c heap
                    'variables': null,
                    'args': _0x2c0172, // 传入的加密参数
                    'returnValue': _0x43707b // 返回的加密结果
                };
                _0x2772fa["callingFunctionInfos"]["push"](_0x2772fa["callingFunctionInfo"]);
                _0x2772fa["allThis"]["length"] === 0 ? _0x2772fa["currentThis"] = _0x2772fa["ctx"] : _0x2772fa["currentThis"] = this || _0x2772fa["ctx"];
                _0x2772fa["allThis"]["push"](_0x2772fa["currentThis"]);
                const _0x53168e = _0x2772fa["stack"];
                _0x57f1bd && (_0x53168e[0] = undefined);
                _0x53168e[++_0x2772fa['sp']] = _0x2c0172,
                    _0x53168e[++_0x2772fa['sp']] = _0x21f35a,
                    _0x53168e[++_0x2772fa['sp']] = _0x2772fa['ip'],
                    _0x53168e[++_0x2772fa['sp']] = _0x2772fa['fp'],
                    _0x2772fa['ip'] = _0x5f11c9,
                    _0x2772fa['fp'] = _0x2772fa['sp'],
                    _0x2772fa['sp'] += _0x5975d9;
                if (_0x57f1bd) {
                    let _0x26fa7f = 1;
                    while (_0x26fa7f > 0 && _0x2772fa["isRunning"]) {
                        const [_0x4df389, _0x585431] = _0x2772fa["fetchAndExecute"]();
                        if (_0x585431)
                            _0x26fa7f++;
                        else
                            _0x4df389 === 40 && _0x26fa7f--;
                    }
                    if (_0x5d6b88["returnValue"] !== _0x43707b)
                        return _0x5d6b88["returnValue"];
                }
            };
        Object["setPrototypeOf"](_0xba9a91, _0x25c729["prototype"]);
        try {
            Object["defineProperty"](_0xba9a91, "length", {
                'value': _0x924d2d[1]
            });
        } catch (_0xbbe7d6) { }
        Object["defineProperty"](_0xba9a91, "__vm_func_info__", {
            "enumerable": ![],
            "value": {
                "meta": _0x924d2d
            },
            "writable": ![]
        });
        return  _0xba9a91;
    }
}
const _0x2c29b1 = (_0x3e2617, _0x5c6f85 = {}) => {
    var _0x267e74 = window.$dunm.getCookie("DTSwUOYx7MiWN");
    _0x3e2617["substring"](0, 2) == "04" && (_0x3e2617 = _0x3e2617["substring"](2));
    _0x3e2617 = sm2.doDecrypt(_0x3e2617, _0x267e74, "hex");
    const _0x31be44 = _0x2f7f88(_0x3e2617) // 转toUint8Array-buffer-array
        , _0x1dd6f9 = _0x3f1d0f(_0x31be44, 0, 4) // slice--> Uint32Array--> [0]
        , _0x144c7c = _0x3f1d0f(_0x31be44, 4, 8)
        , _0x456ac = _0x3f1d0f(_0x31be44, 8, 12)
        , _0x272501 = _0x3f1d0f(_0x31be44, 12, 16)
        , _0xf5eb53 = _0x3bb6e2(_0x31be44["slice"](_0x456ac))
        , _0x4a7c86 = new Uint8Array(_0x31be44["slice"](16, _0x144c7c))
        , _0x30a23f = _0x31be44["slice"](_0x144c7c, _0x456ac)
        , _0x40d555 = _0x4151ca(_0x30a23f);
    return new _0x3abb02(_0x4a7c86, _0x40d555, _0x1dd6f9, _0xf5eb53, _0x272501, _0x5c6f85);
}
    , _0x2f7f88 = _0x327232 => {
        var _0x60311d = _0x232933(_0x327232);
        return _0x60311d["buffer"];
    }
    , _0x4151ca = _0x243043 => {
        const _0x16b081 = [];
        let _0x4c0fee = 0;
        while (_0x4c0fee < _0x243043["byteLength"]) {
            const _0x282fa8 = _0x4c0fee + 4
                , _0x25ae2b = _0x3f1d0f(_0x243043, _0x4c0fee, _0x282fa8)
                , _0xc6dcbf = new Uint16Array(_0x243043["slice"](_0x282fa8, _0x282fa8 + 4));
            _0x16b081["push"]([_0x25ae2b, _0xc6dcbf[0], _0xc6dcbf[1]]),
                _0x4c0fee += 8;
        }
        return _0x16b081;
    }
    ;
class _0x25c729 extends Function {
    constructor() {
        super();
    }
}
class _0x95e4cf {
    constructor(_0x25d026) {
        this["numArgs"] = _0x25d026;
    }
}
; class _0x49feb2 {
    constructor() {
        this["sm3hash"] = _0x532197 => {
            var sm3hasha = CryptoJS.MD5(_0x532197).toString(),
                sm3hashv = sm3(sm3hasha);
            console.debug("sm3hash加密(bs5-digest):", _0x532197, "结果：", sm3hashv)
            return sm3hashv;
        }
            ,
            this["sha1hash"] = _0x5993d3 => {
                var sha1hashv = CryptoJS.SHA1(_0x5993d3).toString();
                console.debug("sha1hash加密:", _0x5993d3, sha1hashv)
                return sha1hashv;

            }
            ,
            this["dunm_ts"] = () => {
                // var tmpT = new Date().getTime().toString();
                var tmpT = 1725931626560;
                console.debug("dunm_ts生成时间戳:", tmpT)

                return tmpT
            }
            ,
            this["dunm_headless"] = () => {
                return ![];
            }
            ,
            this["dum_getvis"] = () => {
                return !![];
            }
            ,
            this["bs4"] = _0x3affc4 => {
                var bs4t = btoa(_0x3affc4);
                console.debug("bs4加密结果:", _0x3affc4, bs4t)
                return bs4t;
            }
            ,
            this["bs5"] = _0xa129df => {
                var bs5t = CryptoJS.MD5(_0xa129df).toString();
                console.debug("bs5加密结果:", _0xa129df, bs5t)
                return bs5t;
            }
            ,
            this["setCookie"] = (_0x53def9, _0x2a3574, _0x3d869c) => {
                window[_0x53def9] = _0x2a3574
                let _0x22a2f9 = new Date();
                if (_0x3d869c)
                    switch (typeof _0x3d869c) {
                        case 'number':
                            _0x22a2f9["setTime"](_0x22a2f9["getTime"]() + _0x3d869c);
                            break;
                        default:
                            _0x22a2f9 = _0x3d869c;
                    }
                else
                    _0x22a2f9["setTime"](_0x22a2f9["getTime"]() + 86400000);

                var keyValuePairs = document.cookie.split("; ");
                var targetKey = _0x53def9;
                var newValue = _0x2a3574;

                for (var i = 0; i < keyValuePairs.length; i++) {
                    var pair = keyValuePairs[i].split("=");
                    var key = pair[0].trim();
                    if (key === targetKey) {
                        pair[1] = newValue;
                        keyValuePairs[i] = pair.join("=");
                        break;
                    }
                }
                window["document"]["cookie"] = keyValuePairs.join("; ");
            }
        this["getCookie"] = _0x8f927a => {
            var _0x37c52e = '';
            if (document["cookie"]["length"] > 0) {
                var _0x75ae47 = document["cookie"]["split"]("; ");
                for (var _0xccba65 = 0; _0xccba65 < _0x75ae47["length"]; _0xccba65++) {
                    var _0x191350 = _0x75ae47[_0xccba65]["split"]("=");
                    _0x191350[0] == _0x8f927a && (_0x37c52e = _0x191350[1]);
                }
                // console.debug("~~this->getcookie", _0x8f927a, _0x37c52e)
                return _0x37c52e;
            }
        }
            ,
            this["$QNlw3Q4GiufD"] = (_0x1f2bcc, _0x1d3162) => {
                if (_0x1d3162["length"] < 32)
                    return '';
                var _0x1d3162 = _0x1d3162["substring"](0, 32),
                    _0x1f2bccv = encrypt(_0x1f2bcc, _0x1d3162, {
                        "inputEncoding": "utf8",
                        "outputEncoding": "hex"
                    });
                console.debug("~~QNlw3Q4GiufD加密, 参数：", _0x1f2bcc, _0x1d3162, "结果：", _0x1f2bccv)
                return _0x1f2bccv;
            }
            ,
            this["$QNlw3Q4GiufF"] = (_0x534587, _0x1199b9) => {
                if (_0x1199b9["length"] < 32)
                    return '';
                var _0x1199b9 = _0x1199b9["substring"](0, 32),
                    _0x534587v = encrypt(_0x534587, _0x1199b9, {
                        "inputEncoding": "utf8",
                        "outputEncoding": "hex"
                    });
                console.debug("~~QNlw3Q4GiufF加密结果, 参数：", _0x534587, _0x1199b9, "结果：", _0x534587v)

                return _0x534587v;
            }
            ,
            this["$byno"] = () => {
                if (content) {
                    var _0x4a87cf = _0x2c29b1(content, window);
                    _0x4a87cf["run"]()
                }
            }
            ;
    }
}
;
// 定义window["$dunm"]
window["$dunm"] = new _0x49feb2();

window.$dunm.$byno()

function getParams(url, body) {
    result = window[window['_d_ts']](url, body);
    result["cookies"] = {
        "lzkqow38189": window["lzkqow38189"].toString(),
        "MKls83gqduGS": window["MKls83gqduGS"],
    }
    return result
}

let url = "/szzhzz/fppmcx/v1/queryFppmxx?ruuid=1725420928267&urlyzm=530d5cc284e5127c98844c45d3f7be00"
let body = '{"Jmbw": "F+HUnYnVsiQ6pW6aTWYyAKF7qY4F25CQPxC+3WkMWAJm8RDHiXXud+0QUeCHYRkzl4enNSSMUNkPAz3CgFzNqAAVz081lQLdDQj+8mkz4XgqDTXpA17TlQgUhBpdU9+olvJwH8Ir+gm4pwOkKXM1S/WILj8AoBRDYY56x1mqCWNhJ9jtl56WTjYsjVTjN3DS"}'
rst = getParams(url, body)


console.log(rst)