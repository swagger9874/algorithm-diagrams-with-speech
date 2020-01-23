# Why this project exists?
    Bu proje ellerini düzgünce kullanamayan insanlar için algoritma diagramı çizdirebilmek için bulunmaktadır. Proje içerisinde ses komutlarını anlamlaştırarak program komutlara denkleştirmeye çalışır, eğer söylenilen ses komutu anlamlı bir program komutuna eş gelir ise program önceden belirlenen işleri gerçekleştirir.
# How to install your code?
    Çalışır halde kullanabilmek için, projenin kodlarını bilgisayarınıza indirip proje dosyası içerisinde npm paketini başlatmanız ( --npm start) yeterlidir. Sonrasında yerel sunucunuzda proje açılacaktır, ancak sadece Google Chrome tabanını desteklemektedir ve bazı durumlarda mikrofon izli ile alakalı sorunlar çıkabilir.
# How to use this code?
    Proje dosyaları arasında işlemleri gerçekleştiren 2 adet Java Script dosyası bulunmaktadır. index-START.html ve graphObjectManip.js dosyaları

    index-START.html
        bu dosyada ekranda görülen herşey barınmaktadır. söylenebilecek komutların hangi fonksiyonları çağırdığı, o fonksiyonların hangi diğer fonksiyonları çağırdığı burada tanımlanır.
        Ayrıca projenin paleti (sol taraftaki üzerinde komut listesi ve temel düğümlerin olduğu taraf) ve diagramı (sağdaki başlangıçta üzeri boş, ancak komutlar kullanıldıkça dolan taraf) bu dosya içinde tanımlanır ve kullanılır.

    graphObjectManip.js
        Burada kullanılabilecek düğümlerin tanımlanması ve genel özellikleri, düğümler arası okların ne tarzda olacağı gibi detaylı ayarlamaları yapılır. Bazı test senaryo kodlarıda bu dosyada bulunmaktadır.

# Framework & API Dosyaları
    Burada kullanılan framework ve API ler ele alınacak ve hangi dosyada bulundukları gösterilecektir.

    anime.min.js
        Bu api ekranda ses komutları söylendikten sonra ekranın orta-aşağısında çıkan ve yavaşça sönen yazılar basmamıza yarar. Html kodları arasındaki h1 tagi'ni JavaScript ile DOM manipülasyonu sayesinde değiştirerek ekrana basıyoruz. index-START.html dosyasının en altındaki komutlarda ise ekrana basılan yazıların ne kadar gözükeceği gibi düzenleme kodları bulunmaktadır.

    go.js ve go-debug.js
        Bu api ise ekranda gözüken tüm düğümleri ve ilişkilerin dizaynını gösteren, kısaca tüm dizayn işlerini yapan ana apidir. go-debug.js development aşamasında, go.js ise publishing aşamasında kullanılması gerekilen dosyalardır.

    package.json
        Bu dosyada npm paket yöneticisi için gereken konfigürasyonlar bulunmaktadır.