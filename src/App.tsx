import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const ImpactHubPage = lazy(() =>
  import("./pages/ImpactHubPage").then((m) => ({ default: m.ImpactHubPage })),
);
const OpportunitiesPage = lazy(() =>
  import("./pages/OpportunitiesPage").then((m) => ({ default: m.OpportunitiesPage })),
);
const StoriesPage = lazy(() =>
  import("./pages/StoriesPage").then((m) => ({ default: m.StoriesPage })),
);
const GrowthPathPage = lazy(() =>
  import("./pages/GrowthPathPage").then((m) => ({ default: m.GrowthPathPage })),
);
const DonatePage = lazy(() => import("./pages/DonatePage").then((m) => ({ default: m.DonatePage })));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);
const PhotoGalleryPage = lazy(() =>
  import("./pages/PhotoGalleryPage").then((m) => ({ default: m.PhotoGalleryPage })),
);
const OrgStructurePage = lazy(() =>
  import("./pages/OrgStructurePage").then((m) => ({ default: m.OrgStructurePage })),
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="px-4 py-12 text-center text-slate-600">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impact-hub" element={<ImpactHubPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/growth-path" element={<GrowthPathPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/gallery" element={<PhotoGalleryPage />} />
          <Route path="/organization" element={<OrgStructurePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
