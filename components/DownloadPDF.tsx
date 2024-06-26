"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { getPdfLink } from "@/actions/allowOrder";

const DownloadPDF = ({ id, access }: { id: string; access: boolean }) => {
  const [loading, setLoading] = useState(false);
  const download = async () => {
    setLoading(true);
    const link = await getPdfLink(id);
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
    setLoading(false);
  };
  return (
    <div className="w-full flex py-6">
      <Button
        disabled={!access || loading}
        onClick={download}
        className="bg-emerald-700/90 w-full"
      >
        {loading ? "Downloading" : "Download PDF"}
      </Button>
    </div>
  );
};
export default DownloadPDF;
