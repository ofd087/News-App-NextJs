"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }

  return <div className="modal-backdrop" onClick={handleBackClick} />;
}
