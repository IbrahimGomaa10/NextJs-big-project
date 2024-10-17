import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-12 h-full">
      <aside>
        <SideNavigation />
      </aside>

      <section>{children}</section>
    </div>
  );
}
