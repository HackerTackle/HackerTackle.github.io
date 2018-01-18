module.exports = {
    JA: {
        meta: {
          desc: '2018/02/17(土) LINE Fukuoka株式会社さんにてプログラマためのコミュニティイベントを開催します',
          title: 'HACKER TACKLE | あらゆるプログラマのためのコミュニティイベント'
        },
        btn: '参加登録',
        pdf_download: 'PDFダウンロード',
        access: 'LINE Fukuoka株式会社',
        header: {
          subtitle: 'あらゆるプログラマのためのコミュニティイベント',
          title: 'HACKER TACKLE ハカタクル？'
        },
        concept: {
          main_text: 'HackerTackleは、プログラマのための総合技術イベントです。「ハッカー・タックル/博多・来る」の意味を持つイベント名には、多くのハッカーが博多に来て、さまざまな議論をぶつけあう場になればという思いがこめられています。イマのプログラマにとって必要な知識を切り取った、さまざまな技術に関するセッションを用意しています。',
          sub_text: 'ぜひ博多に来て、新しい技術を吸収し、議論をぶつけあってみませんか？'
        },
        timetable: {
          reg_time: '受付時間',
          beer_bash: 'ビアバッシュ'
        },
        map: {
          address: '博多区 博多駅中央街8-1 JRJP博多ビル 12F',
          directions: 'JR九州・JR西日本・福岡市営地下鉄「博多駅」と直結',
          btn: 'Google mapで見る'
        },
        footer: {
            organizer: '明星和楽 HACKER TACKLE 実行委員会'
        },
        presentations: [
            {
                id: 0,
                time: "10:30 - 11:00",
                presentation_name: "Ponylangとこれからの並行プログラミング",
                presentation_info: "デッドロック、データ競合など並行処理には様々な問題がつきものですが、幾つもの研究と経験からベストプラクティスが編み出されているのも事実です。今回はこういった並行処理についての問題と一般的に用いられる解決策を述べるとともに、これらの背景の中で開発された新しいプログラミング言語Ponyを紹介します。Ponyはアクターモデルをベースとしており、並行処理に関する様々なバグが存在しないことをコンパイル時に検証する強力な型システムを持っています。v0.1のリリースが2015年4月と比較的若い言語ですが、安全性を保証するだけでなくパフォーマンスも追求した実装がなされており、これから並行プログラミングを行う際の選択肢になりうるポテンシャルを秘めています。セッションではPonyが解決しようとしている問題だけでなく、言語設計で行われている様々な挑戦についても時間の許す限り紹介していきたいと思います！",
                presenter_name: "matsu_chara",
                presenter_info: "なし",
                company: "株式会社FOLIO",
                img: "static/images/profiles/matsu_chara.jpg",
                links: {
                    blog: "#",
                    twitter: "#"
                }   
            },
            {
                id: 1,
                time: "11:00 - 11:30",
                presentation_name: "Concurrency in Rust",
                presentation_info: "The Rust programming language purports the bold claim that it guarantees thread safety while retaining the ability to write zero-cost abstractions. In this talk we'll explore precisely how Rust can make such a claim. We'll also explore the ecosystem that makes up the concurrency toolkit in Rust to see how these language principles are extended to common abstractions such as channels, thread pools, work stealing algorithms, concurrent data structures, and asynchronous I/O.",
                presenter_name: "Alex Crichton",
                presenter_info: "None yet",
                company: "Mozilla Corporation",
                img: "static/images/profile-dummy.png",
                links: {
                    facebook: "#"
                }  
            },
            {
                id: 2,
                time: "11:40 - 12:10",
                presentation_name: "無と型とプログラム",
                presentation_info: "プログラムにおける「無」について考察します。我々がコードを書くとき、「無」は至る所にあらゆる形で出現します。未定義、初期化前、削除後、0、空文字列、空配列、etc...ひとたび表現を誤れば冗長なコードやバグに呵まされる事になります。様々な言語における「無」の表現について、利点欠点を踏まえて紹介します。また、どのように「無」を扱うべきなのか、直近で私が遭遇した「無」の取り扱いの失敗を参考に、「無」との付き合い方を考えていきたいと思います。",
                presenter_name: "tarunon",
                presenter_info: "なし",
                company: "株式会社メルカリ",
                img: "static/images/profiles/tarunon.jpg",
                links: {
                    twitter: "https://twitter.com/tarunon"
                }  
            },
            {
                id: 3,
                time: "12:10 - 12:40",
                presentation_name: "Apache Hivemall meets DigDag: Machine Learning Pipeline in SQL queries",
                presentation_info: "Apache Hivemallは、日本発のOSSプロジェクトとして初めてApache Incubatorで育成プロジェクトとして認められ、トップレベルプロジェクトへの昇格を目指して開発を進めています。 機械学習の特徴量エンジニアリングや各種学習アルゴリズムをユーザー定義関数（UDF）として実装することで、機械学習の一連の処理をHiveQLやSparkSQLなどSQLクエリによる実現できるのがApache Hivemallの最大の特徴です。 本講演では、前半でHivemallの機能の紹介をし、後半でトレジャーデータが開発するOSSワークフローエンジンDigDagとApache Hivemallを利用した機械学習ワークフローの実例を紹介します。 ワークフローエンジンとの組合せにより複雑な機械学習ワークフローをどのようにプロダクション環境に展開したら良いかの一例を示します。",
                presenter_name: "油井誠 (@myui)",
                presenter_info: "なし",
                company: "トレジャーデータ株式会社",
                img: "static/images/profiles/myui.jpeg",
                links: {
                    blog: "#",
                    twitter: "#"
                }  
            },
            {
                id: 4,
                time: "13:40 - 14:10",
                presentation_name: "人工知能の研究者は今なにがアツいと思っているのか",
                presentation_info: "人工知能といってもその捉え方は人によって様々です。 今で言う「人工知能」を大雑把に捉えるなら、ひとつは「機械学習」、もうひとつは「汎用人工知能」です。 前者は近年のディープラーニングブームによってエンジニアのみなさんにとってもすっかり身近なものになりました。 後者はというとOpenAIや全脳知能アーキテクチャが目指している「人間のような適応能力を持つ”真の”人工知能」ですがこちらはまだ一般的なものではありません(巷では2045年には実現してシンギュラリティが起きるそうですが……！)。 本セッションでは両者の進展を交えつつ、特に後者の汎用人工知能研究において、最前線にいる人々が一体なにを考え、どのような問題にどう取り組んでいるのかについて紹介します。",
                presenter_name: "五木田 和也(ごきた かずや)",
                presenter_info: "",
                company: "株式会社ウサギィ",
                img: "static/images/profiles/kazoo.jpg",
                links: {
                    twitter: "https://twitter.com/kazoo04"
                }  
            },
            {
                id: 5,
                time: "14:10 - 14:40",
                presentation_name: "調整中",
                presentation_info: "調整中",
                presenter_name: "調整中",
                presenter_info: "",
                img: "static/images/profile-dummy.png" 
            },
            {
                id: 6,
                time: "14:50 - 15:20",
                presentation_name: "テスト",
                presentation_info: "様々な開発の現場ではテストをしたり、レビューを行うのが一般的だと思います。しかし、それらの品質活動を行う際に相手となる「バグ」とはなんでしょうか？バグを説明したり図示したり、そもそも感覚的なバグの対処は、医学で言えば病気を知らずに治療する医師と同種の行動に他なりません。本セッションでは、バグにタックルします。問題は１）バグの定義が存在しないこと、２）バグの表現方法がないこと、３）バグの検出方法が一定ではないことの３点です。これら問題に対して、本セッションでは欠陥の定義スキーマ、欠陥モデル、欠陥聴講因子の検出技法などを説明した上で、これを機械学習を用いて自動的なバグの分析・分類方法についてもデモを交えて解説します。次から次へと生まれては消えゆく先進開発技術を追いかける前に、現在までに経験したバグを後世に残すこと。これが次世代に輝く技術者が最も注力すべき「財産」構築だと考えます。全ての未来の技術者の一助の考となれば幸いです。",
                presenter_name: "細川 宣啓",
                presenter_info: "なし",
                company: "日本IBM",
                img: "static/images/profiles/hosokawa.jpg",
                links: {
                    facebook: "https://www.facebook.com/nobu.dreamstate.hosokawa"
                }  
            },
            {
                id: 7,
                time: "15:20 - 15:50",
                presentation_name: "Scrumが難しいのは幻想-情熱の再定義-",
                presentation_info: "私達のチームは2016年までメトリクスの活用、スプリント期間の短縮、くじ引きで決めるPOやSM、などのプラクティスを通して改善を繰り返してきました。スクラムガイドもどんどん破りました。このチームはScrumが難しいなんて思っていませんし、誰でも出来ると信じています。チームが開発する製品は大きく変わりましたがScrumが難しいなんてことはありませんでしたし、なによりこのチームのエッセンスを大学生40名に導入したところなんと1週間で1日スプリントをモノにしました。Scrumが難しいのは幻想だったのかもしれません。我々のチームはこういったことを通して2017年にいくつかのプラクティスを確立しました。スプリント期間は1時間へ、チーム内ボトルネックへの対応時間は25分以内を保証、人的リソース活用の損益分岐点を常に意識できる開発プロセスです。結果、1週間でレビューを35回以上、振り返りを30回以上行っています。1週間で改善した項目は最大で20アイテムにおよび、それらのムダ取りによって6ヶ月間で最大2倍の成果を生み出しています。チームのパフォーマンスを最大化するために私達の計画的な学び方、偶発的事象からの学び方などをScrumの文脈でご紹介します。",
                presenter_name: "きょん",
                presenter_info: "なし",
                img: "static/images/profiles/kyon.png",
                links: {
                    twitter: "https://twitter.com/kyon_mm"
                }  
            },
            {
                id: 8,
                time: "16:10 - 16:40",
                presentation_name: "Apache Geodeで学ぶ！インメモリーデータグリッド",
                presentation_info: "これからのシステムアーキテクチャに必要なのは超高速でスケーラブルなデータアクセス。それを実現するのがインメモリーデータグリッドです。今回はオープンソースの「Apache Geode」を使ってマイクロサービスアーキテクチャー、CQRSアーキテクチャーに最適なデータ処理の実装方法をjava.util.Mapと比較しつつご紹介します。",
                presenter_name: "山河 征紀（やまかわ まさき）",
                presenter_info: "なし",
                company: "ウルシステムズ株式会社",
                img: "static/images/profiles/yamakawa.jpg",
                links: {
                    twitter: "https://twitter.com/masakiyamakawa"
                }  
            },
            {
                id: 9,
                time: "16:40 - 17:10",
                presentation_name: "はてなにおける機械学習の取り組み",
                presentation_info: "機械学習を使ったアプケーション開発は技術的負債の高利子クレジットカードと言われることもあり、技術的負債になりやすい存在です。はてなでも、これまではてなブックマークの記事カテゴリ判定などの様々な場面で機械学習を活用した機能を開発してきましたが、中には、モデルの再現や継続的な改善ができず技術的負債となってしまった機能も存在します。 こうした課題がある中、教師あり機械学習を使ったアプリケーションであり、Perlで書かれていたBrandSafeはてなをPythonでリプレースしました。BrandSafeはてなを事例として、機械学習システムを技術的負債にしないために、機械学習を使ったアプリケーション開発時に考慮した機械学習の再現性や、データやモデルのバージョン管理についての取り組みを紹介します。また、はてなではこれまで経験のなかった教師なし機械学習(異常検知)を利用したアプリケーション開発を行なう際に組織で行なった取り組みも紹介します。",
                presenter_name: "吉田康久(id:syou6162)",
                presenter_info: "なし",
                company: "株式会社はてな",
                img: "static/images/profiles/syou6162.jpg",
                links: {
                    twitter: "https://twitter.com/syou6162"
                }  
            },
            {
                id: 10,
                time: "17:20 - 17:50",
                presentation_name: "全然わからない。俺たちは雰囲気でコンテナをやっている",
                presentation_info: "皆さんは、やっていますか？ コンテナなどを...。運用自動化やInfrastracture as Codeの隆盛などから、さまざまな文脈でLinuxコンテナに注目が集まっています。そんなコンテナに関するキーワードは、LXCに始まり、Docker、runc、Kubernetes、OCI、CRI-O、果ては各種クラウドまで拡散し、枚挙にいとまがありません。本セッションでは、あまりに早い潮流の変化に置いていかれているような感覚を覚える方、触れてはみたものの根本的な技術の理解が追いつかない技術者のために、 コンテナ技術を上から下まで眺めて、整理することを試みます。その上で、Kubernetesだけではないコンテナの活用の一例として、拙作「Haconiwa」を使って何ができるか、何をしているかのお話もできればと思います。",
                presenter_name: "近藤うちお(@udzura)",
                presenter_info: "なし",
                company: "GMOペパボ株式会社 技術基盤チーム",
                img: "static/images/profiles/udzura.jpg" 
            },
            {
                id: 11,
                time: "17:50 - 18:20",
                presentation_name: "なし",
                presentation_info: "なし",
                presenter_name: "はるき",
                presenter_info: "なし",
                company: "LINE株式会社",
                img: "static/images/profile-dummy.png", 
            }
        ]
    },
    EN: {
        meta: {
          desc: 'A event for programmers to be held on 2018/02/17(Sat) at LINE Fukuoka Corporation',
          title: 'HACKER TACKLE | A comprehensive technical event for programmers.'
        },
        btn: 'Register',
        pdf_download: 'Download PDF',
        pdf_url: 'pdf/2016/2016timetable.pdf',
        access: 'LINE Fukuoka Corporation',
        header: {
          subtitle: 'A comprehensive technical event for programmers.',
          title: 'HACKER TACKLE | Hakata kuru？'
        },
        concept: {
          main_text: 'HackerTackle is....',
          sub_text: 'Come to Hakata'
        },
        timetable: {
          reg_time: 'Registration Time',
          beer_bash: 'Beer bash!'
        },
        map: {
          address: 'JRJP Hakata Bldg. 12F, 8-1 Hakataekichuogai, Hakata Ward',
          directions: 'Directly linked to Hakata Station via JR Kyushu and JR Nishinihon train lines as well as the Fukuoka City Subway',
          btn: 'View on Google Maps'
        },
        footer: {
            organizer: 'MYOJO WARAKU HACKER TACKLE executive committee'
        },
        presentations: [
            {
                id: 0,
                time: "10:30 - 11:00",
                presentation_name: "Ponylang and future concurrent programming",
                presentation_info: "Concurrent processing is accompanied by various problems, for example, Deadlock, data competition, etc. but it is also true that best practices are being devised from a number of researches and experiences. In this session, I will describe the problems associated with parallel processing and the commonly used solutions, and I will also introduce the new programming language, Pony, which has been developed under these contextual backgrounds. Pony is based on the actor model, and it has a powerful type system that verifies the existence of various bugs at the time of compiling in relation to concurrent processing. It is a relatively young programming language, given the release of its version 0.1 in April 2015. However, in addition to its safety, which is guaranteed, Pony has also been implemented with features that place a premium on performance. Thus, it has the potential to become one of the options for concurrent programming in the future. As far as time permits, I would like to shed light not only on the problems Pony is trying to solve, but also the various challenges that are being undertaken by language design! ",
                presenter_name: "matsu_chara",
                presenter_info: "None yet",
                company: "FOLIO Co.,Ltd.",
                img: "static/images/profiles/matsu_chara.jpg",
                links: {
                    blog: "#",
                    twitter: "#"
                }   
            },
            {
                id: 1,
                time: "11:00 - 11:30",
                presentation_name: "Concurrency in Rust",
                presentation_info: "The Rust programming language purports the bold claim that it guarantees thread safety while retaining the ability to write zero-cost abstractions. In this talk we'll explore precisely how Rust can make such a claim. We'll also explore the ecosystem that makes up the concurrency toolkit in Rust to see how these language principles are extended to common abstractions such as channels, thread pools, work stealing algorithms, concurrent data structures, and asynchronous I/O.",
                presenter_name: "Alex Crichton",
                presenter_info: "None yet",
                company: "Mozilla Corporation",
                img: "static/images/profile-dummy.png",
                links: {
                    facebook: "#"
                }
            },
            {
                id: 2,
                time: "11:40 - 12:10",
                presentation_name: "None, type and program",
                presentation_info: "In this session, I will ponder on the meaning of 'Mu,' or nothingness, in the context of a program. When we code, Mu  appears everywhere in various forms: undefined,  pre-initialization, post deletion, 0, empty string, empty array, etc... Once you make a mistake in expression, you will end up with redundant codes and bugs. I'll introduce the expression of 'Mu' found in various programing languages while focusing on its benefits and shortcomings. Also, by citing the most recent episode in how I failed to handle Mu, I would like to think about how to approach “Mu” as well as how to get along with it.   ",
                presenter_name: "tarunon",
                presenter_info: "None yet",
                company: "Mercari, Inc.",
                img: "static/images/profiles/tarunon.jpg",
                links: {
                    twitter: "https://twitter.com/tarunon"
                }  
            },
            {
                id: 3,
                time: "12:10 - 12:40",
                presentation_name: "Apache Hivemall meets DigDag: Machine Learning Pipeline in SQL queries",
                presentation_info: "Apache Hivemall is the first OSS project from Japan to be recognized as a training project at Apache Incubator, and it is being developed with the aim to be promoted to a top-level project. The biggest feature of Apache Hivemall is that by implementing feature quantity engineering of machine learning and various learning algorithms as user defined functions (UDF), a series of machine learning processes can be realized with SQL queries such as HiveQL and SparkSQL. In the first half of the presentation, I will introduce Hivemall's features, and in the second half, I will give an example of machine learning workflow by using OSS workflow engine DigDag and Apache Hivemall, which has been developed by Treasure Data. I will show an example of how to combine a workflow engine with a complex machine learning workflow to deploy in a production environment.",
                presenter_name: "Makoto Yui",
                presenter_info: "None yet",
                company: "Treasure Data Inc.",
                img: "static/images/profiles/myui.jpeg",
                links: {
                    blog: "#",
                    twitter: "#"
                }  
            },
            {
                id: 4,
                time: "13:40 - 14:10",
                presentation_name: "For artificial intelligence researchers, what is currently a hot topic",
                presentation_info: "People vary in their perception of artificial intelligence(AI). However, if we are to broadly define what we know as AI today, we can break it down into the following two categories: 1. machine learning, and 2. artificial general intelligence (AGI). Due to the boom in deep learning in recent years, machine learning has become a very familiar subject for engineers. AGI can be defined as the ‘true’ AI with adaptive abilities akin to a human being, which is what OpenAI and whole brain intelligence architecture are aiming to be. However, development is still in its nascent stage (it’s said that AGI will be realized in 2045 and supposedly Singularity will take place...!) In this session, I will talk about the progress that has been made on both AI and AGI, and in particular, I will show you what people are thinking who are at the forefront of AGI research, as well as what kind of problems they are addressing.",
                presenter_name: "Kazuya Gokita",
                presenter_info: "",
                company: "Usagee Inc.",
                img: "static/images/profiles/kazoo.jpg",
                links: {
                    twitter: "https://twitter.com/kazoo04"
                } 
            },
            {
                id: 5,
                time: "14:10 - 14:40",
                presentation_name: "TBA",
                presentation_info: "TBA",
                presenter_name: "TBA",
                presenter_info: "",
                img: "static/images/profile-dummy.png"  
            },
            {
                id: 6,
                time: "14:50 - 15:20",
                presentation_name: "Test",
                presentation_info: "None yet",
                presenter_name: "Nobuhiro Hosokawa",
                presenter_info: "None yet",
                company: "IBM Japan",
                img: "static/images/profiles/hosokawa.jpg",
                links: {
                    facebook: "https://www.facebook.com/nobu.dreamstate.hosokawa"
                }
            },
            {
                id: 7,
                time: "15:20 - 15:50",
                presentation_name: "Scrum",
                presentation_info: "None yet",
                presenter_name: "Kyon",
                presenter_info: "None yet",
                img: "static/images/profiles/kyon.png",
                links: {
                    twitter: "https://twitter.com/kyon_mm"
                }  
            },
            {
                id: 8,
                time: "16:10 - 16:40",
                presentation_name: "Learn the in-memory data grid with Apache Geode!",
                presentation_info: "Ultra-fast and scalable data access is what the future system architecture needs, and in-memory data grid will realize that. In this session, by using the open source “Apache Geode” and comparing it with java.util.Map, I'll introduce the implementation method for data processing that is best suited for micro service architecture and CQRS architecture.",
                presenter_name: "Masaki Yamakawa",
                presenter_info: "None yet",
                company: "UL Systems, Inc.",
                img: "static/images/profiles/yamakawa.jpg",
                links: {
                    twitter: "https://twitter.com/masakiyamakawa"
                }  
            },
            {
                id: 9,
                time: "16:40 - 17:10",
                presentation_name: "Efforts of machine learning in Hatena",
                presentation_info: "Application development using machine learning is sometimes referred to as high-interest credit card of technical debt, and it is apt to be a technical liability. In Hatena, we have developed features utilizing machine learning at various scenes such as article category judgment of Hatena bookmark. However, some of the features have ended up as technical debt, as we were not able to reproduce certain models or make continuous improvements on to them. In the midst of these challenges, we replaced BrandSafe Hatena, an application using supervised machine learning which was written in Perl, with Python. Using BrandSafe Hatena as a case study, I am going to talk about what we did to prevent the machine learning system from becoming a technical debt. For example, I will discuss the thinking behind the reproducibility of machine learning at the time of application development, as well as version management of data and models. In addition, I'll describe the efforts we made at Hatena in developing applications through unsupervised machine learning (abnormality detection), which was our first.",
                presenter_name: "Yasuhisa Yoshida",
                presenter_info: "None yet",
                company: "Hatena Co., Ltd.",
                img: "static/images/profiles/syou6162.jpg",
                links: {
                    twitter: "https://twitter.com/syou6162"
                }  
            },
            {
                id: 10,
                time: "17:20 - 17:50",
                presentation_name: "I can not understand at all. We are doing containers with the feeling",
                presentation_info: "Are you using or developing containers etc...? Due to the surge in operation automation or Infrastracture as Code, Linux container has been garnering a lot of attention from various contexts. The keywords related to such containers start with LXC, followed by Docker, runc, Kubernetes, OCI, CRI-O, and finally extending to as far as various cloud services. At this point, there are too many containers to keep track of. In this session, I am going to provide a comprehensive picture of container technologies to those who think they have been left behind in the rapid currents of technological transformation, and those who tried the container but failed to understand its fundamental principles. On top of that, as an example of utilization of containers other than Kubernetes, I would like to introduce my product 'Haconiwa' and talk about what we can do with this product, and what we are doing with it.",
                presenter_name: "Uchio Kondo",
                presenter_info: "None yet",
                company: "GMO Pepabo, Inc.",
                img: "static/images/profiles/udzura.jpg" 
            },
            {
                id: 11,
                time: "17:50 - 18:20",
                presentation_name: "None yet",
                presentation_info: "None yet",
                presenter_name: "Haruki",
                presenter_info: "None yet",
                company: "LINE Corporation",
                img: "static/images/profile-dummy.png", 
            }
        ]
    }
}
