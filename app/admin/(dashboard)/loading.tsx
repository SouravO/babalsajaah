export default function AdminLoading() {
  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-6xl mx-auto w-full animate-pulse">
      <div className="h-8 w-64 bg-surface-container border border-outline mb-stack-lg" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-lg">
        <div className="h-32 bg-surface-container border border-outline" />
        <div className="h-32 bg-surface-container border border-outline" />
        <div className="h-32 bg-surface-container border border-outline" />
      </div>
      <div className="h-64 bg-surface-container-lowest border border-outline" />
    </div>
  );
}
