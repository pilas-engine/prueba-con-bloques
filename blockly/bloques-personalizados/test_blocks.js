/**
 * @license
 * Blockly Tests
 *
 * Copyright 2017 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

Blockly.defineBlocksWithJsonArray([
  // BEGIN JSON EXTRACT
  {
    type: "empty_block",
    message0: "",
    args0: []
  },
  {
    type: "example_dropdown_long",
    message0: "long: %1",
    args0: [
      {
        type: "field_dropdown",
        name: "FIELDNAME",
        options: [
          ["first item", "ITEM1"],
          ["second item", "ITEM2"],
          ["third item", "ITEM3"],
          ["fourth item", "ITEM4"],
          ["fifth item", "ITEM5"],
          ["sixth item", "ITEM6"],
          ["seventh item", "ITEM7"],
          ["eighth item", "ITEM8"],
          ["ninth item", "ITEM9"],
          ["tenth item", "ITEM10"],
          ["eleventh item", "ITEM11"],
          ["twelfth item", "ITEM12"],
          ["thirteenth item", "ITEM13"],
          ["fourteenth item", "ITEM14"],
          ["fifteenth item", "ITEM15"],
          ["sixteenth item", "ITEM16"],
          ["seventeenth item", "ITEM17"],
          ["eighteenth item", "ITEM18"],
          ["nineteenth item", "ITEM19"],
          ["twentieth item", "ITEM20"],
          ["twenty-first item", "ITEM21"],
          ["twenty-second item", "ITEM22"],
          ["twenty-third item", "ITEM23"],
          ["twenty-fourth item", "ITEM24"],
          ["twenty-fifth item", "ITEM25"],
          ["twenty-sixth item", "ITEM26"],
          ["twenty-seventh item", "ITEM27"],
          ["twenty-eighth item", "ITEM28"],
          ["twenty-ninth item", "ITEM29"],
          ["thirtieth item", "ITEM30"],
          ["thirty-first item", "ITEM31"],
          ["thirty-second item", "ITEM32"]
        ]
      }
    ]
  },
  {
    type: "example_dropdown_images",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "FIELDNAME",
        options: [
          [
            { src: "../media/test_a.png", width: 32, height: 32, alt: "A" },
            "A"
          ],
          [
            { src: "../media/test_b.png", width: 32, height: 32, alt: "B" },
            "B"
          ],
          [
            { src: "../media/test_c.png", width: 32, height: 32, alt: "C" },
            "C"
          ],
          [
            { src: "../media/test_d.png", width: 32, height: 32, alt: "D" },
            "D"
          ],
          [
            { src: "../media/test_e.png", width: 32, height: 32, alt: "E" },
            "E"
          ],
          [
            { src: "../media/test_f.png", width: 32, height: 32, alt: "F" },
            "F"
          ],
          [
            { src: "../media/test_g.png", width: 32, height: 32, alt: "G" },
            "G"
          ],
          [
            { src: "../media/test_h.png", width: 32, height: 32, alt: "H" },
            "H"
          ],
          [
            { src: "../media/test_i.png", width: 32, height: 32, alt: "I" },
            "I"
          ],
          [
            { src: "../media/test_j.png", width: 32, height: 32, alt: "J" },
            "J"
          ],
          [
            { src: "../media/test_k.png", width: 32, height: 32, alt: "K" },
            "K"
          ],
          [
            { src: "../media/test_l.png", width: 32, height: 32, alt: "L" },
            "L"
          ],
          [{ src: "../media/test_m.png", width: 32, height: 32, alt: "M" }, "M"]
        ]
      }
    ]
  },
  {
    type: "example_dropdown_images_and_text",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "FIELDNAME",
        options: [
          ["images and text", "IMAGES AND TEXT"],
          [
            { src: "../media/test_a.png", width: 32, height: 32, alt: "A" },
            "A"
          ],
          [
            { src: "../media/test_b.png", width: 32, height: 32, alt: "B" },
            "B"
          ],
          [
            { src: "../media/test_c.png", width: 32, height: 32, alt: "C" },
            "C"
          ],
          [
            { src: "../media/test_d.png", width: 32, height: 32, alt: "D" },
            "D"
          ],
          [
            { src: "../media/test_e.png", width: 32, height: 32, alt: "E" },
            "E"
          ],
          [
            { src: "../media/test_f.png", width: 32, height: 32, alt: "F" },
            "F"
          ],
          [
            { src: "../media/test_g.png", width: 32, height: 32, alt: "G" },
            "G"
          ],
          [
            { src: "../media/test_h.png", width: 32, height: 32, alt: "H" },
            "H"
          ],
          ["xyz", "LMNOP"],
          [
            { src: "../media/test_i.png", width: 32, height: 32, alt: "I" },
            "I"
          ],
          [
            { src: "../media/test_j.png", width: 32, height: 32, alt: "J" },
            "J"
          ],
          [
            { src: "../media/test_k.png", width: 32, height: 32, alt: "K" },
            "K"
          ],
          [
            { src: "../media/test_l.png", width: 32, height: 32, alt: "L" },
            "L"
          ],
          [{ src: "../media/test_m.png", width: 32, height: 32, alt: "M" }, "M"]
        ]
      }
    ]
  },
  {
    type: "example_angle",
    message0: "angle: %1",
    args0: [
      {
        type: "field_angle",
        name: "FIELDNAME",
        angle: "90",
        alt: {
          type: "field_label",
          text: "NO ANGLE FIELD"
        }
      }
    ]
  },
  {
    type: "example_date",
    message0: "date: %1",
    args0: [
      {
        type: "field_date",
        name: "FIELDNAME",
        date: "2020-02-20",
        alt: {
          type: "field_label",
          text: "NO DATE FIELD"
        }
      }
    ]
  },
  {
    type: "test_number",
    message0: "float %1",
    args0: [
      {
        type: "field_number",
        name: "NUM",
        text: "0"
      }
    ],
    colour: 230,
    output: "Number",
    tooltip: "A number."
  },
  {
    type: "test_integer",
    message0: "integer %1",
    args0: [
      {
        type: "field_number",
        name: "NUM",
        precision: 1,
        text: "0"
      }
    ],
    colour: 230,
    output: "Number",
    tooltip: "An integer."
  },
  {
    type: "test_number_hundredths",
    message0: "$ %1",
    args0: [
      {
        type: "field_number",
        name: "NUM",
        precision: 0.01,
        text: "0"
      }
    ],
    colour: 230,
    output: "Number",
    tooltip: "A dollar amount."
  },
  {
    type: "test_integer_bounded",
    message0: "midi note %1",
    args0: [
      {
        type: "field_number",
        name: "NOTE",
        precision: 1,
        min: 1,
        max: 127,
        text: "0"
      }
    ],
    colour: 230,
    output: "Note",
    tooltip: "A midi note."
  },
  {
    type: "image_datauri",
    message0: "Imagen %1",
    args0: [
      {
        type: "field_image",
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAC4jAAAuIwF4pT92AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAARb0lEQVRoBdVbeXQV13n/ZubN21ftKxJCAiEQAiRWg8EYuyGhXqhLbZo4TRqT8Edbt+c0cdy0xceO3ZPTnPjEnOCe1qdNndI4xI196hQn2DWLbQQGAwaZHQQCLQgtPL39zZvp77vvjfykYiPpCZdecd/MvXOX7/dt97t3BqLbI0m3Bxm3hophcA6Ho8LlchXfmmluPKp84+pbWmsCtiiKZZMsy4szs30utEzmJCaQm3FLtIN0IVlpga5LsZt1mMznkwnYAGE83mjgXFay6rkdKYriIzKiqZR8ksufV5oswOY4eoZwEzRfGWAqczXLBFV2SxKdjcUGL2f6CEZk7m/ZxSR0ohOY/XWPx/Og2+1eiYGyJc33dq/Xm4crt+WyAKbrugvqfBRlZsbnlkyCJzohEy+kaRiGYhjSD5xO7wLUMQgbDwpbLdR1esbl8s/hMpKYE+0HJEk/lK4Sv4IRWeVbcsu2lWviMYxEIvGxzWavkCTj930+3xsRJNRLmqZdt1rVewAuijZt3Jbrk8nkIMq9uDfNALe3Pk0GYAaQAR3fZbVaa1Op1EKA2WuSj7pDsNn+eDw+kKljKWvIrB3Ddp159v/momYotcGeH0NenilnM1XZvDmt0qNQCbPIqmOGjK7Lenz73JpEuuCo6kCWyQTzmk0pP98AxvxuViUDFTaeqTPHy2py+9zeiLhs6TKls5D/DPm1iirvmQXLig2Xy3Mc4WUJP0QS7VeurPbD4xemqyb390ZEjncGJjIFb1xusVi+jOVmRzgc/ihrEPbWq5Ef9vhcd33hgeLyhqYAVU/zkmKR6N/+8Qz95rWOTXj+YqZPI1ay530+2y+vX7++FXUmjZPixS2ZSXK5CEKgwoNwzKcwkFDJ5uaA79Ch5BeIQl+ft6hg5ao1Zdb62QHKL7STza4YiiKlJFlK3bm61AbAD2/Y1PjKtq3HVttsrh/Uz3FVnzsRO50hynSKk7Jem9zLBTD35XFGScD6UEWVY9uXv1mjzp6bR/48K0DKup4yKJXSZd0gyeGwGMFgQtryd8dCu3/T9VHTwoI5X9003a0ldfr2xiN7iWLrMO41ZPYBSeScU7aDyGWwbLAZrUmcBRs6pzf4qbTSFUsBaDyWUrSUjk2SLNlsCoVDSel024DRfSXmfnTT9KWPP9nobmopiJeUO2neIg87tZoMUdnj50InTYZKZxMwLGlEUkclSdp36XywqrDYocqyJMmqhBhaokhIo/ZzQdr7Vhd1XYlKX91UZzTMzTdUVWamqHa7hWrrPSWH9/fWY/ADyBycDI+dPeF47ycbsCkJG8DGQcx7J44PPjxvUZEC9U31Xo0oF88P0cH3e6mzI0zLVpXS+j+qpUCeTdKh48l4SmJH5nBaUpVT3ewM4cBEYsCsjeb46doJ/E42YJYCOxfTwfx325HBjuOH+yojEU1v3dMNEBItWFpI6zbUCAdmAEIiIaJLqIBEiLvJDvzFpU4GPBvZjRxCZsCiIa4TTjzorUilGLQZ+cGrXYmF1wfiLqtVkhbdWSKt/lIF1c8KsBQFUDgwgrYT/okMUyCr1aInEinlZFuQ+ntjb2CcPuRJATwZEh62rdJK/51dHeE/BHGNy1YXNM5s9Lurp3morMKlYzmSsRzBQ8N5xXViYFB7YdNoPyKldENxuVWqqXVXnmkbYMfFy13O6syTTCrgro7BtWvXV228e005wVERiDbsDoUlJ2uaQdEo7xcgKpYo1FckwNBZrzOJb1NaSrKDORVVTg5aZiDvQGYzyVnKkwEYdAynnsoqFyHASFgskhyPpxTYpySkiSbsobMTg2NVtlnBFEDRASkteeyjnRatuAx6T9SQ1WfkAFkPxno7GYBZPEwIX6+FhpK8vlohWSOZNCREVEJ1BUFmS26MexkgWcW7OyNkwB053RacdUEd0MXtVY3CEgda2qYTxf24GUS+LQCDjmHA4TDWWPa0siIbElSTH4qUBTZdZhuWAdSgwweu0Ys/PE/zFrpoylQXJeG1Fy4rkfIKbbRoub96/96eMvRhwDxKTmmyJMy2xSmmY/cPtfzf3v8T6KJhegkyIFGixcuLqKzSSYf3X6NX/vkynscJNi8/+EgNVU51le/fS1NQ+THybQFYAMj8QEGxKZBIYUAC42jJMtWC7PQDKDDibAcF8u00Y5af7r2vko58cI16u6NigKJSBwtlWmZ8XodzclyTIWGmhYlgL6qpVsmwIEQclgVQm86JG7JTYgtQFKuwV27IVTgAJI6vS8stVFhkJ/YFdoea8nhU1haOq800SlfM6rFdJwuwuZPRw0Mp5eD7V6kHjqhlaTFVYR1GyAiMkgArw24tVhUx8xD19HRQJNyLRwq5PSUUCJSTqjrgsQ3y+q0SByCBAnCBlFrw0w5I/Jbi/xyw5HQ6S3BItxz5sd07Biytu/uprsEtYUOApQZKDvXmWBnbQ3hmhc6cOkxHDiTIb72fyktr4Kk1OnnlBCD9jFoWN1FpWRUl4gmA1yWvzwpmOCpCQ6ECgL2MLAwC1wmlXCQsbCkvL88TiySf9uZblnZ2DOl3ry0yECdLpeUueOo0UFZjMEOA3f/+G3T11Dfoaxu+TrMbZ5LL6RKSDwaDtH//V2jb9uepZdV+qp+5GPWa5HRZqH6Os/zge8OAWcITtmPuONEkON3f35+A+b10x2LfKpjwj6bW+qXqaXnk9trZMgUY1kIc1dLRI29RsP3P6W/++mlatnwx+f0+Uq0WstpUKijMpy+tvZe+8xd/Tx/uWkztF9qg+nbJ5pCpuMyeDyIrMoSyr2DnNaGUM2DMGotGh/Zt397eTTTT60A0qGkhI6Vpkt3mFGstzrqov7+HPnq/ib71rU1Q2WLBCJx/QdXTcTVfOc1paqA//spf0oH3ghQeGpTcbif5fNhIE1WJBjmqNHvAXBObRYbj1x6KUvdSr8titF9sxVuHQckPR2S32+jA/t/S/NrNdM+9d4MJaQeW3jzIosxEMGhW/fyCfDp5LEZR6V+ovKLJuNTeLx3Y23scTd4qLvespaRtaVJLHOE+SONyYrlI2JwsvSMgeuD+++975Lubfk53zXuJmqtel07ue4AO7vsAHjlCwX6ZGhpmD4NjsJzNZILnssfjohl1c6i7i9Fo2Bvzlpj42Nata/LTsJVlXJFJnwxi1nzGNRenxcPyZGzL89evX/+T5557rrSmpoZtTGjO4iULacuWPDp69FmyyHMBxItH6AAnxgDxOoZaW1uhAXZqaWkR0jUQVHPIWVAAp9zhh9TjksfLMTXhfbL9TxWVvJGY8TxXIPE8PN+YUy4S5r6m83h448aNDFaLRqPyoQ8PUXd3N5WVl9AfrH+E2k81UnfPEXht5o1wZeKK82tasWIFvfDCC9gj84kQM0NcwIwkGalBVgPZapXJZXMuxpPvOJ3KyzgAYfXmlGmdLozlNxfApiopDptjWl1dOhjauXMntTS30AtbtlAymaCq6ilUFFhAvUFspa5dFTRx8MEJbxfo4MGD9MQTTwgpm8sXr9mdnR2kYjdsUezk8siphhY3NhBaW9OiwE9E5wkuTbkAzsxLqWg8ep3XUU6qmrYSBc5HVa0UCoUpofXRooVErQf2ILKKinbYY+C5Ss3NzTRr1iyh4lzHqbsLHv3EHjCritduo6cnpHzQHsITbeuvXj7HXJsw3RPuiEkhEKzA6fRf23/xi2QsFrOsWfNF48KF8/Tkk98VT3b8eidJ9tdpyZIv0omOv6Vd77wr6vGNByKsFCIxZOz8+Z6XL/bU//k6Djg8P6Wamnl06myv1PqzTmPzlSn0SG3lN9AZ+2PSN4tRxv+Ty7JkPPXUU/xGgO34wu49e1pcDm9dUWFxqrCwUB7ov06v/PuvqLXtGbrjrlnk9fopr8BNr766m/zOOkivEqEmn3TwssRRmEyRSJS2vfwq7Tr8KN2/7h7q6dPo51s/lu78rY/mLghQiWSrDmla04VoZMeuT04yx2XHpoTGz6oRPdZ4VfuOX657lO4pK16kydoMSyR+hTyFb1PzghXCOydgz/hCgLpgm+/s6KXGqY/T0qV3UGFhgZDqlcud9PY7OylI36fVa1ZS34BKr21to+Vv+mnGQi+lEoau4izkYiwibb587sd9oRC/heRkrhTp0k1+xwt4eHC84twQDUs+nUL8hq+maUHFvse/V1+UVxhLDfR1KXaHH0BLID1FOC+TLqvVhiOgQTp1ajddaS8ixWiEbSRJsb9L0xvyqbxyHp07HaOf/vAo5R+30Neap5LfUCmSTJFNkTUQYHmzv+fqi5curMa8xzbDnpHN1QJVn53SHuaz23zKU6XI6Taezi8OLLl4buBMbb2Sl1eAnY3bJ1kthRxFI8RMwkax3IggI73kxGNxHND5aH7zfdg8hGC7Ebw2VWC/q6kPwcmON7pp6Llu+pNADbXPjNA7PVfp3kAx2aH+GnyGFepfZXOCUzQfK/CxDHHDgvgUYoerxwuY7UUMHg4Hn7fbXceSceNJ+OaH+no1y5VLQ0ZJWUq22tgmJYBAa/zwcpNOvKzyHYIzEG63e7EN9FBvT4xOHh+g87/upvpWK91VX0luHyKMmEpnkyE6Fw3TbLd3WHf5mBdJ0I6vZMYMdrgT34wjmdRTLBZ+u/MyHc4r8L6JF2EL/mPbed3nt8o4qpFKsD3kvSyfS1sQ+/Mfxwl8Ph2Lpih4PU6dl0N04USQjrUPknW3Ro/RVKpe5oHz0igc1liF6U5/ASXBMM5WODZm3gU+NUjRQaYZnxQY23ngMSbBqjG2Hd2MOcxx9PSGuXk7H/9e4xS3W021He1T2s8OUe/VGJyRwYfx+FaLPXFapWMxHbsg7mbAa9uprt5HdTjL6u2JUv83+2h+aYDUShmqboj+FoCEspCBw1BN0+XDwUF6pvPiX4Hbz2YISnMyU7jZZbwqbY7HkzDVnO6Y3uCdkg/iPTiWWZZfhqNVgAolaeh6UpxNxfDGgcHzyQefW3m8Knn4JAPMUBE2svr787CjejZOrd++RrM7fOQqwxm1HVsHvHtKXkzpg5SUj5YG9RfDV56hWMIEy3HEmB0WE5sLYFONltbN9JHNoeixcFLiSl5TfX4bvwaFZJk3IxOrJW9/mQn85pDPpvngDx+50Ml/stKH7w6S74REriGZEmgYWycbPXkavbSnBy+UE/+QGc3UsJGD36Q0UcDmsKXYwSyprPbAN8lGXNOBLn2so0MyJkeyIY+oyzCDj4L4LSKrb1NTPj548SDujlEctm5F5+oSp1SL+5OnB9X3TkcCmLwTeVySNQmeCGCm36R7/orfCcwowLEqpIVdPQRqBqsAkw1U9EDFiDqTClxZE/DWkAMM8jpVCky1oUv6CFfFu6fe7ghJFoNfrom9YlbXcd1OFLDJ3VWN8/IssEkc6UC6N1DfYWo+DelwAwaNAliZxEctCWQuggeCEfyGUVFlppePa82U6WEWb36dCGBzVBysySura/l7K9lI4HMFfgC6RiRROaImU7jhg0xllnaw2qRfmOPwnnV/4n5HTDxewNlkNq9eW9bAB+1WqyJOOaCWGbjpiwmeS2ZHs07M/sluSxT5xwxSuB334SbAz991QcJCB0yaM3MNdx3Tjdl5TI3RiGkw1fn3Siuc9ggChEQsrAogGVRMFtskLzdpocC4eScp6tPPzPv0kJlf0YT7QXeUNHYDTGTAInJDHeY3vcRYaR7RbryARWf+rzeJuFR/YG9f8NypYBTnTIilDMSQcFlwWyBO5m+xsMbKVhX0CleGekiJCef1WBHMYKDZjJDF2wmbDWEpvgnBeDwfXrnIMtv1pQsxJ46xYMPjOsYaAViMOKJmbAVncXGgpqdnwOQ2M44zl3mPzdfse66zIvP+2XzO91xnlrOvfM+Zx+R2fEVbl1FaZf/Xrot9J1Bm2iek1ug3rjRRJo1rklvVOBfiWYKj+38Wx0c/G12+VRhHjPs/fMsbqWWFLgkAAAAASUVORK5CYII=",
        width: 50,
        height: 50,
        alt: "*"
      }
    ],
    colour: 160
  },
  {
    type: "image_small",
    message0: "Image too small %1",
    args0: [
      {
        type: "field_image",
        src: "../media/test_30px.png",
        width: 50,
        height: 50,
        alt: "*"
      }
    ],
    colour: 160
  },
  {
    type: "image_large",
    message0: "Image too large %1",
    args0: [
      {
        type: "field_image",
        src: "../media/test_200px.png",
        width: 50,
        height: 50,
        alt: "*"
      }
    ],
    colour: 160
  },
  {
    type: "image_missing",
    message0: "Image missing %1",
    args0: [
      {
        type: "field_image",
        src: "missing.png",
        width: 50,
        height: 50,
        alt: "*"
      }
    ],
    colour: 160
  },
  {
    type: "test_with_lots_of_network_icons",
    message0:
      "Lots of network icons: %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18",
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_a.png",
        width: 32,
        height: 32,
        alt: "A"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_b.png",
        width: 32,
        height: 32,
        alt: "B"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_c.png",
        width: 32,
        height: 32,
        alt: "C"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_d.png",
        width: 32,
        height: 32,
        alt: "D"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_e.png",
        width: 32,
        height: 32,
        alt: "E"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_f.png",
        width: 32,
        height: 32,
        alt: "F"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_g.png",
        width: 32,
        height: 32,
        alt: "G"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_h.png",
        width: 32,
        height: 32,
        alt: "H"
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_a.png",
        width: 32,
        height: 32,
        alt: "A"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_b.png",
        width: 32,
        height: 32,
        alt: "B"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_c.png",
        width: 32,
        height: 32,
        alt: "C"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_d.png",
        width: 32,
        height: 32,
        alt: "D"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_e.png",
        width: 32,
        height: 32,
        alt: "E"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_f.png",
        width: 32,
        height: 32,
        alt: "F"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_g.png",
        width: 32,
        height: 32,
        alt: "G"
      },
      {
        type: "field_image",
        src: "https://blockly-demo.appspot.com/static/media/test_h.png",
        width: 32,
        height: 32,
        alt: "H"
      }
    ],
    colour: 160
  },
  {
    type: "styled_event_cap",
    message0: "Hat block (event)",
    nextStatement: null,
    colour: 330,
    style: {
      hat: "cap"
    }
  },
  {
    type: "block_colour_hex1",
    message0: "Block color: Bright purple %1 %2 %3 %4",
    args0: [
      {
        type: "field_input",
        name: "TEXT",
        text: "#992aff"
      },
      {
        type: "field_dropdown",
        name: "DROPDOWN",
        options: [["option", "ONE"], ["option", "TWO"]]
      },
      {
        type: "field_checkbox",
        name: "NAME",
        checked: true
      },
      {
        type: "input_value",
        name: "NAME"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#992aff"
  },
  {
    type: "block_colour_hex2",
    message0: "Block color: White %1 %2 %3 %4",
    args0: [
      {
        type: "field_input",
        name: "TEXT",
        text: "#fefefe"
      },
      {
        type: "field_dropdown",
        name: "DROPDOWN",
        options: [["option", "ONE"], ["option", "TWO"]]
      },
      {
        type: "field_checkbox",
        name: "NAME",
        checked: true
      },
      {
        type: "input_value",
        name: "NAME"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#fefefe"
  },
  {
    type: "block_colour_hex3",
    message0: "Block color: Black %1 %2 %3 %4",
    args0: [
      {
        type: "field_input",
        name: "TEXT",
        text: "#010101"
      },
      {
        type: "field_dropdown",
        name: "DROPDOWN",
        options: [["option", "ONE"], ["option", "TWO"]]
      },
      {
        type: "field_checkbox",
        name: "NAME",
        checked: true
      },
      {
        type: "input_value",
        name: "NAME"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#010101"
  },
  {
    type: "block_no_colour",
    message0: "Block color: unset"
  },
  {
    type: "block_colour_hex4",
    message0: "Block color: #RRGGBBAA (invalid)",
    colour: "#992aff99"
  },
  {
    type: "block_colour_hex5",
    message0: "Block color: #RRGGBB (invalid)",
    colour: "#NotHex"
  },
  {
    type: "emoji_label_robot_face",
    message0: "Robot Face: \uD83E\uDD16",
    colour: "#AAAAAA"
  }
]); // END JSON EXTRACT (Do not delete this comment.)

Blockly.Blocks["empty_block_with_mutator"] = {
  init: function() {
    this.setMutator(new Blockly.Mutator(["math_number"]));
  }
};
