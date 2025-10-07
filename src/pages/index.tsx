import {
  RenderClientSideContent,
  RenderServerSideContent,
} from "clasor-content-preview";
import "clasor-content-preview/src/styles/contentPreview.css";

const Home = () => {
  const version =
    '<article class="clasor-editor-content"><p>hiiiiiiiiiii</p><p>&nbsp;</p><figure class="table"><table><tbody><tr><td>ddsad</td><td>&nbsp;</td><td>werwe</td><td>rtwerw</td></tr><tr><td>&nbsp;</td><td>ddwe</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>weqw</td><td>werwe</td><td>errter</td><td>ewrwer</td></tr></tbody></table></figure><p>&nbsp;</p><ul><li><p style="text-align:right;" dir="rtl">efrwe</p></li><li><p style="text-align:right;" dir="rtl">sdfsdf</p></li><li><p style="text-align:right;" dir="rtl">sdfsdf</p></li><li><p style="text-align:right;" dir="rtl">uuftuytvbn</p></li></ul><p>&nbsp;</p><p>&nbsp;</p><div class="clasor-code-snippet clasor-code-d6b3ff6c-8341-4238-828f-fdbea7a9856f" style="align-items:center;background-color:WhiteSmoke;border-color:LightGrey;border-style:dashed;display:flex;justify-content:center;margin:10px 0;min-height:85px;padding:15px 0;position:relative;text-align:center;" data-code="[{&quot;title&quot;:&quot;javascript&quot;,&quot;code&quot;:&quot;assdad&quot;}]" data-content="javascript" data-clasor-hash="d6b3ff6c-8341-4238-828f-fdbea7a9856f" data-link=""><p class="clasor-code-title">&nbsp;</p><div class="clasor-code-delete-btn">&nbsp;</div><div class="clasor-code-edit-btn">&nbsp;</div></div><p>&nbsp;</p><p>&nbsp;</p><figure class="image"><img style="aspect-ratio:600/600;" src="https://podspace.sandpod.ir/api/files/2QRYY8WPJQRY5Y4Q?&amp;checkUserGroupAccess=true&amp;Authorization=7383206152-e604D6e2a8684d27bd8c5f44c3fe128e.XzIwMjUxMA&amp;time=1759828494419" alt="private clasor image" data-clasor-hash="2QRYY8WPJQRY5Y4Q" width="600" height="600"></figure><p>&nbsp;</p></article>';

  return (
    <div className="overflow-y-auto min-h-full">
      <RenderServerSideContent className="min-h-full" versionData={version} />
      <RenderClientSideContent
        podSpaceServer={`${process.env.NEXT_PUBLIC_PODSPACE_API}/`}
      />
    </div>
  );
};

export default Home;
