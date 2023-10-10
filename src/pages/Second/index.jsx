import "./style.css";
import { count, color } from "../../store";

export function Second() {
  const src =
    color.value === "dark"
      ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ab391d-444f-4bc1-81fb-05f11e47b948/df6lo2j-6d44410f-ae78-4d03-908b-aef15c476d56.png/v1/fill/w_1280,h_1221/anakin_skywalker__darth_vader__png_transparent_by_xtremeemperor_df6lo2j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIyMSIsInBhdGgiOiJcL2ZcLzgxYWIzOTFkLTQ0NGYtNGJjMS04MWZiLTA1ZjExZTQ3Yjk0OFwvZGY2bG8yai02ZDQ0NDEwZi1hZTc4LTRkMDMtOTA4Yi1hZWYxNWM0NzZkNTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OC3KvsDq186qkWf52vL5dAuuDWz8MG_LbdJNAdpVBSo"
      : "https://legionofsensei.de/attachment/8178-157-1574892-star-wars-anakin-skywalker-jedi-knight-png";
  return (
    <div>
      <img width="200" src={src} />
      <h1>Second</h1>
      <p>Current Count: {count.value}</p>
      <p>Chosen Theme: {color.value}</p>
    </div>
  );
}
