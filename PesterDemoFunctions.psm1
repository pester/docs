class PesterEmoji {
    [string]$Name
    [string]$Symbol
    [string]$Kind
    [string]ToString() { return $this.Symbol }
    [char[]]EnumerateRunes() { return $this.Symbol.ToCharArray() }
    [bool]Equals($object) { return $object -is [string] -and $this.Symbol -eq $object }
}

$emojis = @(
    @{ Name = 'apple'; Symbol = '🍎'; Kind = 'Fruit' }
    @{ Name = 'beaming face with smiling eyes'; Symbol = '😁'; Kind = 'Face' }
    @{ Name = 'cactus'; Symbol = '🌵'; Kind = 'Plant' }
    @{ Name = 'giraffe'; Symbol = '🦒'; Kind = 'Animal' }
    @{ Name = 'pencil'; Symbol = '✏️'; Kind = 'Item' }
    @{ Name = 'penguin'; Symbol = '🐧'; Kind = 'Animal' }
    @{ Name = 'pensive'; Symbol = '😔'; Kind = 'Face' }
    @{ Name = 'slightly smiling face'; Symbol = '🙂'; Kind = 'Face' }
    @{ Name = 'smiling face with smiling eyes'; Symbol = '😊'; Kind = 'Face' }
) | ForEach-Object { [PesterEmoji] $_ }

function Get-Emoji ([string]$Name = '*') {
    $script:emojis | Where-Object { $_.Name -like $Name }
}

function Get-EmojiKind {
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [PesterEmoji]$Emoji
    )
    process {
        $Emoji.Kind
    }
}

$fruitBasket = [System.Collections.ArrayList]@('🍎','🍌','🥝','🥑','🍇','🍐')

function Get-FruitBasket {
    $script:fruitBasket
}

function Remove-FruitBasket {
    param(
      [Parameter(Mandatory=$true)]
      [string]$Item
    )
    $script:fruitBasket.Remove($Item)
}

function Reset-FruitBasket {
  $script:fruitBasket = [System.Collections.ArrayList]@('🍎','🍌','🥝','🥑','🍇','🍐')
}