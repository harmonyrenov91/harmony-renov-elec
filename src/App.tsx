import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ElectricitePage from "./pages/services/ElectricitePage";
import EclairagePage from "./pages/services/EclairagePage";
import ChauffagePage from "./pages/services/ChauffagePage";
import DomotiquePage from "./pages/services/DomotiquePage";
import SecuritePage from "./pages/services/SecuritePage";
import BornesIRVEPage from "./pages/services/BornesIRVEPage";
import TravauxPage from "./pages/services/TravauxPage";
import DepannagePage from "./pages/services/DepannagePage";
import AthisMonsPage from "./pages/cities/AthisMonsPage";
import MorangisPage from "./pages/cities/MorangisPage";
import JuvisySurOrgePage from "./pages/cities/JuvisySurOrgePage";
import SavignySurOrgePage from "./pages/cities/SavignySurOrgePage";
import ParayVieillePostePage from "./pages/cities/ParayVieillePostePage";
import ViryChatillonPage from "./pages/cities/ViryChatillonPage";
import DraveilPage from "./pages/cities/DraveilPage";
import VigneuxSurSeinePage from "./pages/cities/VigneuxSurSeinePage";
import AblonSurSeinePage from "./pages/cities/AblonSurSeinePage";
import VilleneuveLeRoiPage from "./pages/cities/VilleneuveLeRoiPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/electricite" element={<ElectricitePage />} />
          <Route path="/services/eclairage" element={<EclairagePage />} />
          <Route path="/services/chauffage-ventilation" element={<ChauffagePage />} />
          <Route path="/services/domotique" element={<DomotiquePage />} />
          <Route path="/services/securite" element={<SecuritePage />} />
          <Route path="/services/bornes-irve" element={<BornesIRVEPage />} />
          <Route path="/services/travaux-interieur" element={<TravauxPage />} />
          <Route path="/services/depannage-247" element={<DepannagePage />} />
          <Route path="/villes/athis-mons" element={<AthisMonsPage />} />
          <Route path="/villes/morangis" element={<MorangisPage />} />
          <Route path="/villes/juvisy-sur-orge" element={<JuvisySurOrgePage />} />
          <Route path="/villes/savigny-sur-orge" element={<SavignySurOrgePage />} />
          <Route path="/villes/paray-vieille-poste" element={<ParayVieillePostePage />} />
          <Route path="/villes/viry-chatillon" element={<ViryChatillonPage />} />
          <Route path="/villes/draveil" element={<DraveilPage />} />
          <Route path="/villes/vigneux-sur-seine" element={<VigneuxSurSeinePage />} />
          <Route path="/villes/ablon-sur-seine" element={<AblonSurSeinePage />} />
          <Route path="/villes/villeneuve-le-roi" element={<VilleneuveLeRoiPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
