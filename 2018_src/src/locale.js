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
                presentation_info: "デッドロック、データ競合など並行処理には様々な問題がつきものですが、幾つもの研究と経験からベストプラクティスが編み出されているのも事実です。\n今回はこういった並行処理についての問題と一般的に用いられる解決策を述べるとともに、これらの背景の中で開発された新しいプログラミング言語Ponyを紹介します。\nPonyはアクターモデルをベースとしており、並行処理に関する様々なバグが存在しないことをコンパイル時に検証する強力な型システムを持っています。\nv0.1のリリースが2015年4月と比較的若い言語ですが、安全性を保証するだけでなくパフォーマンスも追求した実装がなされており、これから並行プログラミングを行う際の選択肢になりうるポテンシャルを秘めています。\nセッションではPonyが解決しようとしている問題だけでなく、言語設計で行われている様々な挑戦についても時間の許す限り紹介していきたいと思います！",
                presenter_name: "matsu_chara",
                presenter_info: "",
                company: "株式会社FOLIO",
                img: "static/images/profiles/matsu_chara.jpg",
                links: {
                    twitter: "https://twitter.com/matsu_chara"
                }   
            },
            {
                id: 1,
                time: "11:00 - 11:30",
                presentation_name: "Concurrency in Rust (同時通訳あり)",
                presentation_info: "The Rust programming language purports the bold claim that it guarantees thread safety while retaining the ability to write zero-cost abstractions. \nIn this talk we'll explore precisely how Rust can make such a claim. \nWe'll also explore the ecosystem that makes up the concurrency toolkit in Rust to see how these language principles are extended to common abstractions such as channels, thread pools, work stealing algorithms, concurrent data structures, and asynchronous I/O.",
                presenter_name: "Alex Crichton",
                presenter_info: "",
                company: "Mozilla Corporation",
                img: "static/images/profiles/alex.jpg",
                links: {
                }  
            },
            {
                id: 2,
                time: "11:40 - 12:10",
                presentation_name: "無と型とプログラム",
                presentation_info: "プログラムにおける「無」について考察します。\n我々がコードを書くとき、「無」は至る所にあらゆる形で出現します。\n未定義、初期化前、削除後、0、空文字列、空配列、etc...ひとたび表現を誤れば冗長なコードやバグに呵まされる事になります。\n様々な言語における「無」の表現について、利点欠点を踏まえて紹介します。\nまた、どのように「無」を扱うべきなのか、直近で私が遭遇した「無」の取り扱いの失敗を参考に、「無」との付き合い方を考えていきたいと思います。\n",
                presenter_name: "tarunon",
                presenter_info: "",
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
                presentation_info: "Apache Hivemallは、日本発のOSSプロジェクトとして初めてApache Software Foundationで育成プロジェクトとして認められ、トップレベルのASFプロジェクトへの昇格を目指して開発を進めています。\n機械学習の特徴量エンジニアリングや各種学習アルゴリズムをユーザー定義関数（UDF）として実装することで、機械学習の一連の処理をHiveQLやSparkSQLなどSQLクエリによる実現できるのがApache Hivemallの最大の特徴です。\n本講演では、前半でHivemallの機能の紹介をし、後半でトレジャーデータが開発するOSSワークフローエンジンDigDagとApache Hivemallを利用した機械学習ワークフローの実例を紹介します。\nワークフローエンジンとの組合せにより複雑な機械学習ワークフローをどのようにプロダクション環境に展開したら良いかの一例を示します。",
                presenter_name: "油井 誠",
                presenter_info: "Makoto YUI is a Research Engineer at Treasure Data, Inc, working on the development of Machine Learning as a Service on Treasure Data Cloud service. He is the primary developer of Apache Hivemall, a scalable machine learning on Apache Hive/Spark/Pig.\nPrior to joining Treasure Data, he was a Senior Researcher at National Institute of Advanced Industrial Science and Technology, Japan. He holds his Ph.D in Computer Science from NAIST. He was a Visiting Researcher at Data Intensive Research Group, Edinburgh University in 2011 and a Postdoc at Database Architectures and Information Access Group (a.k.a. the MonetDB team), Centrum Wiskunde & Informatica (CWI), the Netherlands from 2009 to 2010. Find his profile on http://myui.github.io/",
                company: "トレジャーデータ株式会社",
                img: "static/images/profiles/myui.jpeg",
                links: {
                    twitter: "https://twitter.com/myui"
                }  
            },
            {
                id: 4,
                time: "13:40 - 14:10",
                presentation_name: "人工知能の研究者は今なにがアツいと思っているのか",
                presentation_info: "人工知能といってもその捉え方は人によって様々です。\n 今で言う「人工知能」を大雑把に捉えるなら、ひとつは「機械学習」、もうひとつは「汎用人工知能」です。\n 前者は近年のディープラーニングブームによってエンジニアのみなさんにとってもすっかり身近なものになりました。\n 後者はというとOpenAIや全脳知能アーキテクチャが目指している「人間のような適応能力を持つ”真の”人工知能」ですがこちらはまだ一般的なものではありません(巷では2045年には実現してシンギュラリティが起きるそうですが……！)。\n 本セッションでは両者の進展を交えつつ、特に後者の汎用人工知能研究において、最前線にいる人々が一体なにを考え、どのような問題にどう取り組んでいるのかについて紹介します。\n",
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
                presentation_name: "ディープラーニング専用ハードウェアの研究開発について",
                presentation_info: "近年、組込みデバイスにもディープラーニングを取り込む動きが活発になってきており、特にFPGAはその書き換え可能性を活かすことで、アルゴリズムの進化に対応しつつ、低消費電力かつ高性能なディープラーニングを実現できるデバイスとして注目を集めています。しかし、アルゴリズム・GPU・数学的な背景を駆使して学習を行い、かつ、組込み機器を熟知してソフト・ハードと連携した推論を実装する技術が必要であり、実装難易度が高い状況です。私たちの研究グループでは、ディープラーニングの学習・推論を同時に開発できるGUINNESS (GUI for a Neural Network SyntheSizer)を開発しています。GUIベースの開発環境なので、Python, C++, HDL等の設計は必要なく、ニューラルネットワークの設計に注力でき、ソフトウェア技術者ユーザでもFPGA実装が可能です。今回は物体認識をFPGAに実装した事例を紹介します。",
                presenter_name: "中原 啓貴",
                presenter_info: "",
                company: "東京工業大学",
                img: "static/images/profiles/nakahara.png",
                links: {
                    facebook: "https://www.facebook.com/hirokinakaharaoboe"
                }
            },
            {
                id: 6,
                time: "14:50 - 15:20",
                presentation_name: "Beyond the Debug: テスト、デバッグ、その先の技術へ",
                presentation_info: "様々な開発の現場ではテストをしたり、レビューを行うのが一般的だと思います。\nしかし、それらの品質活動を行う際に相手となる「バグ」とはなんでしょうか？バグを説明したり図示したり、そもそも感覚的なバグの対処は、医学で言えば病気を知らずに治療する医師と同種の行動に他なりません。\n本セッションでは、バグにタックルします。\n問題は１）バグの定義が存在しないこと、２）バグの表現方法がないこと、３）バグの検出方法が一定ではないことの３点です。\nこれら問題に対して、本セッションでは欠陥の定義スキーマ、欠陥モデル、欠陥兆候因子の検出技法などを説明した上で、これを機械学習を用いて自動的なバグの分析・分類方法についてもデモを交えて解説します。\n次から次へと生まれては消えゆく先進開発技術を追いかける前に、現在までに経験したバグを後世に残すこと。\nこれが次世代に輝く技術者が最も注力すべき「財産」構築だと考えます。\n全ての未来の技術者の一助の考となれば幸いです。\n",
                presenter_name: "細川 宣啓",
                presenter_info: "1992年日本アイ・ビー・エム株式会社に入社。\nSEを経て1999年より同社品質保証組織にてQuality Inspectionチームを立上げ。\n品質工学および上流フェーズ欠陥検出技術の社内外への展開を手がける。\n2005年, IBM Raleigh研究所、Austin研究所にて同社汎用機OS,商用Unixの品質管理チームに所属。\nIBM-QI法のUS展開を行う。\n現在同社東京基礎研究所にて欠陥の研究を行う傍ら、システム寿命の研究、AI, IoTの品質保証方法の研究およびビジネスサポート等、先進技術を学術・現場の両方で展開中。\n自称「史上最悪の欠陥エンジニア」",
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
                presentation_info: "私達のチームは2016年までメトリクスの活用、スプリント期間の短縮、くじ引きで決めるPOやSM、などのプラクティスを通して改善を繰り返してきました。\nスクラムガイドもどんどん破りました。\nこのチームはScrumが難しいなんて思っていませんし、誰でも出来ると信じています。\nチームが開発する製品は大きく変わりましたがScrumが難しいなんてことはありませんでしたし、なによりこのチームのエッセンスを大学生40名に導入したところなんと1週間で1日スプリントをモノにしました。\nScrumが難しいのは幻想だったのかもしれません。\n我々のチームはこういったことを通して2017年にいくつかのプラクティスを確立しました。\nスプリント期間は1時間へ、チーム内ボトルネックへの対応時間は25分以内を保証、人的リソース活用の損益分岐点を常に意識できる開発プロセスです。\n結果、1週間でレビューを35回以上、振り返りを30回以上行っています。\n1週間で改善した項目は最大で20アイテムにおよび、それらのムダ取りによって6ヶ月間で最大2倍の成果を生み出しています。\nチームのパフォーマンスを最大化するために私達の計画的な学び方、偶発的事象からの学び方などをScrumの文脈でご紹介します。\n",
                presenter_name: "きょん",
                presenter_info: "名古屋を中心にソフトウェアの受託開発をしています。\nソフトウェアテストを中心にスクラム、ソフトウェア構成管理、TDDの実践に注力しています。\n仕事で使っているプログラミング言語はGroovy Scheme Scala F#です。\n",
                img: "static/images/profiles/kyon.png",
                links: {
                    twitter: "https://twitter.com/kyon_mm"
                }
            },
            {
                id: 8,
                time: "16:10 - 16:40",
                presentation_name: "Apache Geodeで学ぶ！インメモリーデータグリッド",
                presentation_info: "これからのシステムアーキテクチャに必要なのは超高速でスケーラブルなデータアクセス。\nそれを実現するのがインメモリーデータグリッドです。\n今回はオープンソースの「Apache Geode」を使ってマイクロサービスアーキテクチャー、CQRSアーキテクチャーに最適なデータ処理の実装方法をjava.util.Mapと比較しつつご紹介します。\n",
                presenter_name: "山河 征紀（やまかわ まさき）",
                presenter_info: "",
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
                presentation_info: "機械学習を使ったアプケーション開発は技術的負債の高利子クレジットカードと言われることもあり、技術的負債になりやすい存在です。\nはてなでも、これまではてなブックマークの記事カテゴリ判定などの様々な場面で機械学習を活用した機能を開発してきましたが、中には、モデルの再現や継続的な改善ができず技術的負債となってしまった機能も存在します。\n こうした課題がある中、教師あり機械学習を使ったアプリケーションであり、Perlで書かれていたBrandSafeはてなをPythonでリプレースしました。\nBrandSafeはてなを事例として、機械学習システムを技術的負債にしないために、機械学習を使ったアプリケーション開発時に考慮した機械学習の再現性や、データやモデルのバージョン管理についての取り組みを紹介します。\nまた、はてなではこれまで経験のなかった教師なし機械学習(異常検知)を利用したアプリケーション開発を行なう際に組織で行なった取り組みも紹介します。\n",
                presenter_name: "吉田 康久",
                presenter_info: "",
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
                presentation_info: "皆さんは、やっていますか？ コンテナなどを...。\n運用自動化やInfrastructure as Codeの隆盛などから、さまざまな文脈でLinuxコンテナに注目が集まっています。\nそんなコンテナに関するキーワードは、LXCに始まり、Docker、runc、Kubernetes、OCI、CRI-O、果ては各種クラウドまで拡散し、枚挙にいとまがありません。\n本セッションでは、あまりに早い潮流の変化に置いていかれているような感覚を覚える方、触れてはみたものの根本的な技術の理解が追いつかない技術者のために、 コンテナ技術を上から下まで眺めて、整理することを試みます。\nその上で、Kubernetesだけではないコンテナの活用の一例として、拙作「Haconiwa」を使って何ができるか、何をしているかのお話もできればと思います。\n",
                presenter_name: "近藤 うちお",
                presenter_info: "Rubyist and Containers Programmer",
                company: "GMOペパボ株式会社 技術基盤チーム",
                img: "static/images/profiles/udzura.jpg",
                links: {
                    twitter: "https://twitter.com/udzura"
                }
            },
            {
                id: 11,
                time: "17:50 - 18:20",
                presentation_name: "実践！スタンプ屋さんの開発運用",
                presentation_info: "みんなでスタンプを仕入れて売って暮らしています（意訳）。\nしかし商品も多く、お客さんも多く、24時間営業のお店の店番は大変です。\n\nこのセッションでは、あくまでも実践の共有として、我々のサービスの開発運用でぶつかる課題や、例えばどのようなことができるか・しているかというトピックを安定してサービスを開発し運用する両面の観点で紹介しようと思います。\n\n新しい機能の開発からリリースまで、稼働しているサービスのモニタリング・トラブルシューティングなどを可能な範囲で具体的に紹介します。\n\nこれがベストプラクティス、という話より、問題意識と今の現実、あと少しの理想の話題です。できれば皆さんとも意見交換や議論などができましたら嬉しいです。",
                presenter_name: "佐藤 春旗",
                presenter_info: "",
                company: "LINE株式会社",
                img: "static/images/profiles/haruki.jpg",
            },
            {
                id: 12,
                time: "18:20 - 18:30",
                presentation_name: "スポンサーセッション",
                presentation_info: "調整中",
                presenter_name: "調整中",
                presenter_info: "",
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
          main_text: 'HackerTackle is a comprehensive technical event for programmers. The event name "Hacker Tackle / 博多 来る" in Japanese means "coming to Hakata." We have a wish that many hackers will gather in Hakata and make it a hit place for various discussions. We hold sessions on various technologies.',
          sub_text: 'Won\'t you come to Hakata to absorb and discuss these new technologies?'
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
            organizer: 'MYOJO WARAKU HACKER TACKLE Executive Committee'
        },
        presentations: [
            {
                id: 0,
                time: "10:30 - 11:00",
                presentation_name: "Ponylang and future concurrent programming",
                presentation_info: "Concurrent processing is accompanied by various problems, for example, Deadlock, data-race, etc. \nbut it is also true that best practices are being devised from a number of researches and experiences. \nIn this session, I will describe the problems associated with concurrent processing and the commonly used solutions, and I will also introduce the new programming language, Pony, which has been developed under these contextual backgrounds. \nPony is based on the actor model, and it has a powerful type system that verifies the existence of various bugs at the time of compiling in relation to concurrent processing. \nIt is a relatively young programming language, given the release of its version 0.1 in April 2015. \nHowever, in addition to its safety, which is guaranteed, Pony has also been implemented with features that place a premium on performance. \nThus, it has the potential to become one of the options for concurrent programming in the future. \nAs far as time permits, I would like to shed light not only on the problems Pony is trying to solve, but also the various challenges that are being undertaken by language design!",
                presenter_name: "matsu_chara",
                presenter_info: "",
                company: "FOLIO Co.,Ltd.",
                img: "static/images/profiles/matsu_chara.jpg",
                links: {
                    twitter: "https://twitter.com/matsu_chara"
                }   
            },
            {
                id: 1,
                time: "11:00 - 11:30",
                presentation_name: "Concurrency in Rust",
                presentation_info: "The Rust programming language purports the bold claim that it guarantees thread safety while retaining the ability to write zero-cost abstractions. \nIn this talk we'll explore precisely how Rust can make such a claim. \nWe'll also explore the ecosystem that makes up the concurrency toolkit in Rust to see how these language principles are extended to common abstractions such as channels, thread pools, work stealing algorithms, concurrent data structures, and asynchronous I/O. \n",
                presenter_name: "Alex Crichton",
                presenter_info: "",
                company: "Mozilla Corporation",
                img: "static/images/profiles/alex.jpg",
                links: {
                }
            },
            {
                id: 2,
                time: "11:40 - 12:10",
                presentation_name: "Empty, Type and program",
                presentation_info: 'In this session, I will ponder on the meaning of “Empty”, in the context of a program. \nWhen we code, “Empty” appears everywhere in various forms: undefined,  pre-initialization, post deletion, 0, empty string, empty array, etc... \nOnce you make a mistake in expression, you will end up with redundant codes and bugs. \nI\'ll introduce the expression of “Empty” found in various programing languages while focusing on its benefits and shortcomings. \nAlso, by citing the most recent episode in how I failed to handle “Empty”, I would like to think about how to approach “Empty” as well as how to get along with it.',
                presenter_name: "tarunon",
                presenter_info: "",
                company: "Mercari, Inc.",
                img: "static/images/profiles/tarunon.jpg",
                links: {
                    twitter: "https://twitter.com/tarunon"
                }
            },
            {
                id: 3,
                time: "12:10 - 12:40",
                presentation_name: "Apache Hivemall meets DigDag: Building Machine Learning Pipeline by SQL queries",
                presentation_info: "Apache Hivemall is the first OSS project from Japan accepted as an Incubator project of Apache Software Foundation, which is currently being developed at Apache Incubator to be a top-level ASF project.\nThe main characteristic of Apache Hivemall is that a whole machine learning pipeline can be expressed by a series of SQL queries, i.e., as a series of HiveQL/SparkSQL queries, by implementing feature engineering and various machine learning algorithms as user defined functions (UDFs).\nThe first half of this talk will introduce features of Hivemall, and the rest of the talk will give an example of machine learning workflow by using DigDag, which is an OSS workflow engine developed at Treasure Data, and Apache Hivemall.\nI will show a reference architecture to deploy a complex machine learning pipeline to a production system by using a workflow engine.",
                presenter_name: "Makoto Yui",
                presenter_info: "Makoto YUI is a Research Engineer at Treasure Data, Inc, working on the development of Machine Learning as a Service on Treasure Data Cloud service. He is the primary developer of Apache Hivemall, a scalable machine learning on Apache Hive/Spark/Pig.\nPrior to joining Treasure Data, he was a Senior Researcher at National Institute of Advanced Industrial Science and Technology, Japan. He holds his Ph.D in Computer Science from NAIST. He was a Visiting Researcher at Data Intensive Research Group, Edinburgh University in 2011 and a Postdoc at Database Architectures and Information Access Group (a.k.a. the MonetDB team), Centrum Wiskunde & Informatica (CWI), the Netherlands from 2009 to 2010. Find his profile on http://myui.github.io/",
                company: "Treasure Data K.K.",
                img: "static/images/profiles/myui.jpeg",
                links: {
                    twitter: "https://twitter.com/myui"
                }  
            },
            {
                id: 4,
                time: "13:40 - 14:10",
                presentation_name: "For artificial intelligence researchers, what is currently a hot topic",
                presentation_info: "People vary in their perception of artificial intelligence(AI). \nHowever, if we are to broadly define what we know as AI today, we can break it down into the following two categories: 1. \nmachine learning, and 2. \nartificial general intelligence (AGI). \nDue to the boom in deep learning in recent years, machine learning has become a very familiar subject for engineers. \nAGI can be defined as the ‘true’ AI with adaptive abilities akin to a human being, which is what OpenAI and whole brain intelligence architecture are aiming to be. \nHowever, development is still in its nascent stage (it’s said that AGI will be realized in 2045 and supposedly Singularity will take place...!) In this session, I will talk about the progress that has been made on both AI and AGI, and in particular, I will show you what people are thinking who are at the forefront of AGI research, as well as what kind of problems they are addressing.",
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
                presentation_name: "About research and development of deep learning dedicated hardware",
                presentation_info: "In recent years, integrating deep learning into embedded devices has become more prevalent. \nIn particular, field-programmable gate array (FPGA) has been gaining traction as a device that can actualize deep learning while keeping up with the evolving algorithms with its low electricity consumption that can deliver high performance due to its reconfigurable properties. \nHowever, the level of difficulty in implementation remains high at this point. \nThis is due to the fact that it requires an algorithmic, GPU and arithmetic learning, in addition to the possession of deep knowledge on the embedded device as well as the interface between software and hardware. \nAt our research group, we are developing GUI for Neural Network SyntheSizer (GUINNESS) which can create learning as well as the point of inference for deep learning. \nBecause it is a GUI-based development environment, it is not necessary for any design based on Python, C++ and HDL, etc. \nThis allows us to focus on the designing of the neural network, making it possible for software engineer user to implement FPGA. \nHere, I am going to talk about a case example where we implemented objection recognition into FPGA.",
                presenter_name: "Hiroki Nakahara",
                presenter_info: "",
                company: "Tokyo Institute of Technology",
                img: "static/images/profiles/nakahara.png",
                links: {
                    facebook: "https://www.facebook.com/hirokinakaharaoboe"
                }
            },
            {
                id: 6,
                time: "14:50 - 15:20",
                presentation_name: "Beyond Debugging: Testing, Degubbing, and the Technology Beyond",
                presentation_info: "Testing and reviewing are common place at various development sites. \nBut what are these so-called “bugs” that we come up against while we are conducting quality assurance tasks? To begin with, how we describe these bugs and the way we have been intuitively dealing with them is akin to an MD treating a patient without knowing what the pathology is. \nIn this session, we’re going to tackle these bugs. \nThe three problems that I’m going to pose are: 1. \nthere are no definitions for what a bug is, 2. \nthere are no methods to express bugs, and 3. \nthe detection method of a bug is not consistent. \nIn this session, I am going to talk about the defined schema of defects, defect models, and detection techniques of defect indications. \nSubsequently, I am going to demonstrate how to automatically analyze and classify bugs by using machine learning. \nBefore we start chasing after the ever-disappearing cutting-edge development technologies, we need to leave behind the bugs we have encountered up until now. \nI believe this is the “asset” which the engineers of the next generation should focus on the most. \nI will be most grateful if I can be of assistance for all the future engineers.",
                presenter_name: "Nobuhiro Hosokawa",
                presenter_info: "Mr. Hosokawa joined IBM Japan in 1992. \nAfter having worked as an SE, he launched the Quality Inspection team under the Quality Assurance unit in 1999. \nHe was in charge of propagating quality engineering as well as defect detection technology at the upstream phase in and outside of IBM. \nIn 2005, at the IBM Laboratory in Raleigh, NC, and in Austin, TX, he was assigned to the Quality Assurance team in charge of general-purpose OS and commercial Unix. \nHe conducted quality assurance checks based on IBM’s QI method. \nHe currently studies defects at the IBM Tokyo Laboratory, and is also active in incorporating new technology in the arenas of academia as well as at the ground level. \nFor example, he studies the life-span of systems, and conducts research on the quality assurance method of AI and IoT while offering business support at the same time.",
                company: "IBM Japan",
                img: "static/images/profiles/hosokawa.jpg",
                links: {
                    facebook: "https://www.facebook.com/nobu.dreamstate.hosokawa"
                }
            },
            {
                id: 7,
                time: "15:20 - 15:50",
                presentation_name: "It is a fantasy that Scrum is difficult -Redefinition of Passion-",
                presentation_info: "Up until 2016, we tried to make improvements to our delivery practice by utilizing metrics, incorporating shortened sprint period, and by choosing a product owner (PO) or a scrum master (SM) through lottery. \nWe have also broken many rules in the scrum guide. \nWe don’t think scrum is difficult and believe that anyone can do it. \nAlthough the products we develop have changed substantially, we never felt scrum to be a challenge. \nWhat’s more, when we introduced scrum to 40 college students, they were able to have a grasp over a one-day sprint in one week’s time. \nMaybe the inherent challenge we felt in scrum was just an illusion. \nIn 2017, our team established several practices based on our experiences. \nWe have set our sprint period to one hour, guaranteeing a 25-minute response time in resolving bottlenecks arising within the team—a development process which allows us to be constantly aware of the break-even point of the utilization factor of human resources. \nAs a result, we conducted more than 35 reviews and 30 look-backs in just one week. \nThe items we fixed in one week reached 20 at the most, and by eliminating such waste, we have achieved twice the amount of results within six months. \nI am going to talk about our deliberate learning method, as well as how we learn from incidents through the context of scrum to maximize team performance.",
                presenter_name: "Kyon",
                presenter_info: "We are responsible for the customized development of software mainly in the Nagoya area. \nWe focus on the practical application of scrum, software configuration management, and Test-Driven Development (TDD). \nThe programming language we use is Groovy Scheme Scala F#. ",
                img: "static/images/profiles/kyon.png",
                links: {
                    twitter: "https://twitter.com/kyon_mm"
                }
            },
            {
                id: 8,
                time: "16:10 - 16:40",
                presentation_name: "Learn the in-memory data grid with Apache Geode!",
                presentation_info: "Ultra-fast and scalable data access is what the future system architecture needs, and in-memory data grid will realize that. \nIn this session, by using the open source “Apache Geode” and comparing it with java.util.Map, I'll introduce the implementation method for data processing that is best suited for micro service architecture and CQRS architecture.",
                presenter_name: "Masaki Yamakawa",
                presenter_info: "",
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
                presentation_info: "Application development using machine learning is sometimes referred to as high-interest credit card of technical debt, and it is apt to be a technical liability. \nIn Hatena, we have developed features utilizing machine learning at various scenes such as article category judgment of Hatena bookmark. \nHowever, some of the features have ended up as technical debt, as we were not able to reproduce certain models or make continuous improvements on to them. \nIn the midst of these challenges, we replaced BrandSafe Hatena, an application using supervised machine learning which was written in Perl, with Python. \nUsing BrandSafe Hatena as a case study, I am going to talk about what we did to prevent the machine learning system from becoming a technical debt. \nFor example, I will discuss the thinking behind the reproducibility of machine learning at the time of application development, as well as version management of data and models. \nIn addition, I'll describe the efforts we made at Hatena in developing applications through unsupervised machine learning (anomaly detection), which was our first.",
                presenter_name: "Yasuhisa Yoshida",
                presenter_info: "",
                company: "Hatena Co., Ltd.",
                img: "static/images/profiles/syou6162.jpg",
                links: {
                    twitter: "https://twitter.com/syou6162"
                }
            },
            {
                id: 10,
                time: "17:20 - 17:50",
                presentation_name: "I'm not sure at all. We are operating container stuff just with a hunch",
                presentation_info: "Are you using or developing on container-ish stuff? Due to the surge in operation automation or Infrastructure as Code, Linux containers have been garnering a lot of attention from various contexts. \nThe keywords related to such containers start with LXC, followed by Docker, runc, Kubernetes, OCI, CRI-O, and finally extending to as far as various cloud services. \nAt this point, there are too many containers and related technologies to keep track of. \nIn this session, I am going to provide a comprehensive picture of container technologies to those who think they have been left behind in the rapid currents of technological transformation, and those who tried the container but failed to understand its fundamental principles. \nOn top of that, as an example of utilization of containers other than Docker with Kubernetes, I would like to introduce my product 'Haconiwa' and talk about what we can do with this product, and what we are doing with it.",
                presenter_name: "Uchio Kondo",
                presenter_info: "Rubyist and Containers Programmer",
                company: "GMO Pepabo, Inc.",
                img: "static/images/profiles/udzura.jpg",
                links: {
                    twitter: "https://twitter.com/udzura"
                }
            },
            {
                id: 11,
                time: "17:50 - 18:20",
                presentation_name: "Action! Development and Operations for Sticker Shop",
                presentation_info: "We are kinda stock and sell stickers to live.However, it is a tough work handling huge amount of products, serving many customers, and operating the shop 24/7.\n\nIn this session, I will share the ideas about the problems we are facing in the service developent and operations. It also includes some examples of practices we can do or we are doing, in order to realize stable development and operations for a running service.\n\nTopics span across development of new features, and monitoring, trouble-shooting with actual practices as much as possible. \n\nI cannot share the \"best practice\", but I'm willing to share our problem consciousness, our reality, and a little bit dream.\nIt would be a great pleasure to share and discuss these topics with you!",
                presenter_name: "Haruki Sato",
                presenter_info: "",
                company: "LINE Corporation",
                img: "static/images/profiles/haruki.jpg",
            },
            {
                id: 12,
                time: "18:20 - 18:30",
                presentation_name: "Sponsor session",
                presentation_info: "TBA",
                presenter_name: "TBA",
                presenter_info: "",
                company: "LINE Corporation",
                img: "static/images/profile-dummy.png",
            }
        ]
    }
}
