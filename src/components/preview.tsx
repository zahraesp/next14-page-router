"use client";

import React, { useEffect, useState } from "react";
import { RenderClientSideContent, RenderServerSideContent } from "clasor-content-preview";
import "clasor-content-preview/src/styles/contentPreview.css";

const Preview = () => {
  const [isClient, setIsClient] = useState(false);
  const version = "<article class=\"clasor-editor-content\"><h2 id=\"cls-91116a4c-2249-4ebe-aeb2-3cb1b3800628\"><span style=\"background-color:hsl(30,75%,60%);color:hsl(240,75%,60%);font-family:Lalezar;\">یییییییییییی</span></h2><p>&nbsp;</p><p><span style=\"font-family:Lalezar;\">یبلیبلیبل</span></p><p>&nbsp;</p><div class=\"swagger swagger-0a63828d-5b15-47b6-b940-bedde5794232\" style=\"align-items:center;background-color:WhiteSmoke;border-color:LightGrey;border-style:dashed;display:flex;justify-content:center;margin:10px 0;min-height:85px;padding:15px 0;position:relative;text-align:center;\" swagger-title=\"عنوان یک\" swagger-content=\"swagger: عنوان یک\" swagger-link=\"https://podspace.sandpod.ir/api/files/AK9Z7K9XWW1Y89VR\" swagger-path=\"/users/{username}\" swagger-method=\"put\" swagger-type=\"file\" swagger-name=\"api-example-swagger-v1.4\" data-clasor-hash=\"0a63828d-5b15-47b6-b940-bedde5794232\"><p class=\"swagger-title\">&nbsp;</p><div class=\"swagger-delete-btn\">&nbsp;</div><div class=\"swagger-edit-btn\">&nbsp;</div></div><p>&nbsp;</p><p>&nbsp;</p><div class=\"clasor-code-snippet clasor-code-1d4eeabc-9f14-464a-affb-5ae4df2d39e6\" style=\"align-items:center;background-color:WhiteSmoke;border-color:LightGrey;border-style:dashed;display:flex;justify-content:center;margin:10px 0;min-height:85px;padding:15px 0;position:relative;text-align:center;\" data-code=\"[{&quot;title&quot;:&quot;javascript&quot;,&quot;code&quot;:&quot;sadasdas&quot;},{&quot;title&quot;:&quot;cs&quot;,&quot;code&quot;:&quot;dardgtd\\n\\n\\ndfgdfg&quot;}]\" data-content=\"javascript/cs\" data-clasor-hash=\"1d4eeabc-9f14-464a-affb-5ae4df2d39e6\" data-link=\"\"><p class=\"clasor-code-title\">&nbsp;</p><div class=\"clasor-code-delete-btn\">&nbsp;</div><div class=\"clasor-code-edit-btn\">&nbsp;</div></div><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><span style=\"font-family:'Bebas Neue';\">dfgfhfgh</span></p><p><span style=\"font-family:'Bebas Neue';\">dfhdh</span></p><p>&nbsp;</p><p><span style=\"font-family:'Bebas Neue';\">hdfhdfh</span></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><figure class=\"table\"><table><tbody><tr><td>hfhfg</td><td>hfghfg</td><td>jhkyui</td></tr><tr><td>drgdfg</td><td>ytuytu</td><td>hkyu</td></tr><tr><td>dfhfghfgh</td><td>ertwe4</td><td>jhugytu</td></tr></tbody></table></figure><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><h2 id=\"cls-6f2884d1-a12d-4dae-b8db-bcbca295ead5\">ییییییییییییقثلفثقفثقف</h2></article>"
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="overflow-y-auto min-h-full">
      <RenderServerSideContent
        className="min-h-full"
        versionData={version}
      />
      {isClient && (
        <RenderClientSideContent
          podSpaceServer={`${process.env.NEXT_PUBLIC_PODSPACE_API}/`}
        />
      )}
    </div>
  );
};

export default Preview;