
export function AvatarSkeleton({ size = 96 }: { size?: number }) {
  return (
    <div
      className="rounded-full bg-white/[0.08] animate-pulse"
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}

export default AvatarSkeleton;