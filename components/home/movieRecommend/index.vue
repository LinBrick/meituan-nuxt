<template>
  <div class="maoyan-container">
    <div class="index-nav-container undefined" style="background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);">
      <ul class="clearfix ">
        <li class="title nav-item mf-shang-hei-regular">
          猫眼电影
        </li>
        <li class="nav-item active">
          即将上映
        </li>
        <li class="total nav-item">
          <a href="https://maoyan.com/" data-bid="b_rbbamvz0" class="link" target="_blank" data-query="utm_source=meituanweb"><span>全部 ></span></a>
        </li>
      </ul>
    </div>
    <div class="scenes-body">
      <div class="hot-container" style="display: none;">
        <div>
          <div class="slider">
            <div class="slider-content clearfix" style="left: 0px; margin: 0px 12px;" />
            <div class="btn btn-next" style="right: 0px;">
              <i class="iconfont icon-btn_right" />
            </div>
            <div class="btn btn-pre" style="left: 0px;">
              <i class="iconfont icon-btn_left" />
            </div>
          </div>
          <div id="maoyan-page" class="slider-pagination" style="margin-left: 0px;" />
        </div>
      </div>
      <div class="coming-container" style="display: block;">
        <el-carousel indicator-position="none" :autoplay="false">
          <el-carousel-item>
            <div class="__slider-container">
              <div class="slider-item-film">
                <a
                  href="#"
                  target="_blank"
                >
                  <img src="//p0.meituan.net/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg@214w_297h_1e_1c" class="image film-img">
                  <img class="film-mark" style="display: none;">
                  <div class="film-info">
                    <p class="film-score"><b><span>35449</span> 人想看</b></p>
                    <p class="film-name">大红包</p>
                  </div>
                </a>
              </div>
              <div class="slider-item-film">
                <a
                  href="#"
                  class="link"
                  target="_blank"
                ><img src="//p0.meituan.net/moviemachine/0c3f4cd8caf0f0848a54e3081349bdac22615677.jpg@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>10826</span>  人想看</b></p><p class="film-name">魔法学院</p></div></a>
              </div>
              <div class="slider-item-film">
                <a
                  href="#"
                  class="link"
                  target="_blank"
                ><img src="//p1.meituan.net/movie/b907eadfcafa0bd594b3d4e44952c9cc18752.jpg@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>8468</span>  人想看</b></p><p class="film-name">今生只为遇见你</p></div></a>
              </div>
              <div class="slider-item-film">
                <a
                  href="#"
                  class="link"
                  target="_blank"
                ><img src="//p1.meituan.net/moviemachine/1d2b4985d0187b437d41a73994ba2e191607376.jpg@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>6487</span>  人想看</b></p><p class="film-name">奇妙王国之魔法奇缘</p></div></a>
              </div>
              <div class="slider-item-film">
                <a
                  href="#"
                  class="link"
                  target="_blank"
                ><img src="//p0.meituan.net/movie/81fe2197ef930c79624a28cc76c423835264620.png@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>5916</span>  人想看</b></p><p class="film-name">小公主艾薇拉与神秘王国2</p></div></a>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="__slider-container">
              <div class="slider-item-film">
                <a
                  href="#"
                  class="link"
                  target="_blank"
                ><img src="//p1.meituan.net/movie/174c45cf85694f065224ee38b29282903015976.jpg@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>1484</span>  人想看</b></p><p class="film-name">愤怒的心</p></div></a>
              </div>
              <div class="slider-item-film">
                <a
                  href="#"
                  target="_blank"
                ><img src="//p1.meituan.net/moviemachine/e10ceb90d2c06d3524d01d573ccf88fb7514998.jpg@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>15964</span>  人想看</b></p><p class="film-name">金禅降魔</p></div></a>
              </div>
              <div class="slider-item-film">
                <a
                  href="#"
                  class="link"
                  target="_blank"
                ><img src="//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>4451</span>  人想看</b></p><p class="film-name">82号古宅</p></div></a>
              </div>
              <div class="slider-item-film">
                <a
                  href="#"
                  class="link"
                  target="_blank"
                ><img src="//p1.meituan.net/movie/eb37c5b78ec0c14aaad707700fcc1443390529.jpg@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>905</span>  人想看</b></p><p class="film-name">恋上美人鱼</p></div></a>
              </div>
              <div class="slider-item-film">
                <a
                  href="#"
                  class="link"
                  target="_blank"
                ><img src="//p0.meituan.net/movie/6adbe9c365a3aaadfb65910bc279bf6a3385927.jpg@214w_297h_1e_1c" class="image film-img"><img class="film-mark" style="display: none;"><div class="film-info"><p class="film-score"><b><span>539</span>  人想看</b></p><p class="film-name">沉香</p></div></a>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.__slider-container{
  display: inline-flex;
  .slider-item-film{
    margin-left: 15px;
    margin-right: 10px;
  }
}
</style>
