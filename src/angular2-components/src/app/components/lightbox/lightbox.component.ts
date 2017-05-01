import { Component, HostListener, ViewContainerRef, TemplateRef, ViewChild, OnInit, ContentChild, ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
	selector: 'app-lightbox',
	templateUrl: './lightbox.component.html',
	styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {
	@ViewChild('lightboxTemplate') public lightboxTemplate: TemplateRef<Object>;
	@ContentChild('imageEl') public imgEl: ElementRef;

	@HostListener('click', ['$event'])
	onClick(e) {
		this.dialog.open(this.lightboxTemplate);
	}

	imgSrc: string = 'data:image/false;base64,/9j/4AAQSkZJRgABAQAAYABgAAD/4QCeRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAARAAAAWodpAAQAAAABAAAAbAAAAAAAAABgAAAAAQAAAGAAAAABQWRvYmUgSW1hZ2VSZWFkeQAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAJagAwAEAAAAAQAAAJYAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAJYAlgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/3QAEAAr/2gAMAwEAAhEDEQA/AP7QKKKK6DnCiiigAooooAKKKKACiiigAooooAKKKDx/n/8AV/P8qAEJwP8AP9eOPf8ApUDtjOegyexOCcDH3uB6Zx9c5Vzt9PfjHP489gM/j6VTdweAeRlcHA3fnkkDPcgc4LfKKAGuwxnsOQc/dz26LznJHc+gGA1dnUZOenOSeme34A/3fQc5xSucn04yc85xjp06cexyFJOc1Vdh06FQOvPUc5BPzdByMY9OgYAQsCeQfw+vp8g+uCcdOcmkyv8Adf8A8d/+OVUYhjgBSBz/ABDr0ORG5HA+70HQ4I+ZuP8AZX/vuT/4xQB//9D+0Ciiiug5wooooAKKKKACjoCx4VRuZjwqqOpZjgKB3JOB7V538QfiVoXw9sVkvib7V7uNm03RLeRVubkA7ftNy5VxZ2CP8r3MgLSMDFbRTS71T4i8Y/E3xd42lkGq6lJb6azExaJpzSWmlxL/AArJGkglvnA4aW+ecseVRAdlUot+n9ecfvv5afaD7o1b4m/D/RJHh1HxdoyXEZKvbW1w2oTqR1DR6et2VbttbBB4OMArz6fHL4Xu2z/hJWTnAeTSNYSP67zY8Dvk9v7vRvz4HAwAAvoAFH/fI4oq/Zru/u/+6Afp3ovjLwl4jIXQvEmj6nKRn7Pb3sQux9bOVorrP/bE++K6Ygg4III6g8GvyfBIZXBIdCGRwSHRh0ZHUqyMD0ZWVh1BGM17b4F+OfinwtJDZ6zLP4m0JdqNb3ku/VbSMcbtP1KUmSXYOlrftLC/3Ult8h1Th2/K3487/L7gPvL/AD/n/P8AKo3bgjHfH5fhnr/9Ytn5cPQPEujeKtKttY0K9S8srnK7wDHNBMoHm2l3AxMlpdQnHmwSYbo6F4mSRtJ2xnp2xkE+oz/D34A5xngHGWzASR8cDPXPPGfQD5T07+hBBAJzVVmAzn19Ov6kE5Oe/oNvBpWbPfByeAOTj3z0OCOpBzkZqu7EZ6c9ecHr029ecde3ZlAxQAyRyeO2OTu4755x7cEH+Q3UpJMDjBOe/OwjjJ6deMZ3hicZHVnySYHHLds5Ab0IBGD0/i55GNuSWpSNnJ6cgYLcDPI47g4/Ho3XawAjkADlsgAEqC3PJ5ADN0IOSSAWwOoqPd7y/wDfuT/43VaSTbjDEcntuyepOMN3O3IHVSOc/LH5zf32/wC/f/2ugD//0f7QKKKK6DnCiiigArkfHPi+x8D+G77X71RM8IW30+y3bG1DU5wwtLUN95YyVaa5kUN5VrFNJ1UV11fEv7RniaTUvFlp4bhkP2Lw5ZxyTRg/K+rapGs8rsN337ax+ywLkZXzpwAu9t1RV3+P9ar9fQDw7W9b1PxFqt7rWsXLXeo38pluJm4UY+WOGBOkNrbxgRW0CgJFEoA3MWdsqiitgCiiigAqNm7dP58Hkj6Eeoz7Y+ZWbqO/+eO358+/YVAzY4zjPfoMnuPTBx256c4oA9E+G3xCvvAGvR3itLNol80cGu6epytxaq20XkC/MF1CwDNNbOFDSJ5lpISkuU/Qm3u7a9gt7y1njuLW6giubaeIho57eZBLDLGdxBR4ysgGP4sEkg7vyrLf7We/GOOMe4AHH1xnjOK+0/2e/FD6r4SvNCum33Hhm7WG2JILf2RqAkmtE5yRHbXKXluuVAEflKAQi1E1pfr1/r/gfdYD6Ads+uOxB4Bx1/hzjtnGMjrVKSQ9Tk4yRk569uozznhgfwzUjt1x+W7oMZGOhzjjHGOfmOSKz5JA3cYIxg9OCMEDPT+eMgZJFZAI5P44/wCAgZ4Od3OTyPl7YX1qk7rgkYPPqOcgNyfl/wCA5z33ZzlnSHGec9Rt57dMZ6YIJIz3wM7aoO+ewxg4JP3g3HbCt+vBwBn5qA/r+t/67XuLI6k9VU8E5JGB/CoAUt05z36sQdoqPcv/AD0T85P/AI3VSRueQ2ASFIIHTrzgE9uv6AALFlf9v/vugD//0v7QKKKK6DnCiiigBQMkD1IH5/n/AC/OvzM8f3r6j458YXkhJaXxJqyc9ktruSziH0WK3RQB0C1+manBB9CD+Rr8y/H1m+n+OPF9o4KtF4k1huepWe8luo26n70VwjD1B74y2kN33/q/6AclRRRWgBSE8dfpz7/h07/16UE4BP8An/P5/Q9KgZu/Ht6Y6/r689ehPFACM3bv9APzxnt7nHvghoCfp16Z9PxyOD/sj8s0rEc5PAz07fjnJyAOeCOuDUTHHGcn68gY6g49+h5688g0AMZu/A4x26Zxz+npjtng179+zlftB4z1a0BPl3vhyZ3UHq9hqFk8RA6ZAuJgD1+c46mvn1279+TkcY7c+2evvzXu/wCzrbtJ4z1W7wQlp4buEZhyA19fWMcSk5wSRbylcjOFOA3FKWz9APtGR8/KMDng7jgEHkcDBJ9jj1x/FTlkPTOc9OwPB5HOFIzuGPujj5eQzpHIHOQBx8oHzNnt6cjqAcjlzjAWlLIV24YqG5HfOOPcd/8AZwO4zmsAI5pWGeeVIZj1HfIJ68ArwAARyM8hc6Zztb0Ycr/ebJwpwp5GOML2B+bGKlaTKkgkM2O3JXqVPAUL3AB3dQGGBWbPJxnAUqu0epPPUkngg8ZVuRgkHBoAa8vC5YAc/eXfjODg/KzZA4GSeBio/OX+/H/36/8AtdVJJnBy3I5BAy67s5yOFx34xg5yMfxR/aR/dP8A3w1AH//T/tAoooroOcKKKKACviH9orwzJpni+38RRRkWXiWyjMkgHyrqumRpa3UbHoHmtPsdwoPLbZiPumvt6uM8feDbTx14ZvdBuWWC4Yrd6Xesu77BqcCt9mnIHJhkDPb3aLzJazSgfOEZai7P8P60f6eoH5pUGtHVtJ1HQtSvNI1a1ks9R0+dre6t5OqOOVZG+7LDMhWW3nTMc8LpInDYXJZ/Q4GPwOePbtz3x0Hdq2AR2z+BOMfyHrnr/wDE4w1dmB/z/wDWHTofXORjkK5mGOpHTtke/fB4Of4geB71A3HU8ZGPT6Hp35Azz04z8oAhzz7+pxyfUcjgcc46ZHUmoWYdCTkeh/D0/L1yDx96lZunJyM9+g+nAP4k56AfLUDOOM/pjHHBA4JJ+vT0bGaAGu2McfjnPXHHToeeCeuO4+b7G/Z80CTS/C19r88eyXxHdhbXcAHOl6Z5kEMhBz+7ubyW7lRiWDokcg+UrXzZ8P8AwTfePdfh0+JZYNMt2SbW9QCnbZWRb/VxtgA314A0NnECTnzLhh5UMjV+gcFvbadaW1hZQpbWdnbxWdrBEPkjt7aNIoo06jaiIFGdrNjcxBOaibVrdf68n+a+dwJZ5sDvkdOMbmbIwe3GfmyVHOQrYJXOkfhhncCeMHG3HbGM8A8k4z8q55JZ0jkMCTkHuSSDj075J7ZG0nJL5+WhLIBl8ZPU/NwuOQCckHA5Ayo54xzWQEcr5JHGR3GOABkAA8NyM8buvynnFZ0k3GAMkEjb6bjnIJHBBHTBXsXYEhnyzbTgYTHzEDnB64PJzkEBscj5SCcDdnSOhJYHHylT2x1zuPCgc9QM9MgZzQA2RvmBGMEfKcq+V44wQ3fPIAx0PJpm73H/AH7j/wDjdUpZVJ43cYAKhgSO56E9QP4ce5wS0PmD/pp/49/8boA//9T+0Ciiiug5wooooAKKKRmCgk4AUFmJOAqgElmJ4CjHLEqAOSeKAPMfiR8MNE+INorzt/Zuu2sRj0/WoY98ioCWFpfwgp9tsN5LBN6z2zs0lrKpaRH+GfGHw/8AFXgmd01vTJRZ7tsOsWga60m5HYpeooWB27w3i286nIMRwHb7W8T/ABr8AeGnkt31U61fREq9loMY1DY4yDHLe+bFp8LA/eBu2ZehQYzXO6H8fPAXiFWtdTln8OTSFozBrkUc2nzxk4XN/befZ4dSMx3aQBW3Dc4AarXMuja/r+trejA+Di3GRyP7wwR/9f8AAd+1Qs3vz+Hfv1HPGMYOPYCv0Kuvhx8KfFebyHRdAujN85u9AvBa+bu5Lk6NdxwljnkmIHgdB8tYzfAb4bId/wDY2psMsdkmt6qU69DtdGODw3zj0yMZqvaLs/v/APtP0+6wHwO7Y6kDJ2gng7uB+Zz90bvQAn5m9V8F/B3xR4tkhuryCXw9oRYO+oX8DJd3Uf8AENM02Ty57h3X7txcGCzjyHLzY2N9WDSvhV8P1+0i28KaFNEMi7vJrafUMj5dqTXk11fMx2/diQMW4HDCuE1T9onwVZ3621paa3q9oGcT6nbQRQQrg4Bt7a/ntrq6QHJLlbfjAj80nFHM38K+/X/5DX5P52A9Y8PeG9G8I6RDo2hW/wBntYm3yyMwkuru5ZcSXl5Pt3TXUgC7mO1UULFDHFEiIt15ARuI4IYBcnJK/wAR4BwOvJOB16rXIeH/AIi+EfF5Eei63byXjDcdPut9jqY4wR9huVSSUDkFrbz1zg5XILdNLLkNnAYgZIwV2rkEZKjBGeR2JGOpK5u/W/zD+v6/4b7tSKaTABLHcT06jA5PrkA7SMBcgjgkqtZ0z9V3FlIIz0BGeM43ALjH3lB+U5PFSTS5JJIxj7u0Y4wNw6BsHruPJBC7iArZcr7ifmGMknpnj5edxIIIX7vI4xhd2KQDJHJOQxOSMKRnrxy3Y4yoPBIGTnkNQnmzuHIAO1iy5Afsu3oRnAbp9/mMninTyAFUBPJJJC/dVeeQeAefvEgDgfLgbsyR1IZsHJyfunvxxjPqzFic5x1xlgCOSZl4QBiCd2UGF56AHdjoDnBJ4DHIqL7RL/cT/v2v/wAbqtI6sxDOpwzDqR0/Mc5zwQCSRj5aj/df3l/77oA//9X+0Ciiiug5woorK1vWtP8ADukahreqzfZ9P022e5uZAAXKrwkUKH/WTzyskEEYyZJpEQdcqAZXjDxlofgfSH1jXLkxxljFaWkIV73UboIXFrZQllDyY+aWV9sFtH++uJFQAN8JePvi34o8cyTW8ty+kaCWIi0OwldYnjzhW1K5XbLqU5H3lkKWaE/urVQA9YHjnxrqvjvXrjWtTdo48tBpunrIWt9LsN+YrSEcK0jcSXlxtD3VzukYmNYUi4dm5Ofw/wDr5GRwff1yMCtYxtq9/wAvxd/Wy/EBCe2MAEDA6Lz2x7HPQ+gxjDQsccg4PI49/fA4PHTOOT2zTmfA/THTkDnnGeAecZ57j5qgZs8A8HPPrnjj7w9+uBjHOSVsBFkaIl4meGTIO6Fmhcn/AHomVhjrnPXpj5jT59V1N1KNqepup/gfUb5l55OVafaemWOFDdccCqrMB9eegHBA9PoOcj8siqrM3UgHoc9Mhvw6kds/XGPmAGMy7i5ALt1Y/eYn/aOXzxgjuOQeoarI2QT7rznjj0HHcDqCedvQZp8jnBxn3xzj3wFPO4Z6gnvJt3GqMsmc4OADk+gx1Bz0yNo5yP7oJwKAGtKQwdGZWR96MCyNE4wRIjoVdXBAKsnlsrYw2RlvcvAvx01bRpLfTPFstzq+k5WFNRbM2saemMKzufm1S2Qbd0Uu6/jUHyppz+6bwR2wBk8YPuT6HG1sc4x6HjnnbRlfJyfQYOfmO7nOOgJIP0I4Izhk0nv/AF8+gH6a22pWWo2lvf2NxBe2N3Ak9rc2z+ZDNA4yskR+bKE53Z2PG4KuEcFFhmfYXHO7cOhJGcY37SFyoyOcr1JKDaDXxV8JfiTN4U1JNF1W43eGtUn8s+Y5MekahMQI72MsT5dtPJsj1GJdqnK3ijzIJC/2HJKdzByBySMdPu9QMhRjB2kAlyGxjfWUo8r8umlv1l+f3390I5XXOSWyw+7tz8rKDznqFIB5Dc5IA2jdlzSsGJ4IGM/NtUY5KnoW4C8gknp1wKlmlbkjBIbnK5Yhz98YOSwyQEB46k4GayppVyFBLA/MRjGVPygDHOF4J+bkkYJwNsgRTSB2II3oGPUFsPgH+HrkN1Bxnrknc0P7r/nmP+/clNWTHqcZBBbG3JyAMlQOAeMsTgEs3G1/nD0/8iL/APHKAP/W/tAoooroOcK+Qv2lPF7SXOl+CrSUiK3SLWtZCnG+4m3ppNq+CMrDCJr0oc/vJ7V/4FFfXh5wM4yQM+xIBP6/hX5geO9cbxD4x8S6w7F1vdZvfs/OQtpaym0sgP7qi1tocL05J5PytcFrfsBybN2H8s9Cfw4we31zioCw6c89s4wMEds8n0Y8dwuQVUknPPXI9OmOvPY8Y5z3AxUBOOnGR17dD/gc9O3phtQBn69+ODznvnjgAAjGBknGSBjNQMwPc554H9AeQeM57k49GZSc+vc4GAee3A5J9wMjkYyKqu/zH+EY4Hfj+E/fAPIOBnH944IoAazdR/3ycnOD0PBxjIz1BPPTo1aRySeT3B6988c5Gcjjnv3xlldug5AONxPckt0+Uj6c4HHSqkkmNw3c/XIxjk44Kk8bic454UjbQAyWTqATnGCAT8vXIyORkg8gE9ucE1Tc54yTjIBxt46c/lkY3f3flIBZzkdOVGcg5x755JB54A5BxzjgVUkdTkLkEDnnI57Dvk8DuCRkdcKARSy5JGTk9uik+vB5IBK43AnuSSBVORxknPGOo54Hb+NQOynaORk45FPZ8k7iDkYHO0/KR0HGM8Ee/wB7O0GqMrg9AcDdlscEccEg4wOoxxkbTuwDQAySQPgFcjoVLDnIyS3GRxwBgZAxkcCvtD4SeLJfEvg6CO6nMuo6E66RdtITJLNEkYbTrp/4i72gSF353y28h6klfiWRj945AHPTGMZBOerMORnacnGABxXsPwK1p7PxXe6Z5m2HWNJlKIWyputNdbmIgfKMi3lu1+YbsHA9GmavH01/r5ev6xD66mlB4ViCpXkNwjYwccZJO5vlxgAnG3Oaz5JCuAeW3c4H90gYwMjoRtJGBy3OCKWY9G3Z6kqTknoAAASxJ/HZ0KYAK1nfDltxyQd3TcCedxIycYI4AXHTkAFcQEdlYjfgqP4jgDcewV+PXnOep5Bpn7j/AKZ/+QaazDq23PA5b264LAKT3APGMYGBtZuX0T81/wDjlOz7P7gP/9f+0CkJx/P8vy6Z/wD19KU1A7dcjjH1P44JOfw456ZNdBzlPUZmjsb6VT88VjeTKfeO2lZMDthgD1P4cFvyh3llVmOWZUc5PdwCxxnuT68dz3r9U9Wf/iWakef+QdqPTrxZT8cZ6Zxkj3IGcV+Uin5I+OkcY46E7F6ZxnjsCcDsOFrSn1+X6gKxyOwGSP06HoME+vueSPmhZs54H8unTJyexHIPQ8Y5pzNjqQeh6DBHPI6YHU8/htyQtd2xnr/tcH1Oe7YznPOeOxz8ugDHbJx0AxkZ9eoPoMfXP44WrIwyRz8xGD0AHfPBz0/2fvYG7GaWR8DHr3B6j0wRjg5+nRj3qq8hAOScEYyB6EY43EjuCcDntyKAGyPjqSAeh6BT2AySCOCc9DjBzjdVJ34JI56+pOcYIA7YPAzg9flxmldwWG4c4wuWyMcnGB2weTz0yeuVrSSAKc5BwM4OTkDoeFz7nHX7uMHcAMkYcggdFHUkDuD17YxtJyeTuAX5qEshJ4Yjggk9cjvleQcA7cdMZPJFSyyfQjnd2H4khhxnPAwenGA1UZHIPO0MMqDx9wdWxxwSCRzlc8EEttAI5JQCQSScgZB6HHcAAk/KDjd35IJAqlI/zdwpOMcKFx6dccc9eDyc5NSO56+mSTnO5T15OCSeOQx9fl+6ufPIR8oPUk8Y5HRkJJxxkggnnH3hn5gBk0uc44wT1G4kjJBHGCTzgnbgjJ6kV2fwtn8v4g+FsEjfezwuy4yY5NPvFdCMhHU8Z5ORxwB8vAPIOg6g/wDAfvcduDjgY7HJxhWrsfhg3/FwvCnII/tJ8Z424srwcg7sgAngjHXrkbU9n6P+uv5feB93u3TlS2DgE8Lns+FGQQQVUMCOc4JYVSZ/lHABVyOuOWOTyTyCd3LjcccZwNrnkJywYcKAzBSMA9ivy8Hv1wSMdN9VJGLkEkgk444wdpOe5yFyMMBtDZ3DJDZRV99lv8/68/le4DWcffYDGduOhDfewGxkqARx2yM7iSVb50X93/x+lwzEgkk8nIwM4ODjABxyB6ZUgAYal8tvVvzpuXl+LX5TX5ffcD//0P7PHOAevHpx0H09+57YxzmqruSdvrnnPcfh6+5z1PP3bEnQ/j/6CKqN98fVq6DnMnVn/wCJZqeck/2bqB9OPsc/frzzxhgPTkV+VAx5cR5yY0Of+ALgEZAxg44HfPPSv1U1b/kG6n/2C9Q/9I56/Kof6qH/AK5R/wDoCVrDZ+v9fmA1ycF8+vHXBwOQTx39B6cZwtR22jJ5+YDoM9M/7IPBI+n93HzWpP8AVn8f6VSm+7/wMf8AoNWBWkfOCe/TA9DgkjcOcDAx0Bzk4AqnIxGRnhdwwMjJBye7YwcYJByM/wDArD9F/wCB/wDoZqrJ/H/vSUAVXORk84wfXr2BOOMHnjr2GM1Skc5C4AJ6EegzwRkAcnPGc8girknQ/Rf6VRk++n0NAFRyPLLc85OOBx8px2xznnnHUdMVSdyWYjrgkZ4xwpwDlgQMjtzzwckLcf8A1P4f0WqDdT/u/wDsiUAVJXyCoLfLsXPA5bgEYHOM5/h9AvJNUZpCAT/EGK7j1J7k9cdunoDxkirUnV/9+H+lUZujf9dT/WgCo7jBG37vzccZ/U9c89uBw3O7tfhf/wAlA8LE8qNTkGPUGzvQQSd/p2AHJHFcM/8AH/u/4V3Pwv8A+R98L/8AYTf/ANJLyk9n6MD7kd8oMEgBgqj72S5ypbIAGCe3H+y33aiHB24AbOeACpYglsjavGPmxk7j8h2rhmVvuD/rrD/Sg/6wfX/2Q1i306aP8O/z/rQB0Y2s3A29CATkn5cMe3TdwdxGeG67pcr/AHP1pg6n6/0FLSA//9k=';
	constructor(private dialog: MdDialog, private templateRef: TemplateRef<Object>) {

	}
	ngOnInit() {
		let nativeEl = this.imgEl.nativeElement;
		if (nativeEl) {
			nativeEl.style.cursor = 'pointer';
			nativeEl.onload = (e) => {
				this.imgSrc = this.imgEl.nativeElement.src;
			};
		}

	}



}