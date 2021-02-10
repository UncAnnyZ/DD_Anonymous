package request

import "background/model"

type NotePadSearch struct{
    model.NotePad
    PageInfo
}