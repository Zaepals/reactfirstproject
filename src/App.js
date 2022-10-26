import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Build from './components/Build/Build';
import Workflow from './components/Workflow/Workflow';
import Customer from './components/Customer/Customer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header 
        logo={'https://open.cruip.com/static/media/logo.2810a88b.svg'}
        doc={'Documentation'}
        btn={'Sign In'}
      />
      <main>
        <Home 
          title={'Landing template for'}
          subtitle={'Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.'}
          firstbtn={'Get started'}
          secondbtn={'View on Github'}
          image={'https://open.cruip.com/static/media/video-placeholder.a622fc5d.jpg'}
        />
        <Build 
          title={'Build up the whole picture'}
          info={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'}
        />
        <Workflow 
          title={'Workflow that just works'}
          info={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'}
        />
        <Customer 
          title={'Customer testimonials'}
          info={'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'}
          formTitle={'For previewing layouts and visual?'}
          inputPlaceholder={'Your best email'}
        />
      </main>
      <Footer 
        img={'https://open.cruip.com/static/media/logo.2810a88b.svg'}
      />
    </div>
  );
}

export default App;
