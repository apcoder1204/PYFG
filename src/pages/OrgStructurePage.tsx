import { OrgStructureChart } from "../components/OrgStructureChart";
import { Seo } from "../components/Seo";
import { boardOfAdvisors, ceoBranchTree } from "../data/orgStructure";

export function OrgStructurePage() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title="Organization Structure | PYFG Tanzania"
        description="Interactive organization chart for PYFG Tanzania—leadership, departments, and reporting lines."
      />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Governance</p>
          <h1 className="mt-2 text-3xl font-extrabold text-dark sm:text-4xl">Organization Structure</h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Explore how roles connect from the CEO through operations and administration. Expand or collapse
            branches to focus on a team, and select any role to read a short description.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
          <OrgStructureChart board={boardOfAdvisors} tree={ceoBranchTree} />
        </div>
      </div>
    </section>
  );
}
