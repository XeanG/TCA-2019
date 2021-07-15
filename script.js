function suavo(){

function coisas(mov) {
  if (mov == "mds" || mov == "MDS") {
    if (mdsss == 0) {
      alert("ok, seja bem vindo ao processo para mudança de sexo, para dar procedimento a isso, você deve esperar 1 ano, já que não é de um dia para o outro que se muda de sexo. Caso desista da ideia repita o comando novamente antes de avançar o ano.");
      mdsss++;
    }
    if (sexo == "masculino" && idade > 17) {
      sexo = "feminino";
    } else if (sexo == "feminino" && idade > 17) {
      sexo = "masculino";
    } else {
      alert("Você só pode trocar de sexo depois dos 18 anos.");
    }
  }
  if (mov == "") {
    idade++;
    if (idade < 11 && idade > 6) {
      saude = saude - (Math.floor(Math.random() * 10));
      cansado = cansado + (Math.floor(Math.random() * 10));
      felicidade = felicidade - (Math.floor(Math.random() * 10));
    }
    if (idade > 10) {
      saude = saude - (Math.floor(Math.random() * 15));
      cansado = cansado + (Math.floor(Math.random() * 15));
      felicidade = felicidade - (Math.floor(Math.random() * 15));
    }
    if (idade > 17) {
      riqueza = riqueza - (Math.floor(Math.random() * 15));
    }
    if (idade == 18) {
      alert("apartir de agora a sua riqueza sera reduzida a cada ano que passa, você já é maior de idade vai arranjar um emprego");
    }
    if (idade > 2 && sexo == "masculino") {
      bb = "🧒";
    }
    if (idade > 2 && sexo == "feminino") {
      bb = "👧";
    }
    if (idade > 12 && sexo == "masculino") {
      bb = "👱‍";
    }
    if (idade > 12 && sexo == "feminino") {
      bb = "👩";
    }
    if (idade > 21 && sexo == "masculino") {
      bb = "🧔";
    }
    if (idade > 21 && sexo == "feminino") {
      bb = "🙍‍";
    }
    if (idade > 59 && sexo == "masculino") {
      bb = "👴";
    }
    if (idade > 59 && sexo == "feminino") {
      bb = "👵";
    }
  }
  if (idade == limvida) {
    death++;
    alert("Você morreu de velhice. Fim de jogo");
  }
  if (mov == "VD" || mov == "vd" || mov == "videogame" || mov == "VIDEOGAME" && idade > 5) {
    if (riqueza < 30) {
      alert("você não tem um video-game, você é pobre. Precisa de no minimo 30% de riqueza para jogar.")
    } else {
      var jogo = prompt("Bem vindo ao video-game! qual dos nossos jogos você gostaria de jogar? \n 1 - Robox \n 2- Scramble \n 3- Senha \n 4- Sudoku")
      while (isNaN(jogo) == true || jogo > 4 || jogo < 1) {
        jogo = prompt("insira um valor valido. \n 1 - Robox \n 2- Scramble \n 3- Senha \n 4- Sudoku ")
      }
      if (jogo == 1) {
        alert("bem vindo ao Robox, o jogo consiste em levar as caixas para as marcações, boa sorte");
        var a = ["|__", "|__", "|__", "|__", "|__|"];
        var b = ["|__", "|__", "|🎁", "|__", "|__|"];
        var c = ["|__", "|🎁", "|🎅🏻", "|🎁", "|__|"];
        var d = ["|__", "|__", "|🎁", "|__", "|__|"];
        var e = ["|__", "|__", "|__", "|__", "|__|"];
        var alea1 = Math.floor(Math.random() * 5);
        var alea2 = Math.floor(Math.random() * 5);
        var alea4 = Math.floor(Math.random() * 5);
        var alea5 = Math.floor(Math.random() * 5);
        while (alea2 == 2) {
          var alea2 = Math.floor(Math.random() * 5);
        }
        while (alea4 == 2) {
          var alea4 = Math.floor(Math.random() * 5);
        }
        a[alea1] = "|🎄";
        b[alea2] = "|🎄";
        d[alea4] = "|🎄";
        e[alea5] = "|🎄";
        alert("o tabuleiro será assim: \n " + a.join("") + "\n" + b.join("") + "\n" + c.join("") + "\n" + d.join("") + "\n" + e.join(""));
        var sair = 0;
        var mov;
        var com = 2;
        function cima() {
          if (e[com] == "|🎅🏻" && d[com] == "|🎁" && c[com] == "|🎁") {
            contadorr++;
            contadorr--;
          } else if (c[com] == "|🎅🏻" && b[com] == "|🎁" && a[com] != "|🎁") {
            a[com] = "|🎁";
            b[com] = "|🎅🏻";
            c[com] = "|__";
          } else if (d[com] == "|🎅🏻" && c[com] == "|🎁" && b[com] != "|🎁") {
            b[com] = "|🎁";
            c[com] = "|🎅🏻";
            d[com] = "|__";
          } else if (e[com] == "|🎅🏻" && d[com] == "|🎁" && c[com] != "|🎁") {
            c[com] = "|🎁";
            d[com] = "|🎅🏻";
            e[com] = "|__";
          } else if (b[com] == "|🎅🏻" && a[com] != "|🎁") {
            b[com] = "|__";
            a[com] = "|🎅🏻";
          } else if (c[com] == "|🎅🏻" && b[com] != "|🎁") {
            c[com] = "|__";
            b[com] = "|🎅🏻";
          } else if (d[com] == "|🎅🏻" && c[com] != "|🎁") {
            d[com] = "|__";
            c[com] = "|🎅🏻";
          } else if (e[com] == "|🎅🏻" && e[com] != "|🎁") {
            e[com] = "|__";
            d[com] = "|🎅🏻";
          }
        }
        function baixo() {
          if (c[com] == "|🎅🏻" && d[com] == "|🎁" && e[com] != "|🎁") {
            c[com] = "|__";
            d[com] = "|🎅🏻";
            e[com] = "|🎁";
          } else if (b[com] == "|🎅🏻" && c[com] == "|🎁" && d[com] != "|🎁") {
            b[com] = "|__";
            c[com] = "|🎅🏻";
            d[com] = "|🎁";
          } else if (a[com] == "|🎅🏻" && b[com] == "|🎁" && c[com] != "|🎁") {
            a[com] = "|__";
            b[com] = "|🎅🏻";
            c[com] = "|🎁";
          } else if (d[com] == "|🎅🏻" && e[com] != "|🎁") {
            d[com] = "|__";
            e[com] = "|🎅🏻";
          } else if (c[com] == "|🎅🏻" && d[com] != "|🎁") {
            c[com] = "|__";
            d[com] = "|🎅🏻";
          } else if (b[com] == "|🎅🏻" && c[com] != "|🎁") {
            b[com] = "|__";
            c[com] = "|🎅🏻";
          } else if (a[com] == "|🎅🏻" && b[com] != "|🎁") {
            a[com] = "|__";
            b[com] = "|🎅🏻";
          }
        }
        function esquerda() {
          if (com == 4 && a[com - 1] == "|🎁" && a[com] == "|🎅🏻" && a[com - 2] != "|🎁") {
            a[com - 2] = "|🎁";
            a[com - 1] = "|🎅🏻";
            a[com] = "|__";
          } else if (com == 4 && b[com - 1] == "|🎁" && b[com] == "|🎅🏻" && b[com - 2] != "|🎁") {
            b[com - 2] = "|🎁";
            b[com - 1] = "|🎅🏻";
            b[com] = "|__";
          } else if (com == 4 && c[com - 1] == "|🎁" && c[com] == "|🎅🏻" && c[com - 2] != "|🎁") {
            c[com - 2] = "|🎁";
            c[com - 1] = "|🎅🏻";
            c[com] = "|__";
          } else if (com == 4 && d[com - 1] == "|🎁" && d[com] == "|🎅🏻" && d[com - 2] != "|🎁") {
            d[com - 2] = "|🎁";
            d[com - 1] = "|🎅🏻";
            d[com] = "|__";
          } else if (com == 4 && e[com - 1] == "|🎁" && e[com] == "|🎅🏻" && e[com - 2] != "|🎁") {
            e[com - 2] = "|🎁";
            e[com - 1] = "|🎅🏻";
            e[com] = "|__";
          } else if (com == 3 && a[com - 1] == "|🎁" && a[com] == "|🎅🏻" && a[com - 2] != "|🎁") {
            a[com - 2] = "|🎁";
            a[com - 1] = "|🎅🏻";
            a[com] = "|__";
          } else if (com == 3 && b[com - 1] == "|🎁" && b[com] == "|🎅🏻" && b[com - 2] != "|🎁") {
            b[com - 2] = "|🎁";
            b[com - 1] = "|🎅🏻";
            b[com] = "|__";
          } else if (com == 3 && c[com - 1] == "|🎁" && c[com] == "|🎅🏻" && c[com - 2] != "|🎁") {
            c[com - 2] = "|🎁";
            c[com - 1] = "|🎅🏻";
            c[com] = "|__";
          } else if (com == 3 && d[com - 1] == "|🎁" && d[com] == "|🎅🏻" && d[com - 2] != "|🎁") {
            d[com - 2] = "|🎁";
            d[com - 1] = "|🎅🏻";
            d[com] = "|__";
          } else if (com == 3 && e[com - 1] == "|🎁" && e[com] == "|🎅🏻" && e[com - 2] != "|🎁") {
            e[com - 2] = "|🎁";
            e[com - 1] = "|🎅🏻";
            e[com] = "|__";
          } else if (com == 2 && a[com - 1] == "|🎁" && a[com] == "|🎅🏻" && a[com - 2] != "|🎁") {
            a[com - 2] = "|🎁";
            a[com - 1] = "|🎅🏻";
            a[com] = "|__";
          } else if (com == 2 && b[com - 1] == "|🎁" && b[com] == "|🎅🏻" && b[com - 2] != "|🎁") {
            b[com - 2] = "|🎁";
            b[com - 1] = "|🎅🏻";
            b[com] = "|__";
          } else if (com == 2 && c[com - 1] == "|🎁" && c[com] == "|🎅🏻" && c[com - 2] != "|🎁") {
            c[com - 2] = "|🎁";
            c[com - 1] = "|🎅🏻";
            c[com] = "|__";
          } else if (com == 2 && d[com - 1] == "|🎁" && d[com] == "|🎅🏻" && d[com - 2] != "|🎁") {
            d[com - 2] = "|🎁";
            d[com - 1] = "|🎅🏻";
            d[com] = "|__";
          } else if (com == 2 && e[com - 1] == "|🎁" && e[com] == "|🎅🏻" && e[com - 2] != "|🎁") {
            e[com - 2] = "|🎁";
            e[com - 1] = "|🎅🏻";
            e[com] = "|__";
          } else if (com == 4 && a[com - 1] != "|🎁" && a[com] == "|🎅🏻") {
            a[com] = "|__";
            a[com - 1] = "|🎅🏻";
          } else if (com == 4 && b[com - 1] != "|🎁" && b[com] == "|🎅🏻") {
            b[com] = "|__";
            b[com - 1] = "|🎅🏻";
          } else if (com == 4 && c[com - 1] != "|🎁" && c[com] == "|🎅🏻") {
            c[com] = "|__";
            c[com - 1] = "|🎅🏻";
          } else if (com == 4 && d[com - 1] != "|🎁" && d[com] == "|🎅🏻") {
            d[com] = "|__";
            d[com - 1] = "|🎅🏻";
          } else if (com == 4 && e[com - 1] != "|🎁" && e[com] == "|🎅🏻") {
            e[com] = "|__";
            e[com - 1] = "|🎅🏻";
          } else if (com == 3 && a[com - 1] != "|🎁" && a[com] == "|🎅🏻") {
            a[com] = "|__";
            a[com - 1] = "|🎅🏻";
          } else if (com == 3 && b[com - 1] != "|🎁" && b[com] == "|🎅🏻") {
            b[com] = "|__";
            b[com - 1] = "|🎅🏻";
          } else if (com == 3 && c[com - 1] != "|🎁" && c[com] == "|🎅🏻") {
            c[com] = "|__";
            c[com - 1] = "|🎅🏻";
          } else if (com == 3 && d[com - 1] != "|🎁" && d[com] == "|🎅🏻") {
            d[com] = "|__";
            d[com - 1] = "|🎅🏻";
          } else if (com == 3 && e[com - 1] != "|🎁" && e[com] == "|🎅🏻") {
            e[com] = "|__";
            e[com - 1] = "|🎅🏻";
          } else if (com == 2 && a[com - 1] != "|🎁" && a[com] == "|🎅🏻") {
            a[com] = "|__";
            a[com - 1] = "|🎅🏻";
          } else if (com == 2 && b[com - 1] != "|🎁" && b[com] == "|🎅🏻") {
            b[com] = "|__";
            b[com - 1] = "|🎅🏻";
          } else if (com == 2 && c[com - 1] != "|🎁" && c[com] == "|🎅🏻") {
            c[com] = "|__";
            c[com - 1] = "|🎅🏻";
          } else if (com == 2 && d[com - 1] != "|🎁" && d[com] == "|🎅🏻") {
            d[com] = "|__";
            d[com - 1] = "|🎅🏻";
          } else if (com == 2 && e[com - 1] != "|🎁" && e[com] == "|🎅🏻") {
            e[com] = "|__";
            e[com - 1] = "|🎅🏻";
          } else if (com == 1 && a[com - 1] != "|🎁" && a[com] == "|🎅🏻") {
            a[com] = "|__";
            a[com - 1] = "|🎅🏻";
          } else if (com == 1 && b[com - 1] != "|🎁" && b[com] == "|🎅🏻") {
            b[com] = "|__";
            b[com - 1] = "|🎅🏻";
          } else if (com == 1 && c[com - 1] != "|🎁" && c[com] == "|🎅🏻") {
            c[com] = "|__";
            c[com - 1] = "|🎅🏻";
          } else if (com == 1 && d[com - 1] != "|🎁" && d[com] == "|🎅🏻") {
            d[com] = "|__";
            d[com - 1] = "|🎅🏻";
          } else if (com == 1 && e[com - 1] != "|🎁" && e[com] == "|🎅🏻") {
            e[com] = "|__";
            e[com - 1] = "|🎅🏻";
          } else {
            com++
          }
        }
        function direita() {
          if (com == 0 && a[com + 1] == "|🎁" && a[com] == "|🎅🏻" && a[com + 2] != "|🎁") {
            a[com + 2] = "|🎁";
            a[com + 1] = "|🎅🏻";
            a[com] = "|__";
          } else if (com == 0 && b[com + 1] == "|🎁" && b[com] == "|🎅🏻" && b[com + 2] != "|🎁") {
            b[com + 2] = "|🎁";
            b[com + 1] = "|🎅🏻";
            b[com] = "|__";
          } else if (com == 0 && c[com + 1] == "|🎁" && c[com] == "|🎅🏻" && c[com + 2] != "|🎁") {
            c[com + 2] = "|🎁";
            c[com + 1] = "|🎅🏻";
            c[com] = "|__";
          } else if (com == 0 && d[com + 1] == "|🎁" && d[com] == "|🎅🏻" && d[com + 2] != "|🎁") {
            d[com + 2] = "|🎁";
            d[com + 1] = "|🎅🏻";
            d[com] = "|__";
          } else if (com == 0 && e[com + 1] == "|🎁" && e[com] == "|🎅🏻" && e[com + 2] != "|🎁") {
            e[com + 2] = "|🎁";
            e[com + 1] = "|🎅🏻";
            e[com] = "|__";
          } else if (com == 2 && a[com + 1] == "|🎁" && a[com] == "|🎅🏻" && a[com + 2] != "|🎁") {
            a[com + 2] = "|🎁";
            a[com + 1] = "|🎅🏻";
            a[com] = "|__";
          } else if (com == 2 && b[com + 1] == "|🎁" && b[com] == "|🎅🏻" && b[com + 2] != "|🎁") {
            b[com + 2] = "|🎁";
            b[com + 1] = "|🎅🏻";
            b[com] = "|__";
          } else if (com == 2 && c[com + 1] == "|🎁" && c[com] == "|🎅🏻" && c[com + 2] != "|🎁") {
            c[com + 2] = "|🎁";
            c[com + 1] = "|🎅🏻";
            c[com] = "|__";
          } else if (com == 2 && d[com + 1] == "|🎁" && d[com] == "|🎅🏻" && d[com + 2] != "|🎁") {
            d[com + 2] = "|🎁";
            d[com + 1] = "|🎅🏻";
            d[com] = "|__";
          } else if (com == 2 && e[com + 1] == "|🎁" && e[com] == "|🎅🏻" && e[com + 2] != "|🎁") {
            e[com + 2] = "|🎁";
            e[com + 1] = "|🎅🏻";
            e[com] = "|__";
          } else if (com == 1 && a[com + 1] == "|🎁" && a[com] == "|🎅🏻" && a[com + 2] != "|🎁") {
            a[com + 2] = "|🎁";
            a[com + 1] = "|🎅🏻";
            a[com] = "|__";
          } else if (com == 1 && b[com + 1] == "|🎁" && b[com] == "|🎅🏻" && b[com + 2] != "|🎁") {
            b[com + 2] = "|🎁";
            b[com + 1] = "|🎅🏻";
            b[com] = "|__";
          } else if (com == 1 && c[com + 1] == "|🎁" && c[com] == "|🎅🏻" && c[com + 2] != "|🎁") {
            c[com + 2] = "|🎁";
            c[com + 1] = "|🎅🏻";
            c[com] = "|__";
          } else if (com == 1 && d[com + 1] == "|🎁" && d[com] == "|🎅🏻" && d[com + 2] != "|🎁") {
            d[com + 2] = "|🎁";
            d[com + 1] = "|🎅🏻";
            d[com] = "|__";
          } else if (com == 1 && e[com + 1] == "|🎁" && e[com] == "|🎅🏻" && e[com + 2] != "|🎁") {
            e[com + 2] = "|🎁";
            e[com + 1] = "|🎅🏻";
            e[com] = "|__";
          } else if (com == 0 && a[com + 1] != "|🎁" && a[com] == "|🎅🏻" && a[com + 2] != "|🎁") {
            a[com] = "|__";
            a[com + 1] = "|🎅🏻";
          } else if (com == 0 && b[com + 1] != "|🎁" && b[com] == "|🎅🏻" && b[com + 2] != "|🎁") {
            b[com] = "|__";
            b[com + 1] = "|🎅🏻";
          } else if (com == 0 && c[com + 1] != "|🎁" && c[com] == "|🎅🏻" && c[com + 2] != "|🎁") {
            c[com] = "|__";
            c[com + 1] = "|🎅🏻";
          } else if (com == 0 && d[com + 1] != "|🎁" && d[com] == "|🎅🏻" && d[com + 2] != "|🎁") {
            d[com] = "|__";
            d[com + 1] = "|🎅🏻";
          } else if (com == 0 && e[com + 1] != "|🎁" && e[com] == "|🎅🏻" && e[com + 2] != "|🎁") {
            e[com] = "|__";
            e[com + 1] = "|🎅🏻";
          } else if (com == 3 && a[com + 1] != "|🎁" && a[com] == "|🎅🏻") {
            a[com] = "|__";
            a[com + 1] = "|🎅🏻";
          } else if (com == 3 && b[com + 1] != "|🎁" && b[com] == "|🎅🏻") {
            b[com] = "|__";
            b[com + 1] = "|🎅🏻";
          } else if (com == 3 && c[com + 1] != "|🎁" && c[com] == "|🎅🏻") {
            c[com] = "|__";
            c[com + 1] = "|🎅🏻";
          } else if (com == 3 && d[com + 1] != "|🎁" && d[com] == "|🎅🏻") {
            d[com] = "|__";
            d[com + 1] = "|🎅🏻";
          } else if (com == 3 && e[com + 1] != "|🎁" && e[com] == "|🎅🏻") {
            e[com] = "|__";
            e[com + 1] = "|🎅🏻";
          } else if (com == 2 && a[com + 1] != "|🎁" && a[com] == "|🎅🏻") {
            a[com] = "|__";
            a[com + 1] = "|🎅🏻";
          } else if (com == 2 && b[com + 1] != "|🎁" && b[com] == "|🎅🏻") {
            b[com] = "|__";
            b[com + 1] = "|🎅🏻";
          } else if (com == 2 && c[com + 1] != "|🎁" && c[com] == "|🎅🏻") {
            c[com] = "|__";
            c[com + 1] = "|🎅🏻";
          } else if (com == 2 && d[com + 1] != "|🎁" && d[com] == "|🎅🏻") {
            d[com] = "|__";
            d[com + 1] = "|🎅🏻";
          } else if (com == 2 && e[com + 1] != "|🎁" && e[com] == "|🎅🏻") {
            e[com] = "|__";
            e[com + 1] = "|🎅🏻";
          } else if (com == 1 && a[com + 1] != "|🎁" && a[com] == "|🎅🏻") {
            a[com] = "|__";
            a[com + 1] = "|🎅🏻";
          } else if (com == 1 && b[com + 1] != "|🎁" && b[com] == "|🎅🏻") {
            b[com] = "|__";
            b[com + 1] = "|🎅🏻";
          } else if (com == 1 && c[com + 1] != "|🎁" && c[com] == "|🎅🏻") {
            c[com] = "|__";
            c[com + 1] = "|🎅🏻";
          } else if (com == 1 && d[com + 1] != "|🎁" && d[com] == "|🎅🏻") {
            d[com] = "|__";
            d[com + 1] = "|🎅🏻";
          } else if (com == 1 && e[com + 1] != "|🎁" && e[com] == "|🎅🏻") {
            e[com] = "|__";
            e[com + 1] = "|🎅🏻";
          } else if (com == 0 && a[com + 1] != "|🎁" && a[com] == "|🎅🏻") {
            a[com] = "|__";
            a[com + 1] = "|🎅🏻";
          } else if (com == 0 && b[com + 1] != "|🎁" && b[com] == "|🎅🏻") {
            b[com] = "|__";
            b[com + 1] = "|🎅🏻";
          } else if (com == 0 && c[com + 1] != "|🎁" && c[com] == "|🎅🏻") {
            c[com] = "|__";
            c[com + 1] = "|🎅🏻";
          } else if (com == 0 && d[com + 1] != "|🎁" && d[com] == "|🎅🏻") {
            d[com] = "|__";
            d[com + 1] = "|🎅🏻";
          } else if (com == 0 && e[com + 1] != "|🎁" && e[com] == "|🎅🏻") {
            e[com] = "|__";
            e[com + 1] = "|🎅🏻";
          } else {
            com--;
          }
        }
        function vitoria() {
          if (a[alea1] != "|🎅🏻" && a[alea1] != "|🎁") {
            a[alea1] = "|🎄";
          }
          if (b[alea2] != "|🎅🏻" && b[alea2] != "|🎁") {
            b[alea2] = "|🎄";
          }
          if (d[alea4] != "|🎅🏻" && d[alea4] != "|🎁") {
            d[alea4] = "|🎄";
          }
          if (e[alea5] != "|🎅🏻" && e[alea5] != "|🎁") {
            e[alea5] = "|🎄";
          }
          if (a[alea1] == "|🎁" && b[alea2] == "|🎁" && d[alea4] == "|🎁" && e[alea5] == "|🎁") {
            alert("parabéns, você venceu. \n com:" + contadorr + " movimentos");
            sair++;
          }
        }
        var contadorr = 0;
        while (sair != 1) {
          mov = prompt(a.join("") + "\n" + b.join("") + "\n" + c.join("") + "\n" + d.join("") + "\n" + e.join("") + " \n insira pra onde deseja andar \n W - Cima \n A- Esquerda \n S - Baixo \n D - direita \n este é o seu contador de movimentos:" + contadorr);
          contadorr++;
          if (mov == "W" || mov == "w") {
            cima();
          }
          if (mov == "s" || mov == "S") {
            baixo();
          }
          if (mov == "a" || mov == "A") {
            esquerda();
            com--;
            if (com < 0) {
              com++;
            }
          }
          if (mov == "d" || mov == "D") {
            direita();
            com++;
            if (com > 4) {
              com--;
            }
          }
          if (mov == "desistir") {
            sair++;
          }
          vitoria();
        }
      }
      if (jogo == 2) {
        alert("Bem vindo ao jogo de embaralhar palavras, palavras com acentos serão desconsideradas, então não precisa usar.;)");
        alert("A palavra irá aparecer por exemplo:\n Palavra que meu programa sorteou: Gremory \n Palavra que supostamente poderia aparecer: RMOYREG \n Você terá que descobrir qual é a palavra embaralhada, boa sorte moço(a).");
        var palavras = ["amor", "belzebu", "satan", "lucifer", "asmodeu", "samael", "kamael", "exu", "vapula", "zepar", "belial", "salomao", "deus", "miguel", "andras", "vassago", "forneus", "zagan", "marbas", "paimon", "fenix", "orobas", "gremory", "stolas", "valac", "vine", "camio", "bune", "astaroth", "rafael", "gabriel", "biblia", "grimorio", "goetia", "inferno", "ceu", "anjo", "demonio", "querubim", "arcanjo", "lelahel", "haziel", "habuhiah", "jeliel", "omael", "aniel", "cabala", "behemoth", "leviata"];
        var palavrasorteada = palavras[Math.floor(Math.random() * palavras.length)];
        var aux = palavrasorteada;
        var numerodletra = palavrasorteada.length;
        var aux2 = numerodletra;
        while (numerodletra != 0) {
          palavrasorteada[numerodletra];
          numerodletra--;
        }
        numerodletra = palavrasorteada.length;
        var embaralhado = "";
        var x = 0;
        var z;
        var zke;
        while (x != aux2) {
          z = Math.floor(Math.random() * numerodletra);
          while (palavrasorteada[z] == "") {
            z = Math.floor(Math.random() * numerodletra);
          }
          embaralhado += palavrasorteada[z];
          palavrasorteada = palavrasorteada.replace(palavrasorteada[z], "");
          x++;
          numerodletra--;
        }
        alert("digite 1 para desistir \n digite 2 para revelar uma letra que esteja na posição certa \n digite 3 para trocar a palavra");
        var resp;
        var pontuacao = 0;
        while (resp != aux) {
          resp = prompt(embaralhado + "\n sua pontuação é:" + pontuacao);
          if (resp == aux) {
            zke = Number(prompt("parabéns, voce ganhou,deseja jogar novamente? \n 1- sim \n 2- não"));
            if (zke == 1) {
              resp = 3;
              pontuacao++;
            }
            if (zke == 2) {
              pontuacao++;
              alert("obrigado por jogar, sua pontuação foi:" + pontuacao);
            }
          }
          if (resp == 1) {
            resp = aux;
            alert("fim de jogo sua pontuação foi: " + pontuacao);
          }
          if (resp == 2) {
            var kk = Number(prompt("insira a posição que deseja saber qual letra se encontra nela"))
            embaralhado += "\n " + kk + "º letra da palavra é: " + aux[kk - 1];
          }
          if (resp == 3) {
            var palavras = ["amor", "belzebu", "satan", "lucifer", "asmodeu", "samael", "kamael", "exu", "vapula", "zepar", "belial", "salomao", "deus", "miguel", "andras", "vassago", "forneus", "zagan", "marbas", "paimon", "fenix", "orobas", "gremory", "stolas", "valac", "vine", "camio", "bune", "astaroth", "rafael", "gabriel", "biblia", "grimorio", "goetia", "inferno", "ceu", "anjo", "demonio", "querubim", "arcanjo", "lelahel", "haziel", "habuhiah", "jeliel", "omael", "aniel", "cabala", "behemoth", "leviata"];
            var palavrasorteada = palavras[Math.floor(Math.random() * palavras.length)];
            var aux = palavrasorteada;
            var numerodletra = palavrasorteada.length;
            var aux2 = numerodletra;
            while (numerodletra != 0) {
              palavrasorteada[numerodletra];
              numerodletra--;
            }
            numerodletra = palavrasorteada.length;
            var embaralhado = "";
            var x = 0;
            var z;
            while (x != aux2) {
              z = Math.floor(Math.random() * numerodletra);
              while (palavrasorteada[z] == "") {
                z = Math.floor(Math.random() * numerodletra);
              }
              embaralhado += palavrasorteada[z];
              palavrasorteada = palavrasorteada.replace(palavrasorteada[z], "");
              x++;
              numerodletra--;
            }
          }
          if (resp == isNaN && resp != aux) {
            resp = prompt(embaralhado + "\n sua pontuação é:" + pontuacao);
            if (resp == aux) {
              zke = Number(prompt("parabéns, voce ganhou,deseja jogar novamente? \n 1- sim \n 2- não"));
              if (zke == 1) {
                resp = 3;
                pontuacao++;
              }
              if (zke == 2) {
                pontuacao++;
                alert("obrigado por jogar");
              }
            }
          }
        }
      }
      if (jogo == 3) {
        alert("seja bem vindo ao jogo SENHA \n as regras são o seguinte; \n 1- O jogo tem 4 dificuldades muito facil,facil,medio, e dificil com respectivamente (10,10,15,15) tentativas cada \n 2- O metodo de jogo é o seguinte: você fala uma palavra e o computador diz quantas letras da palavra também tem na palavra sorteada, e quantas letras tem na palavra sorteada porém não estão no lugar certo \n 3- desconcidere 'ç' e acentos na hora de escrever \n BOA SORTE, E BOM JOGO!");
        var a = Number(prompt("insira a dificuldade \n 1- muito facil \n 2- facil \n 3-medio \n 4-dificil"));
        var asp = "         pc      cmnl      jr      ";
        if (a == 1) {
          var facil = "sob-fel-vil-ceu-paz-mal-ver-ser-nao-vao-ego-ter-reu-vir-bem-dar-bom-rol-mas-mae-elo-tal-vis-era-dia-luz-tez-ora-com-ato-";
          var pal = facil.substr((Math.floor(Math.random() * 120)), 3);
          while (pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
            var pal = facil.substr((Math.floor(Math.random() * 120)), 3);
          }
          var final = 11;
          var finalal = final - 1;
          while (final != 0) {
            console.log(pal);
            var pc = 0;
            var cmnl = 0;
            var res = prompt("insira uma palavra de 3 letras");
            while (res.length != 3) {
              res = prompt("palavra invalida, por favor insira uma palavra de 3 letras");
            }
            if (res == pal) {
              var x = Number(prompt("parabéns você ganhou, deseja continuar? \n 1- sim \n 2-não"));
              if (x == 1) {
                var pal = facil.substr((Math.floor(Math.random() * 119)), 3);
                while (pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
                  var pal = facil.substr((Math.floor(Math.random() * 119)), 3);
                }
                final = 10;
                finalal = 10;
              } else if (x == 2) {
                final = 1;
              }
            } else if (res[0] == pal[0]) {
              pc++;
            }
            if (res[1] == pal[1]) {
              pc++;
            }
            if (res[2] == pal[2]) {
              pc++;
            }
            if (res.indexOf((pal[0])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[1])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[2])) != -1) {
              cmnl++;
            }
            asp += "\n" + res + "     " + pc + "     " + cmnl + "      " + finalal;
            final--;
            finalal--;
            if (final == 0) {
              var x = Number(prompt("acabou,deseja continuar? \n 1- sim \n 2-não"));
              if (x == 1) {
                var pal = facil.substr((Math.floor(Math.random() * 119)), 3);
                while (pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
                  var pal = facil.substr((Math.floor(Math.random() * 119)), 3);
                  final += 10;
                  finalal += 10;
                }
              }
              if (x == 2) {
                final = 0;
                asp = "adeus";
              }
            }
            alert(asp);
          }
        }
        if (a == 2) {
          var facill = "bola-bala-gato-sapo-rato-fato-raio-amor-amar-vara-jean-olho-ralo-mito-acao-nojo-vovo-deus-ateu-enzo-odio-pneu-agua-juiz-nome-orar-trem-peso-show-aula-maca";
          var pal = facill.substr((Math.floor(Math.random() * 150)), 4);
          while (pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
            var pal = facill.substr((Math.floor(Math.random() * 150)), 4);
          }
          var final = 11;
          var finalal = final - 1;
          while (final != 0) {
            console.log(pal);
            var pc = 0;
            var cmnl = 0;
            var res = prompt("insira uma palavra de 4 letras");
            while (res.length != 4) {
              res = prompt("palavra invalida, por favor insira uma palavra de 4 letras");
            }
            if (res == pal) {
              var x = Number(prompt("parabéns você ganhou, deseja continuar? \n 1- sim \n 2-não"));
              if (x == 1) {
                var pal = facill.substr((Math.floor(Math.random() * 150)), 4);
                while (pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
                  var pal = facill.substr((Math.floor(Math.random() * 150)), 4);
                }
                final = 10;
                finalal = 10;
              } else if (x == 2) {
                final = 1;
              }
            } else if (res[0] == pal[0]) {
              pc++;
            }
            if (res[1] == pal[1]) {
              pc++;
            }
            if (res[2] == pal[2]) {
              pc++;
            }
            if (res[3] == pal[3]) {
              pc++;
            }
            if (res.indexOf((pal[0])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[1])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[2])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[3])) != -1) {
              cmnl++;
            }
            asp += "\n" + res + "     " + pc + "     " + cmnl + "      " + finalal;
            final--;
            finalal--;
            if (final == 0) {
              var x = Number(prompt("acabou,deseja continuar? \n 1- sim \n 2-não"));
              if (x == 1) {
                var pal = facill.substr((Math.floor(Math.random() * 150)), 4);
                while (pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
                  var pal = facill.substr((Math.floor(Math.random() * 150)), 4);
                  final += 10;
                  finalal += 10;
                }
              }
              if (x == 2) {
                final = 0;
                asp = "adeus";
              }
            }
            alert(asp);
          }
        }
        if (a == 3) {
          var medio = "plena-sutil-afeto-desde-audaz-inato-porem-mutua-secao-vigor-seria-cerne-aquem-fazer-ideia-anexo-sanar-etica-mutuo-torpe-poder-justo-lapso-gleba-detem-assim-honra-razao-corja-futil-";
          var pal = medio.substr((Math.floor(Math.random() * 180)), 5);
          while (pal[4] == "-" || pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
            var pal = medio.substr((Math.floor(Math.random() * 180)), 5);
          }
          var final = 16;
          var finalal = final - 1;
          while (final != 0) {
            console.log(pal);
            var pc = 0;
            var cmnl = 0;
            var res = prompt("insira uma palavra de 5 letras");
            while (res.length != 5) {
              res = prompt("palavra invalida, por favor insira uma palavra de 5 letras");
            }
            if (res == pal) {
              var x = Number(prompt("parabéns você ganhou, deseja continuar? \n 1- sim \n 2-não"));
              if (x == 1) {
                var pal = medio.substr((Math.floor(Math.random() * 180)), 5);
                while (pal[4] == "-" || pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
                  var pal = medio.substr((Math.floor(Math.random() * 180)), 5);
                }
                final = 15;
                finalal = 15;
              } else if (x == 2) {
                final = 1;
              }
            } else if (res[0] == pal[0]) {
              pc++;
            }
            if (res[1] == pal[1]) {
              pc++;
            }
            if (res[2] == pal[2]) {
              pc++;
            }
            if (res[3] == pal[3]) {
              pc++;
            }
            if (res[4] == pal[4]) {
              pc++;
            }
            if (res.indexOf((pal[0])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[1])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[2])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[3])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[4])) != -1) {
              cmnl++;
            }
            asp += "\n" + res + "     " + pc + "     " + cmnl + "      " + finalal;
            final--;
            finalal--;
            if (final == 0) {
              var x = Number(prompt("acabou,deseja continuar? \n 1- sim \n 2-não"));
              if (x == 1) {
                var pal = medio.substr((Math.floor(Math.random() * 180)), 5);
                while (pal[4] == "-" || pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
                  var pal = medio.substr((Math.floor(Math.random() * 180)), 5);
                  final += 15;
                  finalal += 15;
                }
              }
              if (x == 2) {
                final = 0;
                asp = "adeus";
              }
            }
            alert(asp);
          }
        }
        if (a == 4) {
          var dificil = "servir-limite-conter-emitir-adorar-engodo-deriva-deixar-patife-triade-forjar-coacao-estima-proeza-arrimo-topico-ironia-suprir-provem-trazer-vermos-genese-galgar-emocao-cerrar-devido-exiguo-pudico-quanto-vetado-";
          var pal = dificil.substr((Math.floor(Math.random() * 210)), 6);
          while (pal[5] == "-" || pal[4] == "-" || pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
            var pal = dificil.substr((Math.floor(Math.random() * 210)), 6);
          }
          var final = 16;
          var finalal = final - 1;
          while (final != 0) {
            console.log(pal);
            var pc = 0;
            var cmnl = 0;
            var res = prompt("insira uma palavra de 6 letras");
            while (res.length != 6) {
              res = prompt("palavra invalida, por favor insira uma palavra de 6 letras");
            }
            if (res == pal) {
              var x = Number(prompt("parabéns você ganhou, deseja continuar? \n 1- sim \n 2-não"));
              if (x == 1) {
                var pal = dificil.substr((Math.floor(Math.random() * 210)), 6);
                while (pal[5] == "-" || pal[4] == "-" || pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
                  var pal = dificil.substr((Math.floor(Math.random() * 210)), 6);
                }
                final = 15;
                finalal = 15;
              } else if (x == 2) {
                final = 1;
              }
            } else if (res[0] == pal[0]) {
              pc++;
            }
            if (res[1] == pal[1]) {
              pc++;
            }
            if (res[2] == pal[2]) {
              pc++;
            }
            if (res[3] == pal[3]) {
              pc++;
            }
            if (res[4] == pal[4]) {
              pc++;
            }
            if (res[5] == pal[5]) {
              pc++;
            }
            if (res.indexOf((pal[0])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[1])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[2])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[3])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[4])) != -1) {
              cmnl++;
            }
            if (res.indexOf((pal[5])) != -1) {
              cmnl++;
            }
            asp += "\n" + res + "     " + pc + "     " + cmnl + "      " + finalal;
            final--;
            finalal--;
            if (final == 0) {
              var x = Number(prompt("acabou,deseja continuar? \n 1- sim \n 2-não"));
              if (x == 1) {
                var pal = dificil.substr((Math.floor(Math.random() * 210)), 6);
                while (pal[5] == "-" || pal[4] == "-" || pal[3] == "-" || pal[0] == "-" || pal[1] == "-" || pal[2] == "-") {
                  var pal = dificil.substr((Math.floor(Math.random() * 210)), 6);
                  final += 15;
                  finalal += 15;
                }
              }
              if (x == 2) {
                final = 0;
                asp = "adeus";
              }
            }
            alert(asp);
          }
        }
      }
      if (jogo == 4) {
        var A1 = "_1_|";
        var A2 = "___|";
        var A3 = "___|";
        var A4 = "___|";
        var B1 = "___|";
        var B2 = "___|";
        var B3 = "_2_|";
        var B4 = "___|";
        var C1 = "___|";
        var C2 = "___|";
        var C3 = "___|";
        var C4 = "___|";
        var D1 = "___|";
        var D2 = "_3_|";
        var D3 = "___|";
        var D4 = "___|";
        alert("Olá, vamos jogar uma partida de Sudoku? Eu irei te apresentar o jogo e direi como você irá jogar.");
        alert("1-O jogo começará neste tabuleiro:\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4 + "\n2-A cada rodada eu irei perguntar em qual casa você gostaria de jogar(ex:D1) e qual número(de 1 a 4) você gostaria de colocar nesta casa.\n3-Ao final de cada rodada eu irei te mostrar a nova tabela e irei pedir sua nova jogada.\n4-Não pode existir, na mesma linha ou coluna, dois números iguais.\n5-Caso você erre, eu irei avisar você para que possa corrigir o erro.\n6-Caso você erre três vezes você perderá o jogo.\n7-Caso você não queira mais jogar digite 'não' e você não estará mais no jogo.\n7-Você também pode mudar algum número jogado ateriormente, mas apenas 5 vezes.\n8-Você não poderá mudar as posições predefinidas.\n\nÉ isso, se divirta e tenha um bom jogo!");
        var err = 0;
        var N = "";
        var P = prompt("     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4 + "\n\nDigite a posição na qual você irá jogar:");
        while (err < 3 && P != "não" && N != "não") {
          N = prompt("     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4 + "\n\nDigite o número que você irá jogar:");
          if (P == "A2") {
            A2 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (A2 == A1 || A2 == A3 || A2 == A4 || A2 == B2 | A2 == C2 || A2 == D2) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "A3") {
            A3 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (A3 == A1 || A3 == A2 || A3 == A4 || A3 == B3 | A3 == C3 || A3 == D3) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "A4") {
            A4 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (A4 == A1 || A4 == A2 || A4 == A3 || A4 == B4 | A4 == C4 || A4 == D4) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "B1") {
            B1 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (B1 == B2 || B1 == B3 || B1 == B4 || B1 == A1 || B1 == C1 || B1 == D1) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "B2") {
            B2 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (B2 == B1 || B2 == B3 || B2 == B4 || B2 == A2 || B2 == C2 || B2 == D2) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "B4") {
            B4 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (B4 == B2 || B4 == B3 || B4 == B1 || B4 == A4 || B4 == C4 || B4 == D4) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "C1") {
            C1 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (C1 == C2 || C1 == C3 || C1 == C4 || C1 == A1 || C1 == B1 || C1 == D1) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "C2") {
            C2 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (C2 == C1 || C2 == C3 || C2 == C4 || C2 == A2 || C2 == B2 || C2 == D2) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "C3") {
            C3 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (C3 == C2 || C3 == C1 || C3 == C4 || C3 == A3 || C3 == B3 || C3 == D3) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "C4") {
            C4 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (C4 == C2 || C4 == C3 || C4 == C1 || C4 == A4 || C4 == B4 || C4 == D4) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "D1") {
            D1 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (D1 == D2 || D1 == D3 || D1 == D4 || D1 == A1 || D1 == B1 || D1 == C1) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "D3") {
            D3 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (D3 == D2 || D3 == D1 || D3 == D4 || D3 == A3 || D3 == B3 || D3 == C3) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (P == "D4") {
            D4 = "_" + N + "_|";
            alert("Seu novo tabuleiro:\n\n     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4);
            if (D4 == D2 || D4 == D3 || D4 == D1 || D4 == A4 || D4 == B4 || D4 == C4) {
              err++;
              if (err < 3) {
                alert("Você errou! Tente novamente!");
              }
              if (err == 3) {
                alert("Você errou três vezes! Você perdeu!");
                break;
              }
            }
          }
          if (A2 != "___|" && A3 != "___|" && A4 != "___|" && B1 != "___|" && B2 != "___|" && B4 != "___|" && C1 != "___|" && C2 != "___|" && C3 != "___|" && C4 != "___|" && D1 != "___|" && D3 != "___|" && D4 != "___|" && err < 3) {
            alert("Parabéns! Você venceu!");
            break;
          }
          P = prompt("     1    2    3    4\nA |" + A1 + A2 + A3 + A4 + "\nB |" + B1 + B2 + B3 + B4 + "\nC |" + C1 + C2 + C3 + C4 + "\nD |" + D1 + D2 + D3 + D4 + "\n\nDigite a posição na qual você irá jogar:");
        }
        if (P == "não" || N != "não") {
          alert("ata, xau!");
        }
      }
      felicidade = felicidade + (Math.floor(Math.random() * 25));
      saude = saude - (Math.floor(Math.random() * 10));
      cansado = cansado - (Math.floor(Math.random() * 10));
    }
  }
  if (mov == "morre" || mov == "sair" || mov == "die" || mov == "morte" || mov == "SAIR") {
    death++;
  }
  if (mov == "cheats" || mov == "macetes" || mov == "CHEATS") {
    var cheat = prompt("ai meu deus, como tu chegou aqui? ok eu não esperava por isso, essa é a lista de cheats do jogo: \n riqueza no 100: r1qu3z4 \n felicidade no 100: f3l1c1d4d3 \n cansado no 0: c4ns4d0 \n saude no 100: s4ud3 \n mudar de nome sem 18y: n0m3 \n mudar de nacionalidade sem 18y: n4c10n4l1d4d3 \n naturalizar sem 18y: n4tur4l1z4r \n mudar de sexo em 18y: s3x0 \n descobrir limite de idade ao morrer: l1m1t3 \n mudar idade:1d4d3");
    if (cheat == "c4ns4d0") {
      cansado = 0;
    }
    if (cheat == "s4ud3") {
      saude = 100;
    }
    if (cheat == "f3l1c1d4d3") {
      felicidade = 100;
    }
    if (cheat == "r1qu3z4") {
      riqueza = 100;
    }
    if (cheat == "s3x0") {
      if (sexo == "masculino") {
        sexo = "feminino";
      } else if (sexo == "feminino") {
        sexo = "masculino";
      }
    }
    if (cheat == "n4c10n4l1d4d3") {
      nacionalidade = prompt("insira a nova nacionalidade.");
    }
    if (cheat == "n0m3") {
      nome = prompt("insira o novo nome.");
    }
    if (cheat == "n4tur4l1z4r") {
      nacionalnat = prompt("insira a naturalidade que deseja");
      nacionalidade = nacionalidade + "," + nacionalnat;
    }
    if (cheat == "l1m1t3") {
      alert(limvida);
    }
    if (cheat == "1d4d3") {
      idade = Number(prompt("insira a nova idade que deseja"));
    }
  }
  if (mov == "DORMIR" || mov == "dormir" || mov == "tirar um ronco" || mov == "Hibernar fdskkk") {
    ronc = Math.floor(Math.random() * 100);
    if (ronc > 0 && ronc < 31) {
      cansado = cansado - (Math.floor(Math.random() * 25));
      saude = saude - (Math.floor(Math.random() * 10));
      alert("você teve uma má noite de sono. Seu cansaço diminuiu, porém, sua saúde também");
    }
    if (ronc > 30) {
      cansado = cansado - (Math.floor(Math.random() * 30));
      alert("você teve uma boa noite de sono, seu cansaço diminuiu");
    }
  }
  if (mov == "comer" || mov == "COMER" || mov == "nhami-nhami" || mov == "to cagado de fome") {
    var comercomida = Number(prompt("Opa! bem vindo ao lugar onde a gente come, que tipo de comida deseja comer? \n 1- Saladas \n 2 - Carnes \n 3 - Comida Vegana"));
    while (isNaN(comercomida) == true || comercomida > 3) {
      comercomida = Number(prompt("insira algo valido. \n 1- Saladas \n 2 - Carnes \n 3 - Comida Vegana"));
    }
    if (comercomida == 1) {
      alert("uma ótima escolha, saudavel, mas comer apenas Saladas não te deixa tão feliz assim.");
      felicidade = felicidade - (Math.floor(Math.random() * 10));
      saude = saude + (Math.floor(Math.random() * 15));
    }
    if (comercomida == 2) {
      alert("uma ótima escolha, isso te deixa feliz, mas comer apenas carne não te faz tão bem assim.");
      felicidade = felicidade + (Math.floor(Math.random() * 10));
      saude = saude - (Math.floor(Math.random() * 5));
      var dordbarriga = Math.floor(Math.random() * 100);
      if (dordbarriga > 40 && dordbarriga < 50) {
        alert("VISH MARIA, essa carne tava estragada, ficasse com dor de barriga, e isso não faz nada bem a sua saude");
        saude = saude - (Math.floor(Math.random() * 15));
      }
    }
    if (comercomida == 3) {
      alert("olha... pra ti ta comendo comida vegana é sinal que tu realmente gosta disso... o que me é bem estranho mas ok. Isso faz muito bem a sua felicidade e saude");
      felicidade = felicidade + (Math.floor(Math.random() * 10));
      saude = saude + (Math.floor(Math.random() * 10));
    }
  }
  if (mov == "colegio" || mov == "COLEGIO" || mov == "aula" || mov == "AULA" || mov == "estudar") {
    if (idade < 5) {
      alert("Você ainda não tem idade para estudar.");
    }
    if (idade > 4 && idade < 28) {
      var tamoemaula = (Math.floor(Math.random() * 100));
      if (tamoemaula > -1 && tamoemaula < 25) {
        alert("Você foi para aula e acabou sofrendo bullyng. Sua felicidade e saude decairam");
        felicidade = felicidade - (Math.floor(Math.random() * 25));
        saude = saude - (Math.floor(Math.random() * 25));
      }
      if (tamoemaula > 24 && tamoemaula < 50) {
        alert("Você estudou numa boa, porém você não tem amigos. sua feliciade decaiu.");
        felicidade = felicidade - (Math.floor(Math.random() * 25));
      }
      if (tamoemaula > 49 && tamoemaula < 75) {
        alert("Você estudou numa boa, inclusive conseguiu conversar com algumas pessoas. Isso te deixa feliz");
        felicidade = felicidade + (Math.floor(Math.random() * 25));
      }
      if (tamoemaula > 74 && tamoemaula < 101) {
        alert("Você estudou numa boa, inclusive conversou muito hoje com seus colegas, e o trabalho que estava te deixando estressado foi um sucesso! Isso faz sua felicidade e saude aumentarem.");
        felicidade = felicidade + (Math.floor(Math.random() * 25));
        saude = saude + (Math.floor(Math.random() * 25));
      }
    }
    if (idade > 27) {
      alert("acredito que tu já esteja velho de mais para frequentar as aulas, melhor você fazer outra coisa da sua vida.");
    }
  }
  if (mov == "DROGAS" || mov == "droga" || mov == "DROGAS" || mov == "drogas" || mov == "maicon douglas") {
    if (idade < 18) {
      alert("Esse jogo é minimamente correto, cê loko de usar drogas antes dos 18 anos? se for pra decepcionar teus pais, pelo menos seja por tu respondendo por ti mesmo, vai fazer outra coisa da vida moleque!");
    }
    if (idade > 17) {
      var biqueiro = 0;
      if (biqueiro == 0) {
        alert("erh, ok né, tu sabe que isso vai DESTRUIR tua vida? né? ok vamos lá antes que o biqueiro descarregue o 38 dele em mim por estar falando de mais");
        biqueiro++;
      }
      var drogasptu = Number(prompt("🕵-cóe menor, suavidade? vai levar qual droga na real? \n 1 - maconha \n 2 - bala \n 3- LSD \n 4 -cocaina \n 5- heroina \n 6-se apaixonar "));
      while (isNaN(drogasptu) == true || drogasptu > 6 || drogasptu < 1) {
        drogasptu = Number(prompt("🕵-COE MENOR TA TIRANDO? TENHO CARA DE PALHAÇO PRA TI? AGILIZA AI \n 1 - maconha \n 2 - bala \n 3- LSD \n 4 -cocaina \n 5- heroina \n 6-se apaixonar "));
      }
      if (drogasptu == 1 || drogasptu == 2 || drogasptu == 3 || drogasptu == 4 || drogasptu == 5 || drogasptu == 6) {
        alert("ok mano, tá feliz? você usou drogas nossa como voce é um ser humano SUPEEER rebelde, nossa nossa. Sua saude diminuiu, seu cansaço aumentou, mas sua felicidade em compensação subiu seu drogadinho de (*&#@!");
        felicidade = 100;
        saude = saude - (Math.floor(Math.random() * 100));
        cansado = cansado + (Math.floor(Math.random() * 100));
      }
      if (riqueza < 31) {
        alert("🔫🕵-COE MENOR, TU TA ME DEVENDO DINHEIRO, TA ACHANDO QUE COM ESSES TROCADOS MIXURUCAS TU IA CONSEGUIR ALGO COMIGO?");
        alert("O biqueiro te matou com 3 tiros de revolver. Fim de jogo");
        death++;
      }
    }
  }
  if (mov == "manual" || mov == "instrução" || mov == "regras" || mov == "comandos") {
    manual();
  }
  if (mov == "RELIGIAO" || mov == "RELIGIÃO" || mov == "religiao" || mov == "religião") {
    if (idade < 10) {
      alert("você ainda está um pouco novo para escolher sua religião. Nessa idade tu ainda vai ser obrigado a ir a igreja todo domingo por causa dos seus pais, boa sorte amigo.");
    } else if (idade > 9 && relrel == 0) {
      var tuareligiao = prompt("Bem vindo a central de religiões, por favor insira a religião a qual você gostaria de ingressar:");
      relrel = tuareligiao;
    } else {
      var creligiao = prompt("bem vindo a central da sua religião o " + relrel + " o que deseja fazer? \n 1-Frequentar a religião \n 2- Abandonar a religião");
      if (creligiao == 1) {
        var aleagiao = Math.floor(Math.random() * 100);
        if (aleagiao > 0 && aleagiao < 25) {
          alert("Você foi ao encontro marcado sobre sua religião, mas acabou se atrasando e não pode entrar no local já que o atraso não é tolerado. Sua felicidade decaiu");
          felicidade = felicidade - (Math.floor(Math.random() * 20));
        }
        if (aleagiao > 24 && aleagiao < 75) {
          alert("Voce foi ao encontro marcado sobre sua religião, tudo ocorreu normalmente, isso não muda em nada nos seus atributos");
        }
        if (aleagiao > 74 && aleagiao < 101) {
          alert("Voce foi ao encontro marcado sobre sua religião, tudo ocorreu normalmente, porém hoje você teve uma participação maior, e as pessoas gostaram disso. Sua felicidade aumentou");
          felicidade = felicidade + (Math.floor(Math.random() * 30));
        }
      }
      if (creligiao == 2) {
        alert("ok, você abandonou sua religião, caso queira ingressar em outra é só inserir o comando 'religião' novamente");
        relrel = 0;
      }
      while (creligiao < 0 || creligiao > 2) {
        creligiao = prompt("comando invalido, insira novamente. \n 1- Participar da religião \n 2- Abandonar religião");
      }
    }
  }
  if (mov == "FESTA" || mov == "festa") {
    if (idade < 16) {
      alert("Você ainda é muito novo pra frequentar festas a noite, lide com as festinhas do pedrinho com meia duzia de salgado e guarana dolly até seus 16 anos.");
    } else {
      var alesta = Math.floor(Math.random() * 100);
      if (alesta > -1 && alesta < 25) {
        alert("Você foi pra festa, acabou se afogando em corote e bebidas e tomou um PT legal. Seu cansaço aumenta e sua saude decai.");
        cansado = cansado + (Math.floor(Math.random() * 20));
        saude = saude - (Math.floor(Math.random() * 20));
      }
      if (alesta > 24 && alesta < 75) {
        alert("Você foi a festa, bebeu um pouco porém conseguiu curtir bem a festa, isso te deixa feliz, porém um pouco cansado.");
        cansado = cansado + (Math.floor(Math.random() * 15));
        felicidade = felicidade + (Math.floor(Math.random() * 15));
      }
      if (alesta > 74 && alesta < 101) {
        alert("Você foi a festa, desta vez resolveu não beber, mas isso não te impediu de se divertir horrores, além de chegar em casa menos cansado.");
        felicidade = felicidade + (Math.floor(Math.random() * 30));
        cansado = cansado + (Math.floor(Math.random() * 10));
      }
    }
  }
  if (mov == "LAZER" || mov == "lazer") {
    var aleazer = Math.floor(Math.random() * 100);
    if (aleazer > -1 && aleazer < 25) {
      alert("Você parou para ter um momento de lazer, porém apareceu algum compromisso pra fazer e tu não pode descansar direito, isso te deixa triste e cansado");
      cansado = cansado + (Math.floor(Math.random() * 40));
      felicidade = felicidade - (Math.floor(Math.random() * 40));
    }
    if (aleazer > 24 && aleazer < 75) {
      alert("Você conseguiu tirar seu momento de lazer, isso te deixa mais feliz e mnos cansado. Além de melhorar sua saude mental");
      cansado = cansado - (Math.floor(Math.random() * 15));
      felicidade = felicidade + (Math.floor(Math.random() * 15));
      saude = saude + (Math.floor(Math.random() * 15));
    }
    if (aleazer > 74 && aleazer < 101) {
      alert("Você conseguiu tirar seu momento de lazer, nenhum imprevisto, foi perfeito, conseguisse até tirar um cochilo, isso com certeza vai aumentar sua felicidade e saude mental, além de reduzir seu cansaço");
      cansado = cansado - (Math.floor(Math.random() * 35));
      felicidade = felicidade + (Math.floor(Math.random() * 35));
      saude = saude + (Math.floor(Math.random() * 35));
    }
  }
  if (mov == "CARRO" || mov == "carro") {
    if (idade > 17 && riqueza < 40) {
      alert("infelizmente tu não tem dinheiro nem pra dirigir um carro de forma ilegal");
    }
    if (idade < 16 || (idade < 18 && riqueza < 60)) {
      alert("primeiro de tudo que tu não tem nem noção de como dirige um carro, segundo que tu nem tem idade pra andar de carro, volta com 18 anos e com uma riqueza acima de 60% que podemos dar uma volta.");
    }
    if (idade > 15 && idade < 18 && riqueza > 60) {
      alert("Você pegou o carro dos seus pais e acabou caindo numa blitz, você perdeu seu carro, 60% das suas riquezas, e seus pais foram presos.");
      riqueza = riqueza - 60;
      felicidade = felicidade - (Math.floor(Math.random() * 100));
    }
    if (idade > 17 && riqueza > 39 && riqueza < 60) {
      sortepbate = (Math.floor(Math.random() * 100));
      if (sortepbate < 50) {
        alert("Você bateu seu carro e como suas riquezas são menores que 60%, tu não tem carteira de motorista, os policiais chegaram na cena, e tu ganhou prisão perpetua. Game Over");
        death++;
      } else {
        alert("Você deu uma voltinha de carro, comeu um sorvete, sem acidentes de transito, isso te deixou mais feliz, e menos cansado por andar menos.");
        cansado = cansado - (Math.floor(Math.random() * 10));
        felicidade = felicidade + (Math.floor(Math.random() * 10));
      }
    }
    if (idade > 17 && riqueza > 59) {
      sortepbate = (Math.floor(Math.random() * 100));
      if (sortepbate < 25) {
        alert("Você bateu seu carro e como suas riquezas são maiores que 60%, tu tem carteira de motorista, sera apenas preciso pagar o concerto do seu carro e o do moço");
        riqueza = riqueza - (Math.floor(Math.random() * 40));
      } else if (sortepbate > 25 && sortepbate < 50) {
        alert("AI MEU DEUS! alguém bateu em ti de carro, mas como tu tem carteira de motorista, ele vai ter que te pagar indenização do carro, talvez ate sobre uns trocos");
        riqueza = riqueza + (Math.floor(Math.random() * 40));
      } else if (sortepbate == 53) {
        alert("Voce sofreu um acidente fatal no transito e acabou morrendo. Fim de jogo");
        death++;
      } else {
        alert("Você deu uma voltinha de carro, comeu um sorvete, sem acidentes de transito, isso te deixou mais feliz, e menos cansado por andar menos.");
        cansado = cansado - (Math.floor(Math.random() * 10));
        felicidade = felicidade + (Math.floor(Math.random() * 10));
      }
    }
  }
  if (mov == "loteria" || mov == "LOTERIA") {
    loteria = Math.floor(Math.random() * 100);
    var loteriaresp = Number(prompt("bem vndo a loteria, chute um numero de 0 a 100, se ele for o correto suas riquezas aumentam de 50% a 100%"));
    riqueza = riqueza - 1;
    if (loteriaresp == loteria) {
      alert ("parabén você ganhou na loteria")
      riquezaag = (Math.floor(Math.random() * 100));
      while (riquezaag < 50) {
        riquezaag = (Math.floor(Math.random() * 100));
      }
      riqueza = riqueza + riquezaag;
    } else {
      alert("errou, tente novamente o numero era:"+loteria);
    }
  }
  if (mov == "MDN" || mov == "mdn" || mov == "MUDAR DE NOME" || mov == "mudar de nome") {
    if (idade < 18) {
      alert("sua idade é menor que 18 anos, você ainda não pode trocar de nome");
    } else {
      nome = prompt("Bem vindo ao local onde mudamos o nome \n Insira seu novo nome");
    }
  }
  if (mov == "NACIONALIDADE" || mov == "nacionalidade") {
    if (idade < 18) {
      alert("sua idade é menor que 18 anos, você ainda não pode trocar de nacionalidade");
    } else {
      nacionalidade = prompt("bem vindo ao local onde mudamos nossa nacionalidade, insira para qual nacionalidade ira trocar:");
    }
  }
  if (mov == "naturalizar" || mov == "NATURALIZAR") {
    if (idade < 18) {
      alert("sua idade é menor que 18 anos, você ainda não pode naturalizar em outra nacionalidade");
    } else {
      nacionalnat = prompt("insira a outra nacionalidade ao qual vai se naturalizar");
      nacionalidade = nacionalidade + "," + nacionalnat
    }
  }
  if (mov == "relacionamento" || mov == "RELACIONAMENTO" || mov == "namoro" || mov == "namorar") {
    if (idade < 13) {
      alert("QUE ISSO? TU É UMA CRIANÇA AINDA, CRIANÇA NÃO NAMORA Xô!");
    } else {
      sortpach = Math.floor(Math.random() * 100);
      if (sortpach < 50 && achnmrd == 0) {
        alert("Você não conseguiu entrar num relacionamento, tu tomou um pé na bunda de geral, isso te deixa triste.");
        felicidade = felicidade - (Math.floor(Math.random() * 30));
      } else if (sortpach > 49 && achnmrd == 0) {
        alert("Você conseguiu achar um cônjuge, meus parabéns. Entre novamente na aba relacionamento para prosseguir");
        felicidade = felicidade + (Math.floor(Math.random() * 30));
        achnmrd++;
      } else {
        sortprelacionamento = Math.floor(Math.random() * 100);
        if (sortprelacionamento > -1 && sortprelacionamento < 11) {
          alert("Você acabou saindo com seu cônjuge e acabaram brigando, vocês terminaram. Isso te deixa muito triste.");
          achnmrd--;
          felicidade = felicidade - (Math.floor(Math.random() * 60));
        }
        if (sortprelacionamento > 10 && sortprelacionamento < 75) {
          alert("Você e seu cônjuge sairam, comeram um sorvetinho, viram um filme, isso te deixa muito feliz")
          felicidade = felicidade + (Math.floor(Math.random() * 25));
        }
        if (sortprelacionamento > 74 && sortprelacionamento < 101) {
          alert("Você e seu cônjuge passaram o dia inteiro juntos, e isso foi perfeito pra ti, tu fica EXTREMAMENTE feliz.");
          felicidade = felicidade + (Math.floor(Math.random() * 60));
        }
      }
    }
  }
  if (mov == "TRABALHO" || mov == "trabalho" || mov == "TRABALHAR" || mov == "traalho") {
    if (idade < 18) {
      alert("seguinte, aqui não tem trabalho infantil e nem jovem aprendiz, então é melhor esperar 18 anos pra poder trabalhar sabes");
    } else if (esctrab == 0) {
      var esctrabalho = prompt("insira o trabalho ao qual você gostaria de trabalhar");
      esctrab++;
    } else {
      var movdtrab = Number(prompt("insira o que deseja fazer \n 1-Ir trabalhar \n 2- Pedir demissão"));
      while (movdtrab < 0 || movdtrab > 2 || isNaN(movdtrab) == true) {
        movdtrab = Number(prompt("insira algo valido. \n 1-Ir trabalhar \n 2- Pedir demissão"));
      }
      if (movdtrab == 2) {
        alert("Você pediu demissão, e por isso não ganhou indenização, e está (obviamente) sem emprego.");
        esctrab--;
      }
      if (movdtrab == 1) {
        aleatrab = Math.floor(Math.random() * 100);
        if (aleatrab > -1 && aleatrab < 11) {
          alert("Você acabou sendo demitido por cometer um erro grave durante o serviço, e como foi por justa causa você não recebe indenização");
          esctrab--;
        }
        if (aleatrab > 9 && aleatrab < 25) {
          alert("O chefe achou alguém que trabalha o dobro do que você trabalha, e aceita receber metade do seu salario, você foi demitido, mas ganhou indenização");
          riqueza = riqueza + Math.floor(Math.random() * 10);
          esctrab--;
        }
        if (aleatrab > 24 && aleatrab < 75) {
          alert("Seu dia de trabalho foi normal e você recebeu seu salario.");
          riqueza = riqueza + Math.floor(Math.random() * 15);
        }
        if (aleatrab > 74) {
          alert("Seu dia de trabalho foi perfeito, tão perfeito que o chefe decidiu te dar uns trocados extras, se continuar assim pode receber um aumento!");
          riqueza = riqueza + Math.floor(Math.random() * 20);
        }
      }
    }
  }
  if (mov == "hospital" || mov == "HOSPITAL") {
    var sorthosp = Math.floor(Math.random() * 100);
    if (sorthosp > -1 && sorthosp < 11) {
      alert("você foi ao hospital fazer um check-up e acabou descobrindo uma doença crônica que pode lhe levar a morte, volte mais vezes ao hospital para tratar dela.");
      saude = saude - (Math.floor(Math.random() * 10));
    }
    if (sorthosp > 10 && sorthosp < 76) {
      alert("Você foi ao hospital, e o medico te receitou alguns remedios para melhorar sua saúde. No mais nenhuma doença extremamente grave.");
      saude = saude + (Math.floor(Math.random() * 20));
    }
    if (sorthosp > 75) {
      alert("O medico te receitou alguns remedios para melhorar sua saúde, e seu metabolismo aceitou perfeitamente os remedios! Sua saúde aumentou bastante");
      saude = saude + (Math.floor(Math.random() * 30));
    }
  }
} 
function manual() {
  alert(" 1-Avançar: para avançar um ano no jogo na barra inicial apenas aperte espaço. \n 2- Video-game: para usar o video-game escreva 'VD' na barra inicial. \n 3- Comer: para comer escreva na barra inicial 'COMER' \n 4- Dormir: para dormir (e recuperar-se do cansaço) escreva na barra inicial 'DORMIR' \n 5- Colegio: para ir ao colegio, e ter mais chances de crescer na vida escreva 'COLEGIO' na barra inicial \n 6- Drogas: para usar drogas e estragar completamente sua vida digite 'DROGA' na barra inicial' \n 7 - Trabalho: para arranjar um emprego/trabalhar digite 'TRABALHO' \n 8- Festa: para ir para uma festa digite 'FESTA' na barra inicial' \n 9- Religião: para ingressar em alguma religião/frequentar sua religião digite 'RELIGIAO' na barra inicial \n 10 - Relacionamento: para tentar coneguir uma namoradinha, ou namoradinho, ou interagir com ele digite 'RELACIONAMENTO' na barra inicial \n 11- Mudar de sexo: para mudar de sexo escreva 'MDS' na barra inicial \n 12 - sair: para sair do jogo escreva 'SAIR' na barra inicial \n 13 - Lazer: para ter um momento de lazer escreva 'LAZER' na barra inicial \n 14 - Carro: para usar o carro escreva 'CARRO' na barra inicial \n 15 - loteria: para acessar a loteria escreva 'LOTERIA' na barra inicial \n 16 - mudar de nome: para mudar de nome escreva 'MDN' na barra inicial");
  alert("17 - mudar de nacionalidade: para mudar de nacionalidade escreva 'NACIONALIDADE' na barra \n 18 - manual: para abrir o manual novamente digite 'MANUAL' na barra inicial \n 19 - naturalizar: para se naturalizar em outro pais além do seu escreva 'NATURAIZAR' na barra inicial \n 20 - hospital:para ir ao hospital escreva 'HOSPITAL' ma barra inicial \n \n \n dos 0 aos 6 anos seus atributos não caem, dos 6 aos 10 eles caem aleatoriamente num numero entre 0 e 10. E depois dos 10 anos eles caem num numero aleatorio entre 0 e 15. \n a riqueza em si começa a decair apenas depois de atingir a maioridade (18 anos)e também cai num numero aleatorio entre 0 e 15 \n \n \n ATENÇÃO: das suas 4 barras, apenas uma dela não influencia diretamente em sua morte (em tese): A riqueza, caso ocasione de você atingir o apce negativo de 2 das 3 barras você MORRE. Tome conta da sua vida, não morra precocemente");

}
var bemv = Number(prompt("Seja bem vindo ao Bit Life, o simulador de vida real, neste jogo você cria um personagem, e você tem a tela inicial onde você tem varias escolhas do que se fazer, deseja ler o manual das coisas que você pode fazer? \n 1- s \n 2- n"));
if (bemv == 1) {
  manual();
  alert("agora vamos ao jogo");
} else {
  alert("vamos ao jogo então");
}
var sexo = Number(prompt("👶 \n \n \n este é você, qual o seu sexo? \n 1- masculino \n 2- femino"));
while (isNaN(sexo) == true || sexo > 2 || sexo < 1) {
  sexo = Number(prompt("insira um sexo valido. \n 1- masculino \n 2- feminino"));
}
if (sexo == 1) {
  sexo = "masculino";
}
if (sexo == 2) {
  sexo = "feminino";
}
var nome = prompt("👶 \n \n \n ok seu sexo é " + sexo + " mas qual o seu nome?");
var nacionalidade = prompt("👶 \n \n \n ok seu sexo é " + sexo + " e seu nome é " + nome + " mas qual sua nacionalidade?");
alert("ok, ok vamos lá, está é sua interface: \n 👶 \n \n \n nome: " + nome + " \n sexo: " + sexo + " \n nacionalidade: " + nacionalidade + " \n idade: 0 \n \n além das suas 4 barras, que aparecerão a seguir");
var idade = 0;
var death = 0;
var bb = "👶";
var relrel = 0
var mdsss = 0
var esctrab = 0
var achnmrd = 0
var riqueza = Math.floor(Math.random() * 100);
var cansado = 0;
var saude = 100;
var felicidade = 100;
var limvida = Math.floor(Math.random() * 110);
while (limvida < 70) {
  limvida = Math.floor(Math.random() * 110);
}
while (death != 1) {
  if (saude < 0) {
    saude = 0;
  }
  if (felicidade < 0) {
    felicidade = 0;
  }
  if (riqueza < 0) {
    riqueza = 0;
  }
  if (cansado > 100) {
    cansado = 100;
  }
  if (cansado < 0) {
    cansado = 0;
  }
  if (saude > 100) {
    saude = 100;
  }
  if (felicidade > 100) {
    felicidade = 100;
  }
  if (riqueza > 100) {
    riqueza = 100;
  }
  var mov = prompt(bb + "\n \n felicidade:" + felicidade + "%\n cansaço:" + cansado + "% \n saude: " + saude + "%\n riqueza:" + riqueza + "% \n \n nome: " + nome + " \n sexo: " + sexo + " \n nacionalidade: " + nacionalidade + " \n idade: " + idade);
  if ((felicidade == 0 && cansado == 100) || (felicidade == 0 && saude == 0) || (cansado == 100 && saude == 0)) {
    alert("você zerou 2 das suas 3 barras, você morreu");
    death++;
  }
  if (death != 1) {
    coisas(mov);
  }
}
}