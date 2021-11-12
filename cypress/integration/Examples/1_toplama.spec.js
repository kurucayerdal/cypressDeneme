///<reference types="Cypress"/>   
//her spec dosyasının başına yukardaki yazılıyor!Yoksa testler çalışmaz!
//alttaki context javada bildiğimiz class yapısı gibi.tırnak içinde class'ımızın adını verdik.
//testng'deki test anotation'unun buradaki karşılığı it("class ismi",()=>{}) şeklinde oluyor.

context("4 islem", () => {

    const s1 = 5
    const s2 = 4

    let sonuc
    it("toplama", () => {
        sonuc = s1 + s2
        cy.log(sonuc)
        assert.equal(sonuc, 9, "toplama sonuç kontrolu")
    })
    it("cikarma", () => {
        sonuc = s1 - s2
        assert.equal(sonuc, 1, "cikarma sonuc kontrolu")
    })
    it("çarpma", () => {
        sonuc = s1 * s2
        assert.equal(sonuc, 20, "çarpma sonuc kontrolu")
    })
    it.skip("test kontrolü", () => {
        const text1 = "cypress io"
        expect(text1).to.have.string("io")
    })
    it("test kontrolü 2", () => {
        const text1 = "cypress io"
        expect(text1).to.have.string("io")
    })

    // skip, only
    //  it.only("çarpma", () => {sonuc = s1 * s2 assert.equal(sonuc, 20, "çarpma sonuc kontrolu")  }) 
    //it'nin yanına skip dersek o testi atlar, only dersek sadece o testi çalıştırır.

    // SHIFT + ALT + F sayfayı düzenleme
}

)