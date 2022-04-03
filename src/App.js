
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
       title="Pwòp boutik NFT pa w.
       Kòmanse vann epi grandi"
       description="Achte, Stoke, Kolekte NFT, echanje 
       epi genyen Crypto. Rejwenn 25+ milyon moun kap itilize A.E.B Marketplace."

       showBtn
       mockupImg={assets.homeHero2}
       banner="banner"
      />
      <SectionWrapper
       title="Achte konfòtableman"
       description="Fè eksperyans la ak A.E.B Marketplace! Bèl design e wap alèz pou w navige"
       mockupImg={assets.homeCards2}
       reverse
      />
      <Features />
      <SectionWrapper
       title="Devlopman"
       description="A.E.B konstwi apati de Expo ki limenm pèmèt li mache sou tout kalite aparèy itilizatè yo.
       Li vinn pi fasil pou Aplikasyon ou an rive jwenn piblik ou a."
       mockupImg={assets.feature}
       reverse
      />
      <SectionWrapper
       title="Yon fason kreyatif pou montre boutik ou"
       description="Aplikasyon an gen 2 pati. Premye a gen lis tout NFT yo pandan ke dezyèm nan gen detay sou chak pwodwi."
       mockupImg={assets.mockup}
       banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Kreye ak pasyon pa {""} 
        <span className="bold">Amédée E.Baptiste</span>
        </p>
      </div>
    </>
  );
}

export default App;
