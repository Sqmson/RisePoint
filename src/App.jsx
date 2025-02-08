import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { AuthProvider } from './contexts/AuthContext';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Programs from './components/pages/Programs';
import Fundraising from './components/pages/Fundraising';
import MonitoringEvaluation from './components/pages/MonitoringEvaluation';

// Economic Features
import BusinessIncubation from './components/features/economic/BusinessIncubation';
import MicrofinanceAccess from './components/features/economic/MicrofinanceAccess';
import SkillsTraining from './components/features/economic/SkillsTraining';
import MarketLinkages from './components/features/economic/MarketLinkages';

// Agricultural Features
import FarmerSupport from './components/features/agriculture/FarmerSupport';
import AgriBusinessDevelopment from './components/features/agriculture/AgriBusinessDevelopment';
import MarketAccess from './components/features/agriculture/MarketAccess';

// Education Features
import VocationalTraining from './components/features/education/VocationalTraining';
import DigitalSkills from './components/features/education/DigitalSkills';
import EntrepreneurshipEducation from './components/features/education/EntrepreneurshipEducation';

// New components
import Login from './components/features/registration/Login';
import Dashboard from './components/features/dashboard/Dashboard';
import AdminDashboard from './components/features/admin/AdminDashboard';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Header />
          
          <main className="main-content">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/fundraising" element={<Fundraising />} />
              <Route path="/impact/monitoring" element={<MonitoringEvaluation />} />

              {/* Economic Empowerment Routes */}
              <Route path="/programs/economic/business-incubation" element={<BusinessIncubation />} />
              <Route path="/programs/economic/microfinance" element={<MicrofinanceAccess />} />
              <Route path="/programs/economic/skills-training" element={<SkillsTraining />} />
              <Route path="/programs/economic/market-linkages" element={<MarketLinkages />} />

              {/* Agricultural Development Routes */}
              <Route path="/programs/agriculture/farmer-support" element={<FarmerSupport />} />
              <Route path="/programs/agriculture/agribusiness" element={<AgriBusinessDevelopment />} />
              <Route path="/programs/agriculture/market-access" element={<MarketAccess />} />

              {/* Education & Skills Routes */}
              <Route path="/programs/education/vocational" element={<VocationalTraining />} />
              <Route path="/programs/education/digital" element={<DigitalSkills />} />
              <Route path="/programs/education/entrepreneurship" element={<EntrepreneurshipEducation />} />

              {/* Impact Routes */}
              <Route path="/impact/stories" element={<ImpactStories />} />
              <Route path="/impact/reports" element={<ImpactReports />} />
              <Route path="/impact/research" element={<Research />} />

              {/* Resource Routes */}
              <Route path="/resources/learning" element={<LearningCenter />} />
              <Route path="/resources/tools" element={<BusinessTools />} />
              <Route path="/resources/market" element={<MarketResources />} />
              <Route path="/resources/financial" element={<FinancialServices />} />

              {/* Support Routes */}
              <Route path="/emergency-support" element={<EmergencySupport />} />
              <Route path="/apply/:program" element={<ProgramApplication />} />
              <Route path="/donate" element={<DonationPage />} />
              <Route path="/contact" element={<Contact />} />

              {/* Login Routes */}
              <Route path="/login" element={<Login />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute roles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Error Routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

          {/* Emergency Support Float Button */}
          <div className="emergency-float">
            <a href="tel:+256800100200" className="emergency-button">
              Need Help? Call Now
            </a>
          </div>

          {/* Progress Tracker */}
          <div className="impact-float">
            <div className="impact-counter">
              <span className="counter-number">2,500+</span>
              <span className="counter-label">Families Supported</span>
            </div>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App; 